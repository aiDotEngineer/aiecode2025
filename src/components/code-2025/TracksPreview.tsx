import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  type AccordionContentProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
} from '@radix-ui/react-accordion';
import clsx from 'clsx';
import { LuChevronDown } from 'react-icons/lu';

import imgAIAgents from '~/images/worldsfair-2024/tracks/ai-agents.jpg';
import imgCodegen from '~/images/worldsfair-2024/tracks/codegen-and-devtools.jpg';
import imgLeadership from '~/images/worldsfair-2024/tracks/leadership.jpg';

type TrackTop = '01';
type TrackBottom = '02';

export function TracksPreview() {
  const [selectedTrackTop, setSelectedTrackTop] = useState<TrackTop>('01');
  const [selectedTrackBottom, setSelectedTrackBottom] =
    useState<TrackBottom>('02');

  const imageChoiceTop: Record<TrackTop, string> = {
    '01': imgLeadership.src,
  } as const;

  const imageChoiceBottom: Record<TrackBottom, string> = {
    '02': imgAIAgents.src,
  } as const;

  return (
    <div className="space-y-12">
      <header className="text-center space-y-3">
        <h1 className="text-5xl">
          <b>The Highest Concentration of Coding Agent leaders in the World</b>
        </h1>
        <p className="max-w-xl m-auto text-gray-on-black text-justify">
          We have gathered the top builders and leaders in AI Engineering. 
          Our Summits present the unique challenge where the speakers may have to 
          fight with your neighbor in the next seat for life time value to your career.
        </p>
        <p>
          <span className="uppercase font-mono bg-gray-600 p-1 rounded text-yellow-100">
            New
          </span>{' '}
          {/* Our{' '}
          <a
            className="text-blue-300 font-bold hover:text-blue-100"
            href="/schedule"
          >
            full talk schedule is now published here
          </a>
          . */}
        </p>
      </header>

      <div className="flex gap-20 max-lg:flex-col mt-20">
        <div
          className="max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${imageChoiceBottom[selectedTrackBottom]})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Wednesday, February 19 - Evening Expo &amp; Reception
          </h2>
          <div className="text-white space-y-6">
            <Accordion.Root
              type="single"
              value={'00'}
              // onValueChange={(v: TrackBottom) => setSelectedTrackBottom(v)}
            >
              <AccordionItem value="00">
                <AccordionTrigger value="00">
                  Welcome Reception
                </AccordionTrigger>
                <AccordionContent>
                  Eat, drink, meet your fellow AI Engineers and Leaders.
                </AccordionContent>
              </AccordionItem>
              {/* <AccordionItem value="06">
                <AccordionTrigger value="06">
                  GPUs and Inference
                </AccordionTrigger>
                <AccordionContent>
                  Almost everybody is GPU poor, but you can make a -lot- out of
                  the GPUs you can get. Optimize your inference and training
                  costs and maximize your throughput! Hear from{' '}
                  <b>SemiAnalysis (GPU Poor), Groq, Crusoe, Fireworks</b> and
                  more. Bonus talks from{' '}
                  <b>Cognition (Devin) and Google (Gemma)</b> here due to travel
                  schedules.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="07">
                <AccordionTrigger value="07">Evals & LLM Ops</AccordionTrigger>
                <AccordionContent>
                  Building demos and MVPs are fun, but to get really good at AI
                  Engineering means getting good at running custom evals and
                  configuring LLM Ops. War stories, cool techniques, and hot new
                  ideas are all fair game for this track. Great talks from{' '}
                  <b>
                    Hamel Husain, Weights & Biases, Braintrust + Zapier,
                    OpenPipe, Arize, Log10 + Echo
                  </b>
                  , and more.
                  <a
                    className="flex items-center gap-3 mt-3"
                    href=" https://www.rungalileo.io/"
                    target="_blank"
                  >
                    <span>Track Sponsor</span>
                    <Logo logo="galileo" variant="colorWhite" />
                  </a>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="08">
                <AccordionTrigger value="08">
                  AI Agent Applications
                </AccordionTrigger>
                <AccordionContent>
                  The holy grail of AI: full self driving autonomous execution.
                  We're excited to feature top startups and frameworks powering
                  the agent revolution here from{' '}
                  <b>
                    AWS, Factory AI, Crew AI, Zeta Labs, Deepgram, Perpetual
                  </b>{' '}
                  and more, as well as keynotes from <b>Adept and LangChain</b>.
                </AccordionContent>
              </AccordionItem> */}
            </Accordion.Root>
          </div>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div
          className="max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${imageChoiceTop[selectedTrackTop]})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Thursday Feb 20 - Leadership Session Day
          </h2>
          <div className="text-white space-y-6">
            <Accordion.Root
              type="single"
              value={selectedTrackTop}
              onValueChange={(v: TrackTop) => setSelectedTrackTop(v)}
            >
              <AccordionItem value="01">
                <AccordionTrigger value="01">AI Leadership</AccordionTrigger>
                <AccordionContent>
                  Our highest reviewed track, for CTOs, VPs of AI and other
                  technical/engineering leaders. How do you effectively lead an
                  AI Product or Engineering team in 2025? Defining AI Strategy,
                  technical direction, org design, hiring/growing, and build/buy
                  decisions. Executive briefings and roundtables on AI platform
                  engineering, model building, evals and LLM Ops, inference
                  optimization, code maintenance and technical debt, AI Engineer
                  hiring, and more, directly from the top CEOs and technical
                  leaders working in this space, from{' '}
                  <b>
                    OpenAI, Anthropic, LinkedIn, FIS, Booking.com, Writer, Privacera, Contextual, Arize, Arista, Datadog and more
                  </b>
                  , and more.
                </AccordionContent>
              </AccordionItem>
              {/* <AccordionItem value="02">
                <AccordionTrigger value="02">Open Models</AccordionTrigger>
                <AccordionContent>
                  Open models are the lifeblood of companies aiming to own their
                  destiny and IP when it comes to deploying AI. Everything from
                  leading open model trainers to fine-tuners will be done at
                  this track. Talks from{' '}
                  <b>
                    Mistral, Cohere, HuggingFace, Unsloth, Outlines, Gradient.ai
                  </b>
                  , and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="03">
                <AccordionTrigger value="03">
                  CodeGen and Dev Tools
                </AccordionTrigger>
                <AccordionContent>
                  AI Engineers using AI to accelerate themselves is the fastest
                  and most obvious virtuous loop there is. Hear from the
                  founders and researchers creating the top code AI models and
                  putting them into the developer tooling we use and love every
                  day. Talks from{' '}
                  <b>
                    GitHub (Copilot), Cursor, Sourcegraph (Cody), Anthropic
                    (Claude), Grit, Palo Alto Networks
                  </b>
                  , and a special{' '}
                  <b>opening keynote from Modular CEO Chris Lattner</b> and{' '}
                  <b>closing keynote with GitHub CEO Thomas Dohmke</b>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="04">
                <AccordionTrigger value="04">
                  AI in the Fortune 500
                </AccordionTrigger>
                <AccordionContent>
                  Beyond just small startups, AI is being deployed at massive
                  scale even in companies and industries you wouldn't normally
                  think of as early adopters. Hear what works at scale and what
                  shared pain everyone has, from{' '}
                  <b>Discord, Tinder, AXA, Salesforce, Mastercard, Novartis</b>,
                  and more.
                </AccordionContent>
              </AccordionItem> */}
            </Accordion.Root>
          </div>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col mt-20">
        <div
          className="max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${imageChoiceBottom[selectedTrackBottom]})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Friday, February 21 - Engineering Session Day
          </h2>
          <div className="text-white space-y-6">
            <Accordion.Root
              type="single"
              value={selectedTrackBottom}
              onValueChange={(v: TrackBottom) => setSelectedTrackBottom(v)}
            >
              <AccordionItem value="02">
                <AccordionTrigger value="02">
                  Agent Engineering
                </AccordionTrigger>
                <AccordionContent>
                  The hottest topic for AI Engineers: how do you turn non-deterministic,
                  constantly advancing LLMs into reliable, useful agents?
                  We're excited to feature top startups and frameworks powering
                  the agent revolution here from{' '}
                  <b>
                    OpenAI, Anthropic, DeepMind, Blackrock, Jane Street, Bloomberg, Codeium, SuperDial, and more.</b>.
                </AccordionContent>
              </AccordionItem>
              {/* <AccordionItem value="06">
                <AccordionTrigger value="06">
                  GPUs and Inference
                </AccordionTrigger>
                <AccordionContent>
                  Almost everybody is GPU poor, but you can make a -lot- out of
                  the GPUs you can get. Optimize your inference and training
                  costs and maximize your throughput! Hear from{' '}
                  <b>SemiAnalysis (GPU Poor), Groq, Crusoe, Fireworks</b> and
                  more. Bonus talks from{' '}
                  <b>Cognition (Devin) and Google (Gemma)</b> here due to travel
                  schedules.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="07">
                <AccordionTrigger value="07">Evals & LLM Ops</AccordionTrigger>
                <AccordionContent>
                  Building demos and MVPs are fun, but to get really good at AI
                  Engineering means getting good at running custom evals and
                  configuring LLM Ops. War stories, cool techniques, and hot new
                  ideas are all fair game for this track. Great talks from{' '}
                  <b>
                    Hamel Husain, Weights & Biases, Braintrust + Zapier,
                    OpenPipe, Arize, Log10 + Echo
                  </b>
                  , and more.
                  <a
                    className="flex items-center gap-3 mt-3"
                    href=" https://www.rungalileo.io/"
                    target="_blank"
                  >
                    <span>Track Sponsor</span>
                    <Logo logo="galileo" variant="colorWhite" />
                  </a>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="08">
                <AccordionTrigger value="08">
                  AI Agent Applications
                </AccordionTrigger>
                <AccordionContent>
                  The holy grail of AI: full self driving autonomous execution.
                  We're excited to feature top startups and frameworks powering
                  the agent revolution here from{' '}
                  <b>
                    AWS, Factory AI, Crew AI, Zeta Labs, Deepgram, Perpetual
                  </b>{' '}
                  and more, as well as keynotes from <b>Adept and LangChain</b>.
                </AccordionContent>
              </AccordionItem> */}
            </Accordion.Root>
          </div>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div
          className="max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${imgCodegen.src})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Saturday, Feb 22 - Engineering Workshops & Online Track
          </h2>
          <Accordion.Root
            type="multiple"
            className="!mt-0"
            value={['02', 'ES']}
          >
            <AccordionItem value="02">
              <AccordionTrigger value="02">
                Engineering Workshops
              </AccordionTrigger>
              <AccordionContent>
                Get Hands on Keyboard with deep dive, long form workshops from
                <b>
                  OpenAI, Anthropic,
                </b>
                , and more.
              </AccordionContent>
            </AccordionItem>
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
}

type AccordionItemType = {
  children: React.ReactNode;
  className?: string;
} & AccordionItemProps;

const AccordionItem = ({
  children,
  className,
  ...props
}: AccordionItemType) => (
  <Accordion.Item
    className={clsx(
      'overflow-hidden focus-within:relative focus-within:z-10 py-6 border-b border-gray-700',
      className,
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

const AccordionTrigger = ({
  children,
  value,
  className,
  ...props
}: AccordionTriggerType) => (
  <Accordion.Header>
    <Accordion.Trigger
      className={clsx(
        'group flex items-center justify-between outline-none w-full hover:text-teal-300',
        className,
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

const AccordionContent = ({
  children,
  className,
  ...props
}: AccordionContentType) => (
  <Accordion.Content
    className={clsx(
      'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden',
      className,
    )}
    {...props}
  >
    <div className="pl-14 text-base text-gray-on-black">{children}</div>
  </Accordion.Content>
);
