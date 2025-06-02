import { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

import { Button } from '../Button';
import { NewsletterFormThree } from '../Newsletter';
import { PromptPaidContent } from '../PromptPaidContent';
import { useTito } from '../../hooks/useTito';
import dynamic from 'next/dynamic';

// Dynamically import LiteYouTubeEmbed without SSR to avoid require() errors
const LiteYouTubeEmbed = dynamic(
  () => import('react-lite-youtube-embed').then(mod => mod.default),
  { ssr: false }
);

export function HeroBuyTickets(_props: { url?: string }) {
  const [success, setSuccess] = useState<null | boolean>(null);
  const titoUrl = useTito();

  return (
    <>
    <div className="w-full mt-4">
      <LiteYouTubeEmbed
        id="U-fMsbY-kHY"
        title="World's Fair 2025 Promo"
        wrapperClassName="yt-lite"
      />
    </div>
    <div className="md:w-[500px] m-auto space-y-4">
      {/* YouTube video embed under the buy tickets hero */}
      {/* Take advantage of flexbox and flex items to adjust button sizes beyond their normal height */}
      <div className="flex md:h-14 gap-4 md:gap-4">
        <Button
          className="flex-1 text-xs md:text-base line-through"
          invert
          disabled
          href={titoUrl}
          target="_blank"
        >
          Buy 2025 Tickets (Sold Out)
        </Button>
        
        <span className="self-center">or</span>
        <Button
          className="flex-1 text-xs md:text-base hover:bg-neutral-600/40"
          ghost
          href="https://youtube.com/@aidotengineer"
          target="_blank"
        >
          See 2023-2025 talks
        </Button>
      </div>
        {/* <PromptPaidContent>
          <Button
            className="flex-1 text-xs md:text-base whitespace-nowrap"
            ghost
          >
            Buy 2024 Talks Access
          </Button>
        </PromptPaidContent> */}

      <div className="px-6 py-4 rounded-lg bg-neutral-600/40 backdrop-blur-lg w-full m-auto space-y-3 mb-4">
        <div className="lg:flex lg:justify-between lg:items-center text-sm">
          <div className="font-bold">Get recaps and updates</div>
          <div>Be a top AI Engineer</div>
        </div>
        {!success ? (
          <NewsletterFormThree onSuccess={() => setSuccess(true)} />
        ) : (
          <div className="flex gap-2 items-center rounded-2xl py-[18px] px-6 bg-neutral-400/15">
            <IoMdCheckmark width="1.5em" height="1.5em" />
            Success! Check your inbox for next steps.
          </div>
        )}
      </div>
    </div>
    </>
  );
}
