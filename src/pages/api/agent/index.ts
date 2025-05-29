import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const response = await fetch("https://api.pipecat.daily.co/v1/public/ai-wf-bot/start", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.PCC_API_KEY}`,
        },
        body: JSON.stringify({
          createDailyRoom: true,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return res.status(200).json({
          room_url: data.dailyRoom,
          token: data.dailyToken,
        });
      }

      const errorData = await response.text();
      return res.status(response.status).json({
        success: false,
        error: `Connection failed: ${response.status} ${errorData}`,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: `Connection error: ${err instanceof Error ? err.message : String(err)}`,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
