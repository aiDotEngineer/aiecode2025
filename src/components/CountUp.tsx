import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from 'use-count-up';

type Props = {
  start?: number;
  end: number;
  duration?: number;
};

export function CountUp({ start = 0, end, duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null!);
  const isInView = useInView(ref);

  const { value } = useCountUp({
    isCounting: isInView,
    start,
    end,
    duration,
  });

  return <span ref={ref}>{value}</span>;
}
