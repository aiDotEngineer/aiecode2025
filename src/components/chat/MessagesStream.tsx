import { useEffect, useRef } from 'react';
import type { Message } from 'ai';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { MarkdownComponents } from './MarkdownComponents';

export default function MessagesStream({ messages }: { messages: Message[] }) {
  const messageAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageAreaRef.current) {
      const element = messageAreaRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={messageAreaRef}
      className="no-scrollbar flex-1 overflow-y-scroll text-sm"
    >
      {messages.map((m, index) => (
        <div
          key={index}
          className={`rounded-lg p-3 ${
            m.role === 'user' ? 'bg-blue-900' : 'bg-slate-900'
          }`}
        >
          <span className="text-xs font-semibold uppercase text-gray-400">
            {m.role === 'user' ? 'Me ' : 'Summit AI '}
          </span>
          <Markdown
            // @ts-expect-error remarkPlugins is not typed
            remarkPlugins={remarkGfm}
            components={MarkdownComponents}
            className={'break-words'}
          >
            {m.content}
          </Markdown>
        </div>
      ))}
    </div>
  );
}
