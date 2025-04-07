import { Fragment, useState } from 'react';
import clsx from 'clsx';

import { type Presenter } from '@pkg/api/src/cms2/types';

import { Button } from '../Button';
// import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { useAppBannerContext } from './AppBanner';
import { useLocalStorage } from './useLocalStorage';

// import { useWorldsFair2025 } from '../ChoosePrimaryLayout';

type Props = {
  presenters: Array<Presenter>;
  tracks: Array<string>;
};

export function SpeakerPreview({ presenters, tracks }: Props) {
  const isBannerVisible = useAppBannerContext();
  // const { SUBMIT_TALK_URL } = useWorldsFair2025();
  const [filterTrack, setFilterTrack] = useState('');
  const [textView, _setTextView] = useLocalStorage('textView', true);
  const setTextView = (val: boolean) => {
    // Check if the current hash is already #SpeakersList
    if (window.location.hash === '#SpeakersList') {
      // Temporarily set the hash to something else
      window.location.hash = '#';
      // Then set it back to #SpeakersList to ensure the page scrolls to the anchor
      window.location.hash = 'SpeakersList';
    } else {
      // If the hash is not #SpeakersList, just set it normally
      window.location.hash = 'SpeakersList';
    }
    _setTextView(val);
  };

  const presentersProcessed = presenters
    .sort((a, b) => a.attributes.displayOrder - b.attributes.displayOrder)
    .filter((presenter) => {
      const presenterTracks = presenter.attributes.sessions.data.map(
        (session) => {
          return session.attributes.track.data?.attributes.name;
        },
      );
      return filterTrack ? presenterTracks.includes(filterTrack) : true;
    });

  return (
    <div className="space-y-8">
      <h1
        className="text-5xl font-bold flex items-center justify-center"
        id="SpeakersList"
      >
        World Class
      </h1>

      <header
        className={clsx(
          'text-center sticky z-20',
          isBannerVisible ? 'top-36' : 'top-20',
        )}
      >
        <div className="text-3xl md:text-5xl flex items-center justify-center">
          <span className="bg-white rounded-3xl">
            <button
              className={
                (!textView ? 'bg-white' : 'font-bold bg-black text-white') +
                ' mr-2 inline hover:text-blue-300 border-2 rounded-3xl px-4 py-2 md:px-8 md:py-4'
              }
              onClick={() => setTextView(!textView)}
              // border={textView}
              // invert={textView}
              // className="text-4xl ml-4"
            >
              Companies
            </button>
            <span>& </span>
            <button
              className={
                (textView ? 'bg-white' : 'font-bold bg-black text-white') +
                ' inline hover:text-blue-300 border-2 rounded-3xl px-4 py-2 md:px-8 md:py-4'
              }
              onClick={() => setTextView(!textView)}
              // border={textView}
              // invert={textView}
              // className="text-4xl ml-4"
            >
              Speakers
            </button>
          </span>
        </div>
      </header>

      <p className="text-center space-y-6 max-w-3xl m-auto text-gray-on-white">
        With 9 tracks and over 100 sessions, you can design the program schedule
        that perfectly matches your business needs. There are up to 5
        simultaneous sessions running at any one time, so it's a good thing we
        have a <code className="font-mono bg-gray-200">GROUP</code> discount for
        teams attending together!
      </p>

      <select
        onChange={(e) => setFilterTrack(e.target.value)}
        className="md:hidden border p-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
      >
        <option value="">All Tracks</option>
        {tracks.map((t) => {
          if (!t) return null;
          return <option key={t}>{t}</option>;
        })}
      </select>

      <div className="max-md:hidden text-center">
        <Button
          onClick={() => setFilterTrack('')}
          border={filterTrack !== ''}
          invert={filterTrack !== ''}
          className="mx-2 mt-4"
        >
          All Tracks
        </Button>
        {tracks.map((t) => {
          if (!t || t === 'Uncategorized') return null;
          return (
            <Button
              key={t}
              onClick={() => setFilterTrack(t)}
              border={filterTrack !== t}
              invert={filterTrack !== t}
              className="mx-2 mt-4"
            >
              {t}
            </Button>
          );
        })}
      </div>
      {textView ? (
        ////////////////////////////////////////////////////////////////////////
        // this section is for the text only view
        ////////////////////////////////////////////////////////////////////////
        <ul
          role="list"
          className="grid grid-cols-2 sm:grid-cols-4 gap-y-1 sm:gap-x-4 lg:grid-cols-6 lg:gap-x-6 items-baseline text-sm pb-16"
        >
          {presentersProcessed.map((presenter) => {
            // const { name, tagline, sessions, socialLinks, company } =
            const { name, tagline, socialLinks, company } =
              presenter.attributes;
            // const { url } = presenter.attributes.profilePhoto.data.attributes;
            return (
              <Fragment key={presenter.id + 'tagline'}>
                <p
                  key={presenter.id + 'tagline'}
                  className="font-display text-base/6 font-semibold tracking-wide text-ellipsis flex items-center min-h-[2.5rem]"
                >
                  {company.data?.attributes.name}
                </p>
                <p
                  key={presenter.id + 'name'}
                  className="text-xs text-right group"
                >
                  {socialLinks ? (
                    <a
                      href={
                        (socialLinks?.startsWith('https://')
                          ? ''
                          : 'https://') + socialLinks?.split(/[\r\n]+/)[0]
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600  font-semibold"
                    >
                      {name}
                    </a>
                  ) : (
                    <span className="font-semibold">{name}</span>
                  )}
                  <br key={presenter.id} />
                  <span
                    key={presenter.id + 'tagline'}
                    className="text-xs italic text-slate-600"
                  >
                    {tagline}
                  </span>
                  {/* failed attempt at adding sessions info - need design */}
                  {/* <br />
                  <div className="hidden group-hover:block fixed bottom-1/4 left-0 right-0 m-auto text-center bg-slate-300 p-4 rounded-xl">
                    {sessions.data[0]?.attributes.track.data.attributes.name !== "Uncategorized" && <span className="font-mono text-xs">{sessions.data[0]?.attributes.track.data.attributes.name}:</span>}
                    <em className="text-xs">{sessions.data[0]?.attributes.title}</em>
                  </div> */}
                </p>
              </Fragment>
            );
          })}
        </ul>
      ) : (
        ////////////////////////////////////////////////////////////////////////
        // this section is for the profile picture view
        ////////////////////////////////////////////////////////////////////////
        <ul
          role="list"
          className={
            'grid grid-cols-3 gap-1 sm:grid-cols-4 lg:gap-4 lg:grid-cols-6 xl:gap-6 xl:-mx-32 pb-16'
          }
        >
          {presentersProcessed.map((presenter) => {
            const { name, socialLinks, sessions, company } =
              presenter.attributes;
            // this caused a crash if we dont use data?.attributes
            const { url } = presenter.attributes.profilePhoto.data
              ?.attributes || { url: 'not available' };

            return (
              <li key={presenter.id}>
                <div className="group relative overflow-hidden rounded-lg lg:rounded-3xl bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={name}
                    loading="lazy"
                    src={url}
                    className="h-64 lg:h-96 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-2 lg:p-6">
                    <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                      {socialLinks ? (
                        <a
                          href={
                            (socialLinks?.startsWith('https://')
                              ? ''
                              : 'https://') + socialLinks?.split(/[\r\n]+/)[0]
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600"
                        >
                          {name}
                        </a>
                      ) : (
                        name
                      )}
                    </p>
                    <p className="mt-2 text-sm text-white group">
                      {company.data?.attributes.name || ''}
                      <br />
                      <em className="hidden group-hover:block text-xs">
                        {sessions.data[0]?.attributes.title}
                      </em>
                      {/* <span className="rounded-md border bg-blue-200 text-black p-1 text-xs">{sessions.data[0]?.attributes.track.data.attributes.name}</span> */}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* <div className="text-center">
        <Button border invert href={SUBMIT_TALK_URL} target="_blank">
          Submit a Talk Proposal
        </Button>
      </div> */}
    </div>
  );
}
