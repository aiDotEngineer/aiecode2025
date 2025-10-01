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
        content="Feb 19-22, 2025: Join the #1 invite-only technical conference in the world for AI engineers and leadership (CTOs & VPs of AI) to meet, learn, and advance the field, for the third year running."
      />
      <meta
        key="ogDescription"
        property="og:description"
        content="This year's theme: Agents at Work! Join the #1 invite-only technical conference in the world for AI engineers and leadership (CTOs & VPs of AI) to meet, learn, and advance the field, for the third year running."
      />
      <meta
        key="ogImage"
        property="og:image"
        content="/og-image-summit-2025.png"
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
        content="Feb 19-22, 2025: Join the #1 invite-only technical conference in the world for AI engineers and leadership (CTOs & VPs of AI) to meet, learn, and advance the field, for the third year running."
      />
      <meta
        key="twitterImage"
        name="twitter:image"
        content="https://ai.engineer/og-image-summit-2025.png"
      />
    </Head>
  );
}
