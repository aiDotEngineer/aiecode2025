import React from "react";
import { Container } from "~/components/Container";
import { PageIntro } from "~/components/PageIntro";

const data = [
  {
    companyName: "Agentuity",
    jobs: [{
      title: "Senior Engineer",
      description: <> <p>We're looking for experienced generalist engineers to help build the core infrastructure of our agent platform. You'll work on designing and implementing scalable systems for agent deployment, monitoring, and management.</p>
        <p>You'll collaborate with a small team of talented engineers to solve complex problems in distributed systems, real-time monitoring, and AI integration. We value engineers who can work across the stack and have a passion for the technologies we use.</p>
      </>,
      linkUrl: "https://agentuity.com/careers",
    }]
  },
  {
    companyName: "Baseten",
    jobs: [{
      title: "Machine Learning Engineer - Fine Tuning",
      description: <>  <p>As a Machine Learning Engineer specializing in Fine-Tuning at Baseten, you'll create exceptional value for customers by leveraging our world-class infrastructure to fine-tune large language models and/or other modalities, working directly with customers to achieve their specific goals. You'll build scalable pipelines, implement parameter-efficient techniques, and ensure a seamless transition to inference. This customer-facing role requires both technical expertise in foundation model adaptation and the ability to translate customer needs into effective solutions. You'll also help shape our product roadmap by identifying common patterns in customer requirements and working with product teams to develop reusable components and features , reducing the need for custom services and streamlining the fine-tuning process for everyone.</p>
      </>,
      linkUrl: "https://jobs.ashbyhq.com/baseten/34597ea7-068e-4b07-ae81-8986ae831104/",
    }]
  },
  {
    companyName: "Orb",
    jobs: [{
      title: "Software Engineer, Infrastructure",
      description: <>  <p>As a Software Engineer focused on Infrastructure, you’ll play a foundational role in building the systems that power Orb’s scale and reliability. We're looking for engineers who thrive in high-leverage environments and want to shape the infrastructure that supports our growing platform.</p>
        <p>This is a great opportunity to own core pieces of our infrastructure stack, help scale critical systems, and work cross-functionally with product engineering and GTM teams.</p>
      </>,
      linkUrl: "https://www.withorb.com/careers?ashby_jid=196e21b5-d1d0-426c-bd54-bba34c21c2b4",
    }]
  },
  {
    companyName: "LlamaIndex",
    jobs: [{
      title: "AI Engineer, Customer Facing",
      description: <>  <p>We're seeking an AI Engineer, Customer Facing to serve as a technical advisor and implementation partner for our customers. In this role, you'll bridge the gap between our AI platform capabilities and enterprise business needs, architecting and deploying solutions that deliver measurable value.</p>
      </>,
      linkUrl: "https://jobs.ashbyhq.com/llamaindex/c7335674-745e-4e1d-9d30-2277583c7c77",
    }]
  },
  {
    companyName: "Modal",
    jobs: [{
      title: "Member of Technical Staff - ML Performance",
      description: <>  <p>We are looking for strong engineers with experience in making ML systems performant at scale. If you are interested in contributing to open-source projects and Modal’s container runtime to push language and diffusion models towards higher throughput and lower latency, we’d love to hear from you!</p>
      </>,
      linkUrl: "https://jobs.ashbyhq.com/modal/af17da5e-23ca-4802-854d-5f0546e1ed32",
    }]
  },
  {
    companyName: "Traceloop",
    jobs: [{
      title: "Product Marketing Manager",
      description: <>  <p>We’re looking for a Product Marketing Manager who can take the complex world of LLM observability and make it simple, engaging, and compelling. You'll be responsible for shaping our positioning, launching new features, enabling sales, and crafting messaging that resonates with developers, product teams, and AI leaders alike.</p>
        <p>This is a unique opportunity to join a small but mighty team that's already working with some of the world’s leading AI teams—from startups to enterprises—on one of the fastest-growing areas in AI infrastructure.</p>
      </>,
      linkUrl: "mailto:nir@traceloop.com",
    }]
  },
  {
    companyName: "Zed",
    jobs: [{
      title: "AI Engineer",
      description: <>  <p>Zed is a next-generation code editor that's engineered from scratch in Rust to be fast, elegant, and collaborative. As we expand our AI capabilities, we're looking for engineers with deep, hands-on experience working with large language models to own and shape our AI experience.</p>
        <p>Your role will be to drive Zed's AI strategy through model evaluation, fine-tuning, and data collection. You'll work alongside our engineering team to bring AI features from concept to production, while elevating the team's understanding of language model capabilities and best practices. Your expertise will be crucial in determining how we can best leverage AI to enhance the coding experience.</p>
        <p>This role offers a unique opportunity to apply deep language model experience in a product focused on transforming how developers work. At Zed, you'll have the support of a team that excels at building world-class user interfaces for code, allowing you to push the boundaries of AI-assisted development.</p>
      </>,
      linkUrl: "https://jobs.ashbyhq.com/zed/f853eb93-9c32-46e9-b13b-deffaf47fb26",
    }]
  },
  {
    companyName: "Augment Code",
    jobs: [{
      title: "Applied AI Engineer",
      description: <>  <p>We’re looking for an Applied AI Engineer to help bring cutting-edge AI capabilities into the hands of developers. This is a hands-on engineering role at the intersection of product, AI, and systems — focused on implementing and integrating LLM-powered features that enhance developer experience and productivity.</p>
        <p>You’ll collaborate with engineers, researchers, and designers to translate product needs into intuitive, reliable AI-powered experiences. You’ll also play a key role in shaping how AI is used across our stack — from prompt design to system integration — while staying up to date on emerging AI capabilities.</p>
      </>,
      linkUrl: "https://job-boards.greenhouse.io/augmentcomputing/jobs/4680036008",
    }]
  },
  {
    companyName: "Windsurf",
    jobs: [
      {
        title: "Software Engineer, High Performance ML",
        description: <>  <p>We're looking for a high performance ML-focused software engineer to join us on our mission to build AI superpowers for developers. We serve one of the largest scale and most demanding LLM applications in the world.</p>
          <p>Develop custom LLM serving systems and corresponding datacenter infrastructure to deliver high model quality at very low latency and cost.  Improve our LLM training software both in terms of model architecture changes that improve model quality or increase iteration speed and reliability.  Build indexing systems capable of serving queries instantly from many terabytes of data within customer deployments.  Contribute to infrastructure for petabyte-scale data pipelines to accelerate our ML research work.</p>
        </>,
        linkUrl: "https://jobs.ashbyhq.com/Windsurf/faf3de33-49b8-4792-9433-2104073e66ad",
      },
      {
        title: "Software Engineer, ML Research",
        description: <>  <p>We're looking for an ML research-focused software engineer to join us on our mission to build AI superpowers for developers.</p>
          <p>Train and fine-tune large language models.  Navigate high levels of uncertainty and prioritize high-value ML experiments to maximize product impact.  Demonstrate initiative and the ability to start and make progress on projects independently.  Swiftly design, track, and analyze experiments results. Meticulously document findings, conduct ablation studies, and synthesize data into actionable insights.  Participate in the ML reading group and level up the team's knowledge of LLM training and infrastructure.</p>
        </>,
        linkUrl: "https://jobs.ashbyhq.com/Windsurf/e73d0a80-eee6-43a6-8c47-956e8fc52d76",
      },
      {
        title: "Software Engineer",
        description: <>  <p>We're looking for software engineers to join us on our mission to build AI superpowers for developers.</p>
          <p>We're hiring Software Engineers across all levels. Minimum 2+ years of Software Engineering experience is required. Bachelors / Masters degree in computer science, mathematics or physics. Ideally attendance at a top university, or participation in programming contests.</p>
        </>,
        linkUrl: "https://jobs.ashbyhq.com/Windsurf/b1ca43e8-d8ff-44de-a49f-feeaae944f38",
      }
    ]
  },
  {
    companyName: "Ampersand",
    jobs: [{
      title: "Founding Marketer",
      description: <>  <p>Ampersand is hiring our first <b>Founding Marketer</b> — someone who’s equal parts technical tinkerer, empathetic storyteller, and relentless shipper. You’ll work directly with our founding team to help 1000x our usage chart and bring Ampersand to every AI developer building customer-facing products.</p>
        <p>We’re building the integration platform for an agentic world: real-time, enterprise-grade sync infrastructure that lets AI developers connect to customer systems like Salesforce, DealCloud, or Snowflake — without becoming an integration company.</p>
      </>,
      linkUrl: "https://www.linkedin.com/posts/ayanbarua_ai-aiagents-developers-activity-7324101622123429889-mfq3?",
    }]
  },
  {
    companyName: "Eleven Labs",
    jobs: [{
      title: "Developer Advocate",
      description: <>  <p>ElevenLabs is at the forefront of AI audio and voice technology, having launched in January 2023. With over 1 million users globally and partnerships with leading names in tech, we've recently closed a Series C funding round at a $3.3B valuation. Our mission is to make content universally accessible in any language and voice.</p>
        <p>We're seeking a Developer Advocate based in the San Francisco Bay Area to enhance our developer experience. This role involves improving documentation, creating example projects, and engaging with the developer community through content creation and events.</p>
      </>,
      linkUrl: "https://jobs.ashbyhq.com/elevenlabs/40e06dd8-5108-4ec8-ab62-a3f1d1715794",
    }]
  },
  {
    companyName: "Fly.io",
    jobs: [{
      title: "Platform Engineer: Fly Machines",
      description: <>  <p>As a Platform Engineer on the Machines team, you’ll shape the core of this system. You’ll work on <b>`flyd`</b>, the per-server orchestrator written in Go, which acts as a specialized database tracking state‑machine steps like creating, migrating, or cordoning off Fly Machines. You’ll also collaborate with our Rust‑based network infrastructure through <b>Corrosion</b>, the open‑source state‑distribution layer.</p>
        <p>Current priorities include powering two big internal products: <b>Managed Postgres (MPG</b> —which demands reliable compute‑and‑storage orchestration—and secure, ephemeral execution pools for<b>LLM coding environments</b> that can safely access APIs and secrets at scale.</p>
      </>,
      linkUrl: "https://fly.io/jobs/platform-machines/",
    }]
  },
  {
    companyName: "Pomerium",
    jobs: [{
      title: "Senior Software Engineer (Backend)",
      description: <>  <p>As a Senior Software Engineer, you will play a pivotal role in enhancing the security architecture of our platform. You’ll work closely with cross-functional teams to design, develop, and implement robust security solutions that adhere to the highest industry standards. Your contributions will directly impact the safety and integrity of organizations relying on Pomerium to secure their infrastructure.</p>
      </>,
      linkUrl: "https://www.pomerium.com/careers/senior-software-engineer",
    }]
  },
  {
    companyName: "Riza",
    jobs: [{
      title: "Systems Engineer",
      description: <>  <p>Our raison d'etre is safely running untrusted code for our customers. There's no better language to do that than Rust. We're built on top of open source foundations (wasmtime, Deno, and Firecracker) with plenty of proprietary bits to make code execution safe.</p>
        <p>We're looking to add another Rust expert to our team to help us quickly respond to customer feedback and improve our already lightning-fast performance.</p>
      </>,
      linkUrl: "https://jobs.ashbyhq.com/riza/80cf1615-27b0-40a0-a38a-de0f20e2a9f5",
    }]
  },
  {
    companyName: "Sierra",
    jobs: [{
      title: "Software Engineer, Agent",
      description: <>  <p>Design and deliver production-grade AI agents: You'll build and ship highly performant, reliable, and intuitive AI agents that are central, mission-critical and drive revenue directly to Sierra's growth. These aren't prototypes—they are powerful, scalable systems running in production environments across industries like finance, healthcare, and commerce.</p>
        <p>Drive the Agent Development Life Cycle (ADLC): You'll have complete ownership and autonomy from initial pilot through deployment and continuous iteration. You'll be responsible for building, tuning, and evolving AI agents in production environments, defining the standard for ADLC best practices along the way.</p>
        <p>Partner with large enterprises and cutting-edge startups: You'll work directly with leaders at some of the world's largest enterprises to understand their most pressing business challenges, and build AI agents that transform how they operate at scale. You'll also partner with the most cutting-edge startups in Silicon Valley, embedding AI agents across their entire business stack to drive innovation and efficiency.</p>
        <p>Build the future of the platform: Your direct work with customers will guide the evolution of Sierra's core platform. You'll surface unmet needs, prototype new tools and features, and collaborate with research, product, and platform to shape the future of AI agent development and Sierra's product.</p>
      </>,
      linkUrl: "https://jobs.ashbyhq.com/Sierra/e9f5fdb6-91ee-4c55-9230-41ec8865650e",
    }]
  },
  {
    companyName: "Tambo",
    jobs: [{
      title: "Open Application for Engineers",
      description: <>  <p><b>tambo-ai</b> is a React package for adding generative React components into your UX.  Shape how devs integrate genUX into their apps.  Power next-gen intelligent interfaces used by thousands of developers.</p>
      </>,
      linkUrl: "https://www.tambo.co",
    }]
  },
  {
    companyName: "Vercel ",
    jobs: [{
      title: "Product Engineer – v0",
      description: <>  <p>We are looking for a Product Engineer to join the V0 team, focusing on building and optimizing the next generation of AI-powered developer tools. As part of the V0 team, you will play a pivotal role in enhancing our AI-driven code generation and developer experience tooling, helping teams ship faster with cutting-edge AI-assisted workflows.</p>
        <p>You will work closely with product designers, AI researchers, and other engineers to develop intuitive and performant features that seamlessly integrate into the Vercel ecosystem. Your contributions will directly shape how developers interact with and benefit from AI-driven solutions in their workflows.</p>
      </>,
      linkUrl: "https://vercel.com/careers/product-engineer-v0-5466858004",
    }]
  },
  {
    companyName: "Xpander AI",
    jobs: [{
      title: "Solutions Architect – AI Agents Platform",
      description: <>  <p>This role requires a strong background in solution architecture, AI agent design, and enterprise systems integration. You’ll own key customer-facing initiatives and partner with top-tier clients to design, build, and deploy robust AI Agent architectures powered by [xpander.ai](http://xpander.ai/).</p>
        <p>You’ll work closely with engineering, product, and customer teams to shape the future of enterprise-grade AI Agents—from early proof of concept to scaled deployment.</p>
        <p>Expect to get your hands dirty, own technical conversations, and work side-by-side with developers, from our platform and on the client side. This is a highly strategic role, blending architecture, product thinking, and deep technical execution.</p>
      </>,
      linkUrl: "https://xpander.ai/careers/",
    }]
  }
]




export default function JobsPage() {
  // Sort companies alphabetically by companyName (do not mutate original data)
  const sortedCompanies = [...data].sort((a, b) => a.companyName.localeCompare(b.companyName));

  // Prepare anchor links for side panel
  const anchorLinks = sortedCompanies.map((company) => ({
    name: company.companyName,
    anchor: company.companyName.replace(/\s+/g, "-").toLowerCase(),
  }));

  // Improved job board layout for better visual hierarchy, info density, and spacing
  return (
    <div className="flex flex-col items-center pb-24 bg-gray-50 min-h-screen">
      <PageIntro title="AI Engineering Jobs" >
        <p className="text-lg text-gray-500">Updated: 2025-05-20</p>
        <p className="text-lg text-gray-500">All jobs are fresh and curated by sponsors of the AI Engineer World's Fair!</p>
        <p className="text-lg text-gray-500">For sponsors: if you want to list more jobs, please contact swyx or Lia.</p>
      </PageIntro>
      {/* Desktop sticky side panel + main content flex layout */}
      <div className="w-full flex flex-row max-w-7xl mx-auto mt-24">
        {/* Sticky Side Panel (hidden on mobile/tablet) */}
        <nav className="hidden lg:block w-64 mr-10">
          <div className="sticky top-32">
            <div className="mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Employers</div>
            <ul className="space-y-2">
              {anchorLinks.map((link) => (
                <li key={link.anchor}>
                  <a
                    href={`#${link.anchor}`}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {/* Main job board content */}
        <Container className="flex-1">
          <div className="w-full max-w-3xl mx-auto space-y-10">
            {/* Iterate through sorted companies */}
            {sortedCompanies.map((company, companyIdx) => (
              <section
                key={company.companyName}
                id={company.companyName.replace(/\s+/g, "-").toLowerCase()}
                className="scroll-mt-[100px]"
              >
                {/* Company header: prominent, visually separated */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    {company.companyName}
                  </span>
                  {/* Optional: Add a subtle divider for visual grouping */}
                  <span className="flex-1 border-t border-gray-200 ml-2" />
                </div>
                {/* Jobs for this company, grouped in cards */}
                <div className="flex flex-col gap-4">
                  {company.jobs.map((job, jobIdx) => (
                    <div
                      key={job.title + job.linkUrl}
                      className="bg-white shadow-sm rounded-xl border border-gray-200 p-5 group hover:shadow-md transition relative"
                    >
                      {/* Job Title - bold, compact */}
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-lg text-gray-800">
                          {job.title}
                        </span>
                      </div>
                      {/* Description - smaller, more compact */}
                      <div className="text-sm text-gray-600 mb-4">
                        {job.description}
                      </div>
                      {/* More Information button - visually prominent, right-aligned */}
                      <div className="flex justify-end">
                        <a
                          href={job.linkUrl}
                          className="inline-block px-4 py-2 border border-blue-600 rounded-lg font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition text-sm shadow-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          More Information
                        </a>
                      </div>
                      {/* Subtle divider between jobs (not after last job) */}
                      {jobIdx < company.jobs.length - 1 && (
                        <div className="absolute bottom-0 left-4 right-4 border-t border-gray-100" style={{marginBottom: '-1.25rem'}} />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}
