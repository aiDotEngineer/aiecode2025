import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "../components/worldsfair-2025/Header";
import { Schedule } from "../components/worldsfair-2025/Schedule";

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

interface SessionDetail {
  "Session ID": string;
  Title: string;
  Description: string;
  "Session Format": string;
  Level: string;
  Scope: string;
  "Assigned Track": string;
  Room: string;
  "Scheduled At": string;
  Speakers: string;
  Companies: string;
  "Company Domains": string;
  Titles: string;
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

        // Fetch from Sessionize API and session details
        const [sessionizeResponse, detailsResponse] = await Promise.all([
          fetch("https://sessionize.com/api/v2/w3hd2z8a/view/All"),
          fetch("/sessions-speakers-details.json"),
        ]);

        const data: SessionizeData = await sessionizeResponse.json();
        const sessionDetails: SessionDetail[] = await detailsResponse.json();

        // Create lookup maps
        const speakersMap = new Map(data.speakers?.map((s) => [s.id, s]) || []);
        const roomsMap = new Map(data.rooms?.map((r) => [r.id, r]) || []);
        const detailsMap = new Map(sessionDetails.map((d) => [d["Session ID"], d]));

        // Transform sessions to match the expected format
        const transformedSessions = data.sessions.map((session, index) => {
          // Get details from the details JSON
          const details = detailsMap.get(session.id);

          // Split speakers and companies by comma
          const speakerNames = details?.Speakers?.split(", ") || [];
          const companyNames = details?.Companies?.split(", ") || [];

          // Get speaker details
          const presenters = session.speakers
            .map((speakerId, idx) => {
              const speaker = speakersMap.get(speakerId);
              if (!speaker) return null;

              // Get the corresponding company for this speaker
              const speakerCompany = companyNames[idx] || companyNames[0] || "";

              return {
                attributes: {
                  name:
                    speaker.firstName && speaker.lastName
                      ? `${speaker.firstName} ${speaker.lastName}`
                      : speaker.fullName || speakerNames[idx] || "TBD",
                  tagline: speaker.tagLine || "",
                  company: {
                    data: {
                      attributes: {
                        name: speakerCompany,
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
          let trackName = details?.["Assigned Track"] || "";

          // If no assigned track or empty string, fall back to determining from session type
          if (!trackName) {
            if (session.isPlenumSession) {
              trackName = "Plenary";
            } else if (session.isServiceSession) {
              trackName = "Service";
            } else if (room?.name) {
              // Extract track from room name if it contains track info
              if (room.name.toLowerCase().includes("workshop")) {
                trackName = "Workshop";
              } else if (room.name.toLowerCase().includes("keynote")) {
                trackName = "Keynote";
              } else {
                trackName = "General Session";
              }
            } else {
              trackName = "General Session";
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
      <Header path="/schedule-list" alwaysShow />

      <main className="min-h-screen bg-stone-100 pt-32">
        <div className="mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">World's Fair 2025 Schedule</h1>

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

          <p className="text-center mt-8 mb-16">
            <span className="uppercase font-mono bg-gray-600 p-1 rounded-sm text-yellow-200">
              IMPORTANT
            </span>{" "}
            The full schedule is not yet up, as some sessions are yet to be finalized. Obvious gaps
            in the schedule will be filled.
          </p>
        </div>
      </main>
    </>
  );
};

export default ScheduleListPage;
