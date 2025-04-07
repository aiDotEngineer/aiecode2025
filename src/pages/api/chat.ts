import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { StreamingTextResponse, type Message as VercelChatMessage } from 'ai';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import type { Document } from 'langchain/document';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PromptTemplate } from 'langchain/prompts';
import {
  BytesOutputParser,
  StringOutputParser,
} from 'langchain/schema/output_parser';
import { RunnableSequence } from 'langchain/schema/runnable';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';

import { env } from '../../env.mjs';

export const runtime = 'edge';

const combineDocumentsFn = (docs: Document[], separator = '\n\n') => {
  const serializedDocs = docs.map((doc) => doc.pageContent);
  return serializedDocs.join(separator);
};

const formatVercelMessages = (chatHistory: VercelChatMessage[]) => {
  const formattedDialogueTurns = chatHistory.map((message) => {
    if (message.role === 'user') {
      return `Human: ${message.content}`;
    } else if (message.role === 'assistant') {
      return `Assistant: ${message.content}`;
    } else {
      return `${message.role}: ${message.content}`;
    }
  });
  return formattedDialogueTurns.join('\n');
};

const CONDENSE_QUESTION_TEMPLATE = `Given the following conversation and a
follow up question, rephrase the follow up question to be a standalone
question, in its original language.

<chat_history>
  {chat_history}
</chat_history>

Follow Up Input: {question}
Standalone question:`;
const condenseQuestionPrompt = PromptTemplate.fromTemplate(
  CONDENSE_QUESTION_TEMPLATE,
);

const ANSWER_TEMPLATE = `You are Summit AI, a friendly AI assistant, designed to guide attendees through the AI Engineering Summit. Your primary function is to provide accurate and helpful information about the event's schedule, speakers, and topics.

You have access to a database of information, including the event schedule and details about each session. Your responses should be thorough, honest, and tailored to the attendee's needs.

Your secondary function is to assist with general inquiries that may not be directly related to the event. In such cases, aim to be as helpful as possible without making assumptions or providing incorrect information.

Information about the event:
- The conference is happening from Sun, Oct 8 to Tue, Oct 10 in San Francisco at the Hotel Nikko. The address is 222 Mason St, San Francisco, CA 94102.
- There will also be workshops on the days before and after the conference on the 8th (in the morning) and 11th.
- This is the first year of the AI Engineering Summit.
- The summit is focused on the role of the emerging discipline of the "AI Engineer" as opposed to the more traditionally known "Machine Learning Engineer" role.
- Swyx published a blog post about the Rise of the AI Engineer here. Share the link if someone seems interested: https://www.latent.space/p/ai-engineer
- "Llama Index" and "LlamaIndex" are interchangeable titles, so don't get confused if you get asked about either.

Guidelines:
- Strive to provide CONCISE answers and opt for short bullet points conveying only the necessary information. People won't have time to read long paragraphs.
- Always use markdown formatting for your responses. Bold and bulletize all event details (titles, dates, times, etc.) for emphasis.
- Always be polite and maintain a positive tone.
- If you can't answer a question, it's better to say "I don't know" than to provide incorrect information.
- If a question is ambiguous, feel free to ask for clarification.
- Use the context and chat history to provide the most relevant and detailed answers.
- If a question isn't about the event, try to guide the conversation back to the summit topics if appropriate.
- When attendees express interest in a specific talk, attempt to recommend similar talks they might enjoy.
- If attendees are unsure between two talks, ask what they're looking to gain from the summit. Use that information to explain the differences between the talks and offer a tailored recommendation.
- If you can't find the latest info on a talk, link them to the official schedule because it's the most up-to-date source of the latest info: https://www.ai.engineer/summit/schedule

<context>
  {context}
</context>

<chat_history>
  {chat_history}
</chat_history>

Question: {question}
`;

const answerPrompt = PromptTemplate.fromTemplate(ANSWER_TEMPLATE);

/**
 * This handler initializes and calls a retrieval chain. It composes the chain using
 * LangChain Expression Language. See the docs for more information:
 *
 * https://js.langchain.com/docs/guides/expression_language/cookbook#conversational-retrieval-chain
 */
export default async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { messages: Array<VercelChatMessage> };
    const messages = body.messages ?? [];
    const previousMessages = messages.slice(0, -1);
    console.log('previousMessages', previousMessages);

    const messageIndex = messages.length - 1 >= 0 ? messages.length - 1 : 0;
    const currentMessageContent = messages[messageIndex]?.content ?? '';
    console.log('currentMessageContent', currentMessageContent);

    const model = new ChatOpenAI({
      modelName: 'gpt-4',
      temperature: 0,
    });

    const client = createClient(
      env.NEXT_PUBLIC_SUPABASE_URL!,
      env.SUPABASE_SERVICE_ROLE_KEY!,
    );
    const vectorstore = new SupabaseVectorStore(new OpenAIEmbeddings(), {
      client,
      tableName: 'documents',
      queryName: 'match_documents',
    });

    /**
     * We use LangChain Expression Language to compose two chains.
     * To learn more, see the guide here:
     *
     * https://js.langchain.com/docs/guides/expression_language/cookbook
     */
    const standaloneQuestionChain = RunnableSequence.from([
      condenseQuestionPrompt,
      model,
      new StringOutputParser(),
    ]);

    let resolveWithDocuments: (value: Document[]) => void;
    const documentPromise = new Promise<Document[]>((resolve) => {
      resolveWithDocuments = resolve;
    });

    const retriever = vectorstore.asRetriever({
      callbacks: [
        {
          handleRetrieverEnd(documents) {
            resolveWithDocuments(documents);
          },
        },
      ],
    });

    const retrievalChain = retriever.pipe(combineDocumentsFn);

    const answerChain = RunnableSequence.from([
      {
        context: RunnableSequence.from([
          (input) => input.question,
          retrievalChain,
        ]),
        chat_history: (input) => input.chat_history,
        question: (input) => input.question,
      },
      answerPrompt,
      model,
    ]);

    const conversationalRetrievalQAChain = RunnableSequence.from([
      {
        question: standaloneQuestionChain,
        chat_history: (input) => input.chat_history,
      },
      answerChain,
      new BytesOutputParser(),
    ]);

    const stream = await conversationalRetrievalQAChain.stream({
      question: currentMessageContent,
      chat_history: formatVercelMessages(previousMessages),
    });

    const documents = await documentPromise;
    const serializedSources = Buffer.from(
      JSON.stringify(
        documents.map((doc) => {
          return {
            pageContent: doc.pageContent.slice(0, 50) + '...',
            metadata: doc.metadata,
          };
        }),
      ),
    ).toString('base64');

    return new StreamingTextResponse(stream, {
      headers: {
        'x-message-index': (previousMessages.length + 1).toString(),
        'x-sources': serializedSources,
      },
    });
  } catch (e: unknown) {
    const error = e instanceof Error ? e : new Error(String(e));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
