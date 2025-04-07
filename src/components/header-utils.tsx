import Link from 'next/link';
import clsx from 'clsx';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  onClick(): void;
};

// Mostly exists for consistent UI
export function NavLink({ children, href, onClick }: NavLinkProps) {
  const disabled = href.length === 0;
  return (
    <Link
      className={clsx(
        `text-left block md:flex-1 p-10 md:p-16 md:odd:border-r max-md:border-b border-gray-800`,
        { 'text-gray-500': disabled },
      )}
      href={href || '#'}
      onClick={onClick}
    >
      <span className="relative">
        {children}
        {disabled && (
          // Absolute positioning these ensures the box look to the link doesn't change shape
          <b className="text-base text-white absolute top-6 lg:top-12 left-0">
            Coming Soon
          </b>
        )}
      </span>
    </Link>
  );
}

export function CloseMenuButton({ onClick }: { onClick(): void }) {
  return (
    <button onClick={onClick}>
      <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"
          fill="currentColor"
        />
        <path
          d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}

export function OpenMenuButton({
  onClick,
}: {
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}) {
  return (
    <button onClick={onClick}>
      <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 6h20v2H2zM2 16h20v2H2z" fill="currentColor" />
      </svg>
    </button>
  );
}
