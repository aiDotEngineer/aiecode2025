import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { BsArrowsCollapse, BsArrowsExpand } from 'react-icons/bs';

// import type { SessionEvent } from '@pkg/api/src/cms2/schedule';

import { formatSingleDate } from '~/utils/formatSingleDate';
import { Container } from '~/components/Container';
import { ScheduleSession } from './ScheduleSession';
import { useLocalStorage } from './useLocalStorage';

const MENU_HEIGHT = 70;

type ScheduleProps = {
  // sessionEvents: SessionEvent[];
  sessionEvents: any; 
};

export function Schedule({ sessionEvents }: ScheduleProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const filter = searchParams?.get('filter') ?? '';

  const [showPlenary, setShowPlenary] = useLocalStorage('showPlenary', true);
  const [expandAll, setExpandAll] = useLocalStorage('expandAll', false);
  const dateMenuRef = useRef<HTMLDivElement>(null);

  const trackNameOptions = sessionEvents
    .reduce((names: string[], next: any) => {
      // Split comma-separated tracks and add each individually
      const tracks = next.trackName.split(',').map((t: string) => t.trim());
      tracks.forEach((track: string) => {
        if (!names.includes(track)) {
          names.push(track);
        }
      });
      return names;
    }, [] as string[])
    .sort();

  const sessions = useMemo(() => {
    // Show All
    if (filter === '') {
      // Show all with plenary
      if (showPlenary) {
        return sessionEvents;
      }
      // Show all without plenary
      return sessionEvents.filter(
        (session: any) => !session.isPlenumSession,
      );
    }

    // Filter Results
    return sessionEvents.filter((event: any) => {
      const matchesFilter = event.trackName.toLowerCase().includes(filter.toLowerCase());
      
      if (showPlenary) {
        return matchesFilter;
      }
      // When plenary is hidden, exclude plenary sessions
      return !event.isPlenumSession && matchesFilter;
    });
  }, [filter, showPlenary, sessionEvents]);

  const sessionsByDate = groupSessionsByDate(sessions);
  const dates = getDatesOfSessions(sessionEvents);

  const [activeDay, setActiveDay] = useState(dates[0]);

  useEffect(() => {
    const handleScroll = () => {
      if (dateMenuRef.current) {
        const isSticky =
          window.scrollY > dateMenuRef.current.offsetTop + MENU_HEIGHT - 10;
        if (isSticky) {
          dateMenuRef.current.classList.add('shadow-md');
        } else {
          dateMenuRef.current.classList.remove('shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderSessions = () => {
    if (!sessions || sessions?.length === 0) {
      return <p>No sessions found for this date and track</p>;
    }

    /**
     * Sessions are grouped by day. The links in the sticky menu correspond with
     * each group here.
     */
    return (
      <div className="flex flex-col gap-24">
        {Object.entries(sessionsByDate)
          // .sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
          .sort(([aKey], [bKey]) => {
            return aKey.localeCompare(bKey);
          })
          .map(([day, sessions]) => (
            <ScheduleGroup
              day={day}
              key={day}
              onIntersect={() => {
                setActiveDay(day);
              }}
              sessions={sessions}
              expandAll={expandAll}
            />
          ))}
      </div>
    );
  };

  return (
    <>
      <div
        ref={dateMenuRef}
        className="sticky top-0 z-50 bg-stone-100 transition-all shadow-lg md:shadow-none"
      >
        <Container>
          {/* heights intentionally match the header */}
          <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:gap-8 lg:h-[70px] lg:py-0">
            <div className="flex flex-row gap-8 items-center">
              {dates.map((date) => (
                <Link href={`#${date}`} key={date}>
                  <span
                    className={clsx(
                      'text-normal font-semibold text-black md:text-2xl hover:underline',
                      activeDay === date ? 'underline' : 'opacity-60',
                    )}
                  >
                    {formatSingleDate(date)}
                  </span>
                </Link>
              ))}
            </div>

            <select
              onChange={(e) => {
                const params = new URLSearchParams(searchParams?.toString() || '');
                params.set('filter', e.target.value);
                router.push(`${pathname}?${params.toString()}`);
              }}
              value={filter}
              className="border p-4 border-gray-300 bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            >
              <option value="">All Tracks</option>
              {trackNameOptions.map((type: string) => {
                return (
                  <option key={type} value={type} suppressHydrationWarning={true}>
                    {type}
                  </option>
                );
              })}
            </select>
            <div className="flex items-center">
              {/* <input
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
              </label> */}
              <button
                onClick={() => setExpandAll(!expandAll)}
                className="flex items-center gap-2 ml-4 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
              >
                {expandAll ? (
                  <BsArrowsCollapse size={22} />
                ) : (
                  <BsArrowsExpand size={22} />
                )}
                <span>{expandAll ? "Collapse All" : "Expand All"}</span>
              </button>
              {/* <Link
                href="/schedule"
                className="bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-400 px-4 py-1 rounded-md cursor-pointer transition-colors ml-6 hidden lg:block"
              >
                ← Calendar View
              </Link> */}
            </div>
          </div>
        </Container>
      </div>

      <Container className="mt-16 mb-32">{renderSessions()}</Container>
    </>
  );
}

function getDatesOfSessions(sessions: Array<any>) {
// function getDatesOfSessions(sessions: Array<SessionEvent>) {
  const dates = new Set<string>();

  for (const session of sessions) {
    const [date] = session.since.split('T');

    if (!date) continue;

    dates.add(date);
  }

  return Array.from(dates).sort((a, b) => a.localeCompare(b));
}

// function groupSessionsByDate(sessions: Array<SessionEvent>) {
//   const result: Record<string, SessionEvent[]> = {};
function groupSessionsByDate(sessions: Array<any>) {
  const result: Record<string, any[]> = {};

  for (const session of sessions) {
    const [date] = session.since.split('T');

    if (!date) continue;

    if (!result[date]) {
      // result[date] = [] as SessionEvent[];
      result[date] = [] as any[];
    }

    result[date]?.push(session);
  }

  for (const date in result) {
    result[date]?.sort((sessionA, sessionB) => {
      return sessionA.since.localeCompare(sessionB.since);
    });
  }

  for (const date in result) {
    result[date]?.sort((sessionA, sessionB) => {
      return sessionA.displayOrder - sessionB.displayOrder;
    });
  }

  return result;
}

function ScheduleGroup({
  day,
  onIntersect,
  sessions,
  expandAll,
}: {
  day: string;
  onIntersect?: () => void;
  // sessions: SessionEvent[];
  sessions: any[];
  expandAll?: boolean;
}) {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headingRef.current) {
        const { top } = headingRef.current.getBoundingClientRect();

        if (top <= 100) {
          onIntersect?.();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onIntersect]);

  return (
    <div className="flex flex-col gap-4" key={day}>
      <h3
        className="font-semibold text-2xl scroll-mt-[70px]"
        id={day}
        ref={headingRef}
        {/* Offset anchor position by header height */}
      >
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
