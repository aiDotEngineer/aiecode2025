// [INFO][2025-05-20T10:17:04-07:00][schedule.tsx]
// This page provides a dedicated /schedule route with the official schedule iframe embedded.
// Assumes the app uses ChoosePrimaryLayout for header/footer and meta, as seen in other pages.
// Logs are included for hydration/debugging.

import React from 'react';
import Head from 'next/head';
// // [INFO][2025-05-20T10:17:38-07:00] Fix: ChoosePrimaryLayout is a named export, not default.
// import { ChoosePrimaryLayout } from '../components/ChoosePrimaryLayout';
// // [INFO][2025-05-20T10:19:31-07:00] Importing Header for explicit page header
import { Header } from '../components/worldsfair-2025/Header'; // [INFO][2025-05-20T10:54:38-07:00] Un-commented for always-visible header
// import { HeroBuyTickets } from '../components/worldsfair-2025/HeroBuyTickets';
// import { NewsletterFormThree } from '../components/Newsletter';

const SchedulePage: React.FC = () => {
  // Print informative log on mount
  React.useEffect(() => {
    // Color code: blue; Stage: MOUNT
    // eslint-disable-next-line no-console
    console.log('%c[INFO][SCHEDULE][MOUNT][2025-05-20T10:17:04-07:00] /schedule page mounted', 'color: #2563eb; font-weight: bold;');
  }, []);

  return (
    <>
      {/* <Head>
        <title>World's Fair 2025 Schedule</title>
        <meta name="description" content="Full calendar view of the AI Engineer World's Fair 2025 schedule." />
      </Head> */}
      {/* [INFO][2025-05-20T10:19:31-07:00] Explicit Header inclusion for /schedule */}
      {/* [INFO][2025-05-20T10:54:38-07:00] Header always visible for /schedule */}
      <Header path="/schedule" alwaysShow />
      {/* [INFO][2025-05-20T10:29:27-07:00] Ultra-compact, modern horizontal info bar for schedule CTAs */}
      {/* <section className="w-full bg-stone-50 border-b border-stone-200 py-6 mb-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 px-2 md:px-4">
          
          <div className="flex-1 flex flex-col items-center md:items-start justify-center py-2 px-2">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6 py-3 shadow transition text-lg w-full md:w-auto"
              onClick={() => window.open('https://ti.to/ai-engineer/worlds-fair-2025', '_blank')}
            >
              🎟️ Buy 2025 Tickets
            </button>
          </div>
          <div className="hidden md:block h-10 border-l border-stone-300 mx-4" />
          
          <div className="flex-1 flex gap-4 items-center md:items-end justify-center py-2 px-2">
            <div className="font-semibold text-base md:text-lg mb-2 text-center md:text-right">📬 Get updates</div>
            <NewsletterFormThree onSuccess={() => console.log('[INFO][NEWSLETTER][SCHEDULE] Signup success!')} />
          </div>
        </div>
      </section> */}
      <main className="min-h-screen bg-stone-100 py-32">
        <div className="max-w-full mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">World's Fair 2025 Schedule</h1>
        {/* [INFO][2025-05-20T10:26:59-07:00] Venue info box added below top cards */}
        <div className="max-w-2xl mx-auto px-4 mb-8">
          <a
            href="https://maps.app.goo.gl/3BqJtoYUmYGr94Va9"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 transition shadow-md p-5 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="font-semibold text-lg text-blue-800">SF Marriott Marquis, June 3–5, 2025 &middot; San Francisco</span>
            </div>
            <div className="text-blue-900">Foothill/SOMA rooms are on Level 2</div>
            <div className="text-blue-900">Golden Gate Ballrooms are on B1</div>
            <div className="text-blue-900">Yerba Buena Ballrooms and Salons are on B2</div>
            
            <div className="text-blue-700 underline mt-1">View on Google Maps</div>
          </a>
        </div>
          {/*
            [INFO][2025-05-20T10:17:04-07:00] Embedding official sessionize schedule iframe.
            This is the canonical calendar view for the event schedule.
          */}
          <iframe
            id="gridsmart"
            className="w-full h-[90vh] border rounded px-16"
            src="https://sessionize.com/api/v2/hyxh7ov6/view/GridSmart"
            frameBorder="0"
            width="100%"
            height="100vh"
            title="World's Fair 2025 Schedule"
          />
        </div>
        <p className="text-center mt-16">
          <span className="uppercase font-mono bg-gray-600 p-1 rounded-sm text-yellow-200">
            IMPORTANT
          </span>{" "}
          The full schedule is not yet up, as some sessions are yet to be finalized. Obvious gaps in the schedule will be filled.
          {/* Our{' '}
          <a
            className="text-blue-500 font-bold hover:text-blue-400"
            href="/schedule"
          >
            full talk schedule is now published here
          </a> */}
        </p>
      </main>
    </>
  );
};

export default SchedulePage;
