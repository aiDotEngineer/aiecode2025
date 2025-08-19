import type { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { LuArrowUpRight } from 'react-icons/lu';
import { useRef } from 'react';

// import { getSessionsByIds } from '@pkg/api/src/cms2/sessions';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Logo } from '~/components/Logos';
import {
  NewsletterBullets,
  NewsletterFormFour,
  NewsletterFormOne,
} from '~/components/Newsletter';
import { PromptPaidContent } from '~/components/PromptPaidContent';
import { SessionCard } from '~/components/SessionCard';
import srcAieNetworkCards from '~/images/home-page/aie-network-cards.png';
import imgPlaceholder from '~/images/worldsfair-2025/hero-placeholder.jpg';
import srcScottWu from '~/images/home-page/scott-wu.png';
// import background from '~/images/worldsfair-2024/hero-newsletter.jpg';
import background from '~/images/worldsfair-2025/hero-placeholder.jpg';
import { Hero } from '~/components/worldsfair-2025/Hero';

import dynamic from 'next/dynamic';

// Dynamically import LiteYouTubeEmbed without SSR to avoid require() errors
const LiteYouTubeEmbed = dynamic(
  () => import('react-lite-youtube-embed').then(mod => mod.default),
  { ssr: false }
);

const HERO_SESSION_ID = 209; // From Text to Vision

const sessionIds = [
  HERO_SESSION_ID,
  48, // The Making of Devin
  3, // What We Learned From A Year of Building With LLMs
  39, // Going Beyond RAG
];

const containerWidth = 1320;
// type Props = InferGetStaticPropsType<typeof getStaticProps>;

// export default function Page(props: Props) {
export default function Page() {
//   const { showcaseSessions } = props;

//   // Find the one we want to use as the hero session
//   const heroSession = showcaseSessions.find(
//     (session) => session.id === HERO_SESSION_ID,
//   );

//   // Find the ones that ARE NOT the hero session
//   const otherSessions = showcaseSessions.filter(
//     (session) => session.id !== HERO_SESSION_ID,
//   );
  const videoRef = useRef<HTMLVideoElement>(null!);

  return (
    <div>
      <div className="relative">
        <div className="absolute -z-20 inset-0 bg-stone-900 bg-[url('/home-hero-bg.jpg')] bg-center bg-cover" />
        <div className="absolute -z-10 inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-black/30" />

        <Container
          className="pt-6 pb-16 lg:pb-24 text-white h-full"
          maxWidth={containerWidth}
        >
          <div className="flex flex-col gap-16 lg:h-full">
            <header>
              <div className="flex justify-between items-center">
                <div>
                  <Logo logo="aie" variant="white" />
                </div>
                <div>
                  {/* <PromptPaidContent>
                    <Button ghost border>
                      Sign in
                    </Button>
                  </PromptPaidContent> */}
                </div>
              </div>
            </header>
            <div className="flex-1 flex gap-16 max-lg:flex-col">
              <div className="lg:flex-1 lg:self-end space-y-6">
                <h1 className="font-bold text-[2em] lg:text-[3.6em] leading-[1em] [text-shadow:#FFF_1px_0_5px]">
                  The Highest-Signal Technical AI Conferences
                </h1>
                <p>
                 Exclusively for AI Engineers, Founders of breakout AI startups, and AI Architects at the world's largest technology leaders.
                </p>
                <div className="p-6 space-y-5 bg-white/10 rounded-2xl">
                  <div>
                    <div className="text-lg lg:text-2xl font-bold mb-1">
                      Meet the world's best AI engineers
                    </div>
                    <p>Get free talk & workshop videos, updates, and early bird discounts</p>
                  </div>
                  <NewsletterFormFour />
                  {/* <NewsletterFormOne /> */}
                </div>
                <a href="https://youtube.com/@aidotengineer">
                    <Image
                        src="/wf25logowall-landscape.png"
                        alt=""
                        width={600}
                        height={300}
                        className="mx-auto mb-32"
                    />
                </a>
              </div>
              <div className="lg:flex-1 space-y-6">
                <div className="uppercase font-bold text-gray-300/60 tracking-[.2em]">
                  Upcoming Events
                </div>
                <EventCallout
                  month="Sept"
                  day="Q3"
                  subTitle="September 23-24, Paris, France"
                  title="AIE Paris 2025"
                  desc="The first third-party AIE community conference, organized by Koyeb, in Paris!"
                  href="/paris"
                />
                <EventCallout
                  month="Nov"
                  day="Q4"
                  subTitle="November 20-22, New York, NY"
                  title="AI Engineer Fall Summit"
                  desc="The invite-only summit so nice, we're doing it twice! A followup to the most popular track from the 2025 World's Fair. Applications open soon."
                  href="https://apply.ai.engineer"
                  />
                <EventCallout
                  month="2026"
                  day="TBA"
                  subTitle="June 30-July 2 2026, San Francisco, CA"
                  title="AI Engineer World's Fair 2026"
                  desc="The largest technical AI conference in the world, with 20 tracks, 250 speakers, 100 expo partners, 5,000 AI Engineers, founders, and VPs of AI. Save the date - we're heading to Moscone Center!"
                //   href="https://apply.ai.engineer"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-12 bg-stone-50 relative" maxWidth={containerWidth}>
        <h1 className="font-bold text-2xl">Watch our top talks, workshops, and livestreams </h1>
        <p className="font-normal text-sm italic  mb-8">but the real alpha happens in person at the "hallway track"!</p>
        <div className="grid gap-x-8 gap-y-4 auto-cols-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* <div className="relative col-span-full h-[520px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/50 md:bg-black/70 z-10" />
            <Image
            alt="Video Placeholder Image"
            src={imgPlaceholder}
            fill
            className="object-cover z-0"
            priority
            />
            <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="max-md:hidden absolute inset-0 w-full h-full object-cover z-0"
            onLoadedData={() => console.info('[TopTalks] video loaded')}
            onError={(e) => console.error('[TopTalks] video error', e.currentTarget.error)}
            >
            <source src="/worldsfair-hero-bg.mp4" type="video/mp4" />
            </video>
        </div> */}
        {/* <div className="flex flex-col lg:flex-row justify-center gap-4 mt-4 w-full"> */}
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="Dj0b_cEBHBI"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="tbDDYKRFjhk"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="8rABwKRsec4"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="kQmXtrmQ5Zg"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="D7BzTxVVMuw"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="Lue8K2jqfKk"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="d5EltXhbcfA"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="8kMaTybvDUw"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="640KMYtxCeI"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="avWhreBUYF0"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="WJjInLeaJjo"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="eOxOzcw70f0"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="8EQo4J2BWKw"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="knDDGYHnnSI"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="MC55hdWLq4o"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
          <div className="w-full mt-4 gap-4">
              <LiteYouTubeEmbed
                  id="R30col3UPUg"
                  title="World's Fair 2025 Livestream"
                  wrapperClassName="yt-lite"
              />
          </div>
        {/* </div> */}
          {/* {heroSession && (
            <SessionCard
              fullWidth
              date={dayjs(heroSession?.attributes.date).format('MMMM D, YYYY')}
              event={
                heroSession.attributes.track?.data?.attributes.conference?.data
                  ?.attributes?.title ?? ''
              }
              title={heroSession.attributes.title}
              presenters={heroSession.attributes.presenters}
              src={
                heroSession.attributes.gallery?.data?.attributes.photos
                  .data?.[0]?.attributes.url ?? ''
              }
              detailsURL="/worldsfair/2024/schedule/openai-multimodality"
              talkURL="/worldsfair/2024/schedule/openai-multimodality"
            />
          )}
          {otherSessions.map((session) => (
            <SessionCard
              key={session.id}
              date={dayjs(session.attributes.date).format('MMMM D, YYYY')}
              event={
                session.attributes.track?.data?.attributes.conference?.data
                  ?.attributes?.title ?? ''
              }
              title={session.attributes.title}
              presenters={session.attributes.presenters}
              src={
                session.attributes.gallery?.data?.attributes.photos.data?.[0]
                  ?.attributes.url ?? ''
              }
              detailsURL={`/worldsfair/2024/schedule/${session.attributes.slug}`}
              talkURL={`/worldsfair/2024/schedule/${session.attributes.slug}`}
            />
          ))} */}

          {/* <SessionCard
            date="June 27th 2024"
            event="World's Fair 2024"
            title="Making Devin"
            presenters="Scott Wu, Cognition"
            src={srcScottWu}
            detailsURL="/worldsfair/2024/schedule/scott-wu-and-the-making-of-devin-by-cognition-ai"
            talkURL="/worldsfair/2024/schedule/scott-wu-and-the-making-of-devin-by-cognition-ai"
          />
          <SessionCard
            date="June 27th 2024"
            event="World's Fair 2024"
            title="What We Learned From A Year of Building With LLMs"
            presenters="Github"
            src={srcGitHubTeam}
            detailsURL="/worldsfair/2024/schedule/what-we-learned-from-a-year-of-building-with-llms"
            talkURL="/worldsfair/2024/schedule/what-we-learned-from-a-year-of-building-with-llms"
          />
          <SessionCard
            date="June 27th 2024"
            event="World's Fair 2024"x zo

            title="Going Beyond RAG: Extended Mind Transformers"
            presenters="Phoebe Klett, Machine Learning Engineer"
            src={srcJerryLiu}
            detailsURL="/worldsfair/2024/schedule/going-beyond-rag-extended-mind-transformers"
            talkURL="/worldsfair/2024/schedule/going-beyond-rag-extended-mind-transformers"
          /> */}
        </div>
        <div className="flex justify-center mt-8">
          <Button href="https://youtube.com/@aidotengineer">Find more talks</Button>
        </div>
      </Container>
      {/* <Container className="py-24 bg-white" maxWidth={containerWidth}>
        <div className="flex text-center lg:text-left max-lg:flex-col gap-10">
          <div className="lg:flex-1 py-5">
            <div className="flex gap-4 mb-6">
              <div className="flex max-lg:m-auto -space-x-3">
                <Image
                  alt="speaker-thumbnail"
                  src={srcScottWu}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover"
                />
                <Image
                  alt="speaker-thumbnail"
                  src={srcScottWu}
                  className="w-16 h-16 rounded-full border-4 border-white  object-cover"
                />
                <Image
                  alt="speaker-thumbnail"
                  src={srcScottWu}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover"
                />
                <span className="h-16 w-36 flex rounded-full bg-gray-100 border-4 border-white">
                  <span className="m-auto font-bold text-2xl">20,000+</span>
                </span>
              </div>
            </div>

            <h2 className="text-6xl font-bold mb-6">AI Engineer Network</h2>

            <p className="text-gray-600 mb-8 text-xl leading-relaxed">
              Join the world's largest network of technical founders and AI
              Engineers. View the new connections you made at events, and grow
              your network through continued generative matching.
            </p>

            <p className="text-gray-600 mb-10 text-xl">
              Attended an event? You're already in the network.
            </p>

            <Button href="/network">Join the Network App</Button>
          </div>

          <div className="lg:flex-1">
            <Image
              alt="network-image"
              src={srcAieNetworkCards}
              className="scale-125"
            />
          </div>
        </div>
      </Container> */}

      <div
        className="pt-32 pb-32 px-6 md:px-12 bg-cover"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div
          className="mx-auto bg-white rounded-2xl overflow-clip flex gap-6 max-lg:flex-col"
          style={{ maxWidth: `1100px` }}
        >
          <div className="flex-1 p-10 space-y-5">
            <h1 className="text-center text-4xl font-bold">
              Join The AI.Engineer Newsletter
            </h1>
            <p className="text-center">
              Stay up to date on the AI Engineering industry!
            </p>
            <NewsletterFormOne />
          </div>
          <div className="flex-1 bg-stone-50 p-10">
            <NewsletterBullets />
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const showcaseSessions = await getSessionsByIds(sessionIds);

//   return {
//     props: {
//       showcaseSessions,
//     },
//   };
// }

/****************************************
  Helpers
*****************************************/

type EventCalloutProps = {
  month: string;
  day: string;
  subTitle: string;
  title: string;
  desc: string;
  href?: string;
};

function EventCallout({
  month,
  day,
  subTitle,
  title,
  desc,
  href,
}: EventCalloutProps) {
  return (
    <Link
      href={href || '/'}
      className="hover:bg-black/40 flex p-8 pl-0 rounded"
    >
      <div className="w-36 text-center">
        <div className="uppercase font-bold tracking-widest">{month}</div>
        <div className="font-bebas-neue text-[6em] leading-[1em]">{day}</div>
      </div>
      <div className="flex-1 self-end lg:flex lg:justify-between">
        <div className="space-y-1">
          <div className="uppercase text-yellow-200/90">{subTitle}</div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-white/70">{desc}</p>
        </div>
        {href && 
        <div className="self-start mt-4 text-[3em]">
          <LuArrowUpRight />
        </div>
        }
      </div>
    </Link>
  );
}
