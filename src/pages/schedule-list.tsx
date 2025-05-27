import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "../components/worldsfair-2025/Header";
import { ScheduleSession } from "../components/worldsfair-2025/ScheduleSession";
import { Container } from "../components/Container";
import { formatSingleDate } from "../utils/formatSingleDate";
import { useLocalStorage } from "../components/worldsfair-2025/useLocalStorage";
import { BsArrowsCollapse, BsArrowsExpand } from "react-icons/bs";
import Link from "next/link";
import clsx from "clsx";

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
  const router = useRouter();
  const { filter = "" } = router.query;

  const [sessionEvents, setSessionEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPlenary, setShowPlenary] = useLocalStorage("showPlenary", true);
  const [expandAll, setExpandAll] = useLocalStorage("expandAll", false);
  const [activeDay, setActiveDay] = useState<string>("");

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

        // Set initial active day
        if (transformedSessions.length > 0) {
          const firstDate = transformedSessions[0].since.split("T")[0];
          setActiveDay(firstDate);
        }
      } catch (err) {
        console.error("Error fetching session data:", err);
        setError("Failed to load schedule. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessionData();
  }, []);

  // Get unique track names for filter
  const trackNameOptions = sessionEvents
    .reduce((names: string[], next: any) => {
      return names.includes(next.trackName) ? names : names.concat(next.trackName);
    }, [] as string[])
    .filter((name: string) => !name.toLowerCase().includes("plenary"));

  // Filter sessions based on selected track and plenary preference
  const filteredSessions = React.useMemo(() => {
    // Show All
    if (filter === "") {
      // Show all with plenary
      if (showPlenary) {
        return sessionEvents;
      }
      // Show all without plenary
      return sessionEvents.filter(
        (session: any) => !session.trackName.toLowerCase().includes("plenary")
      );
    }

    // Filter Results
    return sessionEvents.filter((event: any) => {
      if (showPlenary) {
        return event.trackName.toLowerCase().includes((filter as string).toLowerCase());
      }
      return (
        !event.trackName.toLowerCase().includes("plenary") &&
        event.trackName.toLowerCase().includes((filter as string).toLowerCase())
      );
    });
  }, [filter, showPlenary, sessionEvents]);

  // Group sessions by date
  const sessionsByDate = React.useMemo(() => {
    const result: Record<string, any[]> = {};

    for (const session of filteredSessions) {
      const [date] = session.since.split("T");

      if (!date) continue;

      if (!result[date]) {
        result[date] = [];
      }

      result[date]?.push(session);
    }

    // Sort sessions within each date
    for (const date in result) {
      result[date]?.sort((sessionA, sessionB) => {
        return sessionA.since.localeCompare(sessionB.since);
      });
    }

    return result;
  }, [filteredSessions]);

  const dates = Object.keys(sessionsByDate).sort();

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
            <>
              {/* Sticky date navigation and filters */}
              <div className="sticky top-0 z-50 bg-stone-100 transition-all shadow-lg md:shadow-none">
                <Container>
                  <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:gap-8 lg:h-[70px] lg:py-0">
                    <div className="flex flex-row gap-8 items-center">
                      {dates.map((date) => (
                        <Link href={`#${date}`} key={date}>
                          <span
                            className={clsx(
                              "text-normal font-semibold text-black md:text-2xl hover:underline",
                              activeDay === date ? "underline" : "opacity-60"
                            )}
                          >
                            {formatSingleDate(date)}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <select
                      onChange={(e) => {
                        const newFilter = e.target.value;
                        router.push({
                          pathname: "/schedule-list",
                          query: newFilter ? { filter: newFilter } : {},
                        });
                      }}
                      value={filter as string}
                      className="border p-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                    >
                      <option value="">All Tracks</option>
                      {trackNameOptions.map((type: string) => {
                        return (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        );
                      })}
                    </select>
                    <div className="flex items-center">
                      <input
                        id="plenary-sessions-checkbox"
                        type="checkbox"
                        checked={showPlenary}
                        onChange={(e) => {
                          setShowPlenary(e.target.checked);
                        }}
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded-sm border-gray-300 focus:ring-blue-500 focus:ring-2 flex justify-center"
                      />
                      <label
                        htmlFor="plenary-sessions-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900"
                      >
                        Add Plenary
                      </label>
                      <button
                        onClick={() => setExpandAll(!expandAll)}
                        className="flex items-center gap-2 ml-4 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
                        title={expandAll ? "Collapse all sessions" : "Expand all sessions"}
                      >
                        {expandAll ? <BsArrowsCollapse size={24} /> : <BsArrowsExpand size={24} />}
                        <span>{expandAll ? "Collapse All" : "Expand All"}</span>
                      </button>
                      <Link
                        href="/schedule"
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-400 px-4 py-1 rounded-md cursor-pointer transition-colors ml-6 hidden lg:block"
                      >
                        ← Calendar View
                      </Link>
                    </div>
                  </div>
                </Container>
              </div>

              {/* Sessions list */}
              <Container className="mt-16 mb-32">
                {!filteredSessions || filteredSessions.length === 0 ? (
                  <p>No sessions found for this date and track</p>
                ) : (
                  <div className="flex flex-col gap-24">
                    {Object.entries(sessionsByDate)
                      .sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
                      .map(([day, sessions]) => (
                        <ScheduleGroup
                          day={day}
                          key={day}
                          sessions={sessions}
                          onIntersect={() => setActiveDay(day)}
                          expandAll={expandAll}
                        />
                      ))}
                  </div>
                )}
              </Container>
            </>
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

// Schedule Group Component
function ScheduleGroup({
  day,
  onIntersect,
  sessions,
  expandAll,
}: {
  day: string;
  onIntersect?: () => void;
  sessions: any[];
  expandAll?: boolean;
}) {
  const headingRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (headingRef.current) {
        const { top } = headingRef.current.getBoundingClientRect();

        if (top <= 100) {
          onIntersect?.();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onIntersect]);

  return (
    <div className="flex flex-col gap-4" key={day}>
      <h3 className="font-semibold text-2xl scroll-mt-36 sm:scroll-mt-24" id={day} ref={headingRef}>
        {formatSingleDate(day)}
      </h3>

      <div className="flex flex-col">
        {sessions.map((session) => (
          <ScheduleSession key={session.id} session={session} expandAll={expandAll} />
        ))}
      </div>
    </div>
  );
}

export default ScheduleListPage;
