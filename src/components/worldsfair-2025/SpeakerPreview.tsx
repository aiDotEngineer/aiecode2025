import { Fragment, useState } from 'react';
import clsx from 'clsx';

// import { type Presenter } from '@pkg/api/src/cms2/types';

import { Button } from '../Button';
// import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { useAppBannerContext } from './AppBanner';
import { useLocalStorage } from './useLocalStorage';

// import { useWorldsFair2025 } from '../ChoosePrimaryLayout';

type Props = {
  // presenters: Array<Presenter>;
  presenters: Array<any>;
  tracks: Array<string>;
  formats: Array<string>;
};

export function SpeakerPreview({ presenters, tracks, formats }: Props) {
  const isBannerVisible = useAppBannerContext();
  // const { SUBMIT_TALK_URL } = useWorldsFair2025();
  const [filterTracks, setFilterTracks] = useState<string[]>([]);
  const [filterFormats, setFilterFormats] = useState<string[]>([]);
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

  const toggleTrack = (track: string) => {
    if (filterTracks.includes(track)) {
      // Remove track if already selected
      setFilterTracks(filterTracks.filter(t => t !== track));
    } else {
      // Add track if not already selected
      setFilterTracks([...filterTracks, track]);
    }
  };

  const toggleFormat = (format: string) => {
    if (filterFormats.includes(format)) {
      // Remove format if already selected
      setFilterFormats(filterFormats.filter(f => f !== format));
    } else {
      // Add format if not already selected
      setFilterFormats([...filterFormats, format]);
    }
  };

  const clearFilters = () => {
    setFilterTracks([]);
    setFilterFormats([]);
  };

  const presentersProcessed = presenters
    // We already sorted presenters by priority score in formatSpeakersData
    .filter((presenter) => {
      // If no filters are selected, show all presenters
      if (filterTracks.length === 0 && filterFormats.length === 0) {
        return true;
      }

      // Get all tracks for this presenter from all their sessions
      const presenterTracksList = presenter.attributes.sessions.data.flatMap(
        (session: any) => {
          const trackName = session.attributes.track.data?.attributes.name;
          return trackName ? trackName.split(',').map((t: string) => t.trim()) : [];
        },
      );

      // Get all formats for this presenter from all their sessions
      const presenterFormats = presenter.attributes.sessions.data.map(
        (session: any) => session.attributes.format
      ).filter(Boolean);

      // Check if passes track filter (or if no track filter is applied)
      const passesTrackFilter = filterTracks.length === 0 || 
        filterTracks.some(filterTrack => 
          presenterTracksList.some((presenterTrack: string) => presenterTrack.includes(filterTrack))
        );

      // Check if passes format filter (or if no format filter is applied)
      const passesFormatFilter = filterFormats.length === 0 || 
        filterFormats.some(format => presenterFormats.includes(format));

      // Present must pass both track and format filters
      return passesTrackFilter && passesFormatFilter;
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
            >
              Speakers
            </button>
          </span>
        </div>
      </header>

      <p className="text-center space-y-6 max-w-3xl m-auto text-gray-on-white">
        With 20 tracks and over 150 sessions, you can design the program schedule
        that perfectly matches your business needs. There are up to 10
        simultaneous sessions running at any one time, so it's a good thing we
        have a <code className="font-mono bg-gray-200">GROUP</code> discount for
        teams attending together!
      </p>

      {/* Mobile filters */}
      <div className="md:hidden space-y-4">
        <p>
          <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">
            IMPORTANT
          </span>{" "}
          Note: the speakers are still being finalized - keynotes are yet to be announced!
        </p>
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setFilterTracks([]);
            } else {
              setFilterTracks([value]);
            }
          }}
          className="border p-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
          value={filterTracks.length === 1 ? filterTracks[0] : ""}
        >
          <option value="">All Tracks</option>
          {tracks.map((t) => {
            if (!t) return null;
            return <option key={t}>{t}</option>;
          })}
        </select>

        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setFilterFormats([]);
            } else {
              setFilterFormats([value]);
            }
          }}
          className="border p-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
          value={filterFormats.length === 1 ? filterFormats[0] : ""}
        >
          <option value="">All Formats</option>
          {formats.map((f) => {
            if (!f) return null;
            return <option key={f}>{f}</option>;
          })}
        </select>
      </div>

      {/* Desktop filters */}
      <div className="max-md:hidden">
        {/* Track filters */}
        <div className="text-center mb-4">
          {/* <h3 className="text-lg font-semibold mb-2">Tracks</h3> */}
          <Button
            onClick={clearFilters}
            border={filterTracks.length > 0 || filterFormats.length > 0}
            invert={filterTracks.length > 0 || filterFormats.length > 0}
            className="mx-2 mt-4"
          >
            All Tracks
          </Button>
          {formats.map((f) => {
            if (!f) return null;
            const isSelected = filterFormats.includes(f);
            return (
              <Button
                key={f}
                onClick={() => toggleFormat(f)}
                border={!isSelected}
                invert={!isSelected}
                className="mx-2 mt-4"
              >
                {f}
              </Button>
            );
          })}
          {tracks.map((t) => {
            if (!t || t === 'Uncategorized') return null;
            const isSelected = filterTracks.includes(t);
            return (
              <Button
                key={t}
                onClick={() => toggleTrack(t)}
                border={!isSelected}
                invert={!isSelected}
                className="mx-2 mt-4"
              >
                {t}
              </Button>
            );
          })}
        </div>

        <p className="text-center">
          <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">
            IMPORTANT
          </span>{" "}
          Note: the speakers are still being finalized - keynotes are yet to be announced!
        </p>
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
            const { name, tagline, socialLinks, company } =
              presenter.attributes;
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
                      className="hover:text-blue-600 font-semibold"
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
            'grid grid-cols-3 gap-1 sm:grid-cols-4 lg:gap-4 lg:grid-cols-8 xl:gap-2 xl:-mx-32 pb-16'
          }
        >
          {presentersProcessed.map((presenter) => {
            const { name, socialLinks, sessions, company } =
              presenter.attributes;
            // this caused a crash if we dont use data?.attributes
            const { url } = presenter.attributes.profilePhoto.data
              ?.attributes || { url: 'not available' };

            const format = sessions.data[0]?.attributes.format;

            return (
              <li key={presenter.id}>
                <div className="group relative overflow-hidden rounded-lg lg:rounded-3xl bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={name}
                    loading="lazy"
                    src={url}
                    className="h-32 lg:h-64 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-2 lg:p-6">
                    
                    <p className="text-white group text-sm leading-5">
                      {presenter.attributes.tagline && (
                        <span className="text-xs text-gray-300">
                          {presenter.attributes.tagline}
                          <br />
                        </span>
                      )}
                      <span className="text-yellow-300">
                        {company.data?.attributes.name || ''}
                      </span>
                      <br />
                      <em className="hidden group-hover:block text-xs">
                        {sessions.data[0]?.attributes.title}
                        {/* {format && <span className="ml-1 text-yellow-300">[{format}]</span>} */}
                      </em>
                    </p>
                    {/* <p className={`font-display font-semibold tracking-wide text-white ${name.length > 10 ? 'text-xs' : 'text-base/6'}`}> */}
                    <p className={`font-display font-semibold tracking-wide text-white text-xs`}>
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
                  </div>
                </div>
              </li>
            );
          })}
        <li className="col-span-full">
          <div className="rounded-lg lg:rounded-3xl bg-neutral-800 p-4 lg:p-6 text-center">
            <p className="text-white">
              <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">
                Important
              </span>{" "}
              Keynote speakers will be announced soon! Stay tuned for more exciting additions to our speaker lineup.
            </p>
          </div>
        </li>
        </ul>
      )}
    </div>
  );
}
