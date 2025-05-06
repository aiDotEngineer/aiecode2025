import { NextResponse } from 'next/server';
import {
  Day1Tracks,
  Day2Tracks,
  LeadershipTracks,
  type Track
} from '~/utils/trackData';

// Set revalidation time (e.g., 1 hour)
export const revalidate = 3600;

function formatTracksToText(tracks: Track[], dayLabel: string): string {
  let text = `--- ${dayLabel} ---\n\n`;
  tracks.forEach(track => {
    text += `Title: ${track.trackTitle}\n`;
    text += `Description: ${track.trackDescription}\n\n`;
    // Add subDesc if it exists (as requested removed previously, but useful here)
    if (track.subDesc) {
      text += `  Note: ${track.subDesc}\n\n`;
    }
  });
  return text;
}

const frontCopy = `
# AI Engineer World's Fair 2025

## Overview

**June 3–5, 2025 • San Francisco**  
The AI Engineer World's Fair is the largest technical conference for engineers working in AI today. Returning for its third year, this event is where the leading AI labs, founders, VPs of AI, and engineers gather to share what they're building and what's next.

- ~3,000 attendees: Founders, VPs of AI, AI Engineers
- ~150 launches and talks from top speakers
- ~100 practical workshops and expo sessions
- ~50 top DevTools and employers represented in the Expo

Organized by the team behind the AI Engineer Summit.  
**[Buy Tickets](https://ti.to/software-3/ai-engineer-worlds-fair-2025) | [Watch 2023/2024/2025 Talks](https://youtube.com/@aidotengineer) | [Subscribe to Newsletter](https://ai.engineer/newsletter)**

## Schedule

### Tuesday, June 3 – Workshop Day + Evening Expo & Reception
- Exclusive hands-on workshops across 5 tracks, instructed by industry-leading companies, founders, and engineers.
- Topics span all levels of experience and specialties in AI Engineering.
- **Evening Welcome Reception** (4:00–7:00pm): Held in the Grand Assembly & Expo Hall. Open to all ticketholders.

### Wednesday & Thursday, June 4–5 – Conference Days
- 20 tracks of talks, panels, and demos.
- Keynotes from the biggest and most consequential labs and companies.
- High-value hallway track and facilitated networking.
- Workshops and exclusive access for "Conference + Workshop Pass" holders.

## Tracks

`;

const backCopy = `

## Expo

Open across all 3 days. Featuring 30+ booths and demo areas showcasing the most relevant and forward-thinking AI infrastructure and developer tools. Meet the engineers and founders behind:

Microsoft, AWS, MongoDB, Neo4j, Sourcegraph, Temporal, Hasura, LlamaIndex, Baseten, Elastic, Redis, Daily, Gitpod, Traceloop, Pydantic, Freeplay, Weights & Biases, and many more.

**[Buy Tickets](https://ti.to/software-3/ai-engineer-worlds-fair-2025) | [Watch 2023/2024/2025 Talks](https://youtube.com/@aidotengineer)**

## AI Architects Track

Invite-only track for AI executives (VPs, CTOs, Heads of AI at enterprises with >1000 employees).

- Closed-door briefings and roundtables
- Topics include technical org design, model building, FMOps, evals, inference optimization, build/buy decisions
- Exclusive access to premium lunches and networking in the View Lounge

## Side Events (2024 Examples)

A full week of satellite events hosted by our partners:
- Hackathons (e.g., AI21, GenLab x AIEWF)
- Deep Tech Week launch parties
- RAG++ pre-party, AI DevTools nights
- Rooftop happy hours and after-parties
- Demo Days, quality conferences, founders dinners

If you are organizing an event around June 1–8, email **sponsorships@ai.engineer** to be added to the official calendar.

## Venue & Hotel

**Marriott Marquis, San Francisco**  
780 Mission St, San Francisco, CA 94103

- Yerba Buena Ballroom: Keynotes, expo, and large sessions
- Golden Gate Ballroom: Dedicated space for workshops
- View Lounge: Reserved for AI Architects and Leadership Track networking

**Discounted rates:**
- Marriott Marquis: $399/night (May 29–Jun 7)
- Beacon Grand (10-min walk): $289/night with group code \`0601AEWF\`

Book Marriott Marquis (sold out) | [Book Beacon Grand](https://www.beacongrand.com/) (use group code: 0601AEWF)

## Sponsors

### Presenting Sponsor
- **Microsoft**: Azure AI and supercomputing infrastructure

### Innovation Partner
- **AWS**: Amazon Bedrock, Amazon Q, and AI services

### Platinum
- Windsurf, MongoDB, Graphite, Daily

### Gold
- Neo4j, Hasura, Galileo, Sourcegraph, Temporal, Baseten, Elastic, LlamaIndex, Gitpod, Freeplay, Dagger, Traceloop, Pydantic, Arize

### Silver
- Redis, Twilio, Vellum, Descope, Super Annotate, Agentuity, GenSx, Baz, Unstructured, Vessl, Riza, Tambo, Sentry, Xpander, Thomson Reuters

## Testimonials

> "The most insightful and exciting conference I ever attended. High signal, deeply technical, and community-focused."  
> — Yanick J. S.

> "By far the best AI conference I've ever attended."  
> — Dedy Kredo

> "Reminded me of the early Twitter dev scene—a spark for a decade of innovation."  
> — Eric Ryan

> "Months of effort distilled into powerful 20-minute talks."  
> — Yubrew

> "You could feel the buzz and optimism everywhere."  
> — Eric Ness

## Stay Updated

- **[Buy Tickets](https://ti.to/software-3/ai-engineer-worlds-fair-2025)**  
  Early bird discounts available until sell-out.
- **[Watch Talks](https://youtube.com/@aidotengineer)**  
  Browse sessions from 2023, 2024, and upcoming 2025.
- **[Subscribe to Newsletter](https://ai.engineer/newsletter)**  
  Get notified about speakers, tickets, livestreams, and community events.
- **[Follow on X](https://twitter.com/aiDotEngineer)**  
  Live updates, real-time speaker quotes, and behind-the-scenes moments.
- **[Subscribe on YouTube](https://www.youtube.com/@aiengineer)**  
  Access full talk recordings and curated playlists from every year.

## Contact & Connect

- [Sponsor Inquiry](mailto:sponsorships@ai.engineer)
- [Volunteer](https://ai.engineer/volunteer)
- [Jobs](https://ai.engineer/jobs)
- [Scholarships](https://ai.engineer/scholarships)
- [Code of Conduct](https://ai.engineer/code-of-conduct)
- [About](https://ai.engineer/about)
- [What is an AI Engineer?](https://ai.engineer/what-is-an-ai-engineer)

**Copyright © Software 3.0 LLC 2025**

**Note:** The 2025 tracks are subject to change. Check the website for the latest updates.  
**[Apply to Speak](https://sessionize.com/ai-engineer-worlds-fair-2025)**
`;

export async function GET() {
  try {
    let fullText = frontCopy; // Start with the static front copy

    fullText += formatTracksToText(LeadershipTracks, "Leadership Tracks (Both Days)");
    fullText += formatTracksToText(Day1Tracks, "Day 1 Tracks");
    fullText += formatTracksToText(Day2Tracks, "Day 2 Tracks");

    fullText += backCopy; // Append the static back copy

    return new NextResponse(fullText, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        // Optional: Explicit Cache-Control (Next.js handles revalidate)
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=60'
      },
    });
  } catch (error) {
    console.error("Error generating llms.txt:", error);
    return new NextResponse('Internal Server Error', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }
} 