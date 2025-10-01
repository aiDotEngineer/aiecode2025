import { Logo } from '../Logos';

export function Sponsors() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="text-6xl font-bold">Sponsors</h1>
        <p className="max-w-2xl text-gray-on-white">
          We've carefully curated a sponsor expo & non-exhibiting sponsors who
          are relevant, interesting, and pushing the boundaries of the AI
          Engineering ecosystem. These are the companies that are building &
          innovating with AI — from Devtools & Infra to Vector DBs & Open
          Models. Learn more about each of the companies by clicking on their
          logo below, and meet & discuss with their founders & engineering
          representatives at the summit to learn how they can help you take your
          company, product, and internal processes to unparalleled heights.
        </p>
        <p className="max-w-2xl text-gray-on-white">
          We are currently finalizing our sponsor list and will sell out soon.
          Contact us at{' '}
          <a
            href="mailto:sponsorships@ai.engineer"
            className="text-blue-700 hover:text-blue-500"
          >
            sponsorships@ai.engineer
          </a>{' '}
          if you would like sponsor information.
        </p>
      </header>

{/* 
      <div className="space-y-0 text-center">
        <div className="uppercase font-bold text-gray-on-white">
          Platinum Sponsors
        </div>
        <a href="https://solana.com/" target="_blank">
          <Logo
            logo="solana"
            className="inline-block h-20 w-48 md:h-32 md:w-64 object-contain mx-6"
          />
        </a>
      </div>

      <div className="space-y-6 text-center">
        <div className="uppercase font-bold text-gray-on-white">
          Gold Sponsors
        </div>
        <a
          href="https://sourcegraph.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="sourcegraph"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
            style={{ transform: 'scale(1.2)' }}
          />
        </a>
        <a
          href="https://www.rungalileo.io"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="galileo"
            variant="colorBlack"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
            style={{ transform: 'scale(0.9)' }}
          />
        </a>
        <a
          href="https://www.baseten.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="baseten"
            variant="color"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
            style={{ transform: 'scale(1.0)' }}
          />
        </a>
        <a href="https://hasura.com" target="_blank" className="inline-block">
          <Logo
            logo="hasura"
            variant="black"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
            style={{ transform: 'scale(0.95)' }}
          />
        </a>
        <a href="https://datadog.com" target="_blank" className="inline-block">
          <Logo
            logo="datadog"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
      </div>

      <div className="space-y-6 text-center">
        <div className="uppercase font-bold text-gray-on-white">
          Silver Sponsors
        </div>

        <a href="https://codeium.com" target="_blank" className="inline-block">
          <Logo
            logo="windsurf"
            className="inline-block h-12 w-28 md:h-20 md:w-40 object-contain mx-6"
            style={{ transform: 'scale(1.1)' }}
          />
        </a>
        <a href="https://writer.com" target="_blank" className="inline-block">
          <Logo
            logo="writer"
            variant="black"
            className="inline-block h-12 w-32 object-contain mx-8"
          />
        </a>
        <a
          href="https://langbase.com?utm_source=ai.engineer&utm_campaign=aieny2025"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="langbase"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
            style={{ transform: 'scale(1.2)' }}
          />
        </a>
        <a
          href="https://wandb.ai/site"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="weightsBiases"
            className="inline-block h-14 w-40 md:h-24 md:w-64 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.ellipsis.dev/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="ellipsis"
            variant="color"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
          />
        </a>
        <a
          href="https://elevenlabs.io"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="elevenLabs"
            variant="black"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
            style={{ transform: 'scale(1.1)' }}
          />
        </a>
        <a href="https://gitpod.io/" target="_blank" className="inline-block">
          <Logo
            logo="gitpod"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
          />
        </a>
        <a href="https://vellum.ai/" target="_blank" className="inline-block">
          <Logo
            logo="vellum"
            variant="color"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
            style={{ transform: 'scale(0.9)' }}
          />
        </a>
        <a href="https://portkey.ai" target="_blank" className="inline-block">
          <Logo
            logo="portkey"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
            style={{ transform: 'scale(1.1)' }}
          />
        </a>
        <a
          href="https://www.daytona.io/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="daytona"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
          />
        </a>
        <a href="http://daily.co" target="_blank" className="inline-block">
          <Logo
            logo="daily"
            variant="black"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
            style={{ transform: 'scale(0.9)' }}
          />
        </a>
      </div>

      <div className="space-y-6 text-center">
        <div className="uppercase font-bold text-gray-on-white">Supporters</div>
        <a href="http://neo4j.com" target="_blank" className="inline-block">
          <Logo
            logo="neo4j"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
            style={{ transform: 'scale(0.75)' }}
          />
        </a>
        <a
          href="https://www.brightwave.io/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="brightwave"
            variant="black"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://methodfi.com/"
          target="_blank"
          className="inline-block transition hover:scale-105"
        >
          <Logo
            logo="method"
            className="inline-block h-10 w-28 md:h-20 md:w-40 object-contain mx-6"
            style={{ transform: 'scale(0.9)' }}
          />
        </a>
        <a href="https://openpipe.ai/" target="_blank" className="inline-block">
          <Logo
            logo="openpipe"
            className="inline-block h-10 w-28 md:h-20 md:w-40 object-contain mx-6"
            style={{ transform: 'scale(0.9)' }}
          />
        </a>
        <a href="https://paig.ai/" target="_blank" className="inline-block">
          <Logo
            logo="paig"
            variant="black"
            className="inline-block h-10 w-28 md:h-20 md:w-40 object-contain mx-6"
            style={{ transform: 'scale(0.6)' }}
          />
        </a>
        <a href="https://arize.com/" target="_blank" className="inline-block">
          <Logo
            logo="arize"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://openai.com/" target="_blank" className="inline-block">
          <Logo
            logo="openAI"
            variant="black"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://github.com/timescale/pgai" target="_blank" className="inline-block">
          <Logo
            logo="pgai"
            // variant="black"
            className="inline-block h-10 w-28 md:h-20 md:w-40 object-contain mx-6"
            style={{ transform: 'scale(2.5)' }}
          />
        </a>
        <a href="https://booking.com" target="_blank" className="inline-block">
          <Logo
            logo="booking"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a
          href="https://signalfire.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="signalfire"
            variant="black"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-20 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://specstory.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="specstory"
            variant="color"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a
          href="https://augmentcode.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="augmentCode"
            variant="black"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-20 md:w-48 object-contain mx-6"
          />
        </a>
      </div> */}
    </div>
  );
}
