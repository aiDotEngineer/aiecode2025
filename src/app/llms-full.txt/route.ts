import { NextResponse } from 'next/server';
import { formatSpeakersData, type FormattedSpeaker } from '~/utils/formatSpeakersData';
import { frontCopy, backCopy } from '../frontCopy';

export const revalidate = 3600;

interface SessionWithSpeakerInfo {
  title: string;
  description?: string;
  format?: string;
  trackNames: string[];
  speakerName: string;
  speakerTagline?: string;
}

const trackDateMapping = {
    'Workshops': 'June 3',
    'Speaker Dinner': 'June 3',
    'MCP': 'June 4',
    'Tiny Teams': 'June 4',
    'Vibe Coding': 'June 4',
    'LLM RecSys': 'June 4',
    'GraphRAG': 'June 4',
    'Agent Reliability': 'June 4',
    'Infrastructure': 'June 4',
    'AI PM': 'June 4',
    'Voice': 'June 4',
    'AI in Fortune 500': 'June 4-5',
    'AI Architects': 'June 4-5',
    'Reasoning + RL': 'June 5',
    'SWE-Agents': 'June 5',
    'Evals': 'June 5',
    'Retrieval + Search': 'June 5',
    'Security': 'June 5',
    'Generative Media': 'June 5',
    'AI Design': 'June 5',
    'Robotics/Autonomy': 'June 5'
  };
function formatDerivedTracksAndSessionsToText(groupedSessions: Map<string, SessionWithSpeakerInfo[]>): string {
  let text = "";
  // Sort track names alphabetically for consistent output
  const sortedTrackNames = Array.from(groupedSessions.keys()).sort();

  sortedTrackNames.forEach((trackName, trackIndex) => {
    if (trackIndex > 0) {
      text += "\n\n"; // Add extra space between track blocks
    }
    text += `======================================================================\n`;
    const trackDate = trackDateMapping[trackName as keyof typeof trackDateMapping] || 'TBA';
    text += `---  Track: ${trackName.toUpperCase()} (${trackDate}) ---\n`;
    text += `======================================================================\n\n`;
    
    const sessionsInTrack = groupedSessions.get(trackName);

    if (sessionsInTrack && sessionsInTrack.length > 0) {
      sessionsInTrack.forEach((session, sessionIndex) => {
        if (sessionIndex > 0) {
          text += `  ------------------------------------\n\n`; // Separator between sessions
        }
        text += `  Session Title: ${session.title}\n`;
        if (session.description) {
          // Ensure description starts on a new line and is indented
          const formattedDescription = session.description
            .split('\n')
            .map(line => `    ${line.trim()}`)
            .join('\n');
          text += `    Description:\n${formattedDescription}\n`;
        } else {
          text += `    Description: Not Available\n`;
        }
        text += `    Speaker: ${session.speakerName} (${session.speakerTagline || 'N/A'})\n`;
        if (session.format) {
          text += `    Format: ${session.format}\n`;
        }
        text += `\n`; // Newline after each session's details
      });
    } else {
      text += `  (No sessions found for this track)\n\n`; 
    }
  });
  return text;
}

export async function GET() {
  try {
    const { presenters: allSpeakers } = formatSpeakersData();

    const allSessionsWithSpeakerInfo: SessionWithSpeakerInfo[] = [];
    allSpeakers.forEach(speaker => {
      speaker.attributes.sessions.data.forEach(sessionAttr => {
        const trackDataName = sessionAttr.attributes.track.data?.attributes.name || "Uncategorized";
        const trackNames = trackDataName.split(',').map(tn => tn.trim()).filter(tn => tn);
        
        if (trackNames.length === 0) trackNames.push("Uncategorized");

        allSessionsWithSpeakerInfo.push({
          title: sessionAttr.attributes.title,
          description: sessionAttr.attributes.description,
          format: sessionAttr.attributes.format,
          trackNames: trackNames,
          speakerName: speaker.attributes.name,
          speakerTagline: speaker.attributes.tagline,
        });
      });
    });

    const sessionsGroupedByTrack = new Map<string, SessionWithSpeakerInfo[]>();
    allSessionsWithSpeakerInfo.forEach(session => {
      session.trackNames.forEach(trackName => {
        if (!sessionsGroupedByTrack.has(trackName)) {
          sessionsGroupedByTrack.set(trackName, []);
        }
        sessionsGroupedByTrack.get(trackName)!.push(session);
      });
    });

    let fullText = frontCopy;
    fullText += formatDerivedTracksAndSessionsToText(sessionsGroupedByTrack);
    fullText += backCopy;

    return new NextResponse(fullText, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=60'
      },
    });
  } catch (error) {
    console.error("[ERROR][llms-full.txt/route.ts] Failed to generate text file:", {
      errorMessage: error instanceof Error ? error.message : String(error),
      errorStack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    return new NextResponse('Internal Server Error', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }
}