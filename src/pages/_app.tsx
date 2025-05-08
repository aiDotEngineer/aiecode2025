import { type AppType } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { api } from "~/support/api";
import "~/styles/tailwind.css";
import React, { useEffect } from "react";

// import ChatBot from '~/components/chat/ChatBot';
import { ChoosePrimaryLayout } from "~/components/ChoosePrimaryLayout";

type Session = {
  id: string;
  user: {
    id: string;
  };
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session: _session, ...pageProps },
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      if (utmSource) {
        import('../utils/utmUtils').then(({ storeUtmSource }) => {
          storeUtmSource(utmSource);
        });
      }
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI Engineer</title>
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChoosePrimaryLayout>
        <Component {...pageProps} />
      </ChoosePrimaryLayout>
      {/* <ChatBot /> */}
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
