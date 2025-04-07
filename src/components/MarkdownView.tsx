import { useMemo } from 'react';
import { micromark } from 'micromark';

export function MarkdownView(props: { markdown: string }) {
  const { markdown } = props;
  const html = useMemo(() => micromark(markdown), [markdown]);
  return (
    <div className="mdx-content" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
