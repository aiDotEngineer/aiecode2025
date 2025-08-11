import imgAieExpo from "~/images/worldsfair-2025/aie-expo.jpg";
import { Button } from "../Button";
import { useWorldsFair2025 } from "../ChoosePrimaryLayout";
import { Logo } from "../Logos";

export function Expo() {
  return (
    <div className="space-y-12" id="expo">
      <header className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold flex flex-col md:flex-row items-center">
          The AI Engineer Paris Expo{" "}
          <a
            href="https://x.com/aiDotEngineer/status/1920142621525348774"
            className=" text-sm ml-4 uppercase  bg-black px-2 pt-1 rounded-sm text-blue-300 hover:text-blue-100 mb-4 inline-block"
          >
            SOLD OUT!
          </a>
        </h1>
        <p className="max-w-2xl text-gray-on-white">
          From foundation models to domain-specific products & services, the Expo is your chance to
          meet some of the best engineers in our industry, working on the most cutting-edge
          technologies that empower product teams and developers like you.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 items-center justify-items-center gap-x-8 gap-y-10">
        <a href="https://azure.microsoft.com/en-us/solutions/ai" target="_blank">
          <Logo logo="neo4j" className="object-contain" />
        </a>
        <a href="https://docker.com" target="_blank">
          <Logo logo="docker" className="object-contain" />
        </a>
        <a href="https://sentry.io" target="_blank">
          <Logo logo="sentry" variant="black" className="object-contain" />
        </a>
        <a href="https://arize.com" target="_blank">
          <Logo logo="arize" className="object-contain" />
        </a>
        <a href="https://vultr.com" target="_blank">
          <Logo logo="vultr" variant="black" className="object-contain" />
        </a>
        <a href="https://deepmind.google" target="_blank">
          <Logo logo="deepmind" className="object-contain" />
        </a>
        <a href="https://elastic.co" target="_blank">
          <Logo logo="elastic" className="object-contain" />
        </a>
        <a href="https://tessl.io" target="_blank">
          <Logo logo="tessl" variant="black" className="object-contain" />
        </a>
        <a href="https://daytona.io" target="_blank">
          <Logo logo="daytona" variant="black" className="object-contain" />
        </a>
        <a href="https://datadoghq.com" target="_blank">
          <Logo logo="datadog" className="object-contain" />
        </a>
        <a href="https://graphite.dev" target="_blank">
          <Logo logo="graphite" variant="black" className="object-contain" />
        </a>
        <a href="https://orqai.com" target="_blank">
          <Logo logo="orqai" className="object-contain" />
        </a>
        <a href="https://allhands.ai" target="_blank">
          <Logo logo="allhands" className="object-contain m-auto w-[60%]" />
        </a>
        <a href="https://tailscale.com" target="_blank">
          <Logo logo="tailscale" className="object-contain" />
        </a>
        <a href="https://apify.com" target="_blank">
          <Logo logo="apify" className="object-contain" />
        </a>
        <a href="https://getlago.com" target="_blank">
          <Logo logo="lago" className="object-contain" />
        </a>
        <a href="https://vellum.ai" target="_blank">
          <Logo logo="vellum" className="object-contain" />
        </a>
        <a href="https://midio.com" target="_blank">
          <Logo logo="midio" className="object-contain" />
        </a>
        <a href="https://cast.ai" target="_blank">
          <Logo logo="castai" className="object-contain" />
        </a>
      </div>
    </div>
  );
}
