import clsx from 'clsx';

import { Container } from '~/components/Container';

type Props = {
  centered?: boolean;
  children?: React.ReactNode;
  eyebrow?: string;
  title: string;
};

export function PageIntro({
  centered = false,
  children,
  eyebrow,
  title,
}: Props) {
  return (
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <h1>
        {eyebrow && (
          <>
            <span className="block font-display text-base font-semibold text-black">
              {eyebrow}
            </span>
            <span className="sr-only"> - </span>
          </>
        )}
        <span
          className={clsx(
            'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-black [text-wrap:balance] sm:text-6xl',
            centered && 'mx-auto',
          )}
        >
          {title}
        </span>
      </h1>

      {children && (
        <div
          className={clsx(
            'mt-6 max-w-3xl text-xl text-neutral-600',
            centered && 'mx-auto',
          )}
        >
          {children}
        </div>
      )}
    </Container>
  );
}
