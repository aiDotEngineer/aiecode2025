import Image from 'next/image';
import clsx from 'clsx';

import { Container } from '~/components/Container';
import { GridPattern } from '~/components/GridPattern';
import imageAmjadMasad from '~/images/avatars/amjad-masad.jpg';
import imageAndrejKarpathy from '~/images/avatars/AndrejKarpathy.jpg';
import imageBenFirshman from '~/images/avatars/ben-firshman.jpg';

const quotes = {
  'andrej-karpathy': {
    name: 'Andrej Karpathy',
    role: 'Formerly OpenAI, Tesla',
    image: { src: imageAndrejKarpathy },
    website: 'https://twitter.com/karpathy/status/1674873002314563584',
    quote:
      "In numbers, there's probably going to be significantly more AI Engineers than there are ML engineers / LLM engineers. One can be quite successful in this role without ever training anything.",
  },
  'amjad-masad': {
    name: 'Amjad Masad',
    role: 'Founder & CEO, Replit',
    image: { src: imageAmjadMasad },
    website: 'https://twitter.com/amasad/status/1696650786951016515?s=20',
    quote:
      'For the first time in decades, a new kind of software engineer is emerging and this is the conference to explore it.',
  },
  'ben-firshman': {
    name: 'Ben Firshman',
    role: 'Replicate',
    image: { src: imageBenFirshman },
    website: 'https://replicate.com/blog/series-b',
    quote:
      'There are roughly two orders of magnitude more software engineers than there are machine learning engineers. By building good tools, we think it is possible for AI Engineers to use machine learning in the same way they can use normal software.',
  },
} as const;

type Props = {
  name: keyof typeof quotes;
  className?: string;
};

export function Quote({ name: key, className }: Props) {
  const { name, role, image, website, quote } = quotes[key];

  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-black/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <figure className="mx-auto max-w-4xl">
          <blockquote className="relative font-display text-3xl font-medium tracking-tight text-black sm:text-4xl">
            <q className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
              {quote}
            </q>
          </blockquote>
          <a
            target="_blank"
            className="hover:underline"
            href={website}
            rel="noopener noreferrer"
          >
            <figcaption className="mt-10 flex items-center">
              <Image
                {...image}
                className="h-12 w-12 rounded-full"
                width={45}
                height={45}
                alt={name}
                unoptimized
              />
              <p className="pl-3 text-2xl font-semibold text-neutral-700">
                {name}, {role}
              </p>
            </figcaption>
          </a>
        </figure>
      </Container>
    </div>
  );
}
