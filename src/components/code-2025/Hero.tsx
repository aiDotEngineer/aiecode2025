import { useRef } from 'react';
import Image from 'next/image';

import { Logo } from '~/components/Logos';
// import { HeroBuyTickets } from '~/components/summit-2025/HeroBuyTickets';
import imgSummitLogo from '../../images/code-2025/ai_eng_summit_logo.svg';
import imgPlaceholder from '~/images/code-2025/hero-placeholder.jpg';
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
        <div className="space-y-6 py-6">
          <div className="m-auto">
            <Image
              alt="Code 2025 Logo"
              src={imgSummitLogo}
              className="aspect-auto w-72 m-auto lg:w-96"
            />
          </div>
          <div className="text-center m-auto max-w-4xl space-y-3">
            <div>Nov 19 - 22 • The Times Center, New York, NY</div>
            <h1 className="text-6xl font-bold">
              Building AI Orgs and AI Agents in 2025
            </h1>
            <p className="bg-black/40 bg-opacity-40 text-white/90">
              The AI Engineer Code Summit is the #1 technical conference in the world
              for AI engineers and leadership (CTOs & VPs of AI) to meet, learn,
              and advance the field of <b>AI Coding</b>. Speakers and sponsors 
              of our past events include founders and senior leaders of DeepMind, OpenAI, Anthropic,
               Meta, Cohere,  Mistral, Midjourney, Cursor, Cognition, Vercel, Cartesia, NVIDIA, Groq, Crusoe, Together.ai, Fireworks,
               LangChain, LlamaIndex, Databricks, Neo4j, MongoDB, GitHub, Microsoft, Google, AWS and more.
            </p>
            {/* <p className="bg-black/40 bg-opacity-40 text-white/90">
              <b>The theme of this Summit is AI Coding</b>. We believe that the Decade of Agents is going to be led by Coding Agents first, and so this is the greatest collection of Coding Agent builders and power users in one place.
            </p> */}
            <p className="bg-black/40 bg-opacity-40 text-white/90">
              We are convening the
              top Coding Agent builders in the field to share their work, discuss
              problems, and recap 2025 and preview 2026 in AI Coding. Attendees are invite only for a highly curated experience. Join us!
            </p>

            <div className="space-y-8 pb-5">
              {/* <p>Lock-in the lowest rate to attend in person:</p> */}
              {/* <HeroBuyTickets url={BUY_TICKETS_URL} /> */}
              <div className="flex gap-4 justify-center">
                <a
                  href={"https://apply.ai.engineer"}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for a spot
                </a>
              </div>
              {/* <p>Presented By:</p> */}
            </div>
          </div>
        </div>
      </Container>
      {/* <div className="flex flex-col items-center">
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
          <a href="https://smol.ai/news" target="_blank">
            <Logo logo="smolai" variant="black" className="w-24 lg:w-28" />
          </a>
        </div>
      </div> */}
    </div>
  );
}
