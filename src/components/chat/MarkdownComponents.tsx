import React, {
  createContext,
  useContext,
  type ReactElement,
  type ReactNode,
} from 'react';
import Image from 'next/image';

/** Local context for code blocks (when <pre> is a parent of <code>) */
const CodeBlockContext = createContext<boolean>(false);

type MarkdownComponentProps = {
  node?: ReactNode;
  children?: ReactNode;
};

/**
 * Custom component for the `<code>` element
 * This component uses the CodeBlockContext to determine if it is within a `<pre>` tag,
 * indicating that it is a code block.
 * - If so, it adds no custom styling allowing the `<pre>` tag to handle it.
 * - If not, it adds custom styling to make it look like an inline code block.
 */
const Code: React.FC<MarkdownComponentProps> = ({ children }) => {
  const isInCodeBlock = useContext(CodeBlockContext);
  const className = !isInCodeBlock
    ? 'text-xs bg-gray-200 rounded px-1 text-pink-600 font-semibold'
    : '';

  return <code className={className}>{children}</code>;
};

/**
 * Custom component for the `<pre>` element
 * This component determines if it has a child `<code>` element, indicating that it is a code block,
 * and sets the CodeBlockContext accordingly. It then applies custom styling to make it look like a code block.
 */
const Pre: React.FC<MarkdownComponentProps> = ({ children }) => {
  const hasCodeBlock = React.Children.toArray(children).some((child) => {
    const child_ = child as ReactElement;
    return React.isValidElement(child) && child_.props.node.tagName === 'code';
  });

  return (
    <CodeBlockContext.Provider value={hasCodeBlock}>
      <pre className={`w-full rounded bg-slate-700 p-4 text-xs text-white`}>
        {children}
      </pre>
    </CodeBlockContext.Provider>
  );
};

/**
 * Markdown to HTML Conversion for React Markdown
 */
export const MarkdownComponents: Record<
  string,
  React.FC<MarkdownComponentProps>
> = {
  // Headers
  h1: ({ children }) => <h1 className="my-4 text-2xl font-bold">{children}</h1>,
  h2: ({ children }) => <h2 className="my-3 text-xl font-bold">{children}</h2>,
  h3: ({ children }) => <h3 className="my-2 text-lg font-bold">{children}</h3>,
  h4: ({ children }) => <h4 className="text-md my-2 font-bold">{children}</h4>,
  h5: ({ children }) => <h5 className="my-2 text-sm font-bold">{children}</h5>,
  h6: ({ children }) => <h6 className="my-1 text-xs font-bold">{children}</h6>,

  // Text
  p: ({ children }) => <p className="my-2 text-sm text-gray-200">{children}</p>,
  span: ({ children }) => (
    <span className="text-sm text-gray-200">{children}</span>
  ),

  // Lists
  ul: ({ children }) => <ul className="mx-2 my-2 list-disc">{children}</ul>,
  ol: ({ children }) => <ol className="mx-2 my-2 list-decimal">{children}</ol>,
  li: ({ children }) => (
    <li className="my-1 text-sm text-gray-200">{children}</li>
  ),

  // Code
  code: Code,
  pre: Pre,

  // Links
  a: ({ children, node }) => {
    // @ts-ignore
    const href = node?.properties?.href || '';
    return (
      <a href={href} className="border-blue-400 text-blue-400 hover:border-b-2">
        {children}
      </a>
    );
  },

  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote className="my-2 border-l-4 border-gray-300 pl-4 italic">
      {children}
    </blockquote>
  ),

  // Images
  img: ({ node }) => (
    <Image
      // @ts-ignore
      src={node?.properties?.src}
      // @ts-ignore
      alt={node?.properties?.src}
      className="my-2 h-auto max-w-full"
    />
  ),

  // Tables
  table: ({ children }) => (
    <table className="w-full table-auto">{children}</table>
  ),
  thead: ({ children }) => <thead className="bg-gray-800">{children}</thead>,
  tbody: ({ children }) => <tbody className="bg-gray-900">{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-gray-700">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2 text-left font-semibold">{children}</th>
  ),
  td: ({ children }) => <td className="px-4 py-2">{children}</td>,
};
