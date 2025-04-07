import { HiOutlineVideoCamera } from 'react-icons/hi';
import { RxTextAlignLeft } from 'react-icons/rx';
import { TbBrandYoutubeFilled, TbPhoto } from 'react-icons/tb';

import type { Session } from '@pkg/api/src/cms/getSession';
import type { Photo } from '@pkg/api/src/cms/types';

import { joinPresentersNames } from '~/utils/joinPresentersNames';
import { PageIntro } from '~/components/PageIntro';
import { MarkdownView } from '../MarkdownView';
import { PromptPaidContent } from '../PromptPaidContent';
import { ShiftBy } from '../ShiftBy';
import { SessionImageGrid } from './SessionImageGrid';
import { SessionTabs, type SessionTabItem } from './SessionTabs';

type SessionHeaderProps = {
  description?: string;
  details?: Session['attributes'];
  galleryPhotos?: Photo[];
  /**
   * Controls whether any associated recording is gated content or not.
   * Defaults to false.
   */
  isRecordingGated?: boolean;
  presenters?: Array<{ attributes: { name: string } }>;
  recordingLink?: string;
  recordingTranscript?: string;
  title?: string;
};

/**
 * The best way I could make this reusable is to make each item of the component
 * a separate prop not derived from `details`. This allows us to not update the
 * component for its current use, but also reuse it for worldsfair by mapping
 * each prop to the corresponding field in the data, given the shape of the CMS data
 * is different
 */
export function SessionHeader({
  description,
  details,
  galleryPhotos,
  isRecordingGated = false,
  presenters,
  recordingLink,
  recordingTranscript,
  title,
}: SessionHeaderProps) {
  /**
   * Here we normalize all the props. This allows us to pass in individual ones
   * as "overrides" while maintaining the same structure of the previous use of
   * `details`
   *
   * ??= is the nullish coalescing assignment operator, it's shorthand for:
   * x = x ?? y
   */
  description ??= details?.description;
  galleryPhotos ??= details?.gallery.data?.attributes.photos.data;
  presenters ??= details?.presenters.data ?? [];
  recordingLink ??= details?.recording.data.attributes.link;
  recordingTranscript ??= details?.recording.data?.attributes.transcript ?? '';
  title ??= details?.title ?? '';

  const facilitatorsNames = joinPresentersNames(presenters);

  const tabs: SessionTabItem[] = [];

  if (recordingLink) {
    const videoEmbed = (
      <iframe
        width="100%"
        height="550"
        src={recordingLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );

    const gatedEmbed = (
      <div className="relative isolate">
        {videoEmbed}
        {/* grayed out for now */}
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10">
          <PromptPaidContent>
            <button
              aria-label="Watch video"
              className="appearance-none w-full h-full flex flex-col justify-center"
              type="button"
            >
              <span className="sr-only">Watch video</span>
            </button>
          </PromptPaidContent>
        </div>
      </div>
    );

    tabs.push({
      label: 'Video',
      description: 'Full presentation',
      content: isRecordingGated ? gatedEmbed : videoEmbed,
      icon: <HiOutlineVideoCamera size={24} />,
    });
  }

  if (recordingTranscript) {
    tabs.push({
      label: 'Transcript',
      description: 'Full presentation',
      content: (
        <div className="mx-auto mt-12 max-w-3xl px-6">
          <MarkdownView markdown={recordingTranscript} />
        </div>
      ),
      icon: <RxTextAlignLeft size={24} />,
    });
  }

  if (galleryPhotos) {
    tabs.push({
      label: 'Photos',
      description: 'Speaker on stage',
      content: (
        <div className="px-2">
          <SessionImageGrid images={galleryPhotos} />
        </div>
      ),
      icon: <TbPhoto size={24} />,
    });
  }

  return (
    <article className="flex flex-col gap-8">
      <header>
        <PageIntro eyebrow={facilitatorsNames} title={title} centered>
          {description && <p>{description}</p>}
        </PageIntro>
      </header>

      {recordingLink && (
        <div className="flex justify-center">
          <VideoAvailable />
        </div>
      )}

      <SessionTabs tabs={tabs} />
    </article>
  );
}

function VideoAvailable() {
  return (
    <div className="flex items-center gap-2">
      <ShiftBy y={-2}>
        <TbBrandYoutubeFilled color="#FF0000" size={24} />
      </ShiftBy>

      <span className="font-semibold text-sm">Video Available!</span>
    </div>
  );
}
