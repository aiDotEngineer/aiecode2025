import Head from 'next/head';

export function MetaTags() {
  return (
    <Head>
      <title>AI Engineer Summit: Agents at Work!</title>
      <meta
        key="ogTitle"
        property="og:title"
        content="AI Engineer Summit: Agents at Work!"
      />
      <meta
        key="description"
        name="description"
        content="Nov 19-22, 2025: The AI Engineer Code Summit brings together the world's top Coding Agent builders, AI engineers, and leadership to share breakthroughs in AI Coding. Learn from founders and engineers at OpenAI, Anthropic, Cursor, Cognition, and more."
      />
      <meta
        key="ogDescription"
        property="og:description"
        content="Building AI Orgs and AI Agents in 2025. Join the world's top Coding Agent builders and AI engineers at the premier technical conference for AI Coding. Featuring speakers from OpenAI, Anthropic, Cursor, Cognition, Vercel, and more."
      />
      <meta
        key="ogImage"
        property="og:image"
        content="/og-image-code-2025.png"
      />
      <meta
        key="twitterCard"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        key="twitterDomain"
        property="twitter:domain"
        content="ai.engineer"
      />
      <meta
        key="twitterUrl"
        name="twitter:url"
        content="https://ai.engineer/"
      />
      <meta
        key="twitterTitle"
        name="twitter:title"
        content="AI Engineer Summit NY"
      />
      <meta
        key="twitterDescription"
        name="twitter:description"
        content="Nov 19-22, 2025: The AI Engineer Code Summit brings together the world's top Coding Agent builders, AI engineers, and leadership to share breakthroughs in AI Coding. Learn from founders and engineers at OpenAI, Anthropic, Cursor, Cognition, and more."
      />
      <meta
        key="twitterImage"
        name="twitter:image"
        content="https://ai.engineer/og-image-summit-2025.png"
      />
    </Head>
  );
}
