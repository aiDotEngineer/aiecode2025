import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  type AccordionContentProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
} from '@radix-ui/react-accordion';
import clsx from 'clsx';
import { LuChevronDown } from 'react-icons/lu';

import imgAIAgents from '~/images/worldsfair-2025/tracks/ai-agents.jpg';
import imgCodegen from '~/images/worldsfair-2025/tracks/codegen-and-devtools.jpg';
import imgEvals from '~/images/worldsfair-2025/tracks/evals.jpg';
import imgFortune500 from '~/images/worldsfair-2025/tracks/fortune-500.jpg';
import imgGPUS from '~/images/worldsfair-2025/tracks/gpus-and-inference.jpg';
import imgLeadership from '~/images/worldsfair-2025/tracks/leadership.jpg';
import imgMultimodality from '~/images/worldsfair-2025/tracks/multimodality.jpg';
import imgOSSModels from '~/images/worldsfair-2025/tracks/oss-models.jpg';
import imgRag from '~/images/worldsfair-2025/tracks/rag.jpg';
import { Logo } from '../Logos';

type TrackTop = '01' | '02' | '03' | '04';
type TrackBottom = '05' | '06' | '07' | '08';

export function TracksPreview() {
  const [selectedTrackTop, setSelectedTrackTop] = useState<TrackTop>('01');
  const [selectedTrackBottom, setSelectedTrackBottom] =
    useState<TrackBottom>('06');

  const imageChoiceTop: Record<TrackTop, string> = {
    '01': imgRag.src,
    '02': imgOSSModels.src,
    '03': imgCodegen.src,
    '04': imgFortune500.src,
  } as const;

  const imageChoiceBottom: Record<TrackBottom, string> = {
    '05': imgMultimodality.src,
    '06': imgGPUS.src,
    '07': imgEvals.src,
    '08': imgAIAgents.src,
  } as const;

  return (
    <div className="space-y-12">
      <header className="text-center space-y-3">
        <h1 className="text-5xl">
          <b>Survey The State of AI Engineering</b>
        </h1>
        <p className="max-w-xl m-auto text-gray-on-black text-justify">
          With 9 tracks and over 100 sessions, you can design the program
          schedule that perfectly matches your business needs. There are up to 5
          simultaneous sessions running at any one time, so it's a good thing we
          have a <code className="bg-slate-800 mx-1 p-1 rounded-sm">GROUP</code>{' '}
          discount for teams attending together!
        </p>
        {/* <p>
          <span className="uppercase font-mono bg-gray-600 p-1 rounded-sm text-yellow-100">
            New
          </span>{' '}
          Our{' '}
          <a
            className="text-blue-300 font-bold hover:text-blue-100"
            href="/schedule"
          >
            full talk schedule is now published here
          </a>
          .
        </p> */}
        <p>
          <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">
            IMPORTANT
          </span>{' '}
          These are our 2024 tracks - 2025 tracks will be announced soon once speaker CFP closes!
        </p>
      </header>

      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div
          className="max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${imageChoiceTop[selectedTrackTop]})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Jun 4 - Conference Day 1
          </h2>
          <div className="text-white space-y-6">
            <Accordion.Root
              type="single"
              value={selectedTrackTop}
              onValueChange={(v: TrackTop) => setSelectedTrackTop(v)}
            >
              <AccordionItem value="01">
                <AccordionTrigger value="01">
                  RAG (LLM Frameworks and Vector Databases)
                </AccordionTrigger>
                <AccordionContent>
                  Retrieval Augmented Generation has emerged as the core
                  workload of most production LLM applications. The techniques
                  and tools have exploded in the past year - what's actually
                  SOTA and what's just social media hype? Talks from{' '}
                  <b>
                    MongoDB, Qdrant + Quotient, Normal Computing, Neo4j,
                    Gather.ai, Datastax
                  </b>
                  , and not to mention keynote features from{' '}
                  <b>LangChain and LlamaIndex</b>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="02">
                <AccordionTrigger value="02">Open Models</AccordionTrigger>
                <AccordionContent>
                  Open models are the lifeblood of companies aiming to own their
                  destiny and IP when it comes to deploying AI. Everything from
                  leading open model trainers to fine-tuners will be done at
                  this track. Talks from{' '}
                  <b>
                    Mistral, Cohere, HuggingFace, Unsloth, Outlines, Gradient.ai
                  </b>
                  , and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="03">
                <AccordionTrigger value="03">
                  CodeGen and Dev Tools
                </AccordionTrigger>
                <AccordionContent>
                  AI Engineers using AI to accelerate themselves is the fastest
                  and most obvious virtuous loop there is. Hear from the
                  founders and researchers creating the top code AI models and
                  putting them into the developer tooling we use and love every
                  day. Talks from{' '}
                  <b>
                    GitHub (Copilot), Cursor, Sourcegraph (Cody), Anthropic
                    (Claude), Grit, Palo Alto Networks
                  </b>
                  , and a special{' '}
                  <b>opening keynote from Modular CEO Chris Lattner</b> and{' '}
                  <b>closing keynote with GitHub CEO Thomas Dohmke</b>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="04">
                <AccordionTrigger value="04">
                  AI in the Fortune 500
                </AccordionTrigger>
                <AccordionContent>
                  Beyond just small startups, AI is being deployed at massive
                  scale even in companies and industries you wouldn't normally
                  think of as early adopters. Hear what works at scale and what
                  shared pain everyone has, from{' '}
                  <b>Discord, Tinder, AXA, Salesforce, Mastercard, Novartis</b>,
                  and more.
                </AccordionContent>
              </AccordionItem>
            </Accordion.Root>
          </div>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col mt-20">
        <div
          className="max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${imageChoiceBottom[selectedTrackBottom]})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Jun 5 - Conference Day 2
          </h2>
          <div className="text-white space-y-6">
            <Accordion.Root
              type="single"
              value={selectedTrackBottom}
              onValueChange={(v: TrackBottom) => setSelectedTrackBottom(v)}
            >
              <AccordionItem value="05">
                <AccordionTrigger value="05">
                  Multimodality and Omnimodality
                </AccordionTrigger>
                <AccordionContent>
                  At last year's Summit, Logan Kilpatrick declared this the
                  “Year of Multimodal AI”. Every frontier model now can consume
                  and generate images, audio, video, code, and all other
                  modalities in between. This opens up a brave new world of
                  possibilities for putting even more general intelligence to
                  work - we'll gather the best of 2024 from{' '}
                  <b>
                    Google DeepMind, Google AI Studio, (ex) Apple Vision Pro,
                    Cartesia, Character.ai + LanceDB, Midjourney
                  </b>
                  , and more!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="06">
                <AccordionTrigger value="06">
                  GPUs and Inference
                </AccordionTrigger>
                <AccordionContent>
                  Almost everybody is GPU poor, but you can make a -lot- out of
                  the GPUs you can get. Optimize your inference and training
                  costs and maximize your throughput! Hear from{' '}
                  <b>SemiAnalysis (GPU Poor), Groq, Crusoe, Fireworks</b> and
                  more. Bonus talks from{' '}
                  <b>Cognition (Devin) and Google (Gemma)</b> here due to travel
                  schedules.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="07">
                <AccordionTrigger value="07">Evals & LLM Ops</AccordionTrigger>
                <AccordionContent>
                  Building demos and MVPs are fun, but to get really good at AI
                  Engineering means getting good at running custom evals and
                  configuring LLM Ops. War stories, cool techniques, and hot new
                  ideas are all fair game for this track. Great talks from{' '}
                  <b>
                    Hamel Husain, Weights & Biases, Braintrust + Zapier,
                    OpenPipe, Arize, Log10 + Echo
                  </b>
                  , and more.
                  <a
                    className="flex items-center gap-3 mt-3"
                    href=" https://www.rungalileo.io/"
                    target="_blank"
                  >
                    <span>Track Sponsor</span>
                    <Logo logo="galileo" variant="colorWhite" />
                  </a>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="08">
                <AccordionTrigger value="08">
                  AI Agent Applications
                </AccordionTrigger>
                <AccordionContent>
                  The holy grail of AI: full self driving autonomous execution.
                  We're excited to feature top startups and frameworks powering
                  the agent revolution here from{' '}
                  <b>
                    AWS, Factory AI, Crew AI, Zeta Labs, Deepgram, Perpetual
                  </b>{' '}
                  and more, as well as keynotes from <b>Adept and LangChain</b>.
                </AccordionContent>
              </AccordionItem>
            </Accordion.Root>
          </div>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div
          className=" max-w-64 max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${imgLeadership.src})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Jun 4-5 - Both Conference Days
          </h2>
          <Accordion.Root
            type="multiple"
            className="mt-0!"
            value={['09', 'ES']}
          >
            <AccordionItem value="09">
              <AccordionTrigger value="09">AI Leadership</AccordionTrigger>
              <AccordionContent>
                An exclusive closed-door track for VPs of AI and other
                technical/engineering leaders. How do you effectively lead an AI
                Product or Engineering team in 2024? Defining AI Strategy,
                technical direction, org design, hiring/growing, and build/buy
                decisions. Executive briefings and roundtables on AI platform
                engineering, model building, evals and FMOps, inference
                optimization, code maintenance and technical debt, AI Engineer
                hiring, and more, directly from the top CEOs and technical
                leaders working in this space, from{' '}
                <b>
                  OpenAI, Cohere, NVIDIA, Sourcegraph, Weights & Biases,
                  HumanLoop, Khan Academy, Twilio, Hex, Neo4j, Tola/Microsoft,
                  PredictionGuard
                </b>
                , and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ES">
              <AccordionTrigger value="ES">
                Expo Sessions, Ignite Talks, HF0 Demo Day
              </AccordionTrigger>
              <AccordionContent>
                Sometimes the most useful talks are the small, practical
                sessions on specific technologies, new concepts, and customer
                stories. Access to the World's Fair Expo gets you access to
                dedicated sessions from 30+ speakers,{' '}
                <b>
                  Microsoft, AWS, Google, MongoDB, Neo4j, Perplexity, and more
                </b>
                , as well as attendee-led Ignite Talks and the first ever public
                HF0 Demo Day!
              </AccordionContent>
            </AccordionItem>
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
}

type AccordionItemType = {
  children: React.ReactNode;
  className?: string;
} & AccordionItemProps;

const AccordionItem = ({
  children,
  className,
  ...props
}: AccordionItemType) => (
  <Accordion.Item
    className={clsx(
      'overflow-hidden focus-within:relative focus-within:z-10 py-6 border-b border-gray-700',
      className,
    )}
    {...props}
  >
    {children}
  </Accordion.Item>
);

type AccordionTriggerType = {
  children: React.ReactNode;
  value: string;
  className?: string;
} & AccordionTriggerProps;

const AccordionTrigger = ({
  children,
  value,
  className,
  ...props
}: AccordionTriggerType) => (
  <Accordion.Header>
    <Accordion.Trigger
      className={clsx(
        'group flex items-center justify-between outline-hidden w-full hover:text-teal-300',
        className,
      )}
      {...props}
    >
      <div className="flex gap-7 text-2xl font-bold">
        <div className="text-teal-300 font-mono">{value}</div>
        <div className="flex-1 text-left">{children}</div>
      </div>
      <LuChevronDown
        className="w-6 h-6 ease-in-out transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
);

type AccordionContentType = {
  children: React.ReactNode;
  className?: string;
} & AccordionContentProps;

const AccordionContent = ({
  children,
  className,
  ...props
}: AccordionContentType) => (
  <Accordion.Content
    className={clsx(
      'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden',
      className,
    )}
    {...props}
  >
    <div className="pl-14 text-base text-gray-on-black">{children}</div>
  </Accordion.Content>
);
