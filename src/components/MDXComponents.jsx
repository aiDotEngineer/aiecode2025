// @ts-nocheck
import Link from 'next/link';
import clsx from 'clsx';

import { Blockquote } from '~/components/Blockquote';
import { Border } from '~/components/Border';
import { EventDetailsHeader } from '~/components/EventDetailsHeader';
import { GrayscaleTransitionImage } from '~/components/GrayscaleTransitionImage';
import { SessionHeader } from '~/components/SessionHeader/SessionHeader';
import { SocialMedia } from '~/components/SocialMedia';
import { TagList, TagListItem } from '~/components/TagList';

export const MDXComponents = {
  Blockquote({ className, ...props }) {
    return <Blockquote className={clsx('my-32', className)} {...props} />;
  },
  SocialMedia,
  Link,
  EventDetailsHeader,
  SessionHeader,
  img: function Img({ className, ...props }) {
    return (
      <div
        className={clsx(
          'group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6',
          className,
        )}
      >
        <GrayscaleTransitionImage
          {...props}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
    );
  },
  table: function Table({ className, ...props }) {
    return (
      <div
        className={clsx(
          'my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto',
          className,
        )}
      >
        <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
          <table {...props} />
        </div>
      </div>
    );
  },
  TagList({ className, ...props }) {
    return <TagList className={clsx('my-6', className)} {...props} />;
  },
  TagListItem,
  TopTip({ className, children }) {
    return (
      <Border position="left" className={clsx('my-10 pl-8', className)}>
        <p className="font-display text-sm font-bold uppercase tracking-widest text-black">
          Top tip
        </p>
        <div className="mt-4">{children}</div>
      </Border>
    );
  },
  Typography({ className, ...props }) {
    return <div className={clsx('typography', className)} {...props} />;
  },
  wrapper({ ...props }) {
    return <div className="mdx-content" {...props} />;
  },
};
