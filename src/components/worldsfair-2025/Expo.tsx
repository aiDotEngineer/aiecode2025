import imgAieExpo from "~/images/worldsfair-2025/aie-expo.jpg";
import { Button } from "../Button";
import { useWorldsFair2025 } from "../ChoosePrimaryLayout";
import { Logo } from "../Logos";

export function ExpoPreview() {
  const { CONTACT_URL } = useWorldsFair2025();

  return (
    <div className="rounded-3xl bg-black overflow-hidden">
      <div className="flex gap-6 max-lg:flex-col flex-row-reverse">
        <div
          className="max-lg:h-80 lg:flex-1 bg-center bg-cover"
          style={{ backgroundImage: `url(${imgAieExpo.src})` }}
        />
        <div className="lg:flex-1 ">
          <div className="text-white p-12 space-y-6">
            <h1 className="text-5xl font-bold">The AI Engineer Expo</h1>
            <p className="text-white-on-black">
              From foundation models to domain-specific products & services, the
              Expo is your chance to meet some of the best engineers in our
              industry, working on the most cutting-edge technologies that
              empower product teams and developers like you.
            </p>
            <p className="text-white-on-black">
              We'll be announcing our Expo partners soon. If you'd like to learn
              more about exhibiting at this event, email{" "}
              <a href={CONTACT_URL} className="text-teal-400">
                sponsorships@ai.engineer
              </a>{" "}
              from your company account.
            </p>
            <Button invert href={CONTACT_URL} className="block w-52">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Expo() {
  return (
    <div className="space-y-12" id="expo">
      <header className="space-y-6">
        <h1 className="text-5xl font-bold">The AI Engineer Expo</h1>
        <p className="max-w-2xl text-gray-on-white">
          From foundation models to domain-specific products & services, the
          Expo is your chance to meet some of the best engineers in our
          industry, working on the most cutting-edge technologies that empower
          product teams and developers like you.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-items-center gap-x-8 gap-y-10">
        <a
          href="https://azure.microsoft.com/en-us/solutions/ai"
          target="_blank"
        >
          <Logo
            logo="microsoft"
            variant="colorGray"
            className="object-contain"
          />
        </a>
        <a href="https://aws.amazon.com/ai" target="_blank">
          <Logo logo="aws" className="object-contain scale-120" />
        </a>

        <a href="https://windsurf.com" target="_blank">
          <Logo logo="windsurf" className="object-contain" />
        </a>
        <a href="https://mongodb.com" target="_blank">
          <Logo logo="mongodb" className="object-contain scale-110" />
        </a>
        <a href="https://graphite.dev" target="_blank">
          <Logo logo="graphite" variant="black" className="object-contain" />
        </a>
        <a href="https://daily.co" target="_blank">
          <Logo
            logo="daily"
            variant="black"
            className="object-contain w-[80%] m-auto"
          />
        </a>
        <a href="https://neo4j.com" target="_blank">
          <Logo logo="neo4j" className="object-contain" />
        </a>
        <a href="https://hasura.io" target="_blank">
          <Logo logo="hasura" className="object-contain" />
        </a>
        <a href="https://rungalileo.io" target="_blank">
          <Logo
            logo="galileo"
            variant="colorBlack"
            className="object-contain"
          />
        </a>
        <a href="https://sourcegraph.com" target="_blank">
          <Logo logo="sourcegraph" className="object-contain" />
        </a>
        <a href="https://llamaindex.ai" target="_blank">
          <Logo logo="llamaIndex" variant="black" className="object-contain" />
        </a>
        <a href="https://temporal.io" target="_blank">
          <Logo logo="temporal" variant="black" className="object-contain" />
        </a>
        <a href="https://baseten.co/" target="_blank">
          <Logo logo="baseten" className="object-contain" />
        </a>
        <a href="https://elastic.co" target="_blank">
          <Logo logo="elastic" className="object-contain" />
        </a>
        <a href="https://withorb.com/ai" target="_blank">
          <Logo
            logo="orb"
            variant="black"
            className="object-contain w-[80%] m-auto"
          />
        </a>
        <a href="https://gitpod.io" target="_blank">
          <Logo logo="gitpod" className="object-contain" />
        </a>
        <a href="https://freeplay.ai" target="_blank">
          <Logo logo="freeplay" variant="black" className="object-contain" />
        </a>
        <a href="https://dagger.io/" target="_blank">
          <Logo logo="dagger" className="object-contain" />
        </a>
        <a href="https://traceloop.com" target="_blank">
          <Logo logo="traceloop" variant="color" className="object-contain" />
        </a>
        <a href="https://ai.pydantic.dev" target="_blank">
          <Logo logo="pydantic" variant="color" className="object-contain" />
        </a>
        <a href="https://arize.com" target="_blank" className="inline-block">
          <Logo
            logo="arize"
            variant="color"
            className="object-contain w-[90%] self-center"
          />
        </a>

        {/* dd */}
        {/* dd */}
        {/* dd */}
        {/* dd */}
        {/* dd */}

        {/* <a href="https://www.databricks.com" target="_blank">
          <Logo
            logo="databricks"
            className="object-contain"
            style={{ transform: "scale(1.4)" }}
          />
        </a>
        <a href="https://friendli.ai" target="_blank">
          <Logo logo="friendliAI" className="object-contain scale-110" />
        </a>
              
        <a
          className="flex items-center justify-center"
          href="https://snyk.io/platform/deepcode-ai/"
          target="_blank"
        >
          
           * When we use a scale, we don't change the minimum content size of the logo
           * and thus the parent <a> tag does not shrink to fit the content. It stays
           * expanded to be the height and width of the unscaled logo.
           *
           * By using a width instead, we constrain the logo to a max width inside the parent
           * and thus don't take up any extra vertical height.
           
          <Logo logo="snyk" className="object-contain w-[60%]" />
        </a>
        */}
      </div>
    </div>
  );
}
