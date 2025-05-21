import { Container } from "~/components/Container";
import { PageIntro } from "~/components/PageIntro";

export default function JobsPage() {
  return (
    <div className="flex flex-col gap-8 pb-24">
      <PageIntro title="AI Engineering Jobs">
      </PageIntro>
      <Container>
        <div className="prose max-w-none">
          <style jsx>{`
            h1 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1rem;
            }
          `}</style>
          <hr className="my-8 border-t border-gray-200" />
            <h1>Agentuity</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Senior Engineer</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>We're looking for experienced generalist engineers to help build the core infrastructure of our agent platform. You'll work on designing and implementing scalable systems for agent deployment, monitoring, and management.</p>
            <p>You'll collaborate with a small team of talented engineers to solve complex problems in distributed systems, real-time monitoring, and AI integration. We value engineers who can work across the stack and have a passion for the technologies we use.</p>
            <a href="https://agentuity.com/careers" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Baseten</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Machine Learning Engineer - Fine Tuning</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>As a Machine Learning Engineer specializing in Fine-Tuning at Baseten, you'll create exceptional value for customers by leveraging our world-class infrastructure to fine-tune large language models and/or other modalities, working directly with customers to achieve their specific goals. You'll build scalable pipelines, implement parameter-efficient techniques, and ensure a seamless transition to inference. This customer-facing role requires both technical expertise in foundation model adaptation and the ability to translate customer needs into effective solutions. You'll also help shape our product roadmap by identifying common patterns in customer requirements and working with product teams to develop reusable components and features , reducing the need for custom services and streamlining the fine-tuning process for everyone.</p>
            <a href="https://jobs.ashbyhq.com/baseten/34597ea7-068e-4b07-ae81-8986ae831104/" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />

          <h1>Orb</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Software Engineer, Infrastructure</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>As a Software Engineer focused on Infrastructure, you’ll play a foundational role in building the systems that power Orb’s scale and reliability. We're looking for engineers who thrive in high-leverage environments and want to shape the infrastructure that supports our growing platform.</p>
            <p>This is a great opportunity to own core pieces of our infrastructure stack, help scale critical systems, and work cross-functionally with product engineering and GTM teams.</p>
            <a href="https://www.withorb.com/careers?ashby_jid=196e21b5-d1d0-426c-bd54-bba34c21c2b4" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />


          <h1>LlamaIndex</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>AI Engineer, Customer Facing</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>We're seeking an AI Engineer, Customer Facing to serve as a technical advisor and implementation partner for our customers. In this role, you'll bridge the gap between our AI platform capabilities and enterprise business needs, architecting and deploying solutions that deliver measurable value.</p>
            <a href="https://jobs.ashbyhq.com/llamaindex/c7335674-745e-4e1d-9d30-2277583c7c77" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Modal</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Member of Technical Staff - ML Performance</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>We are looking for strong engineers with experience in making ML systems performant at scale. If you are interested in contributing to open-source projects and Modal’s container runtime to push language and diffusion models towards higher throughput and lower latency, we’d love to hear from you!</p>
            <a href="https://jobs.ashbyhq.com/modal/af17da5e-23ca-4802-854d-5f0546e1ed32" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Traceloop</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Product Marketing Manager</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>We’re looking for a Product Marketing Manager who can take the complex world of LLM observability and make it simple, engaging, and compelling. You'll be responsible for shaping our positioning, launching new features, enabling sales, and crafting messaging that resonates with developers, product teams, and AI leaders alike.</p>
            <p>This is a unique opportunity to join a small but mighty team that's already working with some of the world’s leading AI teams—from startups to enterprises—on one of the fastest-growing areas in AI infrastructure.</p>
            <a href="mailto:nir@traceloop.com" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Zed</h1>
             <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>AI Engineer</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>Zed is a next-generation code editor that's engineered from scratch in Rust to be fast, elegant, and collaborative. As we expand our AI capabilities, we're looking for engineers with deep, hands-on experience working with large language models to own and shape our AI experience.</p>
            <p>Your role will be to drive Zed's AI strategy through model evaluation, fine-tuning, and data collection. You'll work alongside our engineering team to bring AI features from concept to production, while elevating the team's understanding of language model capabilities and best practices. Your expertise will be crucial in determining how we can best leverage AI to enhance the coding experience.</p>
            <p>This role offers a unique opportunity to apply deep language model experience in a product focused on transforming how developers work. At Zed, you'll have the support of a team that excels at building world-class user interfaces for code, allowing you to push the boundaries of AI-assisted development.</p>
            <a href="https://jobs.ashbyhq.com/zed/f853eb93-9c32-46e9-b13b-deffaf47fb26" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Augment Code</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Applied AI Engineer</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>We’re looking for an Applied AI Engineer to help bring cutting-edge AI capabilities into the hands of developers. This is a hands-on engineering role at the intersection of product, AI, and systems — focused on implementing and integrating LLM-powered features that enhance developer experience and productivity.</p>
            <p>You’ll collaborate with engineers, researchers, and designers to translate product needs into intuitive, reliable AI-powered experiences. You’ll also play a key role in shaping how AI is used across our stack — from prompt design to system integration — while staying up to date on emerging AI capabilities.</p>
            <a href="https://job-boards.greenhouse.io/augmentcomputing/jobs/4680036008" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Windsurf</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Software Engineer, High Performance ML</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>We're looking for a high performance ML-focused software engineer to join us on our mission to build AI superpowers for developers. We serve one of the largest scale and most demanding LLM applications in the world.</p>
            <p>Develop custom LLM serving systems and corresponding datacenter infrastructure to deliver high model quality at very low latency and cost.  Improve our LLM training software both in terms of model architecture changes that improve model quality or increase iteration speed and reliability.  Build indexing systems capable of serving queries instantly from many terabytes of data within customer deployments.  Contribute to infrastructure for petabyte-scale data pipelines to accelerate our ML research work.</p>
            <a href="https://jobs.ashbyhq.com/Windsurf/faf3de33-49b8-4792-9433-2104073e66ad" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>

            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Software Engineer, ML Research</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>We're looking for an ML research-focused software engineer to join us on our mission to build AI superpowers for developers.</p>
            <p>Train and fine-tune large language models.  Navigate high levels of uncertainty and prioritize high-value ML experiments to maximize product impact.  Demonstrate initiative and the ability to start and make progress on projects independently.  Swiftly design, track, and analyze experiments results. Meticulously document findings, conduct ablation studies, and synthesize data into actionable insights.  Participate in the ML reading group and level up the team's knowledge of LLM training and infrastructure.</p>
            <a href="https://jobs.ashbyhq.com/Windsurf/e73d0a80-eee6-43a6-8c47-956e8fc52d76" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>

            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Software Engineer</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>We're looking for software engineers to join us on our mission to build AI superpowers for developers.</p>
            <p>We're hiring Software Engineers across all levels. Minimum 2+ years of Software Engineering experience is required. Bachelors / Masters degree in computer science, mathematics or physics. Ideally attendance at a top university, or participation in programming contests.</p>
            <a href="https://jobs.ashbyhq.com/Windsurf/b1ca43e8-d8ff-44de-a49f-feeaae944f38" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Ampersand</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Founding Marketer</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>Ampersand is hiring our first <b>Founding Marketer</b> — someone who’s equal parts technical tinkerer, empathetic storyteller, and relentless shipper. You’ll work directly with our founding team to help 1000x our usage chart and bring Ampersand to every AI developer building customer-facing products.</p>
            <p>We’re building the integration platform for an agentic world: real-time, enterprise-grade sync infrastructure that lets AI developers connect to customer systems like Salesforce, DealCloud, or Snowflake — without becoming an integration company.</p>
            <a href="https://www.linkedin.com/posts/ayanbarua_ai-aiagents-developers-activity-7324101622123429889-mfq3?" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Eleven Labs</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Developer Advocate</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>ElevenLabs is at the forefront of AI audio and voice technology, having launched in January 2023. With over 1 million users globally and partnerships with leading names in tech, we've recently closed a Series C funding round at a $3.3B valuation. Our mission is to make content universally accessible in any language and voice.</p>
            <p>We're seeking a Developer Advocate based in the San Francisco Bay Area to enhance our developer experience. This role involves improving documentation, creating example projects, and engaging with the developer community through content creation and events.</p>
            <a href="https://jobs.ashbyhq.com/elevenlabs/40e06dd8-5108-4ec8-ab62-a3f1d1715794" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Fly.io</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Platform Engineer: Fly Machines</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>As a Platform Engineer on the Machines team, you’ll shape the core of this system. You’ll work on <b>`flyd`</b>, the per-server orchestrator written in Go, which acts as a specialized database tracking state‑machine steps like creating, migrating, or cordoning off Fly Machines. You’ll also collaborate with our Rust‑based network infrastructure through <b>Corrosion</b>, the open‑source state‑distribution layer.</p>
            <p>Current priorities include powering two big internal products: <b>Managed Postgres (MPG</b> —which demands reliable compute‑and‑storage orchestration—and secure, ephemeral execution pools for<b>LLM coding environments</b> that can safely access APIs and secrets at scale.</p>
            <a href="https://fly.io/jobs/platform-machines/" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Pomerium</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Senior Software Engineer (Backend)</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>As a Senior Software Engineer, you will play a pivotal role in enhancing the security architecture of our platform. You’ll work closely with cross-functional teams to design, develop, and implement robust security solutions that adhere to the highest industry standards. Your contributions will directly impact the safety and integrity of organizations relying on Pomerium to secure their infrastructure.</p>
            <a href="https://www.pomerium.com/careers/senior-software-engineer" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Riza</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Systems Engineer</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>Our raison d'etre is safely running untrusted code for our customers. There's no better language to do that than Rust. We're built on top of open source foundations (wasmtime, Deno, and Firecracker) with plenty of proprietary bits to make code execution safe.</p>
            <p>We're looking to add another Rust expert to our team to help us quickly respond to customer feedback and improve our already lightning-fast performance.</p>
            <a href="https://jobs.ashbyhq.com/riza/80cf1615-27b0-40a0-a38a-de0f20e2a9f5" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Sierra</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Software Engineer, Agent</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>Design and deliver production-grade AI agents: You'll build and ship highly performant, reliable, and intuitive AI agents that are central, mission-critical and drive revenue directly to Sierra's growth. These aren't prototypes—they are powerful, scalable systems running in production environments across industries like finance, healthcare, and commerce.</p>
            <p>Drive the Agent Development Life Cycle (ADLC): You'll have complete ownership and autonomy from initial pilot through deployment and continuous iteration. You'll be responsible for building, tuning, and evolving AI agents in production environments, defining the standard for ADLC best practices along the way.</p>
            <p>Partner with large enterprises and cutting-edge startups: You'll work directly with leaders at some of the world's largest enterprises to understand their most pressing business challenges, and build AI agents that transform how they operate at scale. You'll also partner with the most cutting-edge startups in Silicon Valley, embedding AI agents across their entire business stack to drive innovation and efficiency.</p>
            <p>Build the future of the platform: Your direct work with customers will guide the evolution of Sierra's core platform. You'll surface unmet needs, prototype new tools and features, and collaborate with research, product, and platform to shape the future of AI agent development and Sierra's product.</p>
            <a href="https://jobs.ashbyhq.com/Sierra/e9f5fdb6-91ee-4c55-9230-41ec8865650e" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Tambo</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Open Application for Engineers</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p><b>tambo-ai</b> is a React package for adding generative React components into your UX.  Shape how devs integrate genUX into their apps.  Power next-gen intelligent interfaces used by thousands of developers.</p>
            <a href="https://www.tambo.co" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Vercel </h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Product Engineer – v0</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>We are looking for a Product Engineer to join the V0 team, focusing on building and optimizing the next generation of AI-powered developer tools. As part of the V0 team, you will play a pivotal role in enhancing our AI-driven code generation and developer experience tooling, helping teams ship faster with cutting-edge AI-assisted workflows.</p>
            <p>You will work closely with product designers, AI researchers, and other engineers to develop intuitive and performant features that seamlessly integrate into the Vercel ecosystem. Your contributions will directly shape how developers interact with and benefit from AI-driven solutions in their workflows.</p>
            <a href="https://vercel.com/careers/product-engineer-v0-5466858004" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
          <h1>Xpander AI</h1>
            <h3 className="font-bold text-xl mb-3">Title:</h3>
            <p>Solutions Architect – AI Agents Platform</p>
            <h3 className="font-bold text-xl mb-3">Description:</h3>
            <p>This role requires a strong background in solution architecture, AI agent design, and enterprise systems integration. You’ll own key customer-facing initiatives and partner with top-tier clients to design, build, and deploy robust AI Agent architectures powered by [xpander.ai](http://xpander.ai/).</p>
            <p>You’ll work closely with engineering, product, and customer teams to shape the future of enterprise-grade AI Agents—from early proof of concept to scaled deployment.</p>
            <p>Expect to get your hands dirty, own technical conversations, and work side-by-side with developers, from our platform and on the client side. This is a highly strategic role, blending architecture, product thinking, and deep technical execution.</p>
            <a href="https://xpander.ai/careers/" className="inline-block px-6 py-2 border border-gray-300 rounded-full font-bold text-black bg-white hover:bg-gray-100 transition">More Information</a>
          <hr className="my-8 border-t border-gray-200" />
        </div>
      </Container>
    </div>
  );
} 