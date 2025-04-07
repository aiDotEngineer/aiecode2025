import Head from 'next/head';

export function MetaTags() {
  return (
    <Head>
      <title>AI Engineer World's Fair</title>
      <meta
        key="ogTitle"
        property="og:title"
        content="AI Engineer World's Fair"
      />
      <meta
        key="description"
        name="description"
        content="Join 2,000 software engineers enhanced by and building with AI. June 3 - 5, 2025, San Francisco."
      />
      <meta
        key="ogDescription"
        property="og:description"
        content="Join 2,000 software engineers enhanced by and building with AI. June 3 - 5, 2025, San Francisco."
      />
      <meta
        key="ogImage"
        property="og:image"
        content="/og-image-worldsfair-2025.png"
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
        content="AI Engineer World's Fair"
      />
      <meta
        key="twitterDescription"
        name="twitter:description"
        content="Join 2,000 software engineers enhanced by and building with AI. June 3 - 5, 2025, San Francisco."
      />
      <meta
        key="twitterImage"
        name="twitter:image"
        content="https://ai.engineer/og-image-worldsfair-2025.png"
      />
    </Head>
  );
}
