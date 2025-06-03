"use client";

import { useCallback, useState } from "react";
import { s } from "@hashbrownai/core";
import { exposeComponent, useUiChat } from "@hashbrownai/react";
import { IoChatboxOutline } from "react-icons/io5";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

import MessagesStream from "./MessagesStream";
import PromptForm from "./PromptForm";
import MarkdownMessage from "./MarkdownMessage";
import ConferenceSession from "./ConferenceSession";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, isSending, isReceiving, isRunningToolCalls } = useUiChat({
    debugName: "Summit AI",
    model: "palmyra-x5",
    system: "",
    components: [
      exposeComponent(MarkdownMessage, {
        name: "markdown",
        description:
          "Displays markdown in the web app. Use this for general responses to the user.",
        props: {
          text: s.streaming.string("Markdown to display to the user"),
        },
      }),
      exposeComponent(ConferenceSession, {
        name: "conferenceSession",
        description: "Displays a conference session to the user by supplying the session ID",
        props: {
          sessionId: s.string("Session ID"),
        },
      }),
    ],
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      console.log("handleSubmit", input);
      e.preventDefault();
      sendMessage({
        role: "user",
        content: input,
      });
      setInput("");
    },
    [input, sendMessage]
  );

  return (
    <div className="mx-auto flex w-full flex-col rounded-lg bg-black border-x border-t border-gray-600 px-6 py-4 text-white md:left-20 h-[640px] max-h-[100svh]">
      <ChatHeader />

      <MessagesStream messages={messages} />
      <div></div>
      <PromptForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isSending || isReceiving || isRunningToolCalls}
      />
      <div className="text-xs text-gray-500 mt-3">
        Powered by{" "}
        <a href="https://writer.com" target="_blank" className="text-blue-300">
          Palmyra X5 from Writer
        </a>{" "}
        and{" "}
        <a href="https://hashbrown.dev" target="_blank" className="text-blue-300">
          Hashbrown
        </a>
      </div>
    </div>
  );
}

function ChatHeader() {
  return (
    <button className="flex w-full items-center justify-between text-left">
      <div>
        <h1 className="flex items-center text-sm font-semibold md:text-xl">
          <IoChatboxOutline className="mr-2" />
          <span>AIE AI</span>
        </h1>
        <p className="hidden text-sm text-gray-500 md:block">
          Ask me about talks, speakers, or the schedule
        </p>
      </div>
    </button>
  );
}
