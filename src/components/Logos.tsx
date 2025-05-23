import Image, { type ImageProps } from "next/image";

import pydantic from "~/images/logos/pydantic.svg";
import circle from "~/images/logos/circle.svg";
import sierra from "~/images/logos/sierra.svg";
import xpander from "~/images/logos/xpander.svg";
import unstructured from "~/images/logos/unstructured.svg";
import vessl from "~/images/logos/vessl.svg";
import thomsonReuters from "~/images/logos/thomson-reuters.svg";
import tambo from "~/images/logos/tambo.svg";
import superannotate from "~/images/logos/superannotate.svg";
import sentry from "~/images/logos/sentry.svg";
import riza from "~/images/logos/riza.svg";
import redis from "~/images/logos/redis.svg";
import gensx from "~/images/logos/gensx.svg"; // theres a png too but we just use png for now
import descope from "~/images/logos/descope.svg";
import baz from "~/images/logos/baz.svg";
import agentuity from "~/images/logos/agentuity.svg";
import traceloop from "~/images/logos/traceloop.svg";
import temporal from "~/images/logos/temporal.svg";
import freeplay from "~/images/logos/freeplay.svg";
import graphite from "~/images/logos/graphite.svg";
import orb from "~/images/logos/orb.svg";
import AIBrief from "~/images/logos-media/aibrief_nlw.jpg";
import cogrevPod from "~/images/logos-media/cogrev_podcast.png";
import cooperPress from "~/images/logos-media/cooperpress-logo.svg";
import Economist from "~/images/logos-media/economist_logo.png";
import harperCarroll from "~/images/logos-media/harpercarroll_youtube.jpg";
import MLOpsCommunity from "~/images/logos-media/mlops_community.jpeg";
import NewStack from "~/images/logos-media/newstack_logo.jpeg";
import oneQuark from "~/images/logos-media/onequark_youtube.png";
import OSSStartups from "~/images/logos-media/oss_podcast.png";
import Wapo from "~/images/logos-media/wapo_logo.png";
import WSJ from "~/images/logos-media/wsj.jpeg";
import adeptBlack from "~/images/logos/adept-black.svg";
import adeptWhite from "~/images/logos/adept-white.svg";
import aieBlack from "~/images/logos/aie-black.svg";
import aieWhite from "~/images/logos/aie-white.svg";
import airbyte from "~/images/logos/airbyte.svg";
import airtrain from "~/images/logos/airtrain.svg";
import amazonBlack from "~/images/logos/amazon-black.svg";
import amazonWhite from "~/images/logos/amazon-white.svg";
import amplify from "~/images/logos/amplify_partners_logo.jpeg";
import anthropicBlack from "~/images/logos/anthropic-black.svg";
import anthropicWhite from "~/images/logos/anthropic-white.svg";
import arize from "~/images/logos/arize.svg";
import augmentCodeBlack from "~/images/logos/augment-code-dark.svg";
// import braintrustLogo from "~/images/logos/braintrust-logo-dark.svg";
import braintrustLogo from "~/images/logos/braintrust.svg";
import distributionalLogo from "~/images/logos/distributional-dark.svg";
import notableLogo from "~/images/logos/notable-dark.svg";
import stifelLogo from "~/images/logos/stifel-dark.svg";
import tqventures from "~/images/logos/tq-ventures-dark.svg";
import autoGPT from "~/images/logos/autogpt.svg";
import aws from "~/images/logos/aws.svg";
import baseten from "~/images/logos/baseten.svg";
import bensBites from "~/images/logos/bens-bites.svg";
import booking from "~/images/logos/booking.svg";
import botDojo from "~/images/logos/botdojo.svg";
import brightwave from "~/images/logos/brightwave-black.svg";
import cerebras from "~/images/logos/cerebras.png";
import characterAIBlack from "~/images/logos/characterai-black.svg";
import chroma from "~/images/logos/chroma.svg";
import clericBlack from "~/images/logos/cleric-black.svg";
import cloudflare from "~/images/logos/cloudflare.svg";
import cncf from "~/images/logos/cncf.svg";
import codegenBlack from "~/images/logos/codegen-black.svg";
import codeium from "~/images/logos/codeium-green.svg";
import codium from "~/images/logos/codium.svg";
import convex from "~/images/logos/convex.svg";
import cooperpress from "~/images/logos/cooperpress.svg";
import covalentBlack from "~/images/logos/covalent-black.svg";
import crusoe from "~/images/logos/crusoe.svg";
// import daily from "~/images/logos/dailyco-black.svg";
import daily from "~/images/logos/dailyco-black.png";
import dagger from "~/images/logos/dagger.svg";
import databricks from "~/images/logos/databricks.svg";
import datadog from "~/images/logos/datadog-purple.svg";
import datastaxBlack from "~/images/logos/datastax-black.svg";
import daytona from "~/images/logos/daytona-dark.svg";
import decibel from "~/images/logos/decibel.svg";
import deepgramBlack from "~/images/logos/deepgram-black.svg";
import deepset from "~/images/logos/deepset.svg";
import elastic from "~/images/logos/elastic.svg";
import elevenLabs from "~/images/logos/evelenlabs-dark.svg";
import ellipsis from "~/images/logos/ellipsis-blue.svg";
import emergence from "~/images/logos/emergence.svg";
import eyelevel from "~/images/logos/eyelevel.png";
import fal from "~/images/logos/fal.svg";
import fireworks from "~/images/logos/fireworks.svg";
import fireworksAIBlack from "~/images/logos/fireworksai-black.svg";
import fixieWhite from "~/images/logos/fixie-white.svg";
import fixie from "~/images/logos/fixie.svg";
import friendliAI from "~/images/logos/friendliai.png";
import galileoBlackText from "~/images/logos/galileo-black-text.svg";
import galileoWhiteText from "~/images/logos/galileo-white-text.svg";
import gentraceBlack from "~/images/logos/gentrace-black.svg";
import githubBlack from "~/images/logos/github-black.svg";
import githubWhite from "~/images/logos/github-white.svg";
import gitpod from "~/images/logos/gitpod-black.svg";
import googleCloud from "~/images/logos/google-cloud.svg";
import google from "~/images/logos/google.svg";
import gradientai from "~/images/logos/gradientai.svg";
import groq from "~/images/logos/groq.svg";
import haihai from "~/images/logos/haihai.png";
// import hasuraBlack from "~/images/logos/hasura-black.svg";
import hasura from "~/images/logos/promptql-logo.svg";
import hexBlack from "~/images/logos/hex-black.svg";
import hexWhite from "~/images/logos/hex-white.svg";
import humanSignal from "~/images/logos/humansignal.svg";
import hypermodeBlack from "~/images/logos/hypermode-black.svg";
import ionicBlack from "~/images/logos/ionic-black.svg";
import khanmigo from "~/images/logos/khanmigo.svg";
import lambdaBlack from "~/images/logos/lambda-black.svg";
import langbase from "~/images/logos/langbase-black.svg";
import langChainBlack from "~/images/logos/langchain-black.svg";
import langChainWhite from "~/images/logos/langchain-white.svg";
import llamaIndexBlack from "~/images/logos/llama-index-black.svg";
import llamaIndexWhite from "~/images/logos/llama-index-white.svg";
import log10 from "~/images/logos/log10.svg";
import matillion from "~/images/logos/matillion.svg";
import method from "~/images/logos/method-black.svg";
import microsoftGrayText from "~/images/logos/microsoft-gray-text.svg";
import microsoftWhiteText from "~/images/logos/microsoft-white-text.svg";
import modular from "~/images/logos/modular.svg";
import mongoDB from "~/images/logos/mongodb.svg";
import moveAI from "~/images/logos/moveai.svg";
import mozilla from "~/images/logos/mozilla.svg";
import neaBlack from "~/images/logos/nea_logo.png";
import neo4j from "~/images/logos/neo4j.svg";
import neo4jWhite from "~/images/logos/neo4j-white.svg";
import neptuneai from "~/images/logos/neptuneai.svg";
import notionBlack from "~/images/logos/notion-black.svg";
import notionWhite from "~/images/logos/notion-white.svg";
import octoai from "~/images/logos/octoai.svg";
import openAIBlack from "~/images/logos/openai-black.svg";
import openAIWhite from "~/images/logos/openai-white.svg";
import openpipe from "~/images/logos/openpipe-logo.svg";
import oreilly from "~/images/logos/oreilly.svg";
import paig from "~/images/logos/paig-color.png";
import paigBlack from "~/images/logos/paig-logo.svg";
import pgaiBlack from "~/images/logos/pgai-logo-swag-black.png";
import pineconeBlack from "~/images/logos/pinecone-black.svg";
import planby from "~/images/logos/planby.svg";
import plumb from "~/images/logos/plumb.svg";
import portkey from "~/images/logos/portkey.svg";
import qdrant from "~/images/logos/qdrant.png";
import quotientAi from "~/images/logos/quotient-ai.svg";
import replitBlack from "~/images/logos/replit-black.svg";
import replitWhite from "~/images/logos/replit-white.svg";
import replit from "~/images/logos/replit.svg";
import sambanova from "~/images/logos/sambanova.svg";
import signalfireBlack from "~/images/logos/signalfire-black.svg";
import smolaiBlack from "~/images/logos/smolai-black.svg";
import smolaiWhite from "~/images/logos/smolai-white.svg";
import snyk from "~/images/logos/snyk-logo.svg";
import solana from "~/images/logos/solana-black.svg";
import sourcegraph from "~/images/logos/sourcegraph.svg";
import speakeasyBlack from "~/images/logos/speakeasy-black.svg";
import specstory from "~/images/logos/specstory.svg";
import substrateBlack from "~/images/logos/substrate-black.svg";
import summitBlack from "~/images/logos/summit-black.svg";
import summitWhite from "~/images/logos/summit-white.svg";
import supabaseBlack from "~/images/logos/supabase-black.svg";
import supabase from "~/images/logos/supabase.svg";
import theNewStack from "~/images/logos/the-new-stack.svg";
import tolacapital from "~/images/logos/tolacapital.png";
import trunkToolsBlack from "~/images/logos/trunktools-black.svg";
import twilio from "~/images/logos/twilio.svg";
import twitterBlack from "~/images/logos/twitter-black.svg";
import twitterWhite from "~/images/logos/twitter-white.svg";
import valor from "~/images/logos/valor.svg";
import vellum from "~/images/logos/vellum-purple.svg";
import vercelBlack from "~/images/logos/vercel-dark.svg";
import vercelWhite from "~/images/logos/vercel-white.svg";
import vespa from "~/images/logos/vespa.svg";
import videoTap from "~/images/logos/video-tap.svg";
// import weightsBiases from "~/images/logos/weights-biases.svg";
import weightsBiases from "~/images/logos/weights-biases.png";
// import windsurf from "~/images/logos/windsurf-green.svg";
import windsurf from "~/images/logos/windsurf-black.svg";
import worldsFairBlack from "~/images/logos/worldsfair-black.svg";
import worldsFairWhite from "~/images/logos/worldsfair-white.svg";
import writerBlack from "~/images/logos/writer-black.svg";
import zapier from "~/images/logos/zapier.svg";
import zetaLabs from "~/images/logos/zeta-labs.svg";
import ampersandWhite from "~/images/logos/ampersand-dark.svg";
import arcjetWhite from "~/images/logos/arcjet-dark.svg";
import flyioWhite from "~/images/logos/fly-dark.svg";
import modalWhite from "~/images/logos/modal-dark.svg";
import zedDark from "~/images/logos/zed-dark.svg";
import polarSignalsWhite from "~/images/logos/polar-signals-dark.svg";
import pomeriumWhite from "~/images/logos/pomerium-dark.svg";
import togetheraiWhite from "~/images/logos/together-dark.svg";
import workosWhite from "~/images/logos/work-os-dark.svg";

import every from "~/images/logos/every_black.svg";
import oleve from "~/images/logos/oleve.png";

import allhands from "~/images/logos/allhands.svg";
import reforge from "~/images/logos/reforge.svg";
import apify from "~/images/logos/apify.svg";
import casco from "~/images/logos/casco.svg";
import blackrock from "~/images/logos/blackrock.svg";
import qodo from "~/images/logos/qodo.svg";
import wisedocs from "~/images/logos/wisedocs.svg";
import caylent from "~/images/logos/caylent.png";
import quotient from "~/images/logos/quotient.svg";

import haize from "~/images/logos/haize.svg";
import traversal from "~/images/logos/traversal.png";

type Key = keyof typeof logos;

interface LogoProps extends Omit<ImageProps, "src" | "alt"> {
  logo: Key;
  variant?: string;
}

export function Logo({ logo: key, variant = "color", ...props }: LogoProps) {
  const { logo, name } = getLogo(key, variant);
  return (
    <Image
      {...props}
      src={
        // TODO: Fix this

        logo
      }
      alt={name ?? ""}
    />
  );
}

export function pickLogos(keys: Key[]) {
  return keys.map((key) => {
    return logos[key];
  });
}

export function getLogo(key: Key, variant: string, extras?: Record<string, string>) {
  const logoObj: Logo = logos[key] ?? ({} as Logo);
  const logo = logoObj[variant as keyof Logo] ?? "";

  return { key, ...logos[key], ...extras, logo };
}

type Logo = {
  name: string;
  color?: StaticImageData | string;
  black?: StaticImageData | string;
  white?: StaticImageData | string;
  colorGray?: StaticImageData | string;
  colorWhite?: StaticImageData | string;
};

const defineLogos = <T extends Record<string, Logo>>(obj: T): { [K in keyof T]: Logo } => obj;

export const logos = defineLogos({
  cogrevPod: {
    name: "Cognitive Revolution Podcast",
    color: cogrevPod,
  },
  pydantic: {
    name: "Pydantic",
    color: pydantic,
  },
  circle: {
    name: "Circle",
    color: circle,
  },
  sierra: {
    name: "Sierra",
    color: sierra,
  },
  xpander: {
    name: "Xpander",
    black: xpander,
  },
  thomsonReuters: {
    name: "Thomson Reuters",
    color: thomsonReuters,
  },
  tambo: {
    name: "Tambo",
    color: tambo,
  },
  vessl: {
    name: "Vessl",
    black: vessl,
  },
  unstructured: {
    name: "Unstructured",
    color: unstructured,
  },
  sentry: {
    name: "Sentry",
    black: sentry,
  },
  superannotate: {
    name: "Super Annotate",
    color: superannotate,
  },
  riza: {
    name: "Riza",
    black: riza,
  },
  descope: {
    name: "Descope",
    color: descope,
  },
  gensx: {
    name: "GenSx",
    black: gensx,
  },
  redis: {
    name: "Redis",
    color: redis,
  },
  traceloop: {
    name: "Traceloop",
    color: traceloop,
  },
  agentuity: {
    name: "Agentuity",
    color: agentuity,
  },
  baz: {
    name: "Baz",
    black: baz,
  },
  temporal: {
    name: "Temporal",
    black: temporal,
  },
  orb: {
    name: "Orb",
    black: orb,
  },
  cooperPress: {
    name: "CooperPress Newsletters",
    color: cooperPress,
  },
  harperCarroll: {
    name: "Harper Carroll AI",
    color: harperCarroll,
  },
  oneQuark: {
    name: "One Quark Media",
    color: oneQuark,
  },
  OSSStartups: {
    name: "OSS Startups",
    color: OSSStartups,
  },
  AIBrief: {
    name: "AI Brief with NLW",
    color: AIBrief,
  },
  augmentCode: {
    name: "Augment Code",
    black: augmentCodeBlack,
  },
  braintrust: {
    name: "Braintrust",
    black: braintrustLogo,
  },
  distributional: {
    name: "Distributional",
    black: distributionalLogo,
  },
  notable: {
    name: "Notable Capital",
    black: notableLogo,
  },
  stifel: {
    name: "Stifel",
    black: stifelLogo,
  },
  tqventures: {
    name: "TQ Ventures",
    black: tqventures,
  },
  freeplay: {
    name: "Freeplay",
    black: freeplay,
  },
  aie: {
    name: "AIE",
    white: aieWhite,
    black: aieBlack,
  },
  MLOpsCommunity: {
    name: "MLOps.Community",
    color: MLOpsCommunity,
  },
  Wapo: {
    name: "The Washington Post",
    color: Wapo,
  },
  WSJ: {
    name: "The Wall Street Journal",
    color: WSJ,
  },
  Economist: {
    name: "Economist",
    color: Economist,
  },
  NewStack: {
    name: "NewStack",
    color: NewStack,
  },

  adept: {
    name: "Adept",
    black: adeptBlack,
    white: adeptWhite,
  },
  dagger: {
    name: "Dagger",
    color: dagger,
  },
  specstory: {
    name: "Specstory",
    color: specstory,
  },
  booking: {
    name: "Booking",
    color: booking,
  },
  signalfire: {
    name: "SignalFire",
    black: signalfireBlack,
  },
  airbyte: {
    name: "Airbyte",
    color: airbyte,
  },
  airtrain: {
    name: "Airtrain",
    color: airtrain,
  },
  amazon: {
    name: "Amazon",
    white: amazonWhite,
    black: amazonBlack,
  },
  graphite: {
    name: "Graphite",
    black: graphite,
  },
  anthropic: {
    name: "Anthropic",
    white: anthropicWhite,
    black: anthropicBlack,
  },
  arize: {
    name: "Arize",
    color: arize,
  },
  autogpt: {
    name: "AutoGPT",
    color: autoGPT,
  },
  aws: {
    name: "AWS",
    color: aws,
  },
  baseten: {
    name: "Baseten",
    color: baseten,
  },
  bensBites: {
    name: "Ben's Bites",
    color: bensBites,
  },
  botDojo: {
    name: "BotDojo",
    color: botDojo,
  },
  brightwave: {
    name: "Brightwave",
    black: brightwave,
  },
  cerebras: {
    name: "Cerebras",
    color: cerebras,
  },
  characterAi: {
    name: "Character AI",
    black: characterAIBlack,
  },
  chroma: {
    name: "Chroma",
    color: chroma,
  },
  cleric: {
    name: "Cleric",
    black: clericBlack,
  },
  cloudflare: {
    name: "Cloudflare",
    color: cloudflare,
  },
  cncf: {
    name: "CNCF",
    color: cncf,
  },
  codegen: {
    name: "Codegen",
    black: codegenBlack,
  },
  codium: {
    name: "Codium",
    color: codium,
  },
  codeium: {
    name: "Codeium",
    color: codeium,
  },
  convex: {
    name: "Convex",
    color: convex,
  },
  cooperpress: {
    name: "Cooperpress",
    color: cooperpress,
  },
  covalent: {
    name: "Covalent",
    black: covalentBlack,
  },
  crusoe: {
    name: "Crusoe",
    color: crusoe,
  },
  daily: {
    name: "Daily",
    black: daily,
  },
  databricks: {
    name: "Databricks",
    color: databricks,
  },
  datadog: {
    name: "Datadog",
    color: datadog,
  },
  datastax: {
    name: "DataStax",
    black: datastaxBlack,
  },
  decibel: {
    name: "Decibel",
    color: decibel,
  },
  deepgram: {
    name: "Deepgram",
    black: deepgramBlack,
  },
  deepset: {
    name: "Deepset",
    black: deepset,
  },
  elastic: {
    name: "Elastic",
    color: elastic,
  },
  emergence: {
    name: "Emergence",
    color: emergence,
  },
  eyelevel: {
    name: "EyeLevel",
    color: eyelevel,
  },
  fal: {
    name: "Fal",
    color: fal,
  },
  fireworks: {
    name: "Fireworks",
    color: fireworks,
  },
  fireworksAI: {
    name: "FireworksAI",
    black: fireworksAIBlack,
  },
  fixie: {
    name: "Fixie",
    color: fixie,
    white: fixieWhite,
  },
  friendliAI: {
    name: "FriendliAI",
    color: friendliAI,
  },
  galileo: {
    name: "Galileo",
    colorWhite: galileoWhiteText,
    colorBlack: galileoBlackText,
  },
  gentrace: {
    name: "Gentrace",
    black: gentraceBlack,
  },
  github: {
    name: "Github",
    white: githubWhite,
    black: githubBlack,
  },
  google: {
    name: "Google",
    color: google,
  },
  googleCloud: {
    name: "Google Cloud",
    color: googleCloud,
  },
  gradientai: {
    name: "GradientAI",
    color: gradientai,
  },
  groq: {
    name: "Groq",
    color: groq,
  },
  haihai: {
    name: "Haihai",
    color: haihai,
  },
  hasura: {
    name: "Hasura",
    color: hasura,
    black: hasura,
  },
  hex: {
    name: "Hex",
    black: hexBlack,
    white: hexWhite,
  },
  humanSignal: {
    name: "HumanSignal",
    color: humanSignal,
  },
  hypermode: {
    name: "Hypermode",
    black: hypermodeBlack,
  },
  ionic: {
    name: "Ionic",
    black: ionicBlack,
  },
  khanmigo: {
    name: "Khanmigo",
    color: khanmigo,
  },
  lambda: {
    name: "Lambda",
    black: lambdaBlack,
  },
  langChain: {
    name: "LangChain",
    white: langChainWhite,
    black: langChainBlack,
  },
  llamaIndex: {
    name: "Llama Index",
    white: llamaIndexWhite,
    black: llamaIndexBlack,
  },
  log10: {
    name: "Log10",
    color: log10,
  },
  matillion: {
    name: "Matillion",
    color: matillion,
  },
  microsoft: {
    name: "Microsoft",
    colorGray: microsoftGrayText,
    colorWhite: microsoftWhiteText,
  },
  modular: {
    name: "Modular",
    black: modular,
    color: modular,
  },
  mongodb: {
    name: "MongoDB",
    color: mongoDB,
  },
  moveai: {
    name: "MoveAI",
    color: moveAI,
  },
  mozilla: {
    name: "Mozilla",
    color: mozilla,
  },
  nea: {
    name: "Nea",
    black: neaBlack,
  },
  amplify: {
    name: "Amplify",
    color: amplify,
  },
  neo4j: {
    name: "neo4j",
    color: neo4j,
    white: neo4jWhite,
  },
  neptuneai: {
    name: "Neptune.ai",
    color: neptuneai,
  },
  notion: {
    name: "Notion",
    white: notionWhite,
    black: notionBlack,
  },
  octoai: {
    name: "OctoAI",
    color: octoai,
  },
  openAI: {
    name: "OpenAI",
    white: openAIWhite,
    black: openAIBlack,
  },
  openpipe: {
    name: "OpenPipe",
    color: openpipe,
  },
  oreilly: {
    name: "O'Reilly",
    color: oreilly,
  },
  pinecone: {
    name: "Pinecone",
    black: pineconeBlack,
  },
  planby: {
    name: "Planby",
    color: planby,
  },
  plumb: {
    name: "Plumb",
    color: plumb,
  },
  qdrant: {
    name: "Qdrant",
    color: qdrant,
  },
  quotientAi: {
    name: "Quotient AI",
    color: quotientAi,
  },
  replit: {
    name: "Replit",
    color: replit,
    black: replitBlack,
    white: replitWhite,
  },
  sambanova: {
    name: "SambaNova",
    color: sambanova,
  },
  smolai: {
    name: "SmolAI",
    black: smolaiBlack,
    white: smolaiWhite,
  },
  snyk: {
    name: "Snyk",
    color: snyk,
  },
  sourcegraph: {
    name: "Sourcegraph",
    color: sourcegraph,
  },
  speakeasy: {
    name: "Speakeasy",
    black: speakeasyBlack,
  },
  substrate: {
    name: "Substrate Black",
    black: substrateBlack,
  },
  summit: {
    name: "AI Engineer Summit",
    black: summitBlack,
    white: summitWhite,
  },
  supabase: {
    name: "Supabase",
    color: supabase,
    black: supabaseBlack,
  },
  theNewStack: {
    name: "The New Stack",
    color: theNewStack,
  },
  tolacapital: {
    name: "Tola Capital",
    color: tolacapital,
  },
  trunkTools: {
    name: "Trunk Tools",
    black: trunkToolsBlack,
  },
  twilio: {
    name: "Twilio",
    color: twilio,
  },
  twitter: {
    name: "Twitter",
    black: twitterBlack,
    white: twitterWhite,
  },
  valor: {
    name: "Valor",
    color: valor,
  },
  vercel: {
    name: "Vercel",
    white: vercelWhite,
    black: vercelBlack,
  },
  vespa: {
    name: "Vespa",
    color: vespa,
  },
  videoTap: {
    name: "VideoTap",
    color: videoTap,
  },
  weightsBiases: {
    name: "Weights and Biases",
    color: weightsBiases,
  },
  worldsFair: {
    name: "World's Fair",
    white: worldsFairWhite,
    black: worldsFairBlack,
  },
  writer: {
    name: "Writer",
    black: writerBlack,
  },
  zapier: {
    name: "Zapier",
    color: zapier,
  },
  zetaLabs: {
    name: "Zeta Labs",
    color: zetaLabs,
  },
  daytona: {
    name: "Daytona",
    black: daytona,
  },
  elevenLabs: {
    name: "ElevenLabs",
    black: elevenLabs,
  },
  ellipsis: {
    name: "Ellipsis",
    color: ellipsis,
  },
  gitpod: {
    name: "Gitpod",
    color: gitpod,
  },
  langbase: {
    name: "Langbase",
    black: langbase,
  },
  portkey: {
    name: "Portkey",
    color: portkey,
  },
  solana: {
    name: "Solana",
    color: solana,
  },
  vellum: {
    name: "Vellum",
    color: vellum,
  },
  windsurf: {
    name: "Windsurf",
    color: windsurf,
  },
  method: {
    name: "Method",
    color: method,
  },
  paig: {
    name: "Paig",
    color: paig,
    black: paigBlack,
  },
  pgai: {
    name: "PGAI",
    color: pgaiBlack,
  },
  ampersand: {
    name: "Ampersand",
    white: ampersandWhite,
  },
  arcjet: {
    name: "Arcjet",
    white: arcjetWhite,
  },
  zed: {
    name: "Zed",
    white: zedDark,
  },
  flyio: {
    name: "Fly.io",
    white: flyioWhite,
  },
  modal: {
    name: "Modal",
    white: modalWhite,
  },
  polarSignals: {
    name: "Polar Signals",
    white: polarSignalsWhite,
  },
  pomerium: {
    name: "Pomerium",
    white: pomeriumWhite,
  },
  togetherAI: {
    name: "Together AI",
    white: togetheraiWhite,
  },
  workOS: {
    name: "WorkOS",
    white: workosWhite,
  },
  every: {
    name: "Every",
    color: every,
  },
  oleve: {
    name: "Oleve",
    color: oleve,
  },
  allhands: {
    name: "Allhands",
    color: allhands,
  },
  reforge: {
    name: "Reforge",
    color: reforge,
  },
  apify: {
    name: "Apify",
    color: apify,
  },
  casco: {
    name: "Casco",
    color: casco,
  },
  blackrock: {
    name: "Blackrock",
    color: blackrock,
  },
  qodo: {
    name: "Qodo",
    color: qodo,
  },
  wisedocs: {
    name: "WiseDocs",
    color: wisedocs,  
  },
  caylent: {
    name: "Caylent",
    color: caylent,
  },
  quotient: {
    name: "Quotient",
    color: quotient,
  },
  traversal: {
    name: "Traversal",
    color: traversal,
  },
  haize: {
    name: "Haize",
    color: haize,
  }
});
