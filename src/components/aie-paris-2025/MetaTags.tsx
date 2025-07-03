import Head from "next/head";

export function MetaTags() {
  return (
    <Head>
      <title>AI Engineer Paris</title>
      <meta
        key="ogTitle"
        property="og:title"
        content="AI Engineer Paris (Sep 23-24, 2025, Paris)"
      />
      <meta
        key="description"
        name="description"
        content="Join 500+ engineers and leaders building with AI. September 23-24, 2025, Paris."
      />
      <meta
        key="ogDescription"
        property="og:description"
        content="Join 500+ engineers and leaders building with AI. September 23-24, 2025, Paris."
      />
      <meta
        key="ogImage"
        property="og:image"
        content="https://ai.engineer/og-image-aie-paris-2025.png"
      />
      <meta key="twitterCard" name="twitter:card" content="summary_large_image" />
      <meta key="twitterDomain" property="twitter:domain" content="ai.engineer" />
      <meta key="twitterUrl" name="twitter:url" content="https://ai.engineer/paris" />
      <meta key="twitterTitle" name="twitter:title" content="AI Engineer Paris" />
      <meta
        key="twitterDescription"
        name="twitter:description"
        content="Join 500+ engineers and leaders building with AI. September 23-24, 2025, Paris."
      />
      <meta
        key="twitterImage"
        name="twitter:image"
        content="https://ai.engineer/og-image-aie-paris-2025.png"
      />
    </Head>
  );
}
