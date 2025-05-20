
import imgExpo from "~/images/worldsfair-2025/tracks/expo.jpg";
import imgAIArchitects from "~/images/worldsfair-2025/tracks/ai-architects.jpg";
import imgEvals from "~/images/worldsfair-2025/tracks/evals.jpg";
import imgRevivalSearchRecommendation from "~/images/worldsfair-2025/tracks/retrieval-search-recommendation-systems.jpg";
import imgSecurity from "~/images/worldsfair-2025/tracks/security.jpg";
import imgGenerativeMedia from "~/images/worldsfair-2025/tracks/generative-media.jpg";
import imgComputerUsingAgents from "~/images/worldsfair-2025/tracks/computer-using-agents.jpg";
import imgSWEAgents from "~/images/worldsfair-2025/tracks/swe-agents.jpg";
import imgLocalLlama from "~/images/worldsfair-2025/tracks/r-local-llama.jpg";
import imgModelContextProtocol from "~/images/worldsfair-2025/tracks/model-context-protocol.jpg";
import imgGraphRAG from "~/images/worldsfair-2025/tracks/graph-rag.jpg";
import imgAIInAction from "~/images/worldsfair-2025/tracks/ai-in-action.jpg";
import imgVibeCoding from "~/images/worldsfair-2025/tracks/vibe-coding.jpg";
import imgVoiceSalesSupport from "~/images/worldsfair-2025/tracks/voice.jpg";

// Define interfaces for the track data structure
export interface Track {
  trackShortCode: string;
  trackTitle: string;
  trackDescription: string;
  subDesc?: string; // Optional sub-description
  trackImg?: string; // Add optional track image property
}

export const Day1Tracks: Track[] = [
  {
    trackShortCode: "01",
    trackTitle: "Tiny Teams",
    trackDescription: "AI has enabled every builder to have more impact than ever before — where we often had large companies with more VC funding than users, it's increasingly common to see profitable teams with more millions in ARR and customers than employees. Hear from these founders and the tools that enable them!",
    trackImg: imgAIInAction.src             // Tiny Teams -> AI in Action (Generic)
  },
  {
    trackShortCode: "02",
    trackTitle: "MCP",
    trackDescription: "The winner of the 2023-2025 \"agent open standard\" wars has conquered the ecosystem — every client from Anysphere to Zed, and every lab from OpenAI to Google DeepMind. But there is much work left to do.  The world's first dedicated MCP miniconf, ft. special double presentations by the MCP team from Anthropic, discussions on the new Auth spec, and the first IRL gathering of the MCP steering committee.",
    trackImg: imgModelContextProtocol.src   // MCP -> MCP
  },
  {
    trackShortCode: "03",
    trackTitle: "LLM RecSys",
    trackDescription: "LLMs are reshaping recommendation systems, one of the most valuable problems in industrial AI. Building on past techniques such as Word2Vec for retrieval and BERT for ranking, LLMs are now driving advancements through novel model architectures, metadata generation, domain-specialized LoRAs, and more. Curated by Eugene Yan. ",
    subDesc: "Accepted talks include YouTube's scalable, cost-effective encoding of video for recommendations, LinkedIn's decoder-only foundational model for multi-task ranking, and Instacart's LLM-powered search for improving discovery.",
    trackImg: imgRevivalSearchRecommendation.src // LLM RecSys -> Retrieval/Search/Rec
  },
  {
    trackShortCode: "04",
    trackTitle: "Agent Reliability",
    trackDescription: "Less capability, more reliability please! Armed with all the frontier models, the best agent frameworks, and yes, even good evals, your agent just isn't that reliable, and that's frustrating. What next? Here are all the SOTA techniques Agent Engineers are using in 2025. Supported by PromptQL from Hasura.",
    trackImg: imgEvals.src                  // Agent Reliability -> Evals (Related)
  },
  {
    trackShortCode: "05",
    trackTitle: "AI Infrastructure",
    trackDescription: "AI Engineers who are really serious about their AI software should care about their hardware. From GPUs to Networking, from shared orchestration infrastructure to LLM Gateways, the industry is converging on a standard stack of infrastructure that will 100x every AI Engineer.",
    trackImg: imgSecurity.src               // AI Infrastructure -> Security (Often paired)
  },
  {
    trackShortCode: "06",
    trackTitle: "Product Management",
    trackDescription: "AI Engineers are increasingly PM-ing their product, and PMs are increasingly vibe-coding prototypes without engineers. The problem everyone has in common is defining how to repeatably make great AI Products and Agents that create their category, like ChatGPT, NotebookLM and Deep Research. For the first time, we meet to raise the bar on AI PMing.",
    trackImg: imgVibeCoding.src             // Product Management -> Vibe Coding (Building/Prototyping)
  },
  {
    trackShortCode: "07",
    trackTitle: "Voice",
    trackDescription: "Before humanity invented writing, we had been speaking for over 100,000 years. We also speak and listen at 3x faster WPM than we write. Voice is our past as much as it is our future - and Voice AI experiences are one of the most demanding AI engineering conditions. Learn from the best in the field.",
    trackImg: imgVoiceSalesSupport.src      // Voice -> Voice/Sales/Support
  },
  {
    trackShortCode: "08",
    trackTitle: "GraphRAG",
    trackDescription: "Enough repetitive \"long context vs RAG\" debates. Real AI Engineers are getting busy building knowledge graphs for building Agent Memory and scalable, reliable RAG for the enterprise. An expansion of our most popular talk on \"The Marriage of Knowledge Graphs and RAG\" from 2024. An industry-first dedicated GraphRAG track, hosted by Steven Chin.",
    trackImg: imgGraphRAG.src                // GraphRAG -> GraphRAG
  }]
export const Day2Tracks: Track[] = [
  {
    trackShortCode: "09",
    trackTitle: "Retrieval + Search",
    trackDescription: "We killed the lazy \"RAG track\" everyone does,  to refocus the industry on the core problems of augmenting LLM knowledge: top-k embedding and retrieval from internal data, and agentic search from external web and docs, across all modalities. A complement to the RecSys track.",
    trackImg: imgRevivalSearchRecommendation.src // Retrieval + Search -> Retrieval/Search/Rec
  },
  {
    trackShortCode: "10",
    trackTitle: "Design Engineering",
    trackDescription: "LLMs are 10x better than they were a year ago, but design thinking around the UX of AI has barely budged from ChatGPT and Canvas. We have gathered the top designers and design-engineers in AI to showcase their work.",
    trackImg: imgGenerativeMedia.src        // Design Engineering -> Generative Media (Design/Media)
  },
  {
    trackShortCode: "11",
    trackTitle: "SWE Agents",
    trackDescription: "The final form of the AI Engineer is the autonomous, non-human SWE Agent who can both code alongside you in the IDE (Inner Loop) and convert PRDs to PRs (Outer Loop). How good are the SOTA SWE Agents today — good enough that companies will stop hiring AI Engineers, or good enough that engineers skilled at managing SWE Agents becomes the hottest job?",
    trackImg: imgSWEAgents.src              // SWE Agents -> SWE Agents
  },
  {
    trackShortCode: "12",
    trackTitle: "Evals",
    trackDescription: "Everybody says evals are important. You agree. But yet: You don't have evals. You don't have ENOUGH evals. Your evals keep breaking (because nondeterministic LLMs, duh). Your evals don't capture what users do. How to fix, cheaply and quickly?",
    trackImg: imgEvals.src                  // Evals -> Evals
  },
  {
    trackShortCode: "13",
    trackTitle: "Security",
    trackDescription: "As we grant agents increasingly more read and write access to our personal lives and company resources, the problem of security goes from an enterprise sales checklist item to our #0 priority. What are the SOTA approaches to authn & authz for AI?",
    trackImg: imgSecurity.src               // Security -> Security
  },
  {
    trackShortCode: "14",
    trackTitle: "Generative Media",
    trackDescription: "ImageGen, VideoGen, and MusicGen are all on an absolute tear, with increasing coherence over time and iterations, and stunning viral demos from Ghibli memes to personalized Valentines songs. How can AI engineers harness the state of the art in AI Art?",
    trackImg: imgGenerativeMedia.src        // Generative Media -> Generative Media
  },
  {
    trackShortCode: "15",
    trackTitle: "Reasoning + RL",
    trackDescription: "Reasoning models have taken over the frontier of AI in 2025, and inference-time is the next great scaling law. Per METR, long-horizon agent capabilities are doubling every 7 months. How do we generalize reasoning models beyond straightforward Math and Coding verifiers and finetune/align them? Supported by OpenPipe.",
    trackImg: imgComputerUsingAgents.src    // Reasoning + RL -> Computer-Using Agents (Reasoning/Agents)
  },
  {
    trackShortCode: "16",
    trackTitle: "Autonomy + Robotics",
    trackDescription: "The ultimate prize in AI is going outside: automating manual labor over knowledge work. Multimodal LLMs are increasingly being deployed in the real world, in everything from cars to kitchens to humanoid robots. We explore the state of physical general intelligence.",
    trackImg: imgComputerUsingAgents.src     // Autonomy + Robotics -> Computer-Using Agents (Autonomy/Agents)
  }
]

export const LeadershipTracks: Track[] = [
  {
    trackShortCode: "ES",
    trackTitle: "Expo Sessions and Hallway Track!",
    trackDescription: "Access to the World's Fair Expo gets you access to dedicated sessions from 50+ speakers, <b>Microsoft, AWS, Daily, MongoDB, Neo4j, and more</b>, as well as the all important Hallway Track (aka the best way to network with 3000+ AI Engineers)! Attendees can propose their own unscheduled talks that can be added to the program.",
    trackImg: imgExpo.src
  },
  {
    trackShortCode: "L1",
    trackTitle: "AI Architects",
    trackDescription: "Whether you are CEO, CTO, VP of AI, or principal engineer of your company's \"AI council\", the job of the \"most senior AI person\" at large companies is a lonely one — except here. Learn from and make connections with peers who are all entrusted with high-stakes decisions on company strategy, infrastructure, compliance, and org design. <b>Exclusive track for our Leadership attendees.</b>",
    trackImg: imgAIArchitects.src
  },
  {
    trackShortCode: "L2",
    trackTitle: "AI in the Fortune 500",
    trackDescription: "AI has it's Bitter Lesson, but AI Engineering's Sour Lesson is that every engineering problem becomes exponentially harder when deployed at scale. Many frankly never make it, despite claiming success externally. We gather the actual success stories from the largest AI transformations in the world. <b>Exclusive track for our Leadership attendees.</b>",
    trackImg: imgAIInAction.src // Reused based on similarity
  }
]

// Generate union types from track short codes
export type LeadershipTrackCode = typeof LeadershipTracks[number]['trackShortCode'];
export type Day1TrackCode = typeof Day1Tracks[number]['trackShortCode'];
export type Day2TrackCode = typeof Day2Tracks[number]['trackShortCode'];
