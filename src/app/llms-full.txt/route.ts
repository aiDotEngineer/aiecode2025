import { NextResponse } from "next/server";
import { formatLlmsFullTxt } from "~/utils/formatLlmsFullTxt";

export const revalidate = 3600;

export async function GET() {
  try {
    const _fullText = formatLlmsFullTxt();

    return new NextResponse(_fullText, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error("[ERROR][llms-full.txt/route.ts] Failed to generate text file:", {
      errorMessage: error instanceof Error ? error.message : String(error),
      errorStack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    return new NextResponse("Internal Server Error", {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}
