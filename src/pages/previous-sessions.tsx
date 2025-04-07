import type { InferGetServerSidePropsType } from 'next';
import dayjs from 'dayjs';

import { getSessions } from '@pkg/api/src/cms2/sessions';

// import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
// import { Logo } from '~/components/Logos';
// import { NewsletterBullets, NewsletterFormOne } from '~/components/Newsletter';
// import { PromptPaidContent } from '~/components/PromptPaidContent';
import { SessionCard } from '~/components/SessionCard';

const containerWidth = 1320;

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Page(props: Props) {
  const { sessions } = props;

  // leaving for debugging
  // const found = sessions.find((session) =>
  //   session.attributes.title.includes('From Text to Vision'),
  // );
  // console.log(found);

  return (
    <div>
      <Container className="py-12 bg-stone-50" maxWidth={containerWidth}>
        <h1 className="font-bold text-2xl mb-8">Popular Sessions</h1>
        <div className="grid gap-8 auto-cols-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sessions.map((session) => {
            return (
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
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const sessions = await getSessions([
    1, // Worldsfair 2024
    3, // Summit 2025
  ]);

  return {
    props: {
      sessions,
    },
  };
}
