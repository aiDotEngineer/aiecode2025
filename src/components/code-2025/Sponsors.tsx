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

      {/* <div className="uppercase font-bold text-gray-on-white max-md:text-center">
        Presenting Sponsor
      </div>
      <div className="flex gap-12 max-md:flex-col">
        <div className="md:flex-1 max-md:text-center">
          <a
            href="https://azure.microsoft.com/en-us/solutions/ai"
            target="_blank"
            className="inline-block"
          >
            <Logo
              logo="microsoft"
              variant="colorGray"
              className="inline-block h-20 w-72 md:h-32 md:w-full object-contain"
            />
          </a>
        </div>
        <div className="md:flex-1 text-gray-on-white">
          In this new era of AI, Microsoft is helping organizations unlock AI
          innovation in every business, in every app, for everyone. Microsoft
          Azure delivers AI services and supercomputing infrastructure
          purpose-built to meet the compute-intensive needs of AI and
          high-performance workloads. Our full stack AI solution meets the most
          stringent security, reliability and compliance requirements while
          providing exceptional performance, flexibility and cost efficiencies.
          Choose Microsoft Azure for your groundbreaking AI applications.
        </div>
      </div>

      <div className="uppercase font-bold text-gray-on-white max-md:text-center">
        Innovation Partner
      </div>
      <div className="flex gap-12 max-md:flex-col">
        <div className="md:flex-1 max-md:text-center">
          <a
            href="https://aws.amazon.com/ai"
            target="_blank"
            className="inline-block"
          >
            <Logo
              logo="aws"
              className="inline-block h-40 w-60 md:h-44 md:w-full object-contain"
            />
          </a>
        </div>
        <div className="md:flex-1 text-gray-on-white">
          Scale the next wave of innovation in AI by leveraging more than 25
          years of pioneering AI experience from Amazon. AWS makes AI accessible
          to more people - from builders and data scientists to business
          analysts and students. With the most comprehensive set of AI services,
          tools, and resources, AWS brings deep expertise to over 100,000
          customers to meet the demands of their business and unlock the value
          of their data. Security, privacy, and responsible AI have never been
          more critical. Customers can build and scale with AWS on a foundation
          of privacy, end-to-end security, and AI governance to transform at an
          unprecedented rate.
        </div>
      </div> */}

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
        {/* <a
          href="https://cloud.google.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="googleCloud"
            className="inline-block h-20 w-48 md:h-32 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://neo4j.com" target="_blank" className="inline-block">
          <Logo
            logo="neo4j"
            className="inline-block h-12 w-48 md:h-16 md:w-64 object-contain mx-6"
          />
        </a> */}
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
        {/* <a
          href="https://www.modular.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="modular"
            variant="black"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a> */}
        {/* <a
          href="https://www.datastax.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="datastax"
            variant="black"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a> */}
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
        {/* <a href="https://octo.ai" target="_blank" className="inline-block">
          <Logo
            logo="octoai"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
            style={{ transform: 'scale(0.9)' }}
          />
        </a> */}
        <a href="https://datadog.com" target="_blank" className="inline-block">
          <Logo
            logo="datadog"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
        {/* <a
          href="https://www.crusoe.ai"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="crusoe"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
        <a
          href="https://wow.groq.com/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="groq"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
            style={{ transform: 'scale(0.5)' }}
          />
        </a>
        <a
          href="https://fireworks.ai/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="fireworks"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
            style={{ transform: 'scale(1.2)' }}
          />
        </a>
        <a
          className="inline-block"
          href="https://www.emergence.ai"
          target="_blank"
        >
          <Logo
            logo="emergence"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a> */}
      </div>

      <div className="space-y-6 text-center">
        <div className="uppercase font-bold text-gray-on-white">
          Silver Sponsors
        </div>

        {/* <a href="https://deepgram.com" target="_blank" className="inline-block">
          <Logo
            logo="deepgram"
            variant="black"
            className="inline-block h-12 w-28 md:h-20 md:w-40 object-contain mx-6"
          />
        </a> */}
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
        {/* <a
          href="https://www.twilio.com/en-us"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="twilio"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
          />
        </a>
        <a href="https://airtrain.ai" target="_blank" className="inline-block">
          <Logo
            logo="airtrain"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
          />
        </a>
        <a
          href="https://trunktools.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="trunkTools"
            variant="black"
            className="inline-block h-12 w-18 md:h-12 md:w-20 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.substrate.run"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="substrate"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
          />
        </a>
        <a href="https://cleric.io" target="_blank" className="inline-block">
          <Logo
            logo="cleric"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.elastic.co"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="elastic"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.moveai.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="moveai"
            className="inline-block h-12 w-36 md:h-20 md:w-48 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.databricks.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="databricks"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
            style={{ transform: 'scale(1.1)' }}
          />
        </a>
        <a href="https://friendli.ai" target="_blank" className="inline-block">
          <Logo
            logo="friendliAI"
            className="inline-block h-12 w-32 md:h-20 md:w-40 object-contain mx-6"
            style={{ transform: 'scale(1.1)' }}
          />
        </a>
        <a href="https://vespa.ai" target="_blank" className="inline-block">
          <Logo
            logo="vespa"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
            style={{ transform: 'scale(0.8)' }}
          />
        </a>
        <a
          href="https://www.matillion.com/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="matillion"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
        <a
          href="https://snyk.io/platform/deepcode-ai/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="snyk"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
            style={{ transform: 'scale(0.7)' }}
          />
        </a>
        <a href="https://openpipe.ai/" target="_blank" className="inline-block">
          <Logo
            logo="openpipe"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
            // style={{ transform: 'scale(0.7)' }}
          />
        </a> */}
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
        {/* <a
          href="https://www.pinecone.io"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="pinecone"
            variant="black"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.botdojo.com/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="botDojo"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://useplumb.com" target="_blank" className="inline-block">
          <Logo
            logo="plumb"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://gentrace.ai" target="_blank" className="inline-block">
          <Logo
            logo="gentrace"
            variant="black"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://planby.app" target="_blank" className="inline-block">
          <Logo
            logo="planby"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.ioniccommerce.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="ionic"
            variant="black"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://log10.io" target="_blank" className="inline-block">
          <Logo
            logo="log10"
            // "this logo is too long and causes overscroll issues so we must add max-w"
            className="inline-block h-8 w-18 md:h-12 md:w-28 object-contain mx-6 max-w-24"
          />
        </a>
        <a
          href="https://www.mozilla.ai"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="mozilla"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>

        <a
          href="https://www.baseten.co/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="baseten"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.khanmigo.ai/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="khanmigo"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.modular.com/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="modular"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://qdrant.tech/" target="_blank" className="inline-block">
          <Logo
            logo="qdrant"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.quotientai.co/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="quotientAi"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://zapier.com/" target="_blank" className="inline-block">
          <Logo
            logo="zapier"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.zetalabs.ai/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="zetaLabs"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://character.ai/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="characterAi"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
            variant="black"
          />
        </a>
        <a href="https://eyelevel.ai/" target="_blank" className="inline-block">
          <Logo
            logo="eyelevel"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://sambanova.ai/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="sambanova"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
            style={{ transform: 'scale(1.3)' }}
          />
        </a>
        <a
          href="https://www.cerebras.net/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="cerebras"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
            style={{ transform: 'scale(1.4)' }}
          />
        </a>
        <a href="https://gradient.ai/" target="_blank" className="inline-block">
          <Logo
            logo="gradientai"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://haihai.ai/" target="_blank" className="inline-block">
          <Logo
            logo="haihai"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
            style={{ transform: 'scale(1.3)' }}
          />
        </a>
        <a
          href="https://videotap.com/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="videoTap"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://www.nea.com/" target="_blank" className="inline-block">
          <Logo
            logo="nea"
            variant="black"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.amplifypartners.com/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="amplify"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://tolacapital.com/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="tolacapital"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a> */}
      </div>
      {/* <div className="space-y-6 text-center">
        <div className="uppercase font-bold text-gray-on-white">
          Media Partners - 2024
        </div>
        <a
          href="https://www.washingtonpost.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="Wapo"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://www.wsj.com" target="_blank" className="inline-block">
          <Logo
            logo="WSJ"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6 scale-150"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/george-gilbert-tech-version/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="Economist"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6 scale-150"
          />
        </a>
        <a
          href="https://thenewstack.io/ai-engineer-summit-wrap-up-and-interview-with-co-founder-swyx/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="NewStack"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.youtube.com/@CognitiveRevolutionPodcast"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="cogrevPod"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://cooperpress.com/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="cooperPress"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://x.com/AIDailyBrief"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="AIBrief"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://mlops.community/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="MLOpsCommunity"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6 scale-150"
          />
        </a> */}
      {/* <a
          href="https://generationship.ai/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="generationShip"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a> */}
      {/* <a
          href="https://www.harpercarrollai.com/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="harperCarroll"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.amarchenkova.com/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="oneQuark"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6"
          />
        </a>
        <a
          href="https://oss-startup-podcast.launchnotes.io/"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="OSSStartups"
            className="inline-block transition hover:scale-105 h-10 w-28 md:h-16 md:w-36 object-contain mx-6 scale-150"
          />
        </a>
      </div> */}
    </div>
  );
}
