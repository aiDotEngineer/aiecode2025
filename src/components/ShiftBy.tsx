type Props = {
  children: React.ReactNode;
  x?: number;
  y?: number;
};

export function ShiftBy({ children, x = 0, y = 0 }: Props) {
  return (
    <div style={{ transform: `translate(${x}px, ${y}px)` }}>{children}</div>
  );
}
