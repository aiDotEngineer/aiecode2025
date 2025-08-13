import Link from "next/link";
import { Logo } from "../Logos";

export function Sponsors() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="text-6xl font-bold">Sponsors</h1>
        <p className="max-w-2xl text-gray-on-white">
          We're carefully curating a sponsor expo & non-exhibiting sponsors who are relevant,
          interesting, and pushing the boundaries of the AI Engineering ecosystem. These are the
          companies that are building & innovating with AI — from Devtools & Infra to Vector DBs &
          Open Models.
        </p>
      </header>

      <div className="uppercase font-bold text-gray-on-white max-md:text-center">
        Platinum Sponsors
      </div>
      <div className="flex gap-12 max-md:flex-col">
        <div className="md:flex-1 max-md:text-center">
          <a href="https://neo4j.com" target="_blank" className="inline-block">
            <Logo
              logo="neo4j"
              className="inline-block h-20 w-72 md:h-32 md:w-full object-contain"
            />
          </a>
        </div>
        <div className="md:flex-1 text-gray-on-white">
          Neo4j, the Graph Database & Analytics leader, helps organizations find hidden
          relationships and patterns across billions of data connections deeply, easily, and
          quickly. Customers leverage the structure of their connected data to reveal new ways of
          solving their most pressing business problems, with Neo4j’s full graph stack and a vibrant
          community of developers, data scientists, and architects across hundreds of Fortune 500
          companies. Visit neo4j.com.
        </div>
      </div>
      <div className="flex gap-12 max-md:flex-col">
        <div className="md:flex-1 max-md:text-center">
          <a href="https://www.docker.com/" target="_blank" className="inline-block">
            <Logo
              logo="docker"
              className="inline-block h-20 w-72 md:h-26 md:w-full object-contain"
            />
          </a>
        </div>
        <div className="md:flex-1 text-gray-on-white"></div>
      </div>

      <div className="space-y-0 text-center">
        <div className="uppercase font-bold text-gray-on-white">Gold Sponsors</div>

        <div className="grid grid-cols-1 gap-y-4 md:gap-y-0 md:grid-cols-4 md:gap-x-16 my-16 text-center place-items-center">
          <a href="https://sentry.io" target="_blank" className=" flex-1 inline-block">
            <Logo
              logo="sentry"
              variant="black"
              className="inline-block h-20 w-48 md:h-32 md:w-64 object-contain mx-6"
            />
          </a>
          <a href="https://arize.com" target="_blank" className=" flex-1 inline-block">
            <Logo
              logo="arize"
              className="inline-block h-20 w-48 md:h-32 md:w-64 object-contain mx-6"
            />
          </a>
          <a href="https://vultr.com" target="_blank" className=" flex-1 inline-block">
            <Logo
              logo="vultr"
              variant="black"
              className="inline-block h-20 w-48 md:h-32 md:w-64 object-contain mx-6"
            />
          </a>
          <a href="https://deepmind.google" target="_blank" className=" flex-1 inline-block">
            <Logo
              logo="deepmind"
              // variant="black"
              className="inline-block h-20 w-48 md:h-32 md:w-64 object-contain mx-6"
            />
          </a>
        </div>
      </div>

      <div className="space-y-6 text-center">
        <div className="uppercase font-bold text-gray-on-white">Silver Sponsors</div>
        <div className="grid grid-cols-1 gap-y-4 md:gap-y-0 md:grid-cols-3 md:gap-x-16 my-16 text-center place-items-center">
          <a href="https://elastic.co" target="_blank" className="inline-block">
            <Logo
              logo="elastic"
              className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
            />
          </a>
          <a href="https://tessl.io" target="_blank" className="inline-block">
            <Logo
              logo="tessl"
              variant="black"
              className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
            />
          </a>
          <a href="https://daytona.io" target="_blank" className="inline-block">
            <Logo
              logo="daytona"
              variant="black"
              className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
            />
          </a>
          <a href="https://datadoghq.com" target="_blank" className="inline-block">
            <Logo
              logo="datadog"
              className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
            />
          </a>
          <a href="https://graphite.dev" target="_blank" className="inline-block">
            <Logo
              logo="graphite"
              variant="black"
              className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
            />
          </a>
          <a href="https://orq.ai" target="_blank" className="inline-block">
            <Logo
              logo="orqai"
              className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
            />
          </a>
        </div>
      </div>
      <div className="space-y-6 text-center">
        <div className="uppercase font-bold text-gray-on-white">Bronze Sponsors</div>
        <div className="grid grid-cols-1 gap-y-4 md:gap-y-0 md:grid-cols-3 md:gap-x-16 my-16 text-center place-items-center">
          <a href="https://www.all-hands.dev/" target="_blank" className="inline-block">
            <Logo
              logo="openhands"
              className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
            />
          </a>
          <a href="https://tailscale.com" target="_blank" className="inline-block">
            <Logo
              logo="tailscale"
              className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
            />
          </a>
          <a href="https://apify.com" target="_blank" className="inline-block">
            <Logo
              logo="apify"
              className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6 scale-75"
            />
          </a>
          <a href="https://getlago.com" target="_blank" className="inline-block">
            <Logo
              logo="lago"
              className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6 scale-75"
            />
          </a>
          <a href="https://vellum.ai" target="_blank" className="inline-block">
            <Logo
              logo="vellum"
              className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6 scale-75"
            />
          </a>
          <a href="https://midio.com" target="_blank" className="inline-block">
            <Logo
              logo="midio"
              className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
            />
          </a>
          <a href="https://cast.ai" target="_blank" className="inline-block">
            <Logo
              logo="castai"
              className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
            />
          </a>
          <a href="https://www.descope.com" target="_blank" className="inline-block">
            <Logo
              logo="descope"
              className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
            />
          </a>
          <a href="https://alpic.ai" target="_blank" className="inline-block">
            <Logo
              logo="alpic"
              className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6 scale-70"
            />
          </a>
        </div>
      </div>
      {/* 
      <div className="space-y-6 text-center">
        <div className="uppercase font-bold text-gray-on-white">Supporters</div>
        <a href="https://datadoghq.com" target="_blank" className="inline-block">
          <Logo
            logo="datadog"
            className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://gitpod.io" target="_blank" className="inline-block">
          <Logo
            logo="gitpod"
            className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
      </div> */}

      <div className="text-center space-y-6 p-8 bg-stone-200 rounded-2xl">
        <p className="text-xl">
          <span className="uppercase font-mono bg-red-600 p-1 rounded-sm text-yellow-100">
            Expo slots sold out. Other sponsorships CLOSING SOON
          </span>
        </p>
        <p className="text-gray-600">
          To learn more about available sponsorship opportunities for AI Engineer Paris 2025, let's{" "}
          <a
            href="https://tally.so/r/w2YAdM"
            target="_blank"
            className="text-blue-500 hover:text-blue-400"
          >
            connect
          </a>
        </p>
        <p className="text-gray-600">
          You can view our previous supporters at:{" "}
          <Link href="/" className="text-blue-500 hover:text-blue-400">
            World's Fair 2025
          </Link>{" "}
          and{" "}
          <Link href="/summit/2025" className="text-blue-500 hover:text-blue-400">
            Summit 2025
          </Link>
        </p>
      </div>
    </div>
  );
}
