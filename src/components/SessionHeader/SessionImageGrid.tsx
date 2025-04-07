import Image from 'next/image';

// import type { Photo } from '@pkg/api/src/cms/types';

import { FadeIn } from '~/components/FadeIn';

// export function SessionImageGrid({ images }: { images: Photo[] }) {
export function SessionImageGrid({ images }: { images: any }) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {images.map((image: any, index: number) => {
        const imageUrl = image.attributes.url;
        return (
          <div key={index}>
            <FadeIn>
              <Image
                src={imageUrl}
                alt={image.attributes.alternativeText ?? ''}
                width={1000}
                height={700}
                className="w-full"
                unoptimized
              />
            </FadeIn>
          </div>
        );
      })}
    </div>
  );
}
