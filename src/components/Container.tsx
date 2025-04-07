import { type ElementType } from 'react';

type Props<E extends ElementType> = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: number;
  as?: E;
};

export function Container<E extends ElementType = 'div'>({
  children,
  className,
  maxWidth = 1200,
  as,
}: Props<E>) {
  const El = as ?? 'div';
  return (
    <El className={className}>
      <div
        className="mx-auto px-4 sm:px-8 h-full"
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {children}
      </div>
    </El>
  );
}
