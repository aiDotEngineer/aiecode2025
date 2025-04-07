// @ts-nocheck
import clsx from 'clsx';

import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

/**
 * @typedef {Object} Props
 * @property {string} [eyebrow]
 * @property {string} title
 * @property {React.ReactNode} [children]
 * @property {boolean} [smaller]
 * @property {boolean} [invert]
 * @property {string} [className]
 */

/**
 * @param {Props} props
 */
export function SectionIntro({
  eyebrow,
  title,
  children,
  smaller = false,
  invert = false,
  ...props
}) {
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        <h2 id={title}>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  'mb-6 block font-display text-base font-semibold',
                  invert ? 'text-white' : 'text-black',
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              'block font-display tracking-tight [text-wrap:balance]',
              smaller
                ? 'text-2xl font-semibold'
                : 'text-4xl font-medium sm:text-5xl',
              invert ? 'text-white' : 'text-black',
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div
            className={clsx(
              'mt-6 text-xl',
              invert ? 'text-neutral-300' : 'text-neutral-600',
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  );
}
