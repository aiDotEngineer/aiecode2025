import { GridPattern } from './GridPattern';

type Props = {
  children: React.ReactNode;
};

export function SubPageWrap({ children }: Props) {
  return (
    <>
      <GridPattern
        className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-black/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
        yOffset={-96}
        interactive
      />
      <main className="pt-8">{children}</main>
    </>
  );
}
