import Image, { type StaticImageData } from "next/image";

import iconAlgo from "~/images/worldsfair-2025/whatsnext/algo.svg";
import iconConfetti from "~/images/worldsfair-2025/whatsnext/confetti.svg";
import bgExpo from "~/images/worldsfair-2025/whatsnext/expo.png";
import bgFacilitatedDiscussions from "~/images/worldsfair-2025/whatsnext/facilitated-discussions.png";
import iconHandshake from "~/images/worldsfair-2025/whatsnext/handshake.svg";
import iconMessages from "~/images/worldsfair-2025/whatsnext/messages.svg";
import bgNerds from "~/images/worldsfair-2025/whatsnext/nerds.png";
import bgNetworking from "~/images/worldsfair-2025/whatsnext/networking.png";
import iconPencil from "~/images/worldsfair-2025/whatsnext/pencil.svg";
import bgTalks from "~/images/worldsfair-2025/whatsnext/talks.png";
import bgWorkshops from "~/images/worldsfair-2025/whatsnext/workshops.png";
import iconWorldCode from "~/images/worldsfair-2025/whatsnext/world-code.svg";
import { Tiles } from "../Tiles";

export function WhatsNext() {
  return (
    <>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="">
          <p className="text-4xl leading-relaxed">
            <b>AI Engineer Paris</b>
            <br />
            brings the global AI engineering movement to Europe for the first time
            <br />
            <b className="text-yellow-300 text-2xl">
              A single-track technical conference & expo gathering 700+ engineers, VPs of AI,
              founders, and CEOs building the future of AI
            </b>
          </p>
        </div>
        <div className=""></div>
      </div>
      <div className="mt-20">
        <Tiles minSize={12}>
          <WhatsNextCard
            icon={iconWorldCode}
            title="Talks from Engineers Who Ship"
            text="No theoretical promissory hoopla. Just engineers and founders on the cutting edge of AI Engineering, sharing their knowledge."
            background={bgTalks}
          />
          <WhatsNextCard
            icon={iconHandshake}
            title="Cutting-edge Expo"
            text="AI Engineering moves fast. Meet the engineers & founders behind the companies who are innovating at the edge of what's possible -- and building a better future."
            background={bgExpo}
          />
          <WhatsNextCard
            icon={iconPencil}
            title="In-depth Workshops"
            text="We've curated 4 workshops for you to choose from, servicing everyone from experienced engineers just starting with AI Engineering, to experienced AI engineers looking to get an edge on the competition."
            background={bgWorkshops}
          />
          <WhatsNextCard
            icon={iconMessages}
            title="Facilitated Discussions with Inspiring Peers"
            text="The hallway track is buzzing with AI Engineers & founders. Every conversation you have -- facilitated with moderators or open -- is ensure to educate & inspire."
            background={bgFacilitatedDiscussions}
          />
        </Tiles>
      </div>
    </>
  );
}

type Props = {
  icon: StaticImageData;
  title: string;
  text: React.ReactNode;
  background: StaticImageData;
};

function WhatsNextCard({ icon, title, text, background }: Props) {
  // Important: The 100%-6em is chosen to bring the text up to support
  // the possibility of two lines of text in the title. This will be
  // the case even when titles are 1 line of text. Consider to that what
  // is 1 line of text in one viewport might be 2 lines when the viewport
  // changes (which is also why we always do 5em)
  return (
    <div className="group relative rounded-3xl h-72 overflow-hidden flex flex-col justify-end">
      <Image alt={title} src={background} className="absolute inset-0 h-72 object-cover" />
      <div className="absolute left-0 right-0 top-0 h-[200%] bg-linear-to-t from-black/90 to-black/20 -translate-y-1/2 group-hover:translate-y-0 transition duration-300" />
      <div className="w-full translate-y-[calc(100%-6em)] group-hover:translate-y-0 transition duration-300 ease-in-out relative">
        {/* Gradient overlay on hover, behind title and text, no padding */}
        <div
          className="
            absolute inset-0 w-full
            bg-gradient-to-t from-black/70 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
            z-0
          "
        />
        <div className="space-y-3 relative z-10 p-6 w-full">
          <Image src={icon} alt="" aria-hidden />
          <div className="font-bold text-sm">{title}</div>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition duration-300">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
