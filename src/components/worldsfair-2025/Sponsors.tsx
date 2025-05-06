import { Logo } from "../Logos";

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
      </header>

      <div className="uppercase font-bold text-gray-on-white max-md:text-center">
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
          Leverage over 25 years of Amazon's pioneering AI experience to scale
          your innovations. AWS makes AI accessible to AI Engineers through
          services like Amazon Bedrock which offers capabilities like RAG,
          agents, guardrails, and access to leading foundation models including
          Amazon's own state-of-the-art (SOTA) Nova models, as well as Amazon Q,
          the most capable generative AI-powered assistant to help transform how
          work gets done. AWS empowers its customers to meet business demands,
          embrace generative AI, and build on a foundation of privacy,
          end-to-end security, and AI governance.
        </div>
      </div>

      <div className="space-y-0 text-center">

        <div className="uppercase font-bold text-gray-on-white">Track Sponsors</div>
        <div className="space-x-16 my-16 text-center">
            <a href="https://neo4j.com" target="_blank" className="inline-block">
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-600 mt-2">GraphRAG track brought to you by</span>
                <Logo
                  logo="neo4j"
                  // variant="black"
                  className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
                />
              </div>
            </a>
            <a href="https://braintrustdata.com" target="_blank" className="inline-block">
            <div className="flex flex-col items-center">  
              <span className="text-sm text-gray-600 mt-2">Evals track brought to you by</span>
              <Logo
                logo="braintrust"
                variant="black"
                className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6 scale-125"
              />
            </div>
            </a>
            <a href="https://promptql.hasura.io" target="_blank" className="inline-block">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-600 mt-2">Agent Reliability track hosted by</span>
              <Logo
                logo="hasura"
                className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
              />
            </div>
            </a>
        </div>
        <div className="uppercase font-bold text-gray-on-white">
          Platinum Sponsors
        </div>

        <a href="https://graphite.dev" target="_blank" className="inline-block">
          <Logo
            logo="graphite"
            variant="black"
            className="inline-block h-20 w-48 md:h-32 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://windsurf.com" target="_blank" className="inline-block">
          <Logo
            logo="windsurf"
            className="inline-block h-20 w-48 md:h-32 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://mongodb.com" target="_blank">
          <Logo
            logo="mongodb"
            className="inline-block h-20 w-48 md:h-32 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://daily.co" target="_blank">
          <Logo
            logo="daily"
            variant="black"
            className="inline-block h-10 w-48 md:h-28 md:w-42 object-contain mx-6"
          />
        </a>
        <a href="https://augmentcode.com" target="_blank" className="inline-block">
          <Logo
            logo="augmentCode"
            variant="black"
            className="inline-block h-10 w-48 md:h-28 md:w-42 object-contain mx-6 scale-150 mr-16"
          />
        </a>
        <a href="https://workos.com" target="_blank" className="inline-block">
          <Logo
            logo="workOS"
            variant="white"
            className="inline-block h-10 w-48 md:h-28 md:w-42 object-contain mx-6 scale-120"
          />
        </a>
      </div>

      <div className="space-y-6 text-center">
        <div className="uppercase font-bold text-gray-on-white">
          Gold Sponsors
        </div>
        <a href="https://neo4j.com" target="_blank" className="inline-block">
          <Logo
            logo="neo4j"
            className="inline-block h-18 w-32 md:h-18 md:w-42 object-contain mx-6"
          />
        </a>
        <a href="https://hasura.io" target="_blank" className="inline-block">
          <Logo
            logo="hasura"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
        <a
          href="https://rungalileo.io"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="galileo"
            variant="colorBlack"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
        <a
          href="https://sourcegraph.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="sourcegraph"
            className="inline-block h-18 w-44 md:h-24 md:w-64 object-contain mx-6"
          />
        </a>
        <a
          href="https://llamaindex.ai"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="llamaIndex"
            variant="black"
            className="inline-block h-18 w-32 md:h-24 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://temporal.io" target="_blank" className="inline-block">
          <Logo
            logo="temporal"
            variant="black"
            className="inline-block h-18 w-32 md:h-24 md:w-52 object-contain mx-6"
          />
        </a>
        <a href="https://baseten.co/" target="_blank" className="inline-block">
          <Logo
            logo="baseten"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
        <a href="https://elastic.co" target="_blank" className="inline-block">
          <Logo
            logo="elastic"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
        <a
          href="https://withorb.com/ai"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="orb"
            variant="black"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
        <a href="https://gitpod.io" target="_blank" className="inline-block">
          <Logo
            logo="gitpod"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
        <a href="https://freeplay.ai" target="_blank" className="inline-block">
          <Logo
            logo="freeplay"
            variant="black"
            className="inline-block h-18 w-44 md:h-24 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://dagger.io/" target="_blank" className="inline-block">
          <Logo
            logo="dagger"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
        <a
          href="https://traceloop.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="traceloop"
            variant="color"
            className="inline-block h-18 w-44 md:h-24 md:w-64 object-contain mx-6"
          />
        </a>
        <a
          href="https://ai.pydantic.dev"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="pydantic"
            variant="color"
            className="inline-block h-18 w-44 md:h-24 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://arize.com" target="_blank" className="inline-block">
          <Logo
            logo="arize"
            variant="color"
            className="inline-block h-18 w-32 md:h-24 md:w-48 object-contain mx-6"
          />
        </a>
        <a href="https://fly.io" target="_blank" className="inline-block">
          <Logo
            logo="flyio"
            variant="white"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://arcjet.com" target="_blank" className="inline-block">
          <Logo
            logo="arcjet"
            variant="white"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://zed.com" target="_blank" className="inline-block">
          <Logo
            logo="zed"
            variant="white"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
      </div>

      <div className="space-y-6 text-center">
        <div className="uppercase font-bold text-gray-on-white">
          Silver Sponsors
        </div>
        <a
          href="https://agentuity.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="agentuity"
            className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://wandb.ai" target="_blank" className="inline-block">
          <Logo
            logo="weightsBiases"
            className="inline-block h-12 w-42 md:h-20 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://sierra.ai" target="_blank" className="inline-block">
          <Logo
            logo="sierra"
            className="inline-block h-12 w-30 md:h-20 md:w-42 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.vellum.ai"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="vellum"
            className="inline-block h-12 w-24 md:h-20 md:w-42 object-contain mx-6"
          />
        </a>
        <a href="https://gensx.com" target="_blank" className="inline-block">
          <Logo
            logo="gensx"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://redis.com" target="_blank" className="inline-block">
          <Logo
            logo="redis"
            className="inline-block h-12 w-32 md:h-20 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://langbase.com" target="_blank" className="inline-block">
          <Logo
            logo="langbase"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-48 object-contain mx-6"
          />
        </a>
        <a href="https://twilio.com" target="_blank" className="inline-block">
          <Logo
            logo="twilio"
            className="inline-block h-12 w-32 md:h-20 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://descope.com" target="_blank" className="inline-block">
          <Logo
            logo="descope"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a
          href="https://superannotate.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="superannotate"
            className="inline-block h-12 w-48 md:h-20 md:w-64 object-contain mx-6"
          />
        </a>
        <a
          href="https://unstructured.io"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="unstructured"
            className="inline-block h-12 w-12 md:h-20 md:w-20 object-contain mx-6"
          />
        </a>
        <a href="https://baz.co" target="_blank" className="inline-block">
          <Logo
            logo="baz"
            variant="black"
            className="inline-block h-12 w-18 md:h-20 md:w-28 object-contain mx-6"
          />
        </a>
        <a href="https://vessl.ai" target="_blank" className="inline-block">
          <Logo
            logo="vessl"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-54 object-contain mx-6"
          />
        </a>
        <a href="https://riza.ai" target="_blank" className="inline-block">
          <Logo
            logo="riza"
            variant="black"
            className="inline-block h-12 w-16 md:h-20 md:w-24 object-contain mx-6"
          />
        </a>
        <a href="https://tambo.co" target="_blank" className="inline-block">
          <Logo
            logo="tambo"
            className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://sentry.io" target="_blank" className="inline-block">
          <Logo
            logo="sentry"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://xpander.ai" target="_blank" className="inline-block">
          <Logo
            logo="xpander"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-54 object-contain mx-6"
          />
        </a>
        <a
          href="https://thomsonreuters.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="thompsonReuters"
            className="inline-block h-12 w-48 md:h-20 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://www.elevenlabs.io" target="_blank" className="inline-block">
          <Logo
            logo="elevenLabs"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://www.pomerium.com" target="_blank" className="inline-block">
          <Logo
            logo="pomerium"
            variant="white"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://www.daytona.io" target="_blank" className="inline-block">
          <Logo
            logo="daytona"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://www.polarsignals.com" target="_blank" className="inline-block">
          <Logo
            logo="polarSignals"
            variant="white"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://vercel.com" target="_blank" className="inline-block">
          <Logo
            logo="vercel"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://withampersand.com" target="_blank" className="inline-block">
          <Logo
            logo="ampersand"
            variant="white"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://together.ai" target="_blank" className="inline-block">
          <Logo
            logo="togetherAI"
            variant="white"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://distributional.com" target="_blank" className="inline-block">
          <Logo
            logo="distributional"
            variant="black"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://modal.com" target="_blank" className="inline-block">
          <Logo
            logo="modal"
            variant="white"
            className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
      </div>
      <div className="space-y-6 text-center">
        <div className="uppercase font-bold text-gray-on-white">Supporters</div>
        <a href="https://circle.com" target="_blank" className="inline-block">
          <Logo
            logo="circle"
            className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
      </div>

      <div className="text-center space-y-6 p-8 bg-stone-200 rounded-2xl">
        <p className="text-xl">
          <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">
            Expo slots sold out. Other sponsorships CLOSING SOON
          </span>
        </p>
        <p className="text-gray-700">
          To learn more about sponsorship opportunities for World's Fair 2025,
          please email{" "}
          <a
            href="mailto:sponsorships@ai.engineer"
            className="text-blue-500 hover:text-blue-400"
          >
            sponsorships@ai.engineer
          </a>
        </p>
        <p className="text-gray-600">
          You can view our previous supporters at:{" "}
          <a
            href="/worldsfair/2024"
            className="text-blue-500 hover:text-blue-400"
          >
            World's Fair 2024
          </a>{" "}
          and{" "}
          <a href="/summit/2025" className="text-blue-500 hover:text-blue-400">
            Summit 2025
          </a>
        </p>
      </div>
    </div>
  );
}
