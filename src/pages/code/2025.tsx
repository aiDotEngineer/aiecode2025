import type { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import clsx from 'clsx';

// import { getPresenters } from '@pkg/api/src/cms2/presenters';

import { Container } from '~/components/Container';
import { Quote } from '~/components/Quote';
import { useAppBannerContext } from '~/components/code-2025/AppBanner';
import { Expo } from '~/components/code-2025/Expo';
import { FreeRemoteTicket } from '~/components/code-2025/FreeRemoteTicket';
import { FromTheTeam } from '~/components/code-2025/FromTheTeam';
import { Hero } from '~/components/code-2025/Hero';
import { Overview } from '~/components/code-2025/Overview';
import { Section } from '~/components/code-2025/Section';
import { SpeakerPreview } from '~/components/code-2025/SpeakerPreview';
import { Sponsors } from '~/components/code-2025/Sponsors';
import { TicketTable } from '~/components/code-2025/TicketTable';
import { TracksPreview } from '~/components/code-2025/TracksPreview';
import { VenueAndHotel } from '~/components/code-2025/VenueAndHotel';
import { WhatsNext } from '~/components/code-2025/WhatsNext';
import { Counters } from '~/components/code-2025/Counters';
import { TestimonialCarousel } from '~/components/Testimonials';
import imageKsenia from '~/images/avatars/ksenia.png';
import imageNLW from '~/images/avatars/nlw.png';
import imagePieter from '~/images/avatars/pieter.png';
// import LogoWall from '~/images/worldsfair-2024/logowall.png';

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

export default function Page({ presenters }: Props) {
  const isBannerVisible = useAppBannerContext();

  return (
    <div className={clsx('text-black text-lg', { 'pt-8': isBannerVisible })}>
      <Hero />

      <Section roundTop>
        <FromTheTeam />
      </Section>
      <div className="bg-stone-100 py-16">
        <TestimonialCarousel />
      </div>

      <div className="bg-black text-white py-16">
        <Container>
          <WhatsNext />
        </Container>
      </div>

      <div className="py-16" id="speakers">
        <Container>
          <SpeakerPreview presenters={presenters} />
          <hr />
          <div className="py-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Your Emcees</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  AI Leadership (Feb 20)
                </h3>
                <a
                  href="https://www.linkedin.com/in/pieterhumphrey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  <Image
                    src={imagePieter}
                    alt="Pieter Humphrey"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-2"
                  />
                  <p className="hover:underline">Pieter Humphrey</p>
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Agent Engineering (Feb 21)
                </h3>
                <div className="flex justify-center space-x-4">
                  <div>
                    <a
                      href="http://x.com/nlw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-transform hover:scale-105"
                    >
                      <Image
                        src={imageNLW}
                        alt="NLW"
                        width={100}
                        height={100}
                        className="rounded-full mx-auto mb-2"
                      />
                      <p className="hover:underline">NLW</p>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://x.com/kseniase_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-transform hover:scale-105"
                    >
                      <Image
                        src={imageKsenia}
                        alt="Ksenia Semenova"
                        width={100}
                        height={100}
                        className="rounded-full mx-auto mb-2"
                      />
                      <p className="hover:underline">Ksenia Se</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </Container>
      </div>

      <Quote name="andrej-karpathy" />

      <div className="bg-stone-100 py-16" id="overview">
        <Container>
          <Overview />
        </Container>
      </div>

      <div className="bg-black text-white py-16">
        <Container>
          <div className="space-y-12">
            <header className="text-center space-y-6">
              <h1 className="text-5xl">
                <b>Full Schedule</b>
              </h1>
              <p className="max-w-3xl m-auto text-justify">
                Unlike the{' '}
                <a
                  href="https://ti.to/software-3/ai-engineer-worlds-fair"
                  className="text-blue-400 hover:text-blue-200"
                  target="_blank"
                  color="blue"
                >
                  World's Fair
                </a>
                , this is a single track per day conference. No paradox of choice,
                more focus and brutally curated to only the best. The first
                conference day is the{' '}
                <b>AI Leadership track for CTOs and VPs of AI</b> and the second
                is <b>Agent Engineering track for top tier AI Engineers</b>. You
                can walk the <b>Summit Expo</b> (ft. 10+ booths across the AI
                Engineering landscape) on any of the 2 days. The last day is the{' '}
                <b>AI Engineer Workshops and online livestream day</b>.
                <br /> <br />
                There are also plenty of breaks for the most important track of
                all: <b>the hallway track</b>!
              </p>

              <p>
                <span className="uppercase font-mono bg-gray-600 p-1 rounded text-yellow-100">
                  New
                </span>{' '}
                Our{' '}
                <a
                  className="text-blue-500 font-bold hover:text-blue-400"
                  href="/summit/2025/schedule"
                >
                  full talk schedule is now published here
                </a>
              </p>
            </header>
          </div>
        </Container>
      </div>

      <Quote name="ben-firshman" />

      <div className="py-16" id="sponsors">
        <Container>
          <Sponsors />
        </Container>
      </div>

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

export async function getStaticProps() {
  // const { presenters, tracks } = await getPresenters(3);
  
  // Using dummy data since CMS is not available
  const presenters: any[] = [];

  return {
    props: {
      presenters,
    },
    // Wait until conference is over
    // revalidate: 60 * 60 * 24 * 7, // 1 week
  };
}
