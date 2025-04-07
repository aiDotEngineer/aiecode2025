import Link from 'next/link';
import clsx from 'clsx';

// import type { Presenter } from '@pkg/api/src/cms2/types';

type PresentersArray = {
  data: Array<any>;
};

type SessionCardProps = {
  fullWidth?: boolean;
  date: string;
  event: string;
  title: string;
  presenters: PresentersArray;
  src: string; // StaticImageData;
  detailsURL: string;
  talkURL: string;
};

export function SessionCard({
  fullWidth = false,
  date,
  event,
  title,
  presenters,
  src,
  detailsURL,
  talkURL,
}: SessionCardProps) {
  return (
    <div
      // grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      className={clsx('bg-white shadow-xl rounded-xl overflow-clip', {
        'md:@container': fullWidth,
        'md:col-span-2': fullWidth,
        'lg:col-span-3': fullWidth,
      })}
    >
      <div className="h-full flex flex-col @sm:flex-row">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Session"
          src={src}
          className="h-[240px] w-full @xs:w-1/2 @xs:h-full @6xl:w-[800px] @6xl:h-[480px] object-cover"
        />
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-600 font-bold">
            {date} | {event}
          </p>

          <div className="mt-2 flex-1 flex flex-col @md:justify-center">
            <h2 className="font-bold text-xl @4xl:text-5xl">{title}</h2>
            {presenters.data.length === 1 && (
              <div>
                <span>{presenters.data[0]?.attributes.name}</span>
                {presenters.data[0]?.attributes.tagline && (
                  <span>, {presenters.data[0].attributes.tagline}</span>
                )}
              </div>
            )}
            {presenters.data.length > 1 && (
              <div className="overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                {presenters.data.map((presenter, index) => (
                  <span key={presenter.id}>
                    <span>{presenter.attributes.name}</span>
                    {index < presenters.data.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-6 mt-3 font-bold">
            <Link href={talkURL}>Watch Talk</Link>
            <Link href={detailsURL}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
