import { HashbrownProvider } from "@hashbrownai/react";
import React from "react";
import { Container } from "~/components/Container";
import { PageIntro } from "~/components/PageIntro";
import ChatBot from "~/components/chat/ChatBot";

export default function LLMsPage() {
  return (
    <div className="flex flex-col items-center pb-24 bg-gray-50 min-h-screen">
      <PageIntro title="Our Official AI Engineer Chatbot, LLMs.txt and MCP">
        {/* <p className="text-lg text-gray-500">Updated: 2025-05-20</p> */}
      </PageIntro>

      <Container className="flex-1 w-full pt-16">
        <div className="flex flex-col md:flex-row h-full w-full md:space-x-8 md:space-y-0 space-y-8">
          <div className="flex-1 h-full">
            <HashbrownProvider url="/api/hashbrown/chat">
              <ChatBot />
            </HashbrownProvider>
          </div>
          <div className="w-full md:w-[320px] md:shrink-0">
            <div className="w-full max-w-3xl mx-auto space-y-10 mb-16">
              <p className="text-lg text-gray-500 mb-4">
                If you know what you're doing, you can grab these files and make your own apps for
                the conference. Share it with us on socials!
              </p>

              <div className="flex flex-col gap-2">
                <a
                  href="/llms.txt"
                  className="inline-block px-6 py-3  mr-4 rounded-lg bg-blue-100 text-blue-800 font-semibold text-lg shadow hover:bg-blue-200 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LLMs.txt
                </a>
                <div className="text-sm text-gray-500 leading-tight">
                  high level short info about the conference and each track
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="/llms-full.txt"
                  className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 transition w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LLMs-Full.txt
                </a>
                <div className="text-sm text-gray-500 leading-tight">
                  LLMS.txt + includes every talk and speaker
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/aiDotEngineer/aie-mcp"
                  className="inline-block px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold text-lg shadow hover:bg-gray-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official AIE MCP GitHub Repo
                </a>
                <div className="text-sm text-gray-500 leading-tight">
                  MCP talks were accepted via MCP.
                </div>
              </div>

              <p className="text-lg text-gray-500">
                To import all sessions to your calendar, click this{" "}
                <a
                  href="https://sessionize.com/api/v2/e70d4iqk/view/All"
                  className="underline hover:text-blue-800"
                >
                  iCal
                </a>{" "}
                link. <br />
                For hackers:{" "}
                <a
                  href="https://ai.engineer/sessions-speakers-details.json"
                  className="underline hover:text-blue-800"
                >
                  Get all sessions in JSON
                </a>{" "}
                (or{" "}
                <a
                  href="https://sessionize.com/api/v2/w3hd2z8a/view/All"
                  className="underline hover:text-blue-800"
                >
                  raw JSON
                </a>
                ) for your own vibecoded view, like{" "}
              <a href="https://aie-swipe.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">@noodlesoup's app</a> (Tinder-style talk discovery) or{' '}
              <a href="https://worlds-fair-schedule.agpallav.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">@pallavmac's app</a> (list+bookmarking) or{' '}
              <a href="https://aiewf.shebecoding.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Hebe Hillhorst's app</a> or{' '}
              <a
              href="https://testflight.apple.com/join/rYEaS8XA"
              className="underline hover:text-blue-800"
            >
              @CedricVidal's iOS TestFlight
            </a>{" "}
            (<a href="https://x.com/cedricvidal/status/1930136757334618229" className="underline hover:text-blue-800">vibecoded</a>). 
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
