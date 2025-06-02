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
          We've designed & curated a program to provide you with maximum value,
          intrigue, and fun. Here's the high level overview of the main content:
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
          <div className="text-gray-on-white text-base">/ Tue, June 3</div>
          <h2 className="text-3xl font-bold">
            Workshop Day + Evening Expo &amp; Reception
          </h2>
          <p className="text-gray-on-white text-base">
            <b>Workshops</b> - Exclusive to “Conference + Workshop Pass”
            ticketholders, choose from up to 5 different workshops available
            concurrently across various subjects and skill levels. Instructed by
            companies, founders, & engineers who are pushing the boundaries of
            AI Engineering.
          </p>
          <p className="text-gray-on-white text-base">
            Up to 5 different workshops will be available concurrently across
            various subjects and skill levels, assuring that you will find the
            content that will level up your skills, career, and business.
          </p>
          <hr />
          <p className="text-gray-on-white text-base">
            <b>Welcome Reception</b> - Open to all ticketholders, the evening
            welcome reception takes place from 4:00 - 7:00pm in the Grand
            Assembly & the Expo. Mingle with other attendees & sponsors over
            food and drinks, and take in some sessions from our top sponsors at
            their booths and in the expo session salons.
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
          <div className="text-gray-on-white text-base">/ June 4 - 5</div>
          <h2 className="text-3xl font-bold">Conference Days</h2>
          <p className="text-gray-on-white text-base">
            A full day of talks across 12 tracks, bookended with inspiring and
            revealing keynotes from the biggest and most consequential
            companies, founders, & engineers in the industry.
          </p>
          <p className="text-gray-on-white text-base">
            The most exciting and innovative expo of the year continues all day,
            with additional technical breakout sessions from our Gold and above
            sponsors.
          </p>
          <p className="text-gray-on-white text-base">
            <i>Conference + Workshop Pass</i> ticketholders also receive access
            to additional workshops on these days.
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
          <div className="text-gray-on-white text-base">/ June 4 - 5</div>
          <h2 className="text-3xl font-bold">2 Leadership Tracks</h2>
          <p className="text-gray-on-white text-base">
            <b>TWO Exclusive tracks for VPs & Execs.</b> The 2025 leadership track was so nice we're doing it twice! 
            Access to all the regular eng tracks and workshops, plus access to 2 exclusive leadership tracks: <b>AI Architects</b> 
            and <b>AI in the Fortune 500</b> where
            you'll get learn from & connect with the most senior AI people in their respective
            companies, as well as real life deployments at large enterprise scale, 
            along with facilitated discussions, & exclusive
            access to closed-door sit-down breakfasts and lunches on both
            session days. Since this is mixed in with the regular conference, 
            you can simply <b>bring your whole team</b> and compare notes after!
          </p>
          <hr />
          <p className="text-gray-on-white text-base">
            <b>Leadership Track Perks.</b> This 300-person track comes with
            exclusive access to the VIP welcome reception on June 3rd with
            speakers in the stunning View Lounge on top of the Marquis. Continue
            to enjoy 360-degree views of the city at the View Lounge as our
            buyout extends to June 4 & 5 for all-day networking, facilitated
            discussions, & a premium sit-down lunch.
          </p>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div className="h-60 md:h-72 lg:flex-1 space-y-12 mt-12 relative hidden md:block">
          <Image
            src={imgOtherDays1}
            alt="Other Events"
            className="rounded-3xl w-full h-full object-cover object-center"
          />
          <Image
            src={imgOtherDays2}
            alt="Other Events"
            className="rounded-3xl w-full h-full object-cover object-center"
          />
        </div>
        <div className="lg:flex-1 space-y-3">
          <div className="text-gray-on-white text-base">/ June 1 - 8</div>
          <h2 className="text-3xl font-bold" id="events">
            Pre-party, Hackathons, Afterparty, and Other SF AI Events
          </h2>
          <p className="text-gray-on-white text-base">
            Come for the World's Fair, stay for the SF AI scene! You can also add the <a href="https://lu.ma/ls" target="_blank" className="text-blue-700 hover:text-blue-500 mx-1">lu.ma collection</a> (click RSS Logo next to Submit Event) to see them all on your calendar. <br />
          </p>
          <ul className="text-gray-on-white text-base list-disc ml-2">
            <li>
              May 31 - Jun 1 (Saturday - Sunday):
              <a
                href="https://cerebralvalley.ai/e/aiewf-hackathon-2025"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b className="bg-yellow-300">AI Engineer World's Fair Official Hackathon</b> - $10k in cash prizes + judged by 3000 AI Engineers!
              </a>
            </li>
            <li>
              May 31 - Jun 1:
              <a
                href="https://lu.ma/n8n-aiworkflow-hack"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b>n8n</b> AI Workflow Hackathon
              </a>
            </li>
            <li>
              Jun 2 (Monday AFTERNOON):
              <a
                href="https://partiful.com/e/OSXWcJWzNYEn11FzPQ2y"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b>SF Compute</b> - Cuda Crunch
              </a>
            </li>
            <li>
              Jun 2 (Monday):
              <a
                href="https://lu.ma/87kr0w9r"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b>AI Native Dev</b> - SF Meetup
              </a>
            </li>
            <li>
              Jun 2:
              <a
                href="https://lu.ma/xpanderai-workshop"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b>xpander.ai</b> AI Agents Workshop
              </a>
            </li>
            <li>
              Jun 2:
              <a
                href="https://lu.ma/b9tfsnbj"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI VIP Mixer with <b>G2i and Hypermode</b>
              </a>
            </li>
            <li>
              Jun 3 (Tuesday):
              <a
                href="https://lu.ma/34vu2ojj"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b>CRV</b> AI Engineer Happy Hour
              </a>
            </li>
            <li>
              Jun 3:
              <a
                href="https://x.com/patio11/status/1928570751118094527"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b>@patio11</b> Berkeley meetup
              </a>
            </li>
            <li>
              Jun 3:
              <a
                href="https://lu.ma/fi449s7o"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                GenAI Mixer by <b>ElevenLabs, Freepik & HeyGen</b>
              </a>
            </li>
            <li>
              Jun 3:
              <a
                href="https://lu.ma/o648ixbd"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI Agent SF #3 - <b>Agent Protocols</b>
              </a>
            </li>
            <li>
              Jun 3:
              <a
                href="https://lu.ma/wodr7uk0?tk=dvB21W"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b>AWS & Anthropic</b> GenAI Reception
              </a>
            </li>
            <li>
              Jun 3:
              <a
                href="https://lu.ma/oee72oif"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Agents Builders: <b>Latent Space, Veris, Sailplane</b>
              </a>
            </li>
            <li>
              Jun 4 (Wed):
              <a
                href="https://lu.ma/4owq9aif"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b>Graphite x Accel</b>: AI Leadership Summit
              </a>
            </li>
            <li>
              Jun 4:
              <a
                href="https://lu.ma/09vufbbo"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI Leadership Dinner (w/ <b>Cloudflare</b> for Leadership only)
              </a>
            </li>
            <li>
              Jun 4:
              <a
                href="https://lu.ma/nb9ss3s7?utm_medium=landing-page&utm_source=ai-engineering-worlds-fair"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Build-an-Agent Hack Night (w/ <b>Dagger.io</b>)
              </a>
            </li>
            <li>
              Jun 4:
              <a
                href="https://lu.ma/01xkr4c0"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                An Evening with <b>Modal</b> at AI World's Fair
              </a>
            </li>
            <li>
              Jun 4:
              <a
                href="https://lu.ma/finetuned"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Damn You Fine[tuned] (by <b>Baseten & Oxen.ai</b>)
              </a>
            </li>
            <li>
              Jun 4:
              <a
                href="https://lu.ma/wsz7kb78"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Billing & Baseball (by <b>Orb </b>)
              </a>
            </li>
            <li>
              Jun 4:
              <a
                href="https://lu.ma/52yusbil"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b>MongoDB</b> VIP Reception & Fireside Chat with Tengyu Ma
              </a>
            </li>
            <li>
              Jun 5 (Thursday):
              <a
                href="https://lu.ma/aiafterhourssf"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI After Hours with <b>Sourcegraph</b>
              </a>
            </li>
            <li>
              Jun 5:
              <a
                href="https://www.supermomos.com/socials/ai-leaders-builders-fireside"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI Builders Chat + Mixer (<b>Singapore EDB</b> and <b>SGN</b>)
              </a>
            </li>
            <li>
              Jun 5:
              <a
                href="https://lu.ma/a6c8pruh"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Software that lasts with <b>Northflank, Krea, PlayAI, Weights</b>
              </a>
            </li>
            <li>
              Jun 5:
              <a
                href="https://partiful.com/e/8mRLJDwyGlt1qduiW0Lo"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Raise your model temperature @ Banya
              </a>
            </li>
            <li>
              Jun 5:
              <a
                href="https://lu.ma/yb8q32lp"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Hack Comedy: An AI Comedy Show
              </a>
            </li>
            <li>
              Jun 5:
              <a
                href="https://lu.ma/0azsbkmf"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Video AI Summit (<b>TwelveLabs, vimmerse.net, xpressive.ai</b>)
              </a>
            </li>
            <li>
              Jun 5 (late):
              <a
                href="https://cerebralvalley.ai/e/aie-worlds-fair-afterparty-hack-night-agent-ops-hq-1ec40b0b?utm_source=t"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AIE World's Fair Afterparty Hack Night @ AgentOps HQ
              </a>
            </li>
            <li>
              Jun 6 (Friday):
              <a
                href="https://lu.ma/3slkqscs"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1 bg-amber-50 p-1 rounded-sm"
              >
                <b>Placeholder AI Engineer Social/Meetup</b> (join to indicate availability)
              </a>
            </li>
          </ul>
          <p className="text-gray-on-white text-base">
            <span className="uppercase font-mono bg-gray-600 p-1 rounded-sm text-yellow-100">
              IMPORTANT
            </span>{" "}
            To get on this list and in front of 3000 AI Engineers, tweet {" "}
            <a
              href="https://twitter.com/aidotengineer"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
            >
              @aidotengineer/@swyx
            </a>{" "}
            with a link to your 2025 side event!
          </p>
          <p className="text-gray-on-white text-base">
            Our partners and friends organized these side events last year:
          </p>
          {/* <p className=""> */}
          <ul className="text-gray-on-white bg-gray-200 p-4 h-[200px] overflow-y-scroll text-base">
            <li>
              2024:
              {/* Jun 22 2024: */}
              <a
                href="https://agihouse-app.web.app/events/ai21-jamba-hackathon"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI21 Jamba Hackathon
              </a>
            </li>
            <li>
              2024:
              {/* Jun 23 2024: */}
              <a
                href="https://lu.ma/fast-takeoff"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Fast Takeoff: SF Deep Tech Week Launch Party
              </a>
            </li>
            <li>
              2024:
              {/* Jun 24 2024: */}
              <a
                href="https://lu.ma/vpdj2zoj?utm_source=aiewf"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1 font-bold"
              >
                the RAG++ Official AIEWF Pre-party by DataStax
              </a>
            </li>
            <li>
              2024:
              {/* Jun 24 2024: */}
              <a
                href="https://lu.ma/genlabxaiengineer"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1 font-bold"
              >
                the GenLab x AIEWF Amplifying Humans Hackathon
              </a>{" "}
              (winners present at AIEWF!)
            </li>
            <li>
              2024:
              {/* Jun 24 2024: */}
              <a
                href="https://lu.ma/LLMemory"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Long-Term Memory with MindsDB, MemGPT, and Arize AI
              </a>
            </li>
            <li>
              2024:
              {/* Jun 24 2024: */}
              <a
                href="https://lu.ma/ai-engineer-summit-pre-party"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI Devtools Pre-Party w/ Heavybit & Continue.dev
              </a>
            </li>
            <li>
              2024:
              {/* Jun 24 2024: */}
              <a
                href="https://lu.ma/ai-devtools-night"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI Dev Tools Night w/ Sourcegraph, Weaviate, Jam.dev
              </a>
            </li>
            <li>
              2024:
              {/* Jun 25 2024: */}
              <a
                href="https://www.aiqualityconference.com/"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                the AI Quality Conference
              </a>
            </li>
            <li>
              2024:
              {/* Jun 25 2024: */}
              <a
                href="https://lu.ma/stg79kvs"
                target="_blank"
                className="font-bold text-blue-700 hover:text-blue-500 mx-1"
              >
                Cheers in the Clouds
              </a>{" "}
              with Crusoe (onsite!)
            </li>
            <li>
              2024:
              {/* Jun 26 2024: */}
              <a
                href="https://www.eventbrite.com/e/emergence-ai-launch-rooftop-after-party-tickets-927539093397?aff=oddtdtcreator"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Emergence.ai Rooftop Afterparty
              </a>{" "}
              to celebrate Launch
            </li>
            <li>
              2024:
              {/* Jun 26 2024: */}
              <a
                href="https://lu.ma/tmxrddfq"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AIEWF Rooftop Happy Hour
              </a>{" "}
              Presented by Galileo, Cohere and Baseten
            </li>
            <li>
              2024:
              {/* Jun 26 2024: */}
              <a
                href="https://partiful.com/e/R4rkf0paYZBRS5T6HmTM"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Replicate After-After Party
              </a>{" "}
              7pm-10pm
            </li>
            <li>
              2024:
              {/* Jun 27 2024: */}
              <a
                href="https://x.com/davefontenot/status/1797676470527234409"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1 font-bold"
              >
                HF0 Demo Day
              </a>{" "}
              (inside the AIEWF Expo Sessions!)
            </li>
            <li>
              2024:
              {/* Jun 27 2024: */}
              <a
                href="https://lu.ma/8rxxdche"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI Builders Dinner
              </a>{" "}
              by BCV
            </li>
            <li>
              2024:
              {/* Jun 27 2024: */}
              <a
                href="https://lu.ma/anthropicAIworldfair"
                target="_blank"
                className="font-bold text-blue-700 hover:text-blue-500 mx-1"
              >
                Anthropic x AWS Happy Hour
              </a>{" "}
              Talks, networking, demos!
            </li>
            <li>
              2024:
              {/* Jun 28 2024: */}
              <a
                href="https://lu.ma/k5mbvxxp"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                World's Fair Closer: AI Sizzle and Waves @ GitHub HQ
              </a>
            </li>
            <li>
              2024:
              {/* Jun 30 2024: */}
              <a
                href="https://www.startupweekendsf.com/"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Techstars Startup Weekend
              </a>
            </li>
          </ul>
          {/* </p> */}
          <p className="text-gray-on-white text-base">
            With much of the AI world flying in to SF, there are lots of
            meetings and side events that will be organized in the surrounding
            days.{" "}
            <b>
              We recommend flying in for the whole week from Monday through
              Friday
            </b>{" "}
            so as not to miss out.
          </p>
          <p className="text-gray-on-white text-base">
            <b>If you are organizing an event around the week of June 1-8</b>,
            please tweet {" "}
            <a
              href="https://twitter.com/aidotengineer"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
            >
              @aidotengineer/@swyx
            </a>{" "}
            with a link to your 2025 side event to list on our calendar for attendees to find you!
          </p>
        </div>
      </div>
    </div>
  );
}
