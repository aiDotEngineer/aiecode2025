/**
 * Simple markdown to HTML converter for inline formatting.
 * Converts bold, italics, code, and links.
 * @param {string | null | undefined} text The input markdown string.
 * @returns {string} The converted HTML string.
 */
export function markdownToHtml(text?: string | null): string {
  if (!text) return '';

  let html = String(text);


  // Convert bullet points (-, *, + at line start) to <ul><li>...</li></ul>
  // Handles multi-line lists and preserves existing <ul> if already present
  html = html.replace(
    /((?:^([\s]*)[-*+]\s.*(?:\n|$))+)/gm,
    (match) => {
      // For each block of bullet lines
      const lines = match
        .trim()
        .split('\n')
        .map(line =>
          line.replace(/^([\s]*)[-*+]\s(.*)$/, (m, space, content) => `${space}<li className="list-disc pl-2">• ${content.trim()}</li>`)
        )
        .join('\n');
      // return `<ul>\n${lines}\n</ul>\n`;
      return `${lines}`;
    }
  );

  // Convert line breaks to <br> tags
  // Convert consecutive line breaks to a single <br><br>, but don't stack multiple <br><br>s
  html = html.replace(/\n{2,}/g, '<br><br>');
  html = html.replace(/\n/g, '<br>');

  // Convert bold (**text**)
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convert italics (*text*)
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Convert code blocks (`text`)
  html = html.replace(/`(.*?)`/g, '<code>$1</code>');

  // Convert links [text](url). must come after images
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  return html;
}
