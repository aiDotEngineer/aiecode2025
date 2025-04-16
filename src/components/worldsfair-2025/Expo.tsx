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
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="text-5xl font-bold">The AI Engineer Expo</h1>
        <p className="max-w-2xl text-gray-on-white">
          From foundation models to domain-specific products & services, the
          Expo is your chance to meet some of the best engineers in our
          industry, working on the most cutting-edge technologies that empower
          product teams and developers like you.
        </p>
      </header>
      <p className="text-center">
        <span className="uppercase font-mono bg-gray-600 p-1 rounded-sm text-yellow-100">
          IMPORTANT
        </span>{" "}
        Email{" "}
        <a
          href="mailto:sponsorships@ai.engineer"
          className="text-blue-500 hover:text-blue-400"
        >
          sponsorships@ai.engineer
        </a>{" "}
        to be in the 2025 Expo!
      </p>

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
          <Logo logo="aws" className="object-contain" />
        </a>
        <a
          href="https://www.mongodb.com/solutions/use-cases/artificial-intelligence"
          target="_blank"
        >
          <Logo logo="mongodb" className="object-contain" />
        </a>
        <a href="https://cloud.google.com" target="_blank">
          <Logo logo="googleCloud" className="object-contain" />
        </a>
        <a href="https://neo4j.com" target="_blank">
          <Logo logo="neo4j" className="object-contain" />
        </a>
        <a href="https://sourcegraph.com" target="_blank">
          <Logo logo="sourcegraph" className="object-contain" />
        </a>
        {/* <a href="https://www.modular.com" target="_blank">
          <Logo logo="modular" variant="black" className="object-contain" />
        </a> */}
        <a href="https://www.datastax.com" target="_blank">
          <Logo logo="datastax" variant="black" className="object-contain" />
        </a>
        <a href="https://www.rungalileo.io" target="_blank">
          <Logo
            logo="galileo"
            variant="colorBlack"
            className="object-contain"
          />
        </a>
        <a href="https://neptune.ai" target="_blank">
          <Logo logo="neptuneai" className="object-contain" />
        </a>
        <a href="https://lambdalabs.com" target="_blank">
          <Logo logo="lambda" variant="black" className="object-contain" />
        </a>
        <a href="https://octo.ai" target="_blank">
          <Logo logo="octoai" className="object-contain" />
        </a>
        <a href="https://www.covalent.xyz" target="_blank">
          <Logo logo="covalent" variant="black" className="object-contain" />
        </a>
        <a href="https://hasura.io" target="_blank">
          <Logo logo="hasura" className="object-contain" />
        </a>
        <a href="https://www.crusoe.ai" target="_blank">
          <Logo logo="crusoe" className="object-contain" />
        </a>
        <a href="https://wow.groq.com/" target="_blank">
          <Logo logo="groq" className="object-contain" />
        </a>
        <a href="https://fireworks.ai/" target="_blank">
          <Logo logo="fireworks" className="object-contain" />
        </a>
        <a href="https://deepgram.com" target="_blank">
          <Logo logo="deepgram" variant="black" className="object-contain" />
        </a>
        <a href="https://wandb.ai/site" target="_blank">
          <Logo logo="weightsBiases" className="object-contain scale-110" />
        </a>
        <a href="https://www.twilio.com/en-us" target="_blank">
          <Logo logo="twilio" className="object-contain scale-110" />
        </a>
        <a href="https://airtrain.ai" target="_blank">
          <Logo logo="airtrain" className="object-contain" />
        </a>
        <a href="https://trunktools.com" target="_blank">
          <Logo logo="trunkTools" variant="black" className="object-contain" />
        </a>
        <a href="https://www.substrate.run" target="_blank">
          <Logo logo="substrate" variant="black" className="object-contain" />
        </a>
        <a href="https://cleric.io" target="_blank">
          <Logo logo="cleric" variant="black" className="object-contain" />
        </a>
        <a href="https://www.elastic.co" target="_blank">
          <Logo logo="elastic" className="object-contain" />
        </a>
        <a href="https://www.moveai.com" target="_blank">
          <Logo logo="moveai" className="object-contain" />
        </a>
        <a href="https://writer.com" target="_blank">
          <Logo
            logo="writer"
            variant="black"
            className="object-contain scale-75"
          />
        </a>
        <a href="https://www.databricks.com" target="_blank">
          <Logo
            logo="databricks"
            className="object-contain"
            style={{ transform: "scale(1.4)" }}
          />
        </a>
        <a href="https://friendli.ai" target="_blank">
          <Logo logo="friendliAI" className="object-contain scale-110" />
        </a>
        <a href="https://vespa.ai" target="_blank">
          <Logo
            logo="vespa"
            className="object-contain"
            style={{ transform: "scale(0.7)" }}
          />
        </a>
        <a href="https://www.matillion.com/" target="_blank">
          <Logo
            logo="matillion"
            className="object-contain"
            style={{ transform: "scale(0.8)" }}
          />
        </a>
        <a
          className="flex items-center justify-center"
          href="https://snyk.io/platform/deepcode-ai/"
          target="_blank"
        >
          {/**
           * When we use a scale, we don't change the minimum content size of the logo
           * and thus the parent <a> tag does not shrink to fit the content. It stays
           * expanded to be the height and width of the unscaled logo.
           *
           * By using a width instead, we constrain the logo to a max width inside the parent
           * and thus don't take up any extra vertical height.
           */}
          <Logo logo="snyk" className="object-contain w-[60%]" />
        </a>
        <a
          className="flex items-center justify-center"
          href="https://snyk.io/platform/deepcode-ai/"
          target="_blank"
        >
          <Logo logo="openpipe" className="object-contain w-[90%]" />
        </a>
        <a
          className="flex items-center justify-center"
          href="https://www.emergence.ai"
          target="_blank"
        >
          <Logo logo="emergence" className="object-contain w-[90%]" />
        </a>
      </div>
    </div>
  );
}
