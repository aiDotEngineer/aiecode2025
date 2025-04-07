// @ts-nocheck
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Border } from '~/components/Border';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { DateMenu } from '~/components/DateMenu';
import { getLogo } from '~/components/Logos';
import { PresentersNames } from './PresentersNames';
import { ProfilePictureStack } from './ProfilePictureStack';
import { useTabContext } from './TabContext';

const logoMicrosoft = getLogo('microsoft', 'colorGray');
const logoDecibel = getLogo('decibel', 'color');

function extractAttributesFromArray(dataArray) {
  return dataArray.map((item) => item.attributes);
}

function Session({ session }) {
  const isMicrosoft = session.title === 'The Microsoft Welcome Reception';
  const isDecibel = session.title === 'Decibel VC Afterparty';

  const presenters = extractAttributesFromArray(session.presenters.data);
  const showFacilitators = presenters.length > 0 || isMicrosoft || isDecibel;
  return (
    <div>
      <article className="mb-10 space-y-20 sm:space-y-24 lg:space-y-32">
        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-2">
          <div className="col-span-full lg:col-span-1">
            <p className="text-sm font-semibold text-black lg:mt-2">
              <time dateTime={session.timeSlot}>{session.timeSlot}</time>
            </p>
            {showFacilitators && (
              <div className="w-full pt-10 sm:gap-x-6 md:block">
                {isMicrosoft ? (
                  <Image
                    src={logoMicrosoft.logo}
                    alt={logoMicrosoft.name}
                    width={144}
                    height={64}
                    className={`h-16 w-36`}
                    unoptimized
                  />
                ) : isDecibel ? (
                  <Image
                    src={logoDecibel.logo}
                    alt={logoDecibel.name}
                    width={144}
                    height={64}
                    className={`h-16 w-36`}
                    unoptimized
                  />
                ) : (
                  <ProfilePictureStack
                    presenters={presenters.map((speaker) => ({
                      name: speaker.name,
                      profilePhotoUrl: speaker.profilePhoto.data.attributes.url,
                    }))}
                  />
                )}
                <div className="mt-8">
                  <PresentersNames
                    presenters={presenters.map((speaker) => ({
                      name: speaker.name,
                      tagline: speaker.tagline,
                    }))}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="col-span-full pt-10 lg:col-span-2 lg:max-w-2xl">
            <p className="font-display text-4xl font-medium text-black">
              <Link href={`schedule/${session.slug}`}>{session.title}</Link>
            </p>
            <p className="pt-6">{session.description}</p>

            {session.type !== 'OTHER' && (
              <div className="mt-8 flex">
                <Button
                  href={`schedule/${session.slug}`}
                  aria-label={`See more details, event: ${session.title}`}
                >
                  See more details
                </Button>
              </div>
            )}
          </div>
        </Border>
      </article>
    </div>
  );
}

function groupSessionsByDate(sessions) {
  const result = {};

  sessions.forEach((session) => {
    const { date } = session.attributes;
    if (!result[date]) {
      result[date] = [];
    }

    const {
      title,
      timeSlot,
      displayOrder,
      type,
      createdAt,
      updatedAt,
      publishedAt,
      typeDescription,
      description,
      about,
      presenters,
      slug,
    } = session.attributes;
    result[date].push({
      id: [session.id],
      slug,
      title,
      date,
      timeSlot,
      displayOrder,
      type,
      createdAt,
      updatedAt,
      publishedAt,
      typeDescription,
      description,
      about,
      presenters,
    });
  });

  for (const date in result) {
    result[date].sort((sessionA, sessionB) => {
      return sessionA.displayOrder - sessionB.displayOrder;
    });
  }

  return result;
}

export function Schedule({ sessions }) {
  const sessionsByDate = groupSessionsByDate(sessions);
  const { selectedTab, selectTab } = useTabContext();
  const dates = Object.keys(sessionsByDate);
  const dateMenuRef = useRef(null);
  const menuHeight = 70;

  const handleDateClick = (date) => {
    selectTab(date);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (dateMenuRef.current) {
        const isSticky =
          window.scrollY > dateMenuRef.current.offsetTop + menuHeight - 10;
        if (isSticky) {
          dateMenuRef.current.classList.add('shadow-md');
        } else {
          dateMenuRef.current.classList.remove('shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={dateMenuRef}
        className="sticky inset-x-0 top-0 z-50 bg-white transition-all"
      >
        <DateMenu
          dates={dates}
          selectedDate={selectedTab}
          onDateClick={handleDateClick}
        />
      </div>

      <Container className="mt-16">
        {sessionsByDate[selectedTab]?.map((session, index) => {
          return <Session key={index} session={session} />;
        })}
      </Container>
    </>
  );
}
