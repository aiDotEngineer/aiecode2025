import { useEffect, useRef } from "react";
import { UiChatMessage } from "@hashbrownai/react";
import MarkdownMessage from "./MarkdownMessage";

export default function MessagesStream({ messages }: { messages: UiChatMessage<any>[] }) {
  const messageAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageAreaRef.current) {
      const element = messageAreaRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={messageAreaRef} className="no-scrollbar flex-1 overflow-y-scroll text-sm space-y-3">
      {messages.map((m, index) => (
        <div
          key={index}
          className={`rounded-lg p-3 ${m.role === "user" ? "bg-blue-900" : "bg-slate-900"}`}
        >
          <span className="text-xs font-semibold uppercase text-gray-400">
            {m.role === "user" ? "Me " : "World's Fair AI "}
          </span>
          {m.role === "user" ? <MarkdownMessage text={m.content} /> : m.ui}
        </div>
      ))}
    </div>
  );
}
