import Image from 'next/image';
import Link from 'next/link';

import imgFeb19b from '~/images/code-2025/overview/feb19-leadership-expo.jpg';
import imgFeb19a from '~/images/code-2025/overview/feb19-leadership-reception.jpg';
import imgFeb20a from '~/images/code-2025/overview/feb20-leadership-session.jpg';
import imgFeb20b from '~/images/code-2025/overview/feb20-leadeship.jpg';
import imgFeb21b from '~/images/code-2025/overview/feb21-agent-expo.jpg';
import imgFeb21a from '~/images/code-2025/overview/feb21-agent-session.jpg';
import imgWorkshops2 from '~/images/code-2025/overview/feb22-livestream.jpg';
import imgWorkshops1 from '~/images/code-2025/overview/feb22-workshops.jpg';
import imgOtherDays1 from '~/images/code-2025/overview/other-days-1.png';
import imgOtherDays2 from '~/images/code-2025/overview/other-days-2.jpg';

export function Overview() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="text-6xl font-bold">Program Overview</h1>
        <h1 className="text-4xl">
          <b>The Highest Concentration of Coding Agent leaders in the World</b>
        </h1>
        <p className="max-w-2xl text-gray-on-white">
          We've hand-selected the top builders and leaders in AI Engineering to
          gather in one place to not only learn from speakers, but also to drive
          the industry forward by discovering, discussing, and solving on the
          hard problems, together.
        </p>
      </header>

      <div className="flex gap-20 max-lg:flex-col">
        <div className="h-60 md:h-72 lg:flex-1 relative mt-12">
          <Image
            src={imgFeb19a}
            alt="Workshop Attendees"
            className="rounded-3xl fade-image-top absolute w-full h-full object-cover object-center"
          />
          <Image
            src={imgFeb19b}
            alt="Workshop Attendees"
            className="rounded-3xl fade-image-bottom absolute w-full h-full object-cover object-center"
          />
        </div>
        <div className="lg:flex-1 space-y-3">
          <div className="text-gray-on-white text-base">
            Wednesday, Nov 19, 5:00-7:30pm
          </div>
          <h2 className="text-3xl font-bold">
            Leadership Track Welcome Reception &amp; Expo
          </h2>
          <p className="text-gray-on-white text-base">
            Exclusive to speakers and leadership track attendees, the evening
            welcome reception is an opportunity to register early, meet and chat
            with one another, and mingle with speaekrs and exhibitors. We'll
            also feature talks in the expo along with hors d'oeuvres and drinks.
          </p>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div className="h-60 md:h-72 lg:flex-1 relative mt-12">
          <Image
            src={imgFeb20a}
            alt="Conference Speaker"
            className="rounded-3xl fade-image-top absolute w-full h-full object-cover object-center"
          />
          <Image
            src={imgFeb20b}
            alt="Conference Speaker"
            className="rounded-3xl fade-image-bottom absolute w-full h-full object-cover object-center"
          />
        </div>
        <div className="lg:flex-1 space-y-3">
          <div className="text-gray-on-white text-base">
            Thursday, Nov 20, 8:00am - 7:00pm
          </div>
          <h2 className="text-3xl font-bold">
            Leadership Session Day + Evening Social
          </h2>
          <p className="text-gray-on-white text-base">
            <b>Leadership Track Sessions, 8:00am - 5:00pm</b> - Our highest
            reviewed track: for CTOs, VPs of AI and other technical/engineering
            leaders. How do you effectively lead an AI Product or Engineering
            team in 2025? Defining AI Strategy, technical direction, org design,
            hiring/growing, and build/buy decisions. Executive briefings and
            roundtables on AI platform engineering, model building, evals and
            LLM Ops, inference optimization, code maintenance and technical
            debt, AI Engineer hiring, and more, directly from the top CEOs and
            technical leaders working in this space, from{' '}
            <b>
              OpenAI, Anthropic, LinkedIn, FIS, Booking.com, Writer, Privacera,
              Contextual, Arize, Arista, Datadog
            </b>
            , and more.
            <br />
            <br />
            <b>Evening Reception: 4:00pm - 7:00pm (both tracks) - </b>
            Engineering track attendees are invited to join us starting at
            4:00pm for this onsite evening social in the hallway and expo for
            networking, discussions, and presentations.
          </p>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col">
        <div className="h-60 md:h-72 lg:flex-1 mt-12 relative">
          <Image
            src={imgFeb21a}
            alt="Group setting"
            className="rounded-3xl fade-image-top absolute w-full h-full object-cover object-center"
          />
          <Image
            src={imgFeb21b}
            alt="Group setting"
            className="rounded-3xl fade-image-bottom absolute w-full h-full object-cover object-center"
          />
        </div>
        <div className="lg:flex-1 space-y-3">
          <div className="text-gray-on-white text-base">
            Friday, Nov 21, 8am - 5:00pm
          </div>
          <h2 className="text-3xl font-bold">Agent Engineering Session Day</h2>
          <p className="text-gray-on-white text-base">
            The hottest topic for AI Engineers: how do you turn
            non-deterministic, constantly advancing LLMs into reliable, useful
            agents? We're excited to feature top startups and frameworks
            powering the agent revolution here from{' '}
            <b>
              OpenAI, Anthropic, DeepMind, Blackrock, Jane Street, Bloomberg,
              Codeium, SuperDial
            </b>
            , and more.
            <br></br>
            <br></br>
            <b>
              Note: this day's sessions are exclusive to "Engineering Track" and
              "Bundle Track" tickeholders only.
            </b>
          </p>
          <p className="text-gray-on-white text-base">
            {/* Full list of workshops to be announced, but they will include longform workshops from OpenAI and Anthropic. */}
            {/* Up to 5 different workshops will be available concurrently across
            various subjects and skill levels, assuring that you will find the
            content that will level up your skills, career, and business. */}
          </p>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col flex-row-reverse">
        <div className="h-60 md:h-72 lg:flex-1 relative mt-12">
          <Image
            src={imgWorkshops1}
            alt="Conference Speaker"
            className="rounded-3xl fade-image-top absolute w-full h-full object-cover object-center"
          />
          <Image
            src={imgWorkshops2}
            alt="Conference Speaker"
            className="rounded-3xl fade-image-bottom absolute w-full h-full object-cover object-center"
          />
        </div>
        <div className="lg:flex-1 space-y-3">
          <div className="text-gray-on-white text-base">
            Sat, Nov 22 8:30am - 5:30pm
          </div>
          <h2 className="text-3xl font-bold">Workshops and Livestream Track</h2>
          <p className="text-gray-on-white text-base">
            <b>In-person Workshops</b> - Get Hands on Keyboard with deep dive,
            long form workshops from OpenAI, Anthropic, and more.
            <br />
            <br />
            <b>Livestream Sessions</b> - Learn from additional sessions in our
            exclusive online track from anywhere in the world!{' '}
            <Link
              href="https://www.youtube.com/@aidotengineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500"
            >
              Subscribe on YouTube
            </Link>{' '}
            and{' '}
            <Link
              href="/newsletter"
              className="text-blue-700 hover:text-blue-500"
            >
              join mailing list so you don't miss it!
            </Link>
          </p>
        </div>
      </div>
      <div className="flex gap-20 max-lg:flex-col">
        <div className="h-60 md:h-72 lg:flex-1 mt-12 relative">
          <Image
            src={imgOtherDays1}
            alt="Other Events"
            className="rounded-3xl fade-image-top absolute w-full h-full object-cover object-center"
          />
          <Image
            src={imgOtherDays2}
            alt="Other Events"
            className="rounded-3xl fade-image-bottom absolute w-full h-full object-cover object-center"
          />
        </div>
        <div className="lg:flex-1 space-y-3">
          <div className="text-gray-on-white text-base">
            Thur, Nov 19 - Sun, Nov 23
          </div>
          <h2 className="text-3xl font-bold" id="meetups">
            Side Meetups, Hackathons & Satellite NYC Events
          </h2>
          <p className="text-gray-on-white text-base">
            Come for the Code Summit, stay for the NYC AI scene! <br />
            Many people organize side events around our Summits, and we help promote them for free. Past NYC events include:
          </p>
          {/* <p className=""> */}
          <ul className="text-gray-on-white text-base list-disc ml-2">
            <li>
              <b>Feb 18</b>:
              <a
                href="https://lu.ma/7wn1tmc0"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI Agent Dev Tools @ Microsoft Reactor
              </a>
            </li>
            <li>
              <b>Feb 18</b>:
              <a
                href="https://lu.ma/muqs8kwn"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Developers Developers Developers @ NYC
              </a>
            </li>
            <li>
              <b>Feb 19</b> (9am!):
              <a
                href="https://lu.ma/edafht3j"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Bagels & Lux - AI Engineer Summit Edition
              </a>
            </li>
            <li>
              <b>Feb 19</b>:
              <a
                href="https://lu.ma/jq28g5oc"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Daytona DevTool Gathering NY Winter '25
              </a>
            </li>
            <li>
              <b>Feb 19</b>:
              <a
                href="https://lu.ma/ujq988qn"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI Native Dev NYC
              </a>
            </li>
            <li>
              <b>Feb 19</b>:
              <a
                href="https://lu.ma/q2r5owrx"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                infra.nyc AI Engineer Summit kick-off
              </a>
            </li>
            <li>
              <b>Feb 19</b>:
              <a
                href="https://lu.ma/snwcs91z"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                LangChain & Tavily AI Engineer Summit: Kickoff Meetup
              </a>
            </li>
            <li>
              <b>Feb 20</b>:
              <a
                href="https://lu.ma/3n5f8iz4"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI Eng Summit Happy Hour [Galileo.ai]
              </a>
            </li>
            <li>
              <b>Feb 20</b>:
              <a
                href="https://lu.ma/ai-dinner-7.0"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                DeepSeek Study Group: AI Dinner 7.0
              </a>
            </li>
            <li>
              <b>Feb 20</b>:
              <a
                href="https://partiful.com/e/XPnse1gMD9v8eLe94d3K"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Nomic x AI Engineering Summit Happy Hour
              </a>
            </li>
            <li>
              <b>Feb 20</b>:
              <a
                href="https://lu.ma/h4fu06hq?tk=gtwVE2"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Voice AI Dinner
              </a>
            </li>
            <li>
              <b>Feb 20</b>:
              <a
                href="https://lu.ma/aiengineerdinner"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Leaders in AI Dinner (w/ Sourcegraph CTO Beyang Liu) -
                Application required
              </a>
            </li>
            <li>
              <b>Feb 21</b>:
              <a
                href="https://partiful.com/e/tefTb58eJS92waXDN5yn"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI Builders - Cocktails (w/ Jason Liu, in Williamsburg)
              </a>
            </li>
            <li>
              <b>Feb 21</b>:
              <a
                href="https://lu.ma/5sh4c9bb"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                AI Engineer Happy Hour & Demos at Betaworks
              </a>
            </li>
            <li>
              <b>Feb 21</b>:
              <a
                href="https://cerebralvalley.ai/e/the-ai-engineer-happy-hour-ffffd11c"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                Cerebral Valley AI Engineer Happy Hour
              </a>
            </li>
            <li>
              <b>Feb 22-23</b>:
              <a
                href="https://hackathon.elevenlabs.io/"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b>Official ElevenLabs x AI Engineer Summit Hackathon</b>
              </a>
            </li>
            <li>
              <b>Feb 23</b>:
              <a
                href="https://lu.ma/759ibpob"
                target="_blank"
                className="text-blue-700 hover:text-blue-500 mx-1"
              >
                <b>Cursor Hack Night</b>
              </a>
            </li>
          </ul>
          {/* </p> */}
          <p className="text-gray-on-white text-base">
            With the world's top AI Engineers flying in to NYC, there are lots
            of meetings and side events that will be organized in the
            surrounding days.{' '}
            <b>
              We recommend flying in for the whole weekend from Tuesday through
              Sunday
            </b>{' '}
            so as not to miss out.
          </p>
          <p className="text-gray-on-white text-base">
            <b>
              If you are organizing an NYC AI event around the week of Nov 19-23
            </b>
            , please{' '}
            <a
              href="mailto:info@ai.engineer"
              className="text-blue-700 hover:text-blue-500"
            >
              get in touch with us
            </a>{' '}
            to list on our calendar for attendees to find you!
          </p>
        </div>
      </div>
    </div>
  );
}
