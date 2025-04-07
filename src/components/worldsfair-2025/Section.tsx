import clsx from 'clsx';

type SectionProps = {
  children: React.ReactNode;
  lightText?: boolean;
  roundTop?: boolean;
  maxWidth?: number;
  className?: string;
  id?: string;
};

export function Section({
  children,
  lightText = false,
  roundTop = false,
  className: additionalClassNames,
  maxWidth = 1200,
  ...props
}: SectionProps) {
  const classNames = {
    'text-white': lightText,
    'rounded-t-3xl': roundTop,
    '-mt-5': roundTop, // pull section over previous section (negative margin)
    'bg-white': !additionalClassNames?.includes('bg-'),
  };
  return (
    <section {...props} className={clsx(classNames, additionalClassNames)}>
      <div
        className={`ml-auto mr-auto px-4 lg:px-8 pt-20 pb-24`}
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {children}
      </div>
    </section>
  );
}
