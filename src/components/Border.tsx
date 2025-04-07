import clsx from 'clsx';

type Props = {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  invert?: boolean;
  position?: 'top' | 'left';
};

export function Border({
  as: Component = 'div',
  children,
  className,
  invert = false,
  position = 'top',
  ...props
}: Props) {
  return (
    <Component
      className={clsx(
        className,
        'relative before:absolute after:absolute',
        invert
          ? 'before:bg-white after:bg-white/10'
          : 'before:bg-black after:bg-black/10',
        position === 'top' &&
          'before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px',
        position === 'left' &&
          'before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px',
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
