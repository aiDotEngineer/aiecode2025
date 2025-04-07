import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { getSchedule } from '@pkg/api/src/cms2/schedule';
import { getSessionBySlug } from '@pkg/api/src/cms2/sessions';
import { addDurationToStartTime, formatTime } from '@pkg/support';

import { useAuth } from '~/components/AuthContext';
import { Container } from '~/components/Container';
import { EventDetailsHeader } from '~/components/EventDetailsHeader';
import { MarkdownView } from '~/components/MarkdownView';
import { SessionHeader } from '~/components/SessionHeader/SessionHeader';
import { PresenterItem } from '~/components/worldsfair-2025/Presenteritem';
import { TicketTable } from '~/components/worldsfair-2025/TicketTable';

export const maxDuration = 300;

export async function getStaticPaths() {
  const { sessionEvents } = await getSchedule([
    4, // Worldsfair 2025
  ]);

  const paths = sessionEvents.map((sessionEvent) => {
    return {
      params: { slug: sessionEvent.slug.toString() },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const sessionDetails = await getSessionBySlug(params.slug);

  if (sessionDetails) {
    return {
      props: { sessionDetails },
      revalidate: 60,
    };
  }

  return {
    notFound: true,
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Session({ sessionDetails }: Props) {
  const { user } = useAuth();
  const isRecordingGated = !user;

  const details = sessionDetails.attributes;
  const hasRecordingData = details.recording?.data != null;

  const startTime = formatTime(details.startTime);
  const endTime = formatTime(
    addDurationToStartTime(details.startTime, details.duration),
  );

  const roomName = details.room.data?.attributes.name;
  const location = roomName ? { label: 'Room', text: roomName } : undefined;

  return (
    <div className="pt-16">
      <SessionHead sessionDetails={sessionDetails} />

      {hasRecordingData ? (
        <SessionHeader
          description={details.description}
          galleryPhotos={details.gallery.data?.attributes.photos.data}
          isRecordingGated={isRecordingGated}
          presenters={details.presenters.data}
          recordingLink={details.recording.data.attributes.link}
          recordingTranscript={
            details.recording.data.attributes.transcript ?? ''
          }
          title={details.title}
        />
      ) : (
        <EventDetailsHeader
          date={details.date}
          description={details.description}
          location={location}
          presenters={details.presenters.data}
          time={`${startTime} - ${endTime}`}
          title={details.title}
          track={details.track.data?.attributes.name}
        />
      )}

      <div className="mx-auto mt-12 max-w-3xl px-6 pb-12">
        <div className="flex flex-col gap-16">
          <MarkdownView markdown={details.about ?? ''} />

          <div className="flex flex-col gap-20">
            {details.presenters.data.map((presenter) => {
              const presenterDetails = presenter.attributes;

              return (
                <PresenterItem
                  key={presenterDetails.name}
                  about={presenterDetails.about ?? ''}
                  name={presenterDetails.name}
                  profilePhotoUrl={
                    presenterDetails.profilePhoto.data.attributes.url
                  }
                  role={presenterDetails.tagline}
                  socialLinks={presenterDetails.socialLinks}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-16 lg:pb-32">
        <Container>
          <TicketTable />
        </Container>
      </div>
    </div>
  );
}

/**
 * All the content that goes in the `head` of the detail page
 */
function SessionHead({ sessionDetails }: Props) {
  const details = sessionDetails.attributes;
  const hasOGCard = details.socialImage?.data != null;

  return (
    <Head>
      <title>AI Engineer World's Fair</title>
      <meta key="ogTitle" property="og:title" content={details.title}></meta>
      <meta
        key="description"
        name="description"
        content={details.description}
      ></meta>
      <meta
        key="ogDescription"
        property="og:description"
        content={details.description}
      ></meta>
      <meta
        key="ogImage"
        property="og:image"
        content={
          hasOGCard ? details.socialImage.data.attributes.url : '/og-image.png'
        }
      ></meta>
      <meta
        key="twitterCard"
        name="twitter:card"
        content="summary_large_image"
      ></meta>
      <meta
        key="twitterDomain"
        property="twitter:domain"
        content="ai.engineer"
      ></meta>
      <meta
        key="twitterUrl"
        name="twitter:url"
        content="https://ai.engineer/"
      ></meta>
      <meta
        key="twitterTitle"
        name="twitter:title"
        content={details.title}
      ></meta>
      <meta
        key="twitterDescription"
        name="twitter:description"
        content={details.description}
      ></meta>
      <meta
        key="twitterImage"
        name="twitter:image"
        content={
          hasOGCard ? details.socialImage.data.attributes.url : '/og-image.png'
        }
      ></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <meta name="theme-color" content="#ffffff"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
