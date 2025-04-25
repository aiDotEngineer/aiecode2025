import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  type AccordionContentProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
} from "@radix-ui/react-accordion";
import clsx from "clsx";
import { LuChevronDown } from "react-icons/lu";
import { Logo } from "../Logos";

import imgExpo from "~/images/worldsfair-2025/tracks/expo.jpg";
import imgAIArchitects from "~/images/worldsfair-2025/tracks/ai-architects.jpg";
import imgEvals from "~/images/worldsfair-2025/tracks/evals.jpg";
import imgRevivalSearchRecommendation from "~/images/worldsfair-2025/tracks/retrieval-search-recommendation-systems.jpg";
import imgSecurity from "~/images/worldsfair-2025/tracks/security.jpg";
import imgGenerativeMedia from "~/images/worldsfair-2025/tracks/generative-media.jpg";
import imgComputerUsingAgents from "~/images/worldsfair-2025/tracks/computer-using-agents.jpg";
import imgSWEAgents from "~/images/worldsfair-2025/tracks/swe-agents.jpg";
import imgLocalLlama from "~/images/worldsfair-2025/tracks/r-local-llama.jpg";
import imgModelContextProtocol from "~/images/worldsfair-2025/tracks/model-context-protocol.jpg";
import imgGraphRAG from "~/images/worldsfair-2025/tracks/graph-rag.jpg";
import imgAIInAction from "~/images/worldsfair-2025/tracks/ai-in-action.jpg";
import imgVibeCoding from "~/images/worldsfair-2025/tracks/vibe-coding.jpg";
import imgVoiceSalesSupport from "~/images/worldsfair-2025/tracks/voice.jpg";

type GroupOne = "ES" | "00";
type GroupTwo = "01" | "02" | "03" | "04" | "05" | "06";
type GroupThree = "07" | "08" | "09" | "10" | "11" | "12";

export function TracksPreview() {
  const [selectedTrackGroupOne, setSelectedTrackGroupOne] = useState<GroupOne>("ES");
  const [selectedTrackGroupTwo, setSelectedTrackGroupTwo] = useState<GroupTwo>("01");
  const [selectedTrackGroupThree, setSelectedTrackGroupThree] = useState<GroupThree>("07");

  const imageChoiceGroupOne: Record<GroupOne, string> = {
    ES: imgExpo.src,
    "00": imgAIArchitects.src,
  } as const;

  const imageChoiceGroupTwo: Record<GroupTwo, string> = {
    "01": imgEvals.src,
    "02": imgRevivalSearchRecommendation.src,
    "03": imgSecurity.src,
    "04": imgGenerativeMedia.src,
    "05": imgComputerUsingAgents.src,
    "06": imgSWEAgents.src,
  } as const;

  const imageChoiceGroupThree: Record<GroupThree, string> = {
    "07": imgLocalLlama.src,
    "08": imgModelContextProtocol.src,
    "09": imgGraphRAG.src,
    "10": imgAIInAction.src,
    "11": imgVibeCoding.src,
    "12": imgVoiceSalesSupport.src,
  } as const;

  return (
    <div className="space-y-12" id="tracks">
      <header className="text-center space-y-3">
        <h1 className="text-5xl">
          <b>Survey The State of AI Engineering</b>
        </h1>
        <p className="max-w-xl m-auto text-gray-on-black text-justify">
          With 12 tracks and over 100 sessions, you can design the program schedule that perfectly
          matches your business needs. There are up to 5 simultaneous sessions running at any one
          time, so it's a good thing we have a{" "}
          <code className="bg-slate-800 mx-1 p-1 rounded-sm">GROUP</code> discount for teams
          attending together!
        </p>
        {/* <p>
          <span className="uppercase font-mono bg-gray-600 p-1 rounded-sm text-yellow-100">
            New
          </span>{' '}
          Our{' '}
          <a
            className="text-blue-300 font-bold hover:text-blue-100"
            href="/schedule"
          >
            full talk schedule is now published here
          </a>
          .
        </p> */}
        <p>
          <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">
            IMPORTANT
          </span>{" "}
          2025 tracks are NOT FINAL - more will be announced once speaker CFP closes!
          <br />
          <a
            href="https://sessionize.com/ai-engineer-worlds-fair-2025"
            className="text-blue-300 font-bold hover:text-blue-100"
          >
            Apply to speak here
          </a>
          !
        </p>
      </header>

      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div
          className=" max-w-64 max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${imageChoiceGroupOne[selectedTrackGroupOne]})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Jun 4-5 - Both Conference Days
          </h2>
          <Accordion.Root
            type="single"
            className="mt-0!"
            value={selectedTrackGroupOne}
            onValueChange={(v: GroupOne) => setSelectedTrackGroupOne(v)}
          >
            <AccordionItem value="ES">
              <AccordionTrigger value="ES">Expo Sessions and Hallway Track!</AccordionTrigger>
              <AccordionContent>
                Access to the World's Fair Expo gets you access to dedicated sessions from 30+
                speakers, (2024 speakers)
                <b>Microsoft, AWS, Google, MongoDB, Neo4j, Perplexity, and more</b>, as well as the
                all important Hallway Track (aka the best way to network with 3000+ AI Engineers)!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="00">
              <AccordionTrigger value="00">AI Architects</AccordionTrigger>
              <AccordionContent>
                Our highest rated, exclusive closed-door track for AI leaders (CTOs, VPs of AI, and
                AI Architects at &gt;1000 person enterprises) How do you effectively lead an AI
                Product or Engineering team in 2025? Defining AI Strategy, technical direction, org
                design, hiring/growing, and build/buy decisions. Executive briefings and roundtables
                on AI platform engineering, model building, evals and FMOps, inference optimization,
                code maintenance and technical debt, AI Engineer hiring, and more, directly from the
                top CEOs and technical leaders working in this space, from (2024 speakers){" "}
                <b>
                  OpenAI, Cohere, NVIDIA, Sourcegraph, Weights & Biases, HumanLoop, Khan Academy,
                  Twilio, Hex, Neo4j, Tola/Microsoft, PredictionGuard
                </b>
                , and more.
              </AccordionContent>
            </AccordionItem>
          </Accordion.Root>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col mt-20">
        <div
          className="max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${imageChoiceGroupTwo[selectedTrackGroupTwo]})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Jun 4 - Conference Day 1
          </h2>
          <div className="text-white space-y-6">
            <Accordion.Root
              type="single"
              value={selectedTrackGroupTwo}
              onValueChange={(v: GroupTwo) => setSelectedTrackGroupTwo(v)}
            >
              <AccordionItem value="01">
                <AccordionTrigger value="01">Evals and Agent Reliability</AccordionTrigger>
                <AccordionContent>
                  Explore frontier LLM evals, new benchmarks, and practical advice for product
                  evals. Special focus on making AI capabilities consistent and reliable, with case
                  studies on real-world implementations. Looking for both LLM-as-Judge and
                  Human-in-the-loop approaches.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="02">
                <AccordionTrigger value="02">
                  Retrieval, Search, and Recommendation Systems
                </AccordionTrigger>
                <AccordionContent>
                  Comprehensive coverage of RAG techniques and LLM-improved recommendation systems.
                  Looking for both new techniques and one-stop surveys of the field. Special focus
                  on implementations at consumer-facing companies and real-world applications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="03">
                <AccordionTrigger value="03">AI Security and Infrastructure</AccordionTrigger>
                <AccordionContent>
                  Covering hallucination, prompt injection, guardrails, data privacy, compliance,
                  and authentication. Infrastructure topics include GPU neoclouds, real-time
                  inference, data centers, and scaling agent fleets. Special focus on practical
                  security implementations and infrastructure best practices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="04">
                <AccordionTrigger value="04">Generative Media and AI Design</AccordionTrigger>
                <AccordionContent>
                  Explore models, products, and platforms for generating images, audio, and video.
                  Special focus on AI-powered design experiences, novel AI UX, and translating image
                  generation into real products. Looking for both production processes and
                  thought-provoking demos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="05">
                <AccordionTrigger value="05">Computer-Using Agents (CUA)</AccordionTrigger>
                <AccordionContent>
                  Explore the world of web search, browser, and other computer-using agents. Topics
                  include long-running agent architectures, screen vision accuracy, and building
                  general purpose agents with memory, planning, and autonomy. Special focus on
                  practical implementations and real-world applications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="06">
                <AccordionTrigger value="06">SWE Agents</AccordionTrigger>
                <AccordionContent>
                  Covering both inner loop and outer loop agents for software engineers. Topics
                  include automating development workflows, AI-assisted debugging, refactoring, code
                  review, and enterprise software development acceleration. Looking for practical
                  implementations and real-world case studies.
                </AccordionContent>
              </AccordionItem>
            </Accordion.Root>
          </div>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div
          className="max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${imageChoiceGroupThree[selectedTrackGroupThree]})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Jun 5 - Conference Day 2
          </h2>
          <div className="text-white space-y-6">
            <Accordion.Root
              type="single"
              value={selectedTrackGroupThree}
              onValueChange={(v: GroupThree) => setSelectedTrackGroupThree(v)}
            >
              <AccordionItem value="07">
                <AccordionTrigger value="07">/r/LocalLlama</AccordionTrigger>
                <AccordionContent>
                  Explore the world of local inference and open source models. Topics include
                  launches of open weights models, adapting models for business needs, local
                  inference tools and platforms, and personal/private agents. Special focus on
                  practical applications and real-world implementations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="08">
                <AccordionTrigger value="08">Model Context Protocol (MCP)</AccordionTrigger>
                <AccordionContent>
                  Deep dive into MCP <b>ft. the Anthropic MCP team</b>! with a focus on hard
                  problems in integration, including new clients, stateful/stateless transports,
                  sampling, auth, observability, and service discovery. Looking for nontrivial demos
                  and external contributions to the protocol.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="09">
                <AccordionTrigger value="09">GraphRAG</AccordionTrigger>
                <AccordionContent>
                  Explore the intersection of knowledge graphs and RAG. Topics include appropriate
                  use of knowledge graphs for enhanced retrieval, architectures for building
                  GraphRAG applications, real-world case studies, and special focus on agent graph
                  memory. All database and knowledge graph experts welcome.
                  <a
                    className="flex items-center gap-3 mt-3"
                    href=" https://www.neo4j.com/"
                    target="_blank"
                  >
                    <span>Track Sponsor</span>
                    <Logo logo="neo4j" variant="color" />
                  </a>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="10">
                <AccordionTrigger value="10">AI in Action</AccordionTrigger>
                <AccordionContent>
                  Practical advice on using AI tooling to improve productivity. Focus on power users
                  sharing their life/work productivity hacks, with special attention to practical
                  implementations and real-world applications. Looking for users who can demonstrate
                  effective integration of AI tools into daily workflows - not vendors shilling
                  their products.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="11">
                <AccordionTrigger value="11">Vibe Coding</AccordionTrigger>
                <AccordionContent>
                  Explore code agents for non-technical people building ephemeral software and low
                  code prototypes. Topics include best practices, troubleshooting, and live demos of
                  vibe coding in action. Looking for both positive and negative perspectives on this
                  emerging approach to software development.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="12">
                <AccordionTrigger value="12">Voice and Sales/Support Agents</AccordionTrigger>
                <AccordionContent>
                  Covering real-time voice AI, speech models, and AI-powered customer support.
                  Topics include voice agent personalization, context retention, function calling,
                  and using AI to enhance ticket resolution and customer interactions. Looking for
                  practical implementations and real-world case studies.
                </AccordionContent>
              </AccordionItem>
            </Accordion.Root>
          </div>
        </div>
      </div>
    </div>
  );
}

type AccordionItemType = {
  children: React.ReactNode;
  className?: string;
} & AccordionItemProps;

const AccordionItem = ({ children, className, ...props }: AccordionItemType) => (
  <Accordion.Item
    className={clsx(
      "overflow-hidden focus-within:relative focus-within:z-10 py-6 border-b border-gray-700",
      className
    )}
    {...props}
  >
    {children}
  </Accordion.Item>
);

type AccordionTriggerType = {
  children: React.ReactNode;
  value: string;
  className?: string;
} & AccordionTriggerProps;

const AccordionTrigger = ({ children, value, className, ...props }: AccordionTriggerType) => (
  <Accordion.Header>
    <Accordion.Trigger
      className={clsx(
        "group flex items-center justify-between outline-hidden w-full hover:text-teal-300",
        className
      )}
      {...props}
    >
      <div className="flex gap-7 text-2xl font-bold">
        <div className="text-teal-300 font-mono">{value}</div>
        <div className="flex-1 text-left">{children}</div>
      </div>
      <LuChevronDown
        className="w-6 h-6 ease-in-out transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
);

type AccordionContentType = {
  children: React.ReactNode;
  className?: string;
} & AccordionContentProps;

const AccordionContent = ({ children, className, ...props }: AccordionContentType) => (
  <Accordion.Content
    className={clsx(
      "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden",
      className
    )}
    {...props}
  >
    <div className="pl-14 text-base text-gray-on-black">{children}</div>
  </Accordion.Content>
);
