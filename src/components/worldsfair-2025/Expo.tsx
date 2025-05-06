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
        <h1 className="text-5xl font-bold flex items-end">The AI Engineer Expo {" "}
              <span className=" text-sm ml-4 uppercase font-mono bg-amber-600 p-1 rounded-sm text-yellow-100 mb-4 inline-block">
                SOLD OUT!
              </span></h1>
        <p className="max-w-2xl text-gray-on-white">
          From foundation models to domain-specific products & services, the
          Expo is your chance to meet some of the best engineers in our
          industry, working on the most cutting-edge technologies that empower
          product teams and developers like you.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 items-center justify-items-center gap-x-8 gap-y-10">
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
          <Logo logo="aws" 
          // className="object-contain"
          className="object-contain w-[80%] m-auto"
           />
          {/* <Logo logo="aws" className="object-contain scale-120" /> */}
        </a>

        <a href="https://windsurf.com" target="_blank">
          <Logo logo="windsurf" className="object-contain" />
        </a>
        <a href="https://mongodb.com" target="_blank">
          <Logo logo="mongodb" className="object-contain" />
          {/* <Logo logo="mongodb" className="object-contain scale-110" /> */}
        </a>
        <a href="https://graphite.dev" target="_blank">
          <Logo logo="graphite" variant="black" className="object-contain" />
        </a>
        <a href="https://daily.co" target="_blank">
          <Logo
            logo="daily"
            variant="black"
            className="object-contain w-[80%] m-auto"
            // className="object-contain w-[80%]"
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
        <a
          href="https://agentuity.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="agentuity"
            className="object-contain m-auto"
            // className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://wandb.ai" target="_blank" className="inline-block">
          <Logo
            logo="weightsBiases"
            className="object-contain scale-125 m-auto"
            // className="inline-block h-12 w-42 md:h-20 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://sierra.ai" target="_blank" className="inline-block">
          <Logo
            logo="sierra"
            className="object-contain m-auto"
            // className="inline-block h-12 w-30 md:h-20 md:w-42 object-contain mx-6"
          />
        </a>
        <a
          href="https://www.vellum.ai"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="vellum"
            className="object-contain w-[80%] m-auto"
            // className="inline-block h-12 w-24 md:h-20 md:w-42 object-contain mx-6"
          />
        </a>
        <a href="https://gensx.com" target="_blank" className="inline-block">
          <Logo
            logo="gensx"
            variant="black"
            className="object-contain w-[80%] m-auto"
            // className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://redis.com" target="_blank" className="inline-block">
          <Logo
            logo="redis"
            className="object-contain w-[80%] m-auto"
            // className="inline-block h-12 w-32 md:h-20 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://langbase.com" target="_blank" className="inline-block">
          <Logo
            logo="langbase"
            variant="black"
            className="object-contain m-auto"
            // className="inline-block h-12 w-32 md:h-20 md:w-48 object-contain mx-6"
          />
        </a>
        <a href="https://twilio.com" target="_blank" className="inline-block">
          <Logo
            logo="twilio"
            className="object-contain m-auto"
            // className="inline-block h-12 w-32 md:h-20 md:w-36 object-contain mx-6"
          />
        </a>
        <a href="https://descope.com" target="_blank" className="inline-block">
          <Logo
            logo="descope"
            className="object-contain m-auto"
            // className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a
          href="https://superannotate.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="superannotate"
            className="object-contain m-auto"
            // className="inline-block h-12 w-48 md:h-20 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://tambo.co" target="_blank" className="inline-block">
          <Logo
            logo="tambo"
            className="object-contain m-auto"
            // className="inline-block h-12 w-42 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://sentry.io" target="_blank" className="inline-block">
          <Logo
            logo="sentry"
            variant="black"
            className="object-contain m-auto"
            // className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://xpander.ai" target="_blank" className="inline-block">
          <Logo
            logo="xpander"
            variant="black"
            className="object-contain m-auto"
            // className="inline-block h-12 w-32 md:h-20 md:w-54 object-contain mx-6"
          />
        </a>
        <a
          href="https://thomsonreuters.com"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="thompsonReuters"
            className="object-contain scale-125 m-auto"
            // className="inline-block h-12 w-48 md:h-20 md:w-64 object-contain mx-6"
          />
        </a>
        <a href="https://www.elevenlabs.io" target="_blank" className="inline-block">
          <Logo
            logo="elevenLabs"
            variant="black"
            className="object-contain m-auto"
            // className="h-12 w-auto md:h-16 md:w-auto object-contain"
          />
        </a>
        <a href="https://www.pomerium.com" target="_blank" className="inline-block">
          <Logo
            logo="pomerium"
            variant="white"
            className="object-contain m-auto"
            // className="h-12 w-auto md:h-16 md:w-auto object-contain"
          />
        </a>
        <a href="https://www.daytona.io" target="_blank" className="inline-block">
          <Logo
            logo="daytona"
            variant="black"
            className="object-contain m-auto"
            // className="h-12 w-auto md:h-16 md:w-auto object-contain"
          />
        </a>
        <a href="https://www.polarsignals.com" target="_blank" className="inline-block">
          <Logo
            logo="polarSignals"
            variant="white"
            className="object-contain m-auto"
            // className="h-12 w-auto md:h-16 md:w-auto object-contain"
          />
        </a>
        <a href="https://vercel.com" target="_blank" className="inline-block">
          <Logo
            logo="vercel"
            variant="black"
            className="object-contain m-auto"
            // className="h-12 w-auto md:h-16 md:w-auto object-contain"
          />
        </a>
        <a href="https://withampersand.com" target="_blank" className="inline-block">
          <Logo
            logo="ampersand"
            variant="white"
            className="object-contain m-auto"
            // className="h-12 w-auto md:h-16 md:w-auto object-contain"
          />
        </a>
        <a href="https://fly.io" target="_blank" className="inline-block">
          <Logo
            logo="flyio"
            variant="white"
            className="object-contain m-auto"
            // className="h-12 w-auto md:h-16 md:w-auto object-contain"
          />
        </a>
        <a href="https://together.ai" target="_blank" className="inline-block">
          <Logo
            logo="togetherAI"
            variant="white"
            className="object-contain m-auto"
            // className="h-12 w-auto md:h-16 md:w-auto object-contain"
          />
        </a>
        <a href="https://distributional.com" target="_blank" className="inline-block">
          <Logo
            logo="distributional"
            variant="black"
            className="object-contain m-auto"
            // className="h-12 w-auto md:h-16 md:w-auto object-contain"
          />
        </a>
        <a href="https://arcjet.com" target="_blank" className="inline-block">
          <Logo
            logo="arcjet"
            variant="white"
            className="object-contain m-auto"
            // className="h-12 w-auto md:h-16 md:w-auto object-contain"
          />
        </a>
        <a href="https://modal.com" target="_blank" className="inline-block">
          <Logo
            logo="modal"
            variant="white"
            className="object-contain m-auto"
            // className="h-12 w-auto md:h-16 md:w-auto object-contain"
          />
        </a>
        <a href="https://augmentcode.com" target="_blank" className="inline-block">
          <Logo
            logo="augmentCode"
            variant="black"
            className="object-contain scale-125 m-auto"
            // className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://workos.com" target="_blank" className="inline-block">
          <Logo
            logo="workOS"
            variant="white"
            className="object-contain m-auto"
            // className="inline-block h-12 w-32 md:h-20 md:w-44 object-contain mx-6"
          />
        </a>
        <a href="https://vessl.ai" target="_blank" className="inline-block">
          <Logo
            logo="vessl"
            variant="black"
            className="object-contain m-auto"
            // className="inline-block h-12 w-32 md:h-20 md:w-54 object-contain mx-6"
          />
        </a>
        <a
          href="https://unstructured.io"
          target="_blank"
          className="inline-block"
        >
          <Logo
            logo="unstructured"
            className="object-contain w-[50%] m-auto"
            // className="inline-block h-12 w-12 md:h-20 md:w-20 object-contain mx-6"
          />
        </a>
        <a href="https://baz.co" target="_blank" className="inline-block">
          <Logo
            logo="baz"
            variant="black"
            className="object-contain w-[50%] m-auto"
            // className="inline-block h-12 w-18 md:h-20 md:w-28 object-contain mx-6"
          />
        </a>
        <a href="https://riza.ai" target="_blank" className="inline-block">
          <Logo
            logo="riza"
            variant="black"
            className="object-contain w-[50%] m-auto"
            // className="inline-block h-12 w-16 md:h-20 md:w-24 object-contain mx-6"
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
