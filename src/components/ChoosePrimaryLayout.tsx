import React, { useContext } from "react";
import { usePathname } from "next/navigation";

// Worlds Fair 2025
import { Footer as WorldsFair2025Footer } from "~/components/worldsfair-2025/Footer";
import { Header as WorldsFair2025Header } from "~/components/worldsfair-2025/Header";
import { MetaTags as WorldsFair2025MetaTags } from "~/components/worldsfair-2025/MetaTags";
import { AuthProvider } from "./AuthContext";

type Props = {
  children: React.ReactNode;
};

const EventContext = React.createContext<any>(null!);

// For consuming context, use individual hooks below to get correct type definitions

export function ChoosePrimaryLayout({ children: page }: Props) {
  // Pathname as key closes menu when URL changes
  const pathname = usePathname();

  return (
    <AuthProvider>
      <EventContext.Provider value={worldsFair2025Context()}>
        <WorldsFair2025MetaTags />
        <WorldsFair2025Header key={pathname} path={pathname || ''} />
        {page}
        <WorldsFair2025Footer />
      </EventContext.Provider>
    </AuthProvider>
  );
}

/****************************************
  Worlds Fair 2025
*****************************************/

function worldsFair2025Context() {
  const sponsorInquiry = new URL("mailto:sponsorships@ai.engineer");
  sponsorInquiry.searchParams.set(
    "subject",
    "AIE World's Fair 2025 Sponsor Inquiry"
  );

  const contact = new URL("mailto:hello@ai.engineer");
  contact.searchParams.set("subject", "AIE World's Fair 2025 Contact");

  // const CONF_URL = '/worldsfair';
  const CONF_URL = "/";
  return {
    CONF_URL,
    SPEAKERS_URL: `${CONF_URL}#speakers`,
    WORKSHOPS_URL: `${CONF_URL}#workshops`,
    SCHEDULE_URL: `${CONF_URL}/schedule`,
    SPONSORS_URL: `${CONF_URL}#sponsors`,
    SUBMIT_TALK_URL:
      "https://docs.google.com/forms/d/e/1FAIpQLScc-47zw-tWjYbhAkwTeLy_-MQW3L-3uwtaVnEzudrEZcQ7bg/viewform",
    BUY_TICKETS_URL: "https://ti.to/software-3/ai-engineer-worlds-fair",
    CFP_URL:
      "https://docs.google.com/forms/d/e/1FAIpQLScc-47zw-tWjYbhAkwTeLy_-MQW3L-3uwtaVnEzudrEZcQ7bg/viewform",

    SCHOLARSHIPS_URL:
      "https://docs.google.com/forms/d/e/1FAIpQLSdVf9reEpVyzw_sb9cAOtzxORGTEskcb5PTX2X-GPZ_onUtHw/viewform?usp=sf_link",
    VOLUNTEER_URL:
      "https://docs.google.com/forms/d/e/1FAIpQLSewGzjGQ51Uv453Qa6XFI9cRz2fmqvgtTfvciuvc4xJs9I3AA/viewform",

    VENUE_URL: `${CONF_URL}#venue`,
    // Mailto
    SPONSOR_INQUIRY_URL: sponsorInquiry.toString().replaceAll("+", "%20"),
    CONTACT_URL: contact.toString().replaceAll("+", "%20"),
    // Social
    TWITTER_URL: "https://x.com/aidotengineer",
    YOUTUBE_URL: "https://www.youtube.com/@aiDotEngineer",
  } as const;
}

export function useWorldsFair2025() {
  type ContextType = ReturnType<typeof worldsFair2025Context>;
  const context = useContext<ContextType>(EventContext);
  if (!context) {
    console.error("There is no EventContext provider");
  }
  return context;
}
