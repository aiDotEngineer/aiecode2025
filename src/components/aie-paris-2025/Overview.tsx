import Image from "next/image";

import imgLeadershipTrack1 from "~/images/worldsfair-2025/overview/leadership-track-1.jpg";
import imgLeadershipTrack2 from "~/images/worldsfair-2025/overview/leadership-track-2.jpg";
import imgOtherDays1 from "~/images/worldsfair-2025/overview/other-days-1.png";
import imgOtherDays2 from "~/images/worldsfair-2025/overview/other-days-2.jpg";
import imgSessionDays1 from "~/images/worldsfair-2025/overview/session-days-1.jpg";
import imgSessionDays2 from "~/images/worldsfair-2025/overview/session-days-2.jpg";
import imgWorkshops1 from "~/images/worldsfair-2025/overview/workshop-day-1.jpg";
import imgWorkshops2 from "~/images/worldsfair-2025/overview/workshop-day-2.jpg";

export function Overview() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="text-6xl font-bold">Program Overview</h1>
        <p className="max-w-2xl text-gray-on-white">
          A curated program to provide you with maximum value, intrigue, and fun. Here's the high
          level overview of the main content:
        </p>
      </header>

      <div className="flex gap-20 max-lg:flex-col">
        <div className="h-60 md:h-72 lg:flex-1 relative mt-12">
          <Image
            src={imgWorkshops1}
            alt="Workshop Attendees"
            className="rounded-3xl fade-image-top absolute w-full h-full object-cover object-center"
          />
          <Image
            src={imgWorkshops2}
            alt="Workshop Attendees"
            className="rounded-3xl fade-image-bottom absolute w-full h-full object-cover object-center"
          />
        </div>
        <div className="lg:flex-1 space-y-3">
          <div className="text-gray-on-white text-base">/ Tue, Sep 23 4:00 - 8:00pm</div>
          <h2 className="text-3xl font-bold">Conference opener</h2>
          <p className="text-gray-on-white text-base">
            Join us for an evening of opening keynotes, expo, and welcome reception vibes! Meet &
            chat with the top engineers and founders in the industry. Food and drinks provided.
          </p>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div className="h-60 md:h-72 lg:flex-1 relative mt-12">
          <Image
            src={imgSessionDays1}
            alt="Conference Speaker"
            className="rounded-3xl fade-image-top absolute w-full h-full object-cover object-center"
          />
          <Image
            src={imgSessionDays2}
            alt="Conference Speaker"
            className="rounded-3xl fade-image-bottom absolute w-full h-full object-cover object-center"
          />
        </div>
        <div className="lg:flex-1 space-y-3">
          <div className="text-gray-on-white text-base">/ Wed, Sep 24 8:00am - 6:00pm</div>
          <h2 className="text-3xl font-bold">Conference Day</h2>
          <p className="text-gray-on-white text-base">
            We've curated a full day of talks and workshops with inspiring and revealing keynotes
            from the biggest and most consequential companies, founders, & engineers in the
            industry.
          </p>
          <p className="text-gray-on-white text-base">
            The expo runs all day — your go-to destination between sessions — featuring the latest
            tools, products, and platforms in AI engineering. Explore what teams are building, meet
            the people behind them, and discover what’s next.
          </p>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col">
        <div className="h-60 md:h-72 lg:flex-1 mt-12 relative">
          <Image
            src={imgLeadershipTrack1}
            alt="Group setting"
            className="rounded-3xl fade-image-top absolute w-full h-full object-cover object-center"
          />
          <Image
            src={imgLeadershipTrack2}
            alt="Group setting"
            className="rounded-3xl fade-image-bottom absolute w-full h-full object-cover object-center"
          />
        </div>
        <div className="lg:flex-1 space-y-3">
          <div className="text-gray-on-white text-base">/ Wed, Sep 24, 6:00 - 11:00pm</div>
          <h2 className="text-3xl font-bold">Afterparty in the Expo</h2>
          <p className="text-gray-on-white text-base">
            Reflect and the day's talks and discuss with your peers, speakers, and sponsors. Releax
            and unwind with food and drinks provided!
          </p>
        </div>
      </div>

      <div className="text-center space-y-6 p-8 bg-stone-200 rounded-2xl">
        <p className="text-gray-600">
          The speakers are still being finalized - talks are yet to be announced!{" "}
          <a
            href="https://sessionize.com/ai-engineer-paris/"
            className="text-blue-500 hover:text-blue-400"
          >
            Apply to speak here
          </a>
        </p>
      </div>
    </div>
  );
}
