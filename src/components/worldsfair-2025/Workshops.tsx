import Link from 'next/link';

import type { SessionEvent } from '@pkg/api/src/cms2/schedule';

import { Button } from '../Button';
import { FadeIn } from '../FadeIn';
import { PresentersNames } from '../PresentersNames';

// import { ProfilePictureStack } from '../ProfilePictureStack';

export function Workshops({ items }: { items: SessionEvent[] }) {
  return (
    <div className="flex flex-col gap-6">
      <Link href="#workshops">
        <h2 className="font-bold text-5xl scroll-mt-24" id="workshops">
          Workshops
        </h2>
      </Link>

      <p className="text-gray-on-white max-w-prose">
        <b>Learn by doing</b>. We&apos;ve assembled a team of top engineers who
        build with the technologies they&apos;re teaching every day. Get{' '}
        <b>hands on keyboard</b> with core-contributors, maintainers, and
        founders of the top AI Engineering tools & infra!
        <em>
          . Most workshops happen on Jun 25th. Available as a package with
          conference ticket - sold out last year!
        </em>
      </p>

      {items.length ? <WorkshopsList items={items} /> : <NoWorkshops />}
    </div>
  );
}

function NoWorkshops() {
  return (
    <p className="text-gray-on-white">
      Workshops will be announced soon! Stay tuned for updates.
    </p>
  );
}

function WorkshopsList({ items }: { items: SessionEvent[] }) {
  return (
    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
      {items.map((item) => (
        <WorkshopItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function WorkshopItem({ item }: { item: SessionEvent }) {
  // const presentersForPictures = item.presenters.map((speaker) => ({
  //   name: speaker.attributes.name,
  //   profilePhotoUrl: speaker.attributes.profilePhoto.data.attributes.url,
  // }));
  const presentersForNames = item.presenters.map((speaker) => ({
    name: speaker.attributes.name,
    tagline: speaker.attributes.tagline,
    company: speaker.attributes.company.data?.attributes.name,
  }));

  return (
    <FadeIn className="flex flex-col rounded-3xl p-6 ring-1 ring-black/5 transition hover:bg-neutral-50 sm:p-4">
      <div className="grow flex flex-col justify-between gap-4">
        <article className="flex flex-col justify-between h-full gap-4">
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-black">{item.title}</p>
            {/* <ProfilePictureStack presenters={presentersForPictures} /> */}
            <PresentersNames presenters={presentersForNames} />

            {/* swyx: dont use this field as it is not populated in most cases. */}
            {/* <p className="text-base text-neutral-600">{item.description}</p> */}
            <p className="text-base text-neutral-600">
              <span className="text-sm p-1 bg-gray-100 rounded-sm mr-2">
                {item.trackName}
              </span>
              {item.about.split(' ').slice(0, 40).join(' ') +
                (item.about.length > 200 ? '...' : '')}
            </p>
          </div>
          <Button href={`/worldsfair/2024/schedule/${item.slug}`}>
            Details
          </Button>
        </article>
      </div>
    </FadeIn>
  );
}
