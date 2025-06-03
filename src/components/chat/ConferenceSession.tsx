import { useEffect, useMemo, useState } from "react";
import { SessionViewModel } from "~/types/session";

export default function ConferenceTalk({ sessionId }: { sessionId: string }) {
  const [session, setSession] = useState<SessionViewModel | null>(null);
  const [error, setError] = useState<string | null>(null);
  const formattedDateTime = useMemo(() => {
    if (!session?.scheduledAt) {
      return "";
    }

    return new Date(session.scheduledAt).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      // year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }, [session]);
  const formattedRoomName = useMemo(() => {
    if (!session?.room) {
      return "";
    }

    if (session.room.startsWith("Keynote/General Session")) {
      return "General - Yerba Buena 7&8";
    }

    const [room] = session.room.split(":");
    return room;
  }, [session]);
  const formattedSessionType = useMemo(() => {
    if (!session?.format) {
      return "TALK";
    }

    return session.format.toUpperCase();
  }, [session]);
  const formattedSpeakers = useMemo(() => {
    const { speakers = [] } = session ?? {};

    if (speakers.length === 0) {
      return "";
    }

    return speakers.map((speaker) => speaker.attributes.name).join(", ");
  }, [session]);

  useEffect(() => {
    setSession(null);
    setError(null);

    const abortController = new AbortController();

    fetch(`/api/hashbrown/session?id=${sessionId}`, {
      signal: abortController.signal,
    })
      .then(async (res) => {
        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.error || "Error fetching session");
        }
        return res.json();
      })
      .then((data: SessionViewModel) => setSession(data))
      .catch((err: Error) => {
        if (err.name === "AbortError") {
          return;
        }
        setError(err.message);
      });

    return () => abortController.abort();
  }, [sessionId]);

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  if (!session) {
    return <div></div>;
  }

  return (
    <div className="bg-slate-800 shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-base font-bold text-gray-300 leading-tight mb-1">{session.title}</h2>
      <h3 className="text-xs font-medium text-gray-400">by {formattedSpeakers}</h3>
      {/* <h3 className="text-xs font-medium text-gray-400">ID: {sessionId}</h3> */}
      <div className="border-t border-gray-700 my-2"></div>
      <p className="text-gray-400 line-clamp-2">{session.description}</p>
      <div className="border-t border-gray-700 my-2"></div>
      <div className="flex flex-row gap-2">
        <span className="inline-block px-2 py-1 text-[0.625rem] font-medium bg-blue-500 text-gray-200 rounded-sm leading-tight">
          {formattedSessionType}
        </span>
        <span className="inline-block px-2 py-1 text-[0.625rem] font-medium bg-slate-500 text-gray-200 rounded-sm leading-tight">
          {formattedDateTime}
        </span>
        <span className="inline-block px-2 py-1 text-[0.625rem] font-medium bg-slate-500 text-gray-200 rounded-sm leading-tight">
          {formattedRoomName}
        </span>
      </div>
    </div>
  );
}
