// File: /pages/api/sessions/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Session } from "~/types/session";
import sessionDetails from "~/utils/session-details.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Session | { error: string }>
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

  try {
    const session = sessionDetails.find((sess) => sess["Session ID"] === id);

    if (!session) {
      return res.status(404).json({ error: `No session found with Session ID = ${id}` });
    }

    return res.status(200).json(session);
  } catch (err: any) {
    console.error("Error fetching or parsing sessions:", err);
    return res.status(500).json({ error: "Internal server error while fetching sessions." });
  }
}
