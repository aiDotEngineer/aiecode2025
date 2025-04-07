import Image from 'next/image';

type Presenter = {
  name: string;
  profilePhotoUrl: string;
};

type Props = {
  presenters: Presenter[];
};

export function ProfilePictureStack({ presenters }: Props) {
  return (
    <div className="relative">
      {presenters.map((speaker, index) => {
        return (
          <Image
            key={index}
            src={speaker.profilePhotoUrl}
            alt={speaker.name}
            width={64}
            height={64}
            style={{
              // By using `static` on the first image, we avoid any height collapsing
              // of the parent div
              position: index === 0 ? 'static' : 'absolute',
              left: `${index * 50}px`,
              zIndex: index,
            }}
            className="h-16 w-16 rounded-full top-0"
            unoptimized
          />
        );
      })}
    </div>
  );
}
