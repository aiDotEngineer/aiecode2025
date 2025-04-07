import Link from 'next/link';

import { Container } from '~/components/Container';
import { SubPageWrap } from '~/components/SubPageWrap';

export default function NotFound() {
  return (
    <SubPageWrap>
      <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40 pb-20">
        <p className="font-display text-4xl font-semibold text-black sm:text-5xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-black">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-black transition hover:text-neutral-700"
        >
          Go to the home page
        </Link>
      </Container>
    </SubPageWrap>
  );
}
