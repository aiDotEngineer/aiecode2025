// TODO: This should be:
// import { type StaticImageData } from 'next/image';
interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

declare module '*.svg' {
  const content: StaticImageData;
  export default content;
}

declare module '*.png' {
  const content: StaticImageData;
  export default content;
}

declare module '*.jpg' {
  const content: StaticImageData;
  export default content;
}

declare module '*.jpeg' {
  const content: StaticImageData;
  export default content;
}

// Type declaration for react-lite-youtube-embed (fix TS module not found error)
declare module 'react-lite-youtube-embed' {
  import React from 'react';
  interface LiteYouTubeEmbedProps {
    id: string;
    title?: string;
    wrapperClassName?: string;
    /** Additional props passed down to the iframe */
    [key: string]: any;
  }
  const LiteYouTubeEmbed: React.FC<LiteYouTubeEmbedProps>;
  export default LiteYouTubeEmbed;
}
