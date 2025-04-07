import Image, { type StaticImageData } from 'next/image';

import iconAlgo from '~/images/worldsfair-2025/whatsnext/algo.svg';
import iconConfetti from '~/images/worldsfair-2025/whatsnext/confetti.svg';
import bgExpo from '~/images/worldsfair-2025/whatsnext/expo.png';
import bgFacilitatedDiscussions from '~/images/worldsfair-2025/whatsnext/facilitated-discussions.png';
import iconHandshake from '~/images/worldsfair-2025/whatsnext/handshake.svg';
import iconMessages from '~/images/worldsfair-2025/whatsnext/messages.svg';
import bgNerds from '~/images/worldsfair-2025/whatsnext/nerds.png';
import bgNetworking from '~/images/worldsfair-2025/whatsnext/networking.png';
import iconPencil from '~/images/worldsfair-2025/whatsnext/pencil.svg';
import bgTalks from '~/images/worldsfair-2025/whatsnext/talks.png';
import bgWorkshops from '~/images/worldsfair-2025/whatsnext/workshops.png';
import iconWorldCode from '~/images/worldsfair-2025/whatsnext/world-code.svg';
import { Tiles } from '../Tiles';

export function WhatsNext() {
  return (
    <>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="">
          <p className="text-4xl leading-relaxed">
            The <b>AI Engineer World's Fair</b>
            <br />
            is the largest industry event to discover what's now and
            <br />
            <b className="text-6xl">What's Next</b>
          </p>
        </div>
        <div className=""></div>
      </div>
      <div className="mt-20">
        <Tiles minSize={16}>
          <WhatsNextCard
            icon={iconWorldCode}
            title="Talks from Engineers Who Ship"
            text="No theoretical promissory hooplah. Just engineers and founders on the cutting edge of AI Engineering, sharing their knowledge."
            background={bgTalks}
          />
          <WhatsNextCard
            icon={iconHandshake}
            title="Cutting-edge Expo"
            text="AI Engineering moves fast. Meet the engineers & founders behind the companies who are innovating at the edge of what's possible -- and building a better future."
            background={bgExpo}
          />
          <WhatsNextCard
            icon={iconMessages}
            title="Facilitated Discussions with Inspiring Peers"
            text="The hallway track is buzzing with AI Engineers & founders. Every conversation you have -- facilitated with moderators or open -- is ensure to educate & inspire."
            background={bgFacilitatedDiscussions}
          />
          <WhatsNextCard
            icon={iconPencil}
            title="In-depth Workshops"
            text="We've curated over 20 workshops for you to choose from, servicing everyone from experienced engineers just starting with AI Engineering, to experienced AI engineers looking to get an edge on the competition."
            background={bgWorkshops}
          />
          <WhatsNextCard
            icon={iconAlgo}
            title="Algorithmic Networking"
            text="Get matched with people we (er, our algo) thinks will provide you with value. Refine your results by adding more information to your profile."
            background={bgNetworking}
          />
          <WhatsNextCard
            icon={iconConfetti}
            title="The Nerdiest Fun You Can Have"
            text="Stimulation for your brain, inspiration for your soul, education for your business. And excellent food to power you through the excitement!"
            background={bgNerds}
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
    <div className="group relative rounded-3xl h-72 overflow-hidden p-6 flex flex-col justify-end">
      <Image
        alt={title}
        src={background}
        className="absolute inset-0 h-72 object-cover"
      />
      <div className="absolute left-0 right-0 top-0 h-[200%] bg-linear-to-b from-black/90 to-black/20 -translate-y-1/2 group-hover:translate-y-0 transition duration-300" />
      <div className="space-y-3 translate-y-[calc(100%-6em)] group-hover:translate-y-0 transition duration-300 ease-in-out">
        <Image src={icon} alt="" aria-hidden></Image>
        <div className="font-bold text-xl">{title}</div>
        <p className="text-base opacity-0 group-hover:opacity-100 transition duration-300">
          {text}
        </p>
      </div>
    </div>
  );
}
