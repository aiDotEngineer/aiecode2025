import type { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import clsx from "clsx";

// import { getPresenters } from '@pkg/api/src/cms2/presenters';
// import { getSchedule } from '@pkg/api/src/cms2/schedule';

import { Container } from "~/components/Container";
import { Quote } from "~/components/Quote";
import { TestimonialCarousel } from "~/components/Testimonials";
import { useAppBannerContext } from "~/components/worldsfair-2025/AppBanner";
import { Counters } from "~/components/worldsfair-2025/Counters";
import { Expo } from "~/components/worldsfair-2025/Expo";
import { FreeRemoteTicket } from "~/components/worldsfair-2025/FreeRemoteTicket";
import { FromTheTeam } from "~/components/worldsfair-2025/FromTheTeam";
import { Hero } from "~/components/worldsfair-2025/Hero";
import { Overview } from "~/components/worldsfair-2025/Overview";
import { Section } from "~/components/worldsfair-2025/Section";
import { SpeakerPreview } from "~/components/worldsfair-2025/SpeakerPreview";
import { Sponsors } from "~/components/worldsfair-2025/Sponsors";
import { TicketTable } from "~/components/worldsfair-2025/TicketTable";
import { TracksPreview } from "~/components/worldsfair-2025/TracksPreview";
import { VenueAndHotel } from "~/components/worldsfair-2025/VenueAndHotel";
import { WhatsNext } from "~/components/worldsfair-2025/WhatsNext";
import { Workshops } from "~/components/worldsfair-2025/Workshops";
import LogoWall from "~/images/worldsfair-2025/logowall.png";

// type Props = InferGetServerSidePropsType<typeof getStaticProps>;
// export default function Page({ sessionEvents, presenters, tracks }: Props) {

export default function Page({ sessionEvents, presenters, tracks }: any) {
  const isBannerVisible = useAppBannerContext();
  // const workshops = sessionEvents.filter(
  //   (session) => session.type === 'WORKSHOP',
  // );

  return (
    <div className={clsx("text-black text-lg", { "pt-8": isBannerVisible })}>
      <Hero />

      <Section roundTop>
        <Counters />
        {/* <div className="space-y-4">
          <Image
            src={LogoWall}
            alt="AIEWF Logo Wall"
            className="rounded-3xl w-full object-contain mb-4"
          />
          <p className="text-center text-gray-600 mb-4 text-sm">
            Logos from <a href="/worldsfair/2024" className="text-blue-600 hover:underline">World's Fair 2024</a>, to be updated soon with 2025 logos
          </p>
        </div> */}
      </Section>

      <Section roundTop className="bg-stone-100">
        <FromTheTeam />
      </Section>

      {/* Not in a <Section /> because it's full bleed */}
      <div className="bg-stone-100 pb-20">
        <TestimonialCarousel />
      </div>

      <Section lightText roundTop className="bg-black">
        <WhatsNext />
      </Section>
      {/* 
      <Section roundTop id="speakers">
        <SpeakerPreview presenters={presenters} tracks={tracks} />
      </Section> */}

      <Section lightText className="bg-black">
        <TracksPreview />
      </Section>

      <Section roundTop id="schedule" className="bg-stone-100">
        <div className="space-y-12">
          <header className="text-center space-y-6">
            <h1 className="text-5xl">
              <b>Schedule</b>
            </h1>
            <p className="max-w-3xl m-auto text-gray-on-white text-justify mb-4">
              {/* There are up to 6 simultaneous things at any one time in this
              multitrack conference!  */}
              {/* The first conference day runs the{' '}
              <b>CodeGen, Open Models, RAG, and Fortune 500</b> tracks
              concurrently, whereas the second has{' '}
              <b>Multimodality, GPUs, Evals, and Agents</b> tracks.
              <br /> <br />  */}
              You can walk the <b>World's Fair Expo</b> (ft. 30+ booths across
              the AI Engineering landscape) on any of the 3 days, while{" "}
              <b>Keynote, and AI Leadership sessions</b> span the 2 conference
              days. There are also plenty of breaks for the most important track
              of all: the "hallway track"!
            </p>

            <p>
              <span className="uppercase font-mono bg-gray-600 p-1 rounded-sm text-yellow-100">
                IMPORTANT
              </span>{" "}
              The schedule is not yet announced, but you can see the
              <a
                href="/worldsfair/2024/schedule"
                className="text-blue-500 font-bold hover:text-blue-400"
              >
                {" 2024 schedule "}
              </a>
              for an idea.
              {/* Our{' '}
              <a
                className="text-blue-500 font-bold hover:text-blue-400"
                href="/schedule"
              >
                full talk schedule is now published here
              </a> */}
            </p>
          </header>
        </div>
      </Section>

      {/* <Section>
        <Workshops items={workshops} />
      </Section> */}

      <Section>
        <Expo />
      </Section>

      <Quote name="andrej-karpathy" />

      <Section className="bg-stone-100" id="overview">
        <Overview />
      </Section>

      <Quote name="ben-firshman" />

      <Section className="bg-stone-100" id="venue">
        <VenueAndHotel />
      </Section>

      <Section id="sponsors">
        <Sponsors />
      </Section>

      {/* <Section className="bg-stone-100" id="sponsors">
        <ExpoPreview />
      </Section> */}

      {/* Not in <Section /> because they combine better with padding this way */}
      <div className="py-8" id="tickets">
        <Container>
          <div className="space-y-14">
            <TicketTable />
            <FreeRemoteTicket />
          </div>
        </Container>
      </div>
    </div>
  );
}

export const maxDuration = 300;

// export async function getStaticProps() {
//   // const [{ presenters, tracks }, { sessionEvents }] = await Promise.all([
//   //   getPresenters(4),
//   //   getSchedule([
//   //     4, // Worldsfair 2025
//   //   ]),
//   // ]);

//   // return {
//   //   props: {
//   //     sessionEvents,
//   //     presenters,
//   //     tracks,
//   //   },
//   // };
// }
