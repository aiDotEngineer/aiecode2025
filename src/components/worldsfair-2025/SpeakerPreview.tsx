import { Fragment, useState, useMemo } from 'react';
import clsx from 'clsx';

// import { type Presenter } from '@pkg/api/src/cms2/types';

import { Button } from '../Button';
// import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { useAppBannerContext } from './AppBanner';
import { useLocalStorage } from './useLocalStorage';
import { parseSocialLinks } from '../../utils/socialLinks';
import { markdownToHtml } from '../../utils/markdownToHtml';

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
  const [talkView, _setTalkView] = useLocalStorage('talkView', false);
  const [sticky, _setSticky] = useLocalStorage('sticky', true);

  const anchorScroll = () => {
    if (window.location.hash === '#SpeakersList') {
      window.location.hash = '#';
      window.location.hash = 'SpeakersList';
    } else {
      window.location.hash = 'SpeakersList';
    }
  };

  const setView = (view: 'companies' | 'speakers' | 'talks') => {
    anchorScroll();
    if (view === 'talks') {
      _setTalkView(true);
    } else {
      _setTalkView(false);
      _setTextView(view === 'companies');
    }
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

  const presentersProcessed = useMemo(
    () =>
      presenters
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
          const presenterFormats = presenter.attributes.sessions.data
            .map((session: any) => session.attributes.format)
            .filter(Boolean);

          // Check if passes track filter (or if no track filter is applied)
          const passesTrackFilter =
            filterTracks.length === 0 ||
            filterTracks.some((filterTrack) =>
              presenterTracksList.some((presenterTrack: string) => presenterTrack.includes(filterTrack)),
            );

          // Check if passes format filter (or if no format filter is applied)
          const passesFormatFilter =
            filterFormats.length === 0 || filterFormats.some((format) => presenterFormats.includes(format));

          // Present must pass both track and format filters
          return passesTrackFilter && passesFormatFilter;
        }),
    [presenters, filterTracks, filterFormats],
  );

  const sessionsRandom = useMemo(() => {
    // [INFO] Building randomized sessions list for Talks view
    const sessions = presentersProcessed.flatMap((presenter) => {
      const photo = presenter.attributes.profilePhoto.data?.attributes.url || '';
      const companyName = presenter.attributes.company.data?.attributes.name || '';
      const socialLinks = presenter.attributes.socialLinks || null;
      return presenter.attributes.sessions.data.map((session: any, idx: number) => {
        const social = parseSocialLinks(socialLinks);
        const socialLink = social.socialOther || social.socialLinkedIn || social.socialTwitter || null;
        // [INFO] Add all relevant session info for Talks view
        return {
          id: `${presenter.id}-${idx}`,
          title: session.attributes.title,
          presenter: presenter.attributes.name,
          profilePhotoUrl: photo,
          company: companyName,
          description: session.attributes.description || '',
          format: session.attributes.format || '',
          track: session.attributes.track.data?.attributes.name || '',
          socialLink,
          level: session.attributes.level || '',
          scope: session.attributes.scope || '',
          room: session.attributes.room || '',
          scheduledAt: session.attributes.scheduledAt || '',
        };
      });
    });

    for (let i = sessions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sessions[i], sessions[j]] = [sessions[j], sessions[i]];
    }
    return sessions;
  }, [presentersProcessed]);

  return (
    <div>
      <div className="space-y-8 mb-16">

        <h1
          className="text-5xl font-bold flex items-center justify-center"
          id="SpeakersList"
        >
          World Class
        </h1>

        <header
          className={clsx(
            'text-center z-20',
            sticky ? 'sticky' : '',
            // 'text-center',
            isBannerVisible ? 'top-36' : 'top-20',
            // textView ? 'top-20' : 'top-[calc(100vh-100px)]',
          )}
        >
          <div className="text-3xl md:text-5xl flex items-center justify-center">
            <span className="bg-transparent rounded-3xl">
              <button
                className={
                  (!talkView && textView
                    ? 'font-bold bg-black text-white'
                    : 'bg-white') +
                  ' mr-2 inline hover:text-blue-300 border-2 rounded-3xl px-4 py-2 md:px-8 md:py-4'
                }
                onClick={() => setView('companies')}
              >
                Companies
              </button>
              <span onClick={() => _setSticky(!sticky)}>& </span>
              <button
                className={
                  (!talkView && !textView
                    ? 'font-bold bg-black text-white'
                    : 'bg-white') +
                  ' mr-2 inline hover:text-blue-300 border-2 rounded-3xl px-4 py-2 md:px-8 md:py-4'
                }
                onClick={() => setView('speakers')}
              >
                Speakers
              </button>
              <span onClick={() => _setSticky(!sticky)}>& </span>
              <button
                className={
                  (talkView ? 'font-bold bg-black text-white' : 'bg-white') +
                  ' inline hover:text-blue-300 border-2 rounded-3xl px-4 py-2 md:px-8 md:py-4'
                }
                onClick={() => setView('talks')}
              >
                Talks
              </button>
            </span>
          </div>
        </header>

        <div>
          <p className="text-center">To import all sessions to your calendar, click this <a href="https://sessionize.com/api/v2/e70d4iqk/view/All" className="underline hover:text-blue-800">iCal</a> link. For hackers: <a href="https://ai.engineer/sessions-speakers-details.json" className="underline hover:text-blue-800">Get all sessions in JSON</a> (or <a href="https://sessionize.com/api/v2/w3hd2z8a/view/All" className="underline hover:text-blue-800">raw JSON</a>) for your own vibecoded view, like 
              <a href="https://aie-swipe.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">@noodlesoup's app</a> (Tinder-style talk discovery) or{' '}
              <a href="https://worlds-fair-schedule.agpallav.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">@pallavmac's app</a> (list+bookmarking) or{' '}
              <a href="https://aiewf.shebecoding.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Hebe Hillhorst's app</a> or{' '}
              <a
              href="https://testflight.apple.com/join/rYEaS8XA"
              className="underline hover:text-blue-800"
            >
              @CedricVidal's iOS TestFlight
            </a>{" "}
            (<a href="https://x.com/cedricvidal/status/1930136757334618229" className="underline hover:text-blue-800">vibecoded</a>). 
            We manually update this JSON dump regularly but the <a href="https://ai.engineer/schedule" className="underline hover:text-blue-800">Sessionize schedule</a> is the ultimate source of truth.</p>
        </div>


        {/* Mobile filters */}
        <div className="md:hidden space-y-4">
          {/* <p>
          <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">
            IMPORTANT
          </span>{" "}
          Note: the speakers are still being finalized - keynotes are yet to be announced!
        </p> */}
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
              return <option key={t} suppressHydrationWarning={true}>{t}</option>;
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
              return <option key={f} suppressHydrationWarning={true}>{f}</option>;
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

          {/* <p className="text-center">
          <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">
            IMPORTANT
          </span>{" "}
          Note: the speakers are still being finalized - keynotes are yet to be announced!
        </p> */}
        </div>

        {talkView ? (
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-x-4 lg:gap-x-6 text-sm pb-16 max-h-[90vh] overflow-y-auto sm:max-h-none sm:overflow-y-visible"
          >
            {sessionsRandom.map((session) => (
              <li key={session.id} className="relative flex gap-3 group items-center">
                {session.profilePhotoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={session.profilePhotoUrl}
                    alt={session.presenter}
                    className="h-12 w-12 rounded-lg object-cover flex-none bg-neutral-200"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full flex-none bg-neutral-200" />
                )}
                <div>
                  <p
                    className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-xs"
                    title={session.title}
                  >
                    {session.title}
                  </p>
                  <p className="text-xs text-slate-600">
                    {session.socialLink ? (
                      <a
                        href={session.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                      >
                        {session.presenter}
                      </a>
                    ) : (
                      session.presenter
                    )}
                    {session.company && ` / ${session.company}`}
                  </p>
                </div>
                {/* Talks view hover card: show all info */}
                <div className="absolute left-0 top-full z-10 hidden group-hover:block mt-2 w-96 p-3 rounded-lg bg-white shadow-lg text-xs">
                  <p className="font-semibold" title={session.title}>{session.title}</p>
                  {session.room && (
                    <div className="mb-1"><b>Room:</b> {session.room}</div>
                  )}
                  {session.scheduledAt && (
                    <div className="mb-1"><b>Time:</b> {session.scheduledAt}</div>
                  )}
                  <div dangerouslySetInnerHTML={{ __html: markdownToHtml(session.description) }} />
                  <div className="mb-2 text-md text-slate-600">
                    {session.format || 'Talk'}
                    {session.track && ` / ${session.track}`}
                  </div>
                  {/* Show all extra info for Talks view */}
                  {session.level && (
                    <div className="mb-1"><b>Level:</b> {session.level}</div>
                  )}
                  {session.scope && (
                    <div className="mb-1"><b>Scope:</b> {session.scope}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : textView ? (
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
                    suppressHydrationWarning={true}
                  >
                    {company.data?.attributes.name}
                  </p>
                  <p
                    key={presenter.id + 'name'}
                    className="text-xs text-right group"
                    suppressHydrationWarning={true}
                  >
                    {socialLinks ? (
                      <a
                        suppressHydrationWarning={true}
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
                      <span className="font-semibold" suppressHydrationWarning={true}>{name}</span>
                    )}
                    <br suppressHydrationWarning={true} key={presenter.id} />
                    <span
                      key={presenter.id + 'tagline'}
                      className="text-xs italic text-slate-600"
                      suppressHydrationWarning={true}
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
              `grid grid-cols-3 gap-1 sm:grid-cols-4 lg:gap-2 ${presentersProcessed.length > 12 ? 'md:grid-cols-8 xl:grid-cols-10' : 'md:grid-cols-4 xl:grid-cols-6'} xl:gap-2 xl:-mx-32 pb-16`
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
                  <div className="group relative overflow-hidden rounded-lg lg:rounded-xl bg-neutral-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {url && url !== 'not available' ? (
                      <img
                        suppressHydrationWarning={true}
                        alt={name}
                        loading="lazy"
                        src={url}
                        className="h-32 lg:h-48 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-32 lg:h-48 w-full flex items-center justify-center bg-neutral-200 text-neutral-400 text-xl">
                        <span className="opacity-60">No Photo</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-2 lg:py-2 lg:px-4">

                      <p className="text-white group text-sm leading-5"
                        suppressHydrationWarning={true}>
                        {presenter.attributes.tagline && (
                          <span className="block sm:hidden lg:block text-xs text-gray-300" suppressHydrationWarning={true}>
                            {presenter.attributes.tagline}
                            <br suppressHydrationWarning={true} />
                          </span>
                        )}
                        <span className="text-yellow-300 text-xs" suppressHydrationWarning={true}>
                          {company.data?.attributes.name || ''}
                        </span>
                        <br suppressHydrationWarning={true} />
                        <em className="hidden group-hover:block text-xs" suppressHydrationWarning={true}>
                          {sessions.data[0]?.attributes.title}
                          {/* Profile picture view: show only Scheduled At if present */}
                          {sessions.data[0]?.attributes.scheduledAt && (
                            <span className="block text-[0.6rem] text-blue-200 mt-1" suppressHydrationWarning={true}>
                              {/* <b>Scheduled At:</b>  */}
                              {sessions.data[0]?.attributes.scheduledAt}
                            </span>
                          )}
                        </em>

                      </p>
                      {/* <p className={`font-display font-semibold tracking-wide text-white ${name.length > 10 ? 'text-xs' : 'text-base/6'}`}> */}
                      <p className={`font-display font-semibold tracking-wide text-white text-xs`} suppressHydrationWarning={true}>
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
                            suppressHydrationWarning={true}
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
          </ul>
        )}

      </div>

      {/* <p className="text-center space-y-6 max-w-3xl m-auto text-gray-on-white mb-8 ">
        With 18 tracks and over 150 sessions, you can design the program schedule
        that perfectly matches your business needs. There are up to 10
        simultaneous sessions running at any one time, so it's a good thing we
        have a <b>group discount</b> for
        teams attending together!
      </p> */}
      <div className="rounded-lg lg:rounded-3xl bg-neutral-800 p-4 lg:p-6 text-center">
        <p className="text-white">
          <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">
            Important
          </span>{" "}
          Speaker list is mostly finalized. There may be last minute changes due to scheduling conflicts, but see the AIE attendee Slack for updates starting Jun 1. <br></br>(but pls buy tickets already, last minute stresses everybody out)
        </p>
      </div>
    </div>
  );
}
