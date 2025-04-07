'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import { IoChatboxOutline } from 'react-icons/io5';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';

import MessagesStream from './MessagesStream';
import PromptForm from './PromptForm';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  return (
    <div className="x-auto fixed bottom-0 z-50 flex max-h-[90vh] w-full flex-col rounded-t-lg bg-black border-x border-t border-gray-600 px-6 py-4 text-white shadow-xl md:right-20 md:max-w-md">
      <ChatHeader open={open} setOpen={setOpen} />
      {open && (
        <>
          <MessagesStream messages={messages} />
          <PromptForm
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
}

function ChatHeader({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <button
      className="flex w-full items-center justify-between text-left"
      onClick={() => setOpen(!open)}
    >
      <div>
        <h1 className="flex items-center text-sm font-semibold md:text-xl">
          <IoChatboxOutline className="mr-2" />
          <span>Summit AI</span>
        </h1>
        <p className="hidden text-sm text-gray-500 md:block">
          Ask me about talks, speakers, or the schedule.
        </p>
      </div>
      <div>
        {open ? (
          <LuChevronDown className="h-6 w-6 text-slate-500" />
        ) : (
          <LuChevronUp className="h-6 w-6 text-slate-500" />
        )}
      </div>
    </button>
  );
}
