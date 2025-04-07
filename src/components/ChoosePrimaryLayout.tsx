import React, { useContext } from 'react';
import { usePathname } from 'next/navigation';

import { MainFooter } from '~/components/MainFooter';
import { SubPageWrap } from '~/components/SubPageWrap';
import { Footer as Summit2023Footer } from '~/components/summit-2023/Footer';
import { Header as Summit2023Header } from '~/components/summit-2023/Header';
import { MetaTags as Summit2023MetaTags } from '~/components/summit-2023/MetaTags';
// Summit 2025
import { Footer as Summit2025Footer } from '~/components/summit-2025/Footer';
import { Header as Summit2025Header } from '~/components/summit-2025/Header';
import { MetaTags as Summit2025MetaTags } from '~/components/summit-2025/MetaTags';
// Worlds Fair 2024
import { Footer as WorldsFair2024Footer } from '~/components/worldsfair-2024/Footer';
import { Header as WorldsFair2024Header } from '~/components/worldsfair-2024/Header';
import { MetaTags as WorldsFair2024MetaTags } from '~/components/worldsfair-2024/MetaTags';
// Worlds Fair 2025
import { Footer as WorldsFair2025Footer } from '~/components/worldsfair-2025/Footer';
import { Header as WorldsFair2025Header } from '~/components/worldsfair-2025/Header';
import { MetaTags as WorldsFair2025MetaTags } from '~/components/worldsfair-2025/MetaTags';
import { AuthProvider } from './AuthContext';
import { AppBannerProvider } from './worldsfair-2024/AppBanner';

type Props = {
  children: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EventContext = React.createContext<any>(null!);

// For consuming context, use individual hooks below to get correct type definitions

export function ChoosePrimaryLayout({ children: page }: Props) {
  // Pathname as key closes menu when URL changes
  const pathname = usePathname();

  // Build Any Page We Have
  switch (true) {
    case pathname.startsWith('/worldsfair/2025'):
      return (
        <AuthProvider>
          <EventContext.Provider value={worldsFair2025Context()}>
            <WorldsFair2025MetaTags />
            <WorldsFair2025Header key={pathname} path={pathname} />
            {page}
            <WorldsFair2025Footer />
          </EventContext.Provider>
        </AuthProvider>
      );
    case pathname.startsWith('/summit/2025'):
      return (
        <AuthProvider>
          <EventContext.Provider value={summit2025Context()}>
            <Summit2025MetaTags />
            <Summit2025Header key={pathname} path={pathname} />
            {page}
            <Summit2025Footer />
          </EventContext.Provider>
        </AuthProvider>
      );
    case pathname.startsWith('/worldsfair/2024'):
      return (
        <AuthProvider>
          <AppBannerProvider isBannerVisible={true}>
            <EventContext.Provider value={worldsFair2024Context()}>
              <WorldsFair2024MetaTags />
              <WorldsFair2024Header key={pathname} path={pathname} />
              {page}
              <WorldsFair2024Footer />
            </EventContext.Provider>
          </AppBannerProvider>
        </AuthProvider>
      );
    case pathname.startsWith('/summit/2023'): {
      return (
        <EventContext.Provider value={summit2023Context()}>
          <Summit2023MetaTags />
          <Summit2023Header key={pathname} />
          <SubPageWrap>{page}</SubPageWrap>
          <Summit2023Footer />
        </EventContext.Provider>
      );
    }
    default: {
      return (
        <AuthProvider>
          {page}
          <MainFooter />
        </AuthProvider>
      );
    }
  }
}

/****************************************
  Worlds Fair 2025
*****************************************/

function worldsFair2025Context() {
  const sponsorInquiry = new URL('mailto:sponsorships@ai.engineer');
  sponsorInquiry.searchParams.set(
    'subject',
    "AIE World's Fair 2025 Sponsor Inquiry",
  );

  const contact = new URL('mailto:info@ai.engineer');
  contact.searchParams.set('subject', "AIE World's Fair 2025 Contact");

  const CONF_URL = '/worldsfair';
  return {
    CONF_URL,
    SPEAKERS_URL: `${CONF_URL}#speakers`,
    WORKSHOPS_URL: `${CONF_URL}#workshops`,
    SCHEDULE_URL: `${CONF_URL}/2025/schedule`,
    SPONSORS_URL: `${CONF_URL}#sponsors`,
    SUBMIT_TALK_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLScc-47zw-tWjYbhAkwTeLy_-MQW3L-3uwtaVnEzudrEZcQ7bg/viewform',
    BUY_TICKETS_URL: 'https://ti.to/software-3/ai-engineer-worlds-fair',
    CFP_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLScc-47zw-tWjYbhAkwTeLy_-MQW3L-3uwtaVnEzudrEZcQ7bg/viewform',

    SCHOLARSHIPS_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLSdVf9reEpVyzw_sb9cAOtzxORGTEskcb5PTX2X-GPZ_onUtHw/viewform?usp=sf_link',
    VOLUNTEER_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLSfyb93_81hG3ht8wm966dlSXMAoP9S5YUzPLLFZ7E_BefyjQA/viewform?usp=sf_link',

    VENUE_URL: `${CONF_URL}#venue`,
    // Mailto
    SPONSOR_INQUIRY_URL: sponsorInquiry.toString().replaceAll('+', '%20'),
    CONTACT_URL: contact.toString().replaceAll('+', '%20'),
    // Social
    TWITTER_URL: 'https://x.com/aidotengineer',
    YOUTUBE_URL: 'https://www.youtube.com/@aiDotEngineer',
  } as const;
}

export function useWorldsFair2025() {
  type ContextType = ReturnType<typeof worldsFair2025Context>;
  const context = useContext<ContextType>(EventContext);
  if (!context) {
    console.error('There is no EventContext provider');
  }
  return context;
}

/****************************************
  Summit 2025
*****************************************/

function summit2025Context() {
  const sponsorInquiry = new URL('mailto:sponsorships@ai.engineer');
  sponsorInquiry.searchParams.set('subject', 'AIE Summit 2025 Sponsor Inquiry');

  const contact = new URL('mailto:info@ai.engineer');
  contact.searchParams.set('subject', 'AIE Summit 2025 Contact');

  const CONF_URL = '/summit/2025';
  return {
    CONF_URL,
    SPEAKERS_URL: `${CONF_URL}#speakers`,
    WORKSHOPS_URL: `${CONF_URL}#workshops`,
    SCHEDULE_URL: `${CONF_URL}/schedule`,
    SPONSORS_URL: `${CONF_URL}#sponsors`,
    SUBMIT_TALK_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLScc-47zw-tWjYbhAkwTeLy_-MQW3L-3uwtaVnEzudrEZcQ7bg/viewform',
    BUY_TICKETS_URL: 'https://apply.ai.engineer/',
    CFP_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLScZlCSEt5Nt4nXBdiJYIqaiZ02GTl5cDlcHxZMgTdQ2vVrHxA/viewform',

    SCHOLARSHIPS_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLSdVf9reEpVyzw_sb9cAOtzxORGTEskcb5PTX2X-GPZ_onUtHw/viewform?usp=sf_link',
    VOLUNTEER_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLScz5OcDnSMvF0UAYawc8GIqyDV6KXSDIeIVwCxPqLwc36TSyw/viewform',

    VENUE_URL: `${CONF_URL}#venue`,
    // Mailto
    SPONSOR_INQUIRY_URL: sponsorInquiry.toString().replaceAll('+', '%20'),
    CONTACT_URL: contact.toString().replaceAll('+', '%20'),
    // Social
    TWITTER_URL: 'https://x.com/aidotengineer',
    YOUTUBE_URL: 'https://www.youtube.com/@aiDotEngineer',
  } as const;
}

export function useSummit2025() {
  type ContextType = ReturnType<typeof summit2025Context>;
  const context = useContext<ContextType>(EventContext);
  if (!context) {
    console.error('There is no EventContext provider');
  }
  return context;
}

/****************************************
  Worlds Fair 2024
*****************************************/

function worldsFair2024Context() {
  const sponsorInquiry = new URL('mailto:sponsorships@ai.engineer');
  sponsorInquiry.searchParams.set(
    'subject',
    "AIE World's Fair 2024 Sponsor Inquiry",
  );

  const contact = new URL('mailto:info@ai.engineer');
  contact.searchParams.set('subject', "AIE World's Fair 2024 Contact");

  const CONF_URL = '/worldsfair';
  return {
    CONF_URL,
    SPEAKERS_URL: `${CONF_URL}#speakers`,
    WORKSHOPS_URL: `${CONF_URL}#workshops`,
    SCHEDULE_URL: `${CONF_URL}/2024/schedule`,
    SPONSORS_URL: `${CONF_URL}#sponsors`,
    SUBMIT_TALK_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLScc-47zw-tWjYbhAkwTeLy_-MQW3L-3uwtaVnEzudrEZcQ7bg/viewform',
    BUY_TICKETS_URL: 'https://ti.to/software-3/ai-engineer-worlds-fair',
    CFP_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLScc-47zw-tWjYbhAkwTeLy_-MQW3L-3uwtaVnEzudrEZcQ7bg/viewform',

    SCHOLARSHIPS_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLSdVf9reEpVyzw_sb9cAOtzxORGTEskcb5PTX2X-GPZ_onUtHw/viewform?usp=sf_link',
    VOLUNTEER_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLSfyb93_81hG3ht8wm966dlSXMAoP9S5YUzPLLFZ7E_BefyjQA/viewform?usp=sf_link',

    VENUE_URL: `${CONF_URL}#venue`,
    // Mailto
    SPONSOR_INQUIRY_URL: sponsorInquiry.toString().replaceAll('+', '%20'),
    CONTACT_URL: contact.toString().replaceAll('+', '%20'),
    // Social
    TWITTER_URL: 'https://x.com/aidotengineer',
    YOUTUBE_URL: 'https://www.youtube.com/@aiDotEngineer',
  } as const;
}

export function useWorldsFair2024() {
  type ContextType = ReturnType<typeof worldsFair2024Context>;
  const context = useContext<ContextType>(EventContext);
  if (!context) {
    console.error('There is no EventContext provider');
  }
  return context;
}

/****************************************
  Summit 2023
*****************************************/

function summit2023Context() {
  const CONF_URL = '/summit/2023';
  return {
    CONF_URL,
    SPEAKERS_URL: `${CONF_URL}#speakers`,
    WORKSHOPS_URL: `${CONF_URL}#workshops`,
    SCHEDULE_URL: `${CONF_URL}/schedule`,
    SPONSORS_URL: `${CONF_URL}#sponsors`,
    SCHOLARSHIPS_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLSe2tMhNWv1qgfchLoPcHdoPlkbrV0CkRe9d54g5fO3Q9oT6Fg/viewform?usp=sf_link',
    VOLUNTEER_URL:
      'https://docs.google.com/forms/d/e/1FAIpQLSc9CBIJEoJWv2K9y9K5LwmUxV3wyaMCKGBMjC5fzEInzdjwUA/formrestricted',
    HOTEL_URL: '',
    // Social
    TWITTER_URL: 'https://x.com/aidotengineer',
    YOUTUBE_URL: 'https://www.youtube.com/@aiDotEngineer',
  } as const;
}

export function useSummit2023() {
  type ContextType = ReturnType<typeof summit2023Context>;
  const context = useContext<ContextType>(EventContext);
  if (!context) {
    console.error('There is no EventContext provider');
  }
  return context;
}
