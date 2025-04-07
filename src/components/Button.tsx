import Link from 'next/link';
import clsx from 'clsx';

import { ShiftBy } from './ShiftBy';

type CommonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLAnchorElement>;

interface Props extends CommonProps {
  invert?: boolean;
  ghost?: boolean;
  border?: boolean;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  border = false,
  children,
  className,
  ghost = false,
  href,
  invert = false,
  target = '',
  type = 'button',
  ...props
}: Props) {
  className = clsx(
    className,
    'inline-flex items-center justify-center rounded-full p-4 transition',
    {
      'bg-black text-white hover:bg-gray-800': !ghost && !invert,
      'bg-white text-black hover:bg-neutral-200': !ghost && invert,
      'text-white bg-white/10': ghost,
      // borders
      'border border-white': border && !invert,
      'border border-gray-300': border && invert,
    },
  );

  const content = <ButtonText>{children}</ButtonText>;

  if (href) {
    return (
      <Link {...props} href={href} className={className} target={target}>
        {content}
      </Link>
    );
  }

  return (
    <button {...props} className={className} type={type}>
      {content}
    </button>
  );
}

function ButtonText({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-semibold text-center text-sm leading-none">
      {/* Our font sits a little high of the baseline, this shifts it down to the vertical center */}
      <ShiftBy y={1.5}>{children}</ShiftBy>
    </div>
  );
}
