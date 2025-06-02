import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { MarkdownComponents } from "./MarkdownComponents";

export default function MarkdownMessage({ text }: { text: string }) {
  return (
    <Markdown
      // @ts-expect-error remarkPlugins is not typed
      remarkPlugins={remarkGfm}
      components={MarkdownComponents}
    >
      {text}
    </Markdown>
  );
}
