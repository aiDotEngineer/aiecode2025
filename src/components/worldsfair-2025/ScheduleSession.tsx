import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { BsArrowsCollapse } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

// import type { SessionEvent } from '@pkg/api/src/cms2/schedule';

import { Border } from '~/components/Border';
import { getLogo } from '~/components/Logos';
import { MarkdownView } from '~/components/MarkdownView';
import { PresentersNames } from '~/components/PresentersNames';
import { ProfilePictureStack } from '~/components/ProfilePictureStack';
import { useBool } from '~/hooks/useBool';
import { Button } from '../Button';
import { ShiftBy } from '../ShiftBy';

const TRACK_NAME_TO_COLOR: Record<string, string> = {
  'AI in the Fortune 500': '#FF4FE3',
  'AI Leadership': '#7FBA00',
  'CodeGen & DevTools': '#7B4E4E',
  'Evals & LLM Ops': '#844AFF',
  'GPUs & Inference': '#0DD68D',
  'Open Models': '#6097BE',
  'RAG & LLM Frameworks': '#43A85E',
  Agents: '#F87B45',
  Keynote: '#F9512D',
  Multimodality: '#4285F4',
  Plenary: '#000',
};

const logoMicrosoft = getLogo('microsoft', 'colorGray');
const logoDecibel = getLogo('decibel', 'color');

function MicrosoftLogo() {
  return (
    <Image
      src={logoMicrosoft.logo}
      alt={logoMicrosoft.name}
      width={144}
      height={64}
      className={`h-16 w-36`}
      unoptimized
    />
  );
}

function DecibelLogo() {
  return (
    <Image
      src={logoDecibel.logo}
      alt={logoDecibel.name}
      width={144}
      height={64}
      className={`h-16 w-36`}
      unoptimized
    />
  );
}

// function getPresentersForPics(presenters: SessionEvent['presenters']) {
function getPresentersForPics(presenters: any) {
  return presenters.map((speaker: any) => ({
    name: speaker?.attributes.name || 'tbc',
    profilePhotoUrl:
      speaker?.attributes.profilePhoto.data?.attributes.url ||
      'https://example.com',
  }));
}

// function getPresentersForNames(presenters: SessionEvent['presenters']) {
function getPresentersForNames(presenters: any) {
  return presenters.map((speaker: any) => ({
    company: speaker?.attributes.company.data?.attributes.name || 'tbc',
    name: speaker?.attributes.name || 'tbc',
    tagline: speaker?.attributes.tagline || 'tbc',
  }));
}

type SessionProps = {
  // session: SessionEvent;
  session: any;
};

export function ScheduleSession({ session }: SessionProps) {
  const [isExpanded, setIsExpanded] = useBool(false);

  return isExpanded ? (
    <ExpandedView onCloseClick={setIsExpanded.off} session={session} />
  ) : (
    <button className="appearance-none block" onClick={setIsExpanded.on}>
      <ConciseView session={session} />
    </button>
  );
}

function ExpandedView({
  onCloseClick,
  session,
}: {
  onCloseClick: () => void;
  session: any;
  // session: SessionEvent;
}) {
  // TODO: REPLACE THIS
  const isMicrosoft = session.title === 'The Microsoft Welcome Reception';
  // TODO: REPLACE THIS
  const isDecibel = session.title === 'Decibel VC Afterparty';

  const { presenters } = session;
  const showFacilitators = presenters.length > 0 || isMicrosoft || isDecibel;

  const plenaryClasses = session.trackName === 'Plenary' ? 'bg-gray-300' : '';

  return (
    <article className="relative z-10">
      <div className="absolute top-3 right-3 z-10">
        <button
          aria-label="Collapse row"
          className="text-gray-600 hover:bg-gray-200 hover:text-black transition-colors p-2 rounded-sm"
          onClick={onCloseClick}
          title="Collapse row"
        >
          <span className="sr-only">Collapse row</span>
          <BsArrowsCollapse size={24} />
        </button>
      </div>

      <Border
        className={`grid grid-cols-3 gap-x-8 gap-y-8 pt-4 p-3 ${plenaryClasses}`}
      >
        <div className="col-span-full lg:col-span-1">
          <div className="flex flex-col gap-6 lg:gap-8">
            <SessionMeta session={session} />

            {showFacilitators && (
              <div className="flex flex-col gap-4 lg:gap-8">
                {isMicrosoft ? (
                  <MicrosoftLogo />
                ) : isDecibel ? (
                  <DecibelLogo />
                ) : (
                  <ProfilePictureStack
                    presenters={getPresentersForPics(presenters)}
                  />
                )}

                <PresentersNames
                  presenters={getPresentersForNames(presenters)}
                />
              </div>
            )}
          </div>
        </div>

        <div className="col-span-full lg:py-10 lg:col-span-2 lg:max-w-2xl">
          <SessionSummary session={session} />
        </div>
      </Border>
    </article>
  );
}

// function ConciseView({ session }: { session: SessionEvent }) {
function ConciseView({ session }: { session: any }) {
  const plenaryClasses =
    session.trackName === 'Plenary'
      ? 'bg-gray-300 border-b border-black/10'
      : '';

  return (
    <div className="group/item text-left hover:bg-blue-50 transition-colors">
      <Border
        className={`grid grid-cols-3 gap-x-8 lg:gap-y-8 p-3 ${plenaryClasses}`}
      >
        <div className="col-span-full lg:col-span-1">
          <div className="flex justify-between items-start gap-4 lg:flex-col lg:items-end lg:gap-2">
            <div className="flex gap-4">
              <time dateTime={session.since}>
                {format(new Date(session.since), 'h:mma')}
              </time>

              <div className="flex flex-col justify-center md:items-end lg:gap-1">
                {getPresentersForNames(session.presenters).map((speaker: any) => {
                  return (
                    <div key={speaker.name}>
                      <p className="flex gap-x-2 text-sm text-black">
                        <span>{speaker.name}</span>
                        <span className="text-neutral-300" aria-hidden="true">
                          /
                        </span>
                        <span className="font-semibold">{speaker.company}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {session.recordingLink && (
              <div className="flex items-center gap-2 opacity-50 group-hover/item:opacity-100 transition-opacity">
                <ShiftBy y={-2}>
                  <span className="text-black group-hover/item:text-red-500 transition-colors">
                    <TbBrandYoutubeFilled color="currentColor" size={24} />
                  </span>
                </ShiftBy>

                <span className="font-semibold text-sm hidden lg:block">
                  Video Available!
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="group/content col-span-full lg:col-span-2 lg:max-w-2xl">
          <div className="flex flex-col">
            <h3 className="text-black">
              <span className="font-semibold lg:text-xl mr-4 leading-tight">
                {session.title}
              </span>
              <div
                className="inline text-xs italic"
                style={{
                  color: TRACK_NAME_TO_COLOR[session.trackName],
                }}
              >
                {session.trackName}
              </div>
            </h3>

            {/**
             * If there is no about, don't bother rendering it.
             *
             * We reveal the about on hover as a way for the user to get more
             * information without expanding the row.
             *
             * The negative margin when hovered is to counteract the margins applied
             * to any child of the the .markdown-content class
             */}
            {session.about && (
              <div className="hidden group-hover/content:block group-hover/content:-mb-3 text-xs">
                <MarkdownView markdown={session.about} />
              </div>
            )}
          </div>
        </div>
      </Border>
    </div>
  );
}

function SessionMeta({ session }: { session: any }) {
// function SessionMeta({ session }: { session: SessionEvent }) {
  return (
    <div className="flex flex-col gap-3">
      <MetaItem>
        <time dateTime={session.since}>
          {format(new Date(session.since), 'h:mma')}
          {' - '}
          {format(new Date(session.till), 'h:mma')}
        </time>
      </MetaItem>
      <MetaItem>{session.trackName}</MetaItem>
      <MetaItem>Room: {session.room ?? session.roomOther}</MetaItem>
    </div>
  );
}

function MetaItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm font-semibold text-black leading-none">
      {children}
    </span>
  );
}

// function SessionSummary({ session }: { session: SessionEvent }) {
function SessionSummary({ session }: { session: any }) {
  const hasActions = session.type !== 'OTHER' || session.recordingLink;
  const detailLink = `/worldsfair/2024/schedule/${session.slug}`;

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <p className="text-2xl lg:text-4xl font-semibold text-black">
        <Link href={`/worldsfair/2024/schedule/${session.slug}`}>
          {session.title}
        </Link>
      </p>

      <MarkdownView markdown={session.about || ''} />

      {hasActions && (
        <div className="flex gap-2">
          {session.recordingLink && (
            <Button
              aria-label={`Watch recording, event: ${session.title}`}
              href={detailLink}
            >
              <div className="flex gap-2 items-center">
                <FaPlay />
                <span>Watch Video</span>
              </div>
            </Button>
          )}

          {session.type !== 'OTHER' && (
            <Button
              aria-label={`See more details, event: ${session.title}`}
              border
              invert
              href={detailLink}
            >
              See More Details
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
