import { Fragment, useMemo } from "react";
import clsx from "clsx";

// import { type Presenter } from '@pkg/api/src/cms2/types';

// import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { useAppBannerContext } from "../worldsfair-2025/AppBanner";
import { useLocalStorage } from "../worldsfair-2025/useLocalStorage";

// import { useWorldsFair2025 } from '../ChoosePrimaryLayout';

type Props = {
  // presenters: Array<Presenter>;
  presenters: Array<any>;
};

export function SpeakerPreview({ presenters }: Props) {
  const isBannerVisible = useAppBannerContext();
  // const { SUBMIT_TALK_URL } = useWorldsFair2025();

  const [textView, _setTextView] = useLocalStorage("textView", true);
  const [talkView, _setTalkView] = useLocalStorage("talkView", false);
  const [sticky, _setSticky] = useLocalStorage("sticky", true);

  const anchorScroll = () => {
    if (window.location.hash === "#SpeakersList") {
      window.location.hash = "#";
      window.location.hash = "SpeakersList";
    } else {
      window.location.hash = "SpeakersList";
    }
  };

  const setView = (view: "companies" | "speakers") => {
    anchorScroll();

    _setTalkView(false);
    _setTextView(view === "companies");
  };

  const presentersProcessed = useMemo(
    () =>
      presenters
        // We already sorted presenters by priority score in formatSpeakersData
        .filter((presenter) => {
          // If no filters are selected, show all presenters

          return true;
        }),
    [presenters]
  );

  return (
    <div>
      <div className="space-y-8 mb-16">
        <h1 className="text-5xl font-bold flex items-center justify-center" id="SpeakersList">
          World Class
        </h1>

        <header
          className={clsx(
            "text-center z-20",
            sticky ? "sticky" : "",
            // 'text-center',
            isBannerVisible ? "top-36" : "top-20"
            // textView ? 'top-20' : 'top-[calc(100vh-100px)]',
          )}
        >
          <div className="text-3xl md:text-5xl flex items-center justify-center">
            <span className="bg-transparent rounded-3xl">
              <button
                className={
                  (!talkView && textView ? "font-bold bg-black text-white" : "bg-white") +
                  " mr-2 inline hover:text-blue-300 border-2 rounded-3xl px-4 py-2 md:px-8 md:py-4"
                }
                onClick={() => setView("companies")}
              >
                Companies
              </button>
              <span onClick={() => _setSticky(!sticky)}>& </span>
              <button
                className={
                  (!talkView && !textView ? "font-bold bg-black text-white" : "bg-white") +
                  " mr-2 inline hover:text-blue-300 border-2 rounded-3xl px-4 py-2 md:px-8 md:py-4"
                }
                onClick={() => setView("speakers")}
              >
                Speakers
              </button>
            </span>
          </div>
        </header>

        {/* <div>
          <p className="text-center">
            To import all sessions to your calendar, click this{" "}
            <a
              href="https://sessionize.com/api/v2/e70d4iqk/view/All"
              className="underline hover:text-blue-800"
            >
              iCal
            </a>{" "}
            link. For hackers:{" "}
            <a
              href="https://ai.engineer/sessions-speakers-details.json"
              className="underline hover:text-blue-800"
            >
              Get all sessions in JSON
            </a>{" "}
            (or{" "}
            <a
              href="https://sessionize.com/api/v2/w3hd2z8a/view/All"
              className="underline hover:text-blue-800"
            >
              raw JSON
            </a>
            ) for your own vibecoded view, like
            <a
              href="https://aie-swipe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-800"
            >
              @noodlesoup's app
            </a>{" "}
            (Tinder-style talk discovery) or{" "}
            <a
              href="https://worlds-fair-schedule.agpallav.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-800"
            >
              @pallavmac's app
            </a>{" "}
            (list+bookmarking) or{" "}
            <a
              href="https://aiewf.shebecoding.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-800"
            >
              Hebe Hillhorst's app
            </a>{" "}
            or{" "}
            <a
              href="https://testflight.apple.com/join/rYEaS8XA"
              className="underline hover:text-blue-800"
            >
              @CedricVidal's iOS TestFlight
            </a>{" "}
            (
            <a
              href="https://x.com/cedricvidal/status/1930136757334618229"
              className="underline hover:text-blue-800"
            >
              vibecoded
            </a>
            ). We manually update this JSON dump regularly but the{" "}
            <a href="https://ai.engineer/schedule" className="underline hover:text-blue-800">
              Sessionize schedule
            </a>{" "}
            is the ultimate source of truth.
          </p>
        </div> */}

        {textView ? (
          ////////////////////////////////////////////////////////////////////////
          // this section is for the text only view
          ////////////////////////////////////////////////////////////////////////
          <ul
            role="list"
            className="grid grid-cols-2 sm:grid-cols-4 gap-y-1 sm:gap-x-4 lg:grid-cols-6 lg:gap-x-6 items-baseline text-sm pb-16"
          >
            {presentersProcessed.map((presenter, idx) => {
              const { name, title, linkedin, company } = presenter;
              return (
                <Fragment key={idx}>
                  <p
                    className="font-display text-base/6 font-semibold tracking-wide text-ellipsis flex items-center min-h-[2.5rem]"
                    suppressHydrationWarning={true}
                  >
                    {company}
                  </p>
                  <p className="text-xs text-right group" suppressHydrationWarning={true}>
                    {linkedin ? (
                      <a
                        suppressHydrationWarning={true}
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 font-semibold"
                      >
                        {name}
                      </a>
                    ) : (
                      <span className="font-semibold" suppressHydrationWarning={true}>
                        {name}
                      </span>
                    )}
                    <br suppressHydrationWarning={true} key={presenter.id} />
                    <span
                      key={presenter.id + "tagline"}
                      className="text-xs italic text-slate-600"
                      suppressHydrationWarning={true}
                    >
                      {title}
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
            className={`grid grid-cols-3 gap-1 sm:grid-cols-4 lg:gap-2 ${
              presentersProcessed.length > 12
                ? "md:grid-cols-8 xl:grid-cols-10"
                : "md:grid-cols-4 xl:grid-cols-6"
            } xl:gap-2 xl:-mx-32 pb-16`}
          >
            {presentersProcessed.map((presenter) => {
              const { name, linkedin, sessions, company, profile_picture } = presenter;

              return (
                <li key={presenter.id}>
                  <div className="group relative overflow-hidden rounded-lg lg:rounded-xl bg-neutral-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {profile_picture ? (
                      <img
                        suppressHydrationWarning={true}
                        alt={name}
                        loading="lazy"
                        src={profile_picture}
                        className="h-32 lg:h-48 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-32 lg:h-48 w-full flex items-center justify-center bg-neutral-200 text-neutral-400 text-xl">
                        <span className="opacity-60">No Photo</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-2 lg:py-2 lg:px-4">
                      <p
                        className="text-white group text-sm leading-5"
                        suppressHydrationWarning={true}
                      >
                        {presenter.title && (
                          <span
                            className="block sm:hidden lg:block text-xs text-gray-300"
                            suppressHydrationWarning={true}
                          >
                            {presenter.title}
                            <br suppressHydrationWarning={true} />
                          </span>
                        )}
                        <span className="text-yellow-300 text-xs" suppressHydrationWarning={true}>
                          {presenter.company || ""}
                        </span>
                        <br suppressHydrationWarning={true} />
                        <em
                          className="hidden group-hover:block text-xs"
                          suppressHydrationWarning={true}
                        ></em>
                      </p>
                      {/* <p className={`font-display font-semibold tracking-wide text-white ${name.length > 10 ? 'text-xs' : 'text-base/6'}`}> */}
                      <p
                        className={`font-display font-semibold tracking-wide text-white text-xs`}
                        suppressHydrationWarning={true}
                      >
                        {linkedin ? (
                          <a
                            href={linkedin}
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
          The speakers and full schedule are still being finalized.
        </p>
      </div>
    </div>
  );
}
