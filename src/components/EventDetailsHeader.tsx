import type { Session } from '@pkg/api/src/cms/getSession';

import { formatSingleDate } from '~/utils/formatSingleDate';
import { joinPresentersNames } from '~/utils/joinPresentersNames';
import { Container } from '~/components/Container';
import { PageIntro } from '~/components/PageIntro';

type Props = {
  date?: string;
  description?: string;
  details?: Session['attributes'];
  location?: {
    label: string;
    text: string;
  };
  presenters?: Array<{ attributes: { name: string } }>;
  time?: string;
  title?: string;
  track?: string;
};

/**
 * The best way I could make this reusable is to make each item of the component
 * a separate prop not derived from `details`. This allows us to not update the
 * component for its current use, but also reuse it for worldsfair by mapping
 * each prop to the corresponding field in the data, given the shape of the CMS data
 * is different
 */
export function EventDetailsHeader({
  date,
  description,
  details,
  // This appears to be the hard coded place from the previous summit
  location,
  presenters,
  time,
  title,
  track,
}: Props) {
  /**
   * Here we normalize all the props. This allows us to pass in individual ones
   * as "overrides" while maintaining the same structure of the previous use of
   * `details`
   *
   * ??= is the nullish coalescing assignment operator, it's shorthand for:
   * x = x ?? y
   */
  date ??= details?.date ?? '';
  description ??= details?.description;
  presenters ??= details?.presenters?.data ?? [];
  title ??= details?.title ?? '';

  const facilitatorsNames = joinPresentersNames(presenters);

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow={facilitatorsNames} title={title} centered>
            {description && <p>{description}</p>}
          </PageIntro>

          <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
            <Container>
              <div className="mx-auto max-w-5xl">
                <dl className="-mx-6 flex flex-col text-sm text-black sm:mx-0 sm:flex-row">
                  <Item label="Date">
                    <time dateTime={date}>{formatSingleDate(date)}</time>
                  </Item>

                  <Item label="Time">
                    {/* This is wild, leaving here for now, not worth improving */}
                    {time ? (
                      <time dateTime={time}>{time}</time>
                    ) : // @ts-expect-error - Says `details.showEndTime` doesn't exist, but the code is here and I'm not certain I can remove it
                    details?.showEndTime ? (
                      // @ts-expect-error - Says `details.time` doesn't exist, but the code is here and I'm not certain I can remove it
                      <time dateTime={details?.time}>
                        {/* @ts-expect-error - Says `details.time` and `details.endTime` don't exist, but the code is here and I'm not certain I can remove it */}
                        {details?.time} - {details?.endTime}
                      </time>
                    ) : (
                      <time dateTime={details?.timeSlot}>
                        {details?.timeSlot}
                      </time>
                    )}
                  </Item>

                  {track && <Item label="Track">{track}</Item>}

                  {location && (
                    <Item label={location.label}>{location.text}</Item>
                  )}
                </dl>
              </div>
            </Container>
          </div>
        </header>
      </article>
    </>
  );
}

function Item({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="grow shrink border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
      <dt className="font-semibold">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
