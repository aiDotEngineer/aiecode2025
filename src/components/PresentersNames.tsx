type Presenter = {
  company?: string; // this is handled at the getPresenters section
  name: string;
  tagline: string;
};

type Props = {
  presenters: Presenter[];
};

export function PresentersNames({ presenters }: Props) {
  return (
    <div>
      {presenters.map((speaker, index) => {
        const roleAndCompany = [speaker.tagline, speaker.company]
          .filter(Boolean)
          .join(', ');

        return (
          <div key={index}>
            <p className="mt-1 flex gap-x-2 text-sm text-black">
              <span className="font-semibold">{speaker.name}</span>
              <span className="text-neutral-300" aria-hidden="true">
                /
              </span>
              <span>{roleAndCompany}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
