// File: /pages/api/sessions/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { SessionViewModel } from "~/types/session";
import { formatSpeakersData } from "~/utils/formatSpeakersData";
import sessionDetails from "~/utils/session-details.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SessionViewModel | { error: string }>
) {
  const {
    query: { id },
    method,
  } = req;

  if (method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: `Method ${method} Not Allowed. Use GET.` });
  }

  if (typeof id !== "string") {
    return res.status(400).json({ error: "Missing or invalid session ID in request path." });
  }

  const speakerData = formatSpeakersData();
  const speakers = speakerData.presenters.filter((speaker) =>
    speaker.attributes.sessions.data.some((session) => session.attributes.id === id)
  );

  if (speakers.length === 0) {
    return res.status(404).json({ error: `No speaker found with Session ID = ${id}` });
  }

  const session = speakers[0].attributes.sessions.data.find(
    (session) => session.attributes.id === id
  );

  if (!session) {
    return res.status(404).json({ error: `No session found with Session ID = ${id}` });
  }

  try {
    return res.status(200).json({
      ...session.attributes,
      speakers,
    });
  } catch (err: any) {
    console.error("Error fetching or parsing sessions:", err);
    return res.status(500).json({ error: "Internal server error while fetching sessions." });
  }
}
