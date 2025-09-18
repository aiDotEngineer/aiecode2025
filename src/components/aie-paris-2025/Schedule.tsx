import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { Header } from "../components/worldsfair-2025/Header";
// import { Schedule } from "~/components/worldsfair-2025/Schedule";
import { Schedule } from "./Schedule-copy";
import speakersSessionsData from "../../utils/speakers-sessions-details.json";
import { Button } from "../Button";

// Interfaces for the JSON
interface SessionizeSpeaker {
  id: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  bio?: string;
  tagLine?: string;
  profilePicture?: string;
  isTopSpeaker?: boolean;
  links?: any[];
  sessions?: number[];
  categoryItems?: any[];
  questionAnswers?: any[];
}

interface SessionizeRoom {
  id: number;
  name: string;
}

interface SessionizeSession {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: string[];
  categoryItems: any[];
  questionAnswers: any[];
  roomId: number;
  liveUrl: string | null;
  recordingUrl: string | null;
  status: string;
  isInformed: boolean;
  isConfirmed: boolean;
}

interface SessionizeData {
  sessions: SessionizeSession[];
  speakers: SessionizeSpeaker[];
  categories: any[];
  rooms: SessionizeRoom[];
}

interface SpeakerSessionDetail {
  "Speaker ID": string;
  Name: string;
  Company: string;
  "Company Domain": string;
  "Company URL": string;
  "Company Website": string;
  Title: string;
  TagLine: string;
  Bio: string;
  "X (Twitter)": string;
  LinkedIn: string;
  Blog: string;
  "Profile Picture": string;
  "Session Count": number;
  Sessions: Array<{
    "Session ID": string;
    Title: string;
    Description: string;
    Format: string;
    Level: string;
    Scope: string;
    Tracks: string;
    Room: string;
    "Scheduled At": string;
  }>;
  "Speaker Details Array": any[];
}

const ScheduleListPage: NextPage = () => {
  const [sessionEvents, setSessionEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch and transform data
  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        setIsLoading(true);

        // Fetch from Sessionize API
        const sessionizeResponse = await fetch("https://sessionize.com/api/v2/jemunmkm/view/All");
        const data: SessionizeData = await sessionizeResponse.json();

        // Create lookup maps
        const speakersMap = new Map(data.speakers?.map((s) => [s.id, s]) || []);
        const roomsMap = new Map(data.rooms?.map((r) => [r.id, r]) || []);

        // Create a map of sessions from speakers-sessions-details.json
        const sessionsTrackMap = new Map<string, string>();
        const speakersDetails = speakersSessionsData as SpeakerSessionDetail[];

        speakersDetails.forEach((speaker) => {
          speaker.Sessions.forEach((session) => {
            // Store the full tracks string (may contain multiple comma-separated tracks)
            sessionsTrackMap.set(session["Session ID"], session.Tracks || "");
          });
        });

        // Transform sessions to match the expected format
        const transformedSessions = data.sessions.map((session, index) => {
          // Get track from speakers-sessions-details.json
          const trackFromDetails = sessionsTrackMap.get(session.id) || "";

          // Get speaker details
          const presenters = session.speakers
            .map((speakerId) => {
              const speaker = speakersMap.get(speakerId);
              if (!speaker) return null;

              // Find speaker in speakers-sessions-details.json to get company
              const speakerDetail = speakersDetails.find(
                (s) =>
                  s.Sessions.some((sess) => sess["Session ID"] === session.id) &&
                  s.Name ===
                    (speaker.firstName && speaker.lastName
                      ? `${speaker.firstName} ${speaker.lastName}`
                      : speaker.fullName)
              );

              return {
                attributes: {
                  name:
                    speaker.firstName && speaker.lastName
                      ? `${speaker.firstName} ${speaker.lastName}`
                      : speaker.fullName || "TBD",
                  tagline: speaker.tagLine || "",
                  company: {
                    data: {
                      attributes: {
                        name: speaker?.questionAnswers?.[0]?.answerValue || "",
                      },
                    },
                  },
                  profilePhoto: {
                    data: speaker.profilePicture
                      ? {
                          attributes: {
                            url: speaker.profilePicture,
                          },
                        }
                      : null,
                  },
                },
              };
            })
            .filter(Boolean);

          // Use track from details if available
          const room = roomsMap.get(session.roomId);
          let trackName = trackFromDetails;
          // Override with Keynote if room contains keynote
          if (room?.name?.toLowerCase().includes("keynote")) {
            trackName = "Keynote";
          } else if (!trackName) {
            // If no assigned track or empty string, fall back  to determining from session type or room
            if (room?.name?.toLowerCase().includes("central room")) {
              trackName = "Workshop";
            } else if (room?.name?.toLowerCase().includes("founder's cafe")) {
              trackName = "Discovery Track #1";
            } else if (room?.name?.toLowerCase().includes("junior stage")) {
              trackName = "Discovery Track #2";
            } else if (room?.name?.toLowerCase().includes("master stage")) {
              trackName = "Master Stage";
            } else if (session.isServiceSession) {
              trackName = "Service";
            } else if (room?.name?.toLowerCase().includes("expo hall")) {
              trackName = "Expo Track";
            }
          }

          return {
            id: session.id,
            title: session.title,
            about: session.description,
            since: session.startsAt,
            till: session.endsAt,
            trackName: trackName,
            room: room?.name || "TBD",
            roomOther: room?.name || "TBD",
            presenters: presenters,
            slug: session.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            displayOrder: index,
            recordingLink: session.recordingUrl,
            type: session.isServiceSession ? "SERVICE" : "SESSION",
            isPlenumSession: session.isPlenumSession,
          };
        });

        // Sort by date and time
        transformedSessions.sort((a, b) => {
          return new Date(a.since).getTime() - new Date(b.since).getTime();
        });

        setSessionEvents(transformedSessions);
      } catch (err) {
        console.error("Error fetching session data:", err);
        setError("Failed to load schedule. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessionData();
  }, []);

  return (
    <>
      {/* <Header path="/schedule-list" alwaysShow />

      <main className="min-h-screen bg-stone-100 pt-32"> */}
      <div className="mx-auto">
        {/* Schedule Content */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-xl">Loading schedule...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-xl text-red-600">{error}</p>
          </div>
        ) : (
          <Schedule sessionEvents={sessionEvents} />
        )}
      </div>
      <div className="flex flex-col items-center justify-center=">
        <h2 className="text-xl font-semibold py-5">
          Looking for events going on around AI Engineer Paris?
        </h2>
        <Button
          className="w-70"
          aria-label={"View fringe events around AI Engineer Paris"}
          border
          href="https://luma.com/ai-engineer-paris-25-events"
          target="_blank"
        >
          View AIE Paris Events Calendar
        </Button>
      </div>
      {/* </main> */}
    </>
  );
};

export default ScheduleListPage;
