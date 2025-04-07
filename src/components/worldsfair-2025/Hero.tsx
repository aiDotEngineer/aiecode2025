import { useRef } from 'react';
import Image from 'next/image';

import { Logo } from '~/components/Logos';
import { HeroBuyTickets } from '~/components/worldsfair-2025/HeroBuyTickets';
import imgPlaceholder from '~/images/worldsfair-2025/hero-placeholder.jpg';
import { useWorldsFair2025 } from '../ChoosePrimaryLayout';
import { Container } from '../Container';

export function Hero() {
  const { BUY_TICKETS_URL } = useWorldsFair2025();
  const videoRef = useRef<HTMLVideoElement>(null!);

  // We don't need this now, but we might later
  // const [playing, setPlaying] = useState(false);
  // useEffect(() => {
  //   function isPlaying() {
  //     setPlaying(true);
  //   }
  //   videoRef.current.addEventListener('play', isPlaying);
  //   const video = videoRef.current;
  //   return () => {
  //     video.removeEventListener('play', isPlaying);
  //   };
  // }, []);

  return (
    <div className="pt-24 relative text-white">
      {/* overlay tint for video */}
      <div className="bg-black/50 md:bg-black/70 absolute -z-10 top-0 bottom-0 left-0 w-full" />
      <Image
        alt="Video Placeholder Image"
        src={imgPlaceholder}
        className="absolute -z-20 top-0 right-0 w-full h-full object-cover"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="max-md:hidden absolute -z-20 top-0 right-0 w-full h-full object-cover"
      >
        <source src="worldsfair-hero-bg.mp4" type="video/mp4" />
      </video>

      <Container>
        <div className="space-y-6 pt-6">
          <div className="m-auto">
            {/* Object required for animated svg */}
            <object
              aria-label="foo"
              type="image/svg+xml"
              className="aspect-auto w-72 m-auto lg:w-96"
              data="/worldsfair-logo-animated.svg"
            />
          </div>
          <div className="text-center m-auto max-w-4xl space-y-3">
            <div>June 3-5 2025 • San Francisco</div>
            <h1 className="text-6xl font-bold">
              The Biggest Technical AI conference in San Francisco
            </h1>
            <p>
              Where the leading AI companies, AI founders, VPs of AI & AI
              Engineers meet. Featuring an Expo floor showcasing 30+ companies
              pioneering the AI Engineering landscape, and over 100+ speakers
              delivering talks and workshops across 9 tracks.
            </p>

            <div className="space-y-8 pb-5">
              {/* <p>Lock-in the lowest rate to attend in person:</p> */}
              <HeroBuyTickets url={BUY_TICKETS_URL} />
              <p>Presented By:</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex flex-col items-center">
        <div className="inline-flex gap-10 lg:gap-20 items-center justify-center p-10 bg-white rounded-t-3xl w-full sm:w-auto">
          <a
            href="https://azure.microsoft.com/en-us/solutions/ai"
            target="_blank"
          >
            <Logo
              logo="microsoft"
              variant="colorGray"
              className="w-40 lg:w-44"
            />
          </a>
          <a href="https://smol.ai" target="_blank">
            <Logo logo="smolai" variant="black" className="w-24 lg:w-28" />
          </a>
        </div>
      </div>
    </div>
  );
}
