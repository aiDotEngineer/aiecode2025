import { NextResponse } from 'next/server';
import {
  Day1Tracks,
  Day2Tracks,
  LeadershipTracks,
  type Track
} from '~/utils/trackData';
import { frontCopy, backCopy } from '../frontCopy';

// Set revalidation time (e.g., 1 hour)
export const revalidate = 3600;

function formatTracksToText(tracks: Track[], dayLabel: string): string {
  let text = `--- ${dayLabel} ---\n\n`;
  
  // Determine the day information string to append to the track title
  let dayInfo = "";
  if (dayLabel.includes("Both Days")) {
    dayInfo = "(Both Days)";
  } else if (dayLabel.includes("Day 1")) {
    dayInfo = "(Day 1)";
  } else if (dayLabel.includes("Day 2")) {
    dayInfo = "(Day 2)";
  }
  // If dayLabel doesn't match known patterns, dayInfo remains empty, and nothing is appended.

  tracks.forEach(track => {
    // Append dayInfo to the track title if dayInfo is not empty
    text += `Title: ${track.trackTitle}${dayInfo ? ` ${dayInfo}` : ''}\n`;
    text += `Description: ${track.trackDescription}\n\n`;
    // Add subDesc if it exists
    if (track.subDesc) {
      text += `  Note: ${track.subDesc}\n\n`;
    }
  });
  return text;
}

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