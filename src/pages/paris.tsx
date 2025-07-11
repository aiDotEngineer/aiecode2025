import React from "react";
import { Container } from "~/components/Container";

import { Button } from "~/components/Button";

import { Section } from "~/components/worldsfair-2025/Section";
import { CountUp } from "~/components/CountUp";
import Image from "next/image";
import imgPlaceholder from "~/images/worldsfair-2025/hero-placeholder.jpg";
import { useRef } from "react";
import { Logo } from "~/components/Logos";
import { Overview } from "~/components/aie-paris-2025/Overview";
import { VenueAndHotel } from "~/components/aie-paris-2025/Venue";
import { Sponsors } from "~/components/aie-paris-2025/Sponsors";
import { WhatsNext } from "~/components/aie-paris-2025/WhatsNext";
import { TracksPreview } from "~/components/aie-paris-2025/TracksPreview";

// Hero Component for Paris page
function ParisHero() {
  const videoRef = useRef<HTMLVideoElement>(null!);

  return (
    <>
      <div className="py-24 relative text-white">
        {/* overlay tint for video */}
        <div className="bg-black/50 md:bg-black/70 absolute -z-10 top-0 bottom-0 left-0 w-full" />

        <Image
          alt="Video Placeholder Image"
          src={imgPlaceholder}
          className="absolute -z-20 top-0 right-0 w-full h-full object-cover"
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="max-md:hidden absolute -z-20 top-0 right-0 w-full h-full object-cover"
        >
          <source src="aie-paris-teaser-hero-bg.mp4" type="video/mp4" />
        </video>

        <Container>
          <div className="space-y-12 pt-12 gap-y-6 flex flex-col">
            <div className="m-auto">
              {/* Object required for animated svg */}
              <object
                aria-label="AI Engineer Paris Logo"
                type="image/svg+xml"
                className="aspect-auto w-72 m-auto lg:w-96"
                data="/aie-paris-logo.svg"
              />
            </div>
            <div className="text-center m-auto max-w-4xl space-y-3">
              <div>September 23-24 2025 • Paris</div>
              <h1 className="text-6xl lg:-mx-4 font-bold">
                The <span className="text-yellow-300">First</span> Edition Of AI Engineer in Paris
              </h1>
              <p className="mb-24">
                Join 700+ attendees for the First AI Engineer Edition in Paris - a community-driven
                conference, inspired and supported by the team behind the AI Engineer World’s Fair.
                This two-day event brings together AI engineers, CTOs, and VPs of AI to connect,
                learn, and engineer the future of AI.
              </p>
            </div>
            <div className="md:w-[500px] m-auto space-y-4 pb-40">
              <div className="flex md:h-14 gap-4 md:gap-4">
                <Button
                  className="flex-1 text-xs md:text-base"
                  invert
                  disabled
                  href="https://lu.ma/ai-engineer-paris"
                  target="_blank"
                >
                  Get Tickets
                </Button>
                <span className="self-center">or</span>
                <Button
                  className="flex-1 text-xs md:text-base hover:bg-neutral-600/40"
                  ghost
                  href="https://tally.so/r/w2YAdM"
                  target="_blank"
                >
                  Become a Sponsor
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="text-center flex flex-col items-center space-y-4 z-20 relative  -mt-40">
        <p className="text-white">Organized By:</p>
        <div className="flex flex-col items-center">
          <div className="inline-flex gap-10 lg:gap-20 items-center justify-center py-10 px-20 bg-white rounded-t-3xl w-full sm:w-auto">
            <a href="https://www.koyeb.com" target="_blank">
              <Logo logo="koyeb" variant="black" className="w-24 lg:w-28" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// Stats Component for Paris page
function ParisStats() {
  const stats = [
    {
      value: 700,
      label: "Founders, VPs of AI & AI Engineers",
      startValue: 100,
    },
    {
      value: 10,
      label: "Launches & Talks from top Speakers",
    },
    {
      value: 8,
      label: "Practical Workshops & Expo Sessions",
    },
    {
      value: 24,
      label: "Top DevTools & Employers in Expo",
    },
  ];

  return (
    <Section roundTop>
      <div className="flex flex-wrap text-center">
        {stats.map((stat, index) => (
          <div key={index} className="mb-6 w-1/2 xl:w-1/4">
            <b className="block text-5xl">
              ~<CountUp start={stat.startValue || 0} end={stat.value} />
            </b>
            <b className="block text-sm text-gray-on-white">{stat.label}</b>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Buy Tickets Component for Paris page
function ParisBuyTickets() {
  return (
    <div className="py-8" id="tickets">
      <Container>
        <div className="space-y-14">
          <div className="space-y-8">
            <header className="text-center space-y-3 border-b pb-12">
              <h1 className="text-5xl" id="buytix">
                <b>Buy Tickets</b>
              </h1>
              <p className="max-w-5xl m-auto text-gray-on-white mb-4">
                We are going to sell out of Early Bird discounted tickets!
              </p>
              <Button href="https://lu.ma/ai-engineer-paris" className="block w-52">
                <span className="">Buy Tickets</span>
              </Button>
            </header>
            <div className="space-y-6">{/* Ticket table content can be added here later */}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

// Main Page Component
export default function Page() {
  return (
    <>
      <ParisHero />
      <ParisStats />
      <Section lightText className="bg-black">
        <WhatsNext />
      </Section>
      <Section className="bg-stone-100" id="overview">
        <Overview />
      </Section>
      <Section lightText className="bg-black">
        <TracksPreview />
      </Section>

      <Section className="bg-stone-100" id="venue">
        <VenueAndHotel />
      </Section>

      <Section id="sponsors">
        <Sponsors />
      </Section>
      <ParisBuyTickets />
    </>
  );
}
