import { NextResponse } from "next/server";
import sessionDetails from "~/utils/session-details.json";

// Set revalidation time (e.g., 1 hour)
export const revalidate = 3600;

export async function GET(request: Request) {
  try {
    return new NextResponse(JSON.stringify(sessionDetails), {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // Optional: Explicit Cache-Control (Next.js handles revalidate)
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error("Error generating sessions-speakers-details.json:", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}
