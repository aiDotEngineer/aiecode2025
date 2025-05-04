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

import {
  Day1Tracks,
  Day2Tracks,
  LeadershipTracks,
  type Day1TrackCode,
  type Day2TrackCode,
  type LeadershipTrackCode,
  type Track
} from "~/utils/trackData";


export function TracksPreview() {
  // Initialize state with the first track code from each list
  const [selectedLeadershipTrack, setSelectedLeadershipTrack] = useState<LeadershipTrackCode>(LeadershipTracks[0].trackShortCode);
  const [selectedDay1Track, setSelectedDay1Track] = useState<Day1TrackCode>(Day1Tracks[0].trackShortCode);
  const [selectedDay2Track, setSelectedDay2Track] = useState<Day2TrackCode>(Day2Tracks[0].trackShortCode);

  // Helper function to find the selected track image
  const getSelectedImage = (tracks: Track[], selectedCode: string): string | undefined => {
    return tracks.find(track => track.trackShortCode === selectedCode)?.trackImg;
  };

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

      {/* --- Leadership Tracks --- */}
      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div
          className=" max-w-64 max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${getSelectedImage(LeadershipTracks, selectedLeadershipTrack) ?? ''})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Jun 4-5 - Both Conference Days
          </h2>
          <Accordion.Root
            type="single"
            className="mt-0!"
            value={selectedLeadershipTrack}
            onValueChange={(v) => setSelectedLeadershipTrack(v as LeadershipTrackCode)}
          >
            {LeadershipTracks.map((track) => (
              <AccordionItem key={track.trackShortCode} value={track.trackShortCode}>
                <AccordionTrigger value={track.trackShortCode}>{track.trackTitle}</AccordionTrigger>
                <AccordionContent>
                   {/* Using dangerouslySetInnerHTML to render the <b> tags */}
                  <div dangerouslySetInnerHTML={{ __html: track.trackDescription }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion.Root>
        </div>
      </div>

      {/* --- Day 1 Tracks --- */}
      <div className="flex gap-20 max-lg:flex-col mt-20">
        <div
          className="max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${getSelectedImage(Day1Tracks, selectedDay1Track) ?? ''})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Jun 4 - Conference Day 1
          </h2>
          <div className="text-white space-y-6">
            <Accordion.Root
              type="single"
              value={selectedDay1Track}
              onValueChange={(v) => setSelectedDay1Track(v as Day1TrackCode)}
            >
              {Day1Tracks.map((track) => (
                <AccordionItem key={track.trackShortCode} value={track.trackShortCode}>
                  <AccordionTrigger value={track.trackShortCode}>{track.trackTitle}</AccordionTrigger>
                  <AccordionContent>
                    {track.trackDescription}
                    {/* Add Neo4j sponsor logo for GraphRAG track */}
                    {track.trackShortCode === "08" && (
                      <a
                        className="flex items-center gap-3 mt-3"
                        href=" https://www.neo4j.com/"
                        target="_blank"
                        rel="noopener noreferrer" // Added for security
                      >
                        <span>Track Sponsor</span>
                        <Logo logo="neo4j" variant="white" />
                      </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>

      {/* --- Day 2 Tracks --- */}
      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div
          className="max-lg:h-80 lg:flex-1 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${getSelectedImage(Day2Tracks, selectedDay2Track) ?? ''})`,
          }}
        />
        <div className="lg:flex-1 ">
          <h2 className="uppercase font-mono font-bold text-sm tracking-wide">
            Jun 5 - Conference Day 2
          </h2>
          <div className="text-white space-y-6">
            <Accordion.Root
              type="single"
              value={selectedDay2Track}
              onValueChange={(v) => setSelectedDay2Track(v as Day2TrackCode)}
            >
               {Day2Tracks.map((track) => (
                <AccordionItem key={track.trackShortCode} value={track.trackShortCode}>
                  <AccordionTrigger value={track.trackShortCode}>{track.trackTitle}</AccordionTrigger>
                  <AccordionContent>{track.trackDescription}</AccordionContent>
                </AccordionItem>
              ))}
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
