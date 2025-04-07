 
 
import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { useWorldsFair2025 } from '~/components/ChoosePrimaryLayout';
import { Button } from '../Button';
import { Container } from '../Container';
import { CloseMenuButton, NavLink, OpenMenuButton } from '../header-utils';
import { Logo } from '../Logos';
import { SocialMedia } from '../SocialMedia';
import { AppBanner } from './AppBanner';
import { HeaderProfile } from './HeaderProfile';

type Props = {
  path: string;
};

export function Header({ path }: Props) {
  const {
    // BUY_TICKETS_URL,
    CONF_URL,
    SCHEDULE_URL,
    SPEAKERS_URL,
    SPONSORS_URL,
    WORKSHOPS_URL,
    VENUE_URL,
  } = useWorldsFair2025();

  const [navOpen, setNavOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  // Paths that should have transparent hero menu
  // (usually the first page of the conference)
  const transparent = ['/worldsfair/2025'].includes(path);

  const rootClassNames = {
    fixed,
    absolute: !fixed,
  };

  const headerClassNames = {
    'opacity-0': navOpen,
    'bg-white': fixed,
    'shadow-md': fixed,
    'text-black': fixed,
    'text-white': transparent && !fixed,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500 && !fixed) {
        setFixed(true);
      }
      if (window.scrollY < 200 && fixed) {
        setFixed(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fixed]);

  return (
    <div className={clsx('w-screen top-0 z-50', rootClassNames)}>
      <div className="fixed w-screen top-0 z-50">
        <DropdownNav navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>

      <AppBanner />

      <header className={clsx(headerClassNames)}>
        <Container>
          <div className="flex justify-between items-center py-3">
            <Link href={CONF_URL} aria-label="Home">
              <Logo
                logo="worldsFair"
                variant={transparent && !fixed ? 'white' : 'black'}
              />
            </Link>

            <div className="flex gap-6 items-center">
              <nav className="flex gap-6 items-center">
                {fixed && (
                  <>
                    {/* <Link
                      className="font-bold max-sm:hidden"
                      href={SPEAKERS_URL}
                    >
                      Speakers
                    </Link> */}
                    {/* <Link
                      className="font-bold max-lg:hidden"
                      href={WORKSHOPS_URL}
                    >
                      Workshops
                    </Link>
                    <Link
                      className="font-bold max-sm:hidden"
                      href={SCHEDULE_URL}
                    >
                      Schedule
                    </Link> */}
                    <Link
                      className="font-bold max-lg:hidden"
                      href={SPONSORS_URL}
                    >
                      Sponsors
                    </Link>
                    <Link className="font-bold max-lg:hidden" href={VENUE_URL}>
                      Venue & Hotel
                    </Link>
                  </>
                )}
              </nav>

              <div className="flex gap-6 items-center">
                <Button
                  href="https://ti.to/software-3/ai-engineer-worlds-fair-2025"
                  target="_blank"
                  invert={transparent && !fixed}
                >
                  Buy 2025 Tickets
                </Button>

                <HeaderProfile />

                <OpenMenuButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setNavOpen(!navOpen);
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

type DropdownNavProps = {
  navOpen: boolean;
  setNavOpen(o: boolean): void;
};

function DropdownNav({ navOpen, setNavOpen }: DropdownNavProps) {
  const {
    CONF_URL,
    SPEAKERS_URL,
    WORKSHOPS_URL,
    SCHEDULE_URL,
    SPONSORS_URL,
    VENUE_URL,
    SCHOLARSHIPS_URL,
    VOLUNTEER_URL,
    // BUY_TICKETS_URL,
    SPONSOR_INQUIRY_URL,
    TWITTER_URL,
    YOUTUBE_URL,
  } = useWorldsFair2025();

  const classNames = {
    'h-0': !navOpen,
    'max-md:h-screen': navOpen,
    'md:h-[700px]': navOpen,
    'border-b border-white shadow-2xl': navOpen,
  };

  useEffect(() => {
    const listener = () => {
      setNavOpen(false);
    };
    window.addEventListener('click', listener);
    return () => {
      window.removeEventListener('click', listener);
    };
  }, [setNavOpen]);

  return (
    <div
      className={clsx(
        'bg-black text-white overflow-scroll transition-all duration-300 ease-in-out',
        classNames,
      )}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Container>
        <div className="flex justify-between items-center py-3">
          <Link href={CONF_URL} aria-label="Home">
            <Logo logo="worldsFair" variant="white" />
          </Link>
          <nav className="flex gap-6 items-center text-white">
            <Button
              invert
              href="https://ti.to/software-3/ai-engineer-worlds-fair-2025"
              target="_blank"
            >
              Buy 2025 Tickets
            </Button>
            {/* <Button invert href={BUY_TICKETS_URL} target="_blank">
              Buy Tickets
            </Button> */}

            <HeaderProfile />

            <CloseMenuButton onClick={() => setNavOpen(!navOpen)} />
          </nav>
        </div>
      </Container>

      <div className="text-2xl md:text-5xl">
        <div className="text-center border-t border-gray-800 md:border-b  font-bold">
          <div className="max-w-[1200px] md:flex ml-auto mr-auto ">
            {/* <NavLink href={SPEAKERS_URL} onClick={() => setNavOpen(false)}>
              Speakers
            </NavLink> */}
            <NavLink href={SPONSORS_URL} onClick={() => setNavOpen(false)}>
              Sponsors
            </NavLink>
          </div>
        </div>
        {/* <div className="text-center font-bold md:border-b border-gray-800">
          <div className="max-w-[1200px] md:flex ml-auto mr-auto">
            <NavLink href={SCHEDULE_URL} onClick={() => setNavOpen(false)}>
              Schedule
            </NavLink>
            <NavLink href={WORKSHOPS_URL} onClick={() => setNavOpen(false)}>
              Workshops
            </NavLink>
          </div>
        </div> */}
      </div>

      <Container>
        <div className="flex flex-col gap-6 mt-16 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="font-bold font-lg">Quick Actions</div>

            <div className="flex flex-col md:grid md:grid-cols-2">
              <Link href={`${CONF_URL}/conduct`}>
                <SmallLinkText>Code of Conduct</SmallLinkText>
              </Link>
              <a href={SCHOLARSHIPS_URL} target="_blank">
                <SmallLinkText>Scholarships</SmallLinkText>
              </a>
              <a href={VOLUNTEER_URL} target="_blank">
                <SmallLinkText>Volunteer</SmallLinkText>
              </a>
              <Link href="/jobs">
                <SmallLinkText>Jobs</SmallLinkText>
              </Link>
              <a href={SPONSOR_INQUIRY_URL} target="_blank">
                <SmallLinkText>Sponsor Inquiry</SmallLinkText>
              </a>
              <Link href={VENUE_URL}>
                <SmallLinkText>Venue & Hotel</SmallLinkText>
              </Link>
              {/* <a
                href={HOTEL_URL}
              >
               <SmallLinkText>Book your hotel room</SmallLinkText>
              </a> */}
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div className="font-bold font-lg">Follow Us</div>
            <div className="flex gap-10 text-2xl">
              <SocialMedia twitter={TWITTER_URL} youtube={YOUTUBE_URL} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function SmallLinkText({ children }: { children: string }) {
  return <span className="text-gray-300">{children}</span>;
}
