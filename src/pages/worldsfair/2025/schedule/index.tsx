import type { InferGetServerSidePropsType } from 'next';

import { getSchedule } from '@pkg/api/src/cms2/schedule';

import { Container } from '~/components/Container';
import { PageIntro } from '~/components/PageIntro';
import { Schedule } from '~/components/worldsfair-2025/Schedule';

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

export default function Sessions(props: Props) {
  const { sessionEvents } = props;

  return (
    <>
      <div className="mb-8">
        <PageIntro eyebrow="" title="AI Engineer World's Fair 2024 Schedule">
          <p className="max-w-3xl m-auto mb-4 text-gray-on-white text-justify">
            There are up to 6 simultaneous things at any one time in this
            multitrack conference! The first conference day runs the{' '}
            <b>CodeGen, Open Models, RAG, and Fortune 500</b> tracks
            concurrently, whereas the second has{' '}
            <b>Multimodality, GPUs, Evals, and Agents</b> tracks.
            <br /> <br /> You can walk the <b>World's Fair Expo</b> (ft. 30+
            booths across the AI Engineering landscape) on any of the 3 days,
            while <b>Keynote, and AI Leadership sessions</b> span the 2
            conference days. There are also plenty of breaks for the most
            important track of all: the "hallway track"!
          </p>
          <p>
            Third party scrapes of the schedule (we don't guarantee accuracy but
            we support hackers):
          </p>
          <ul className="list-disc ml-6 my-4">
            <li>
              <a
                className="text-blue-800 hover:text-blue-600"
                href="https://docs.google.com/spreadsheets/d/1qgecHYn6D-94TkS-gvjSUb6dCTQ-WKZxZ3Pgzc_tJUk/edit?gid=0#gid=0"
              >
                Google Spreadsheet
              </a>{' '}
              (thanks{' '}
              <a href="https://x.com/msg/status/1805736798590845337">msg</a>)
            </li>
            <li>
              <a
                className="text-blue-800 hover:text-blue-600"
                href="https://aiewf-kktvs627lq-uw.a.run.app/"
              >
                Streamlit app
              </a>{' '}
              (thanks{' '}
              <a href="https://x.com/wergieluk/status/1803444315689017349">
                Julian
              </a>
              )
            </li>
          </ul>
          {/* <p>
            <em className="text-sm">
              Note: sessions presented here are INCOMPLETE! Expo Sessions from
              Gold and above sponsors are TBA. Our team is hard at work
              finalizing session timings every day. Our Speaker list is most
              accurate on <em>who</em> is committed to speak, but not{' '}
              <em>when</em>.
            </em>
          </p> */}
        </PageIntro>
      </div>

      <Schedule sessionEvents={sessionEvents} />

      <Container className="">
        <div className="h-px bg-gray-200"></div>
      </Container>
    </>
  );
}

export const maxDuration = 300;

export async function getStaticProps() {
  const { sessionEvents } = await getSchedule([
    4, // Worldsfair 2025
  ]);
  return {
    props: {
      sessionEvents,
    },
  };
}
