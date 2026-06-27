import { getSiteUrl } from "@/lib/site-url";
import { demoStatus, getDemoUrl } from "@/lib/demo-urls";

export const site = {
  name: "Yatharth Sharma",
  role: "AI-Focused Full-Stack Developer",
  tagline:
    "Software engineer with production experience shipping React/TypeScript UIs and REST APIs. I own features end to end: LLM integrations, RAG pipelines, document ingestion, and polished, accessible interfaces with strong attention to performance and craft.",
  availability: "Open to full-time roles",
  location: "Faridabad, Haryana, India",
  phone: "+91 8802518567",
  email: "yatharthsharma1309@gmail.com",
  linkedin: "https://www.linkedin.com/in/yatharthsharma-ai/",
  github: "https://github.com/YatharthSharma1309",
  resumePdf: "/resume/yatharth-sharma-resume.pdf",
  profileImage: "/profile-avatar.jpeg",
  url: getSiteUrl(),
};

/** ATS-friendly summary for the downloadable resume PDF. */
export const resumeSummary =
  "AI-focused full-stack developer with production experience at Whilter.AI (Dec 2025 — Jun 2026) — React/TypeScript UIs, REST APIs, and LLM integrations. Also delivered multi-tenant CRM, recruiter AI tooling, and end-to-end RAG and document ingestion pipelines. Open to full-time engineering roles — India and remote-friendly.";

export const aboutParagraphs = [
  "I ship intelligent web applications end to end — from RAG pipelines and semantic search to polished, accessible interfaces with strong attention to performance and craft.",
  "I own full vertical slices: responsive UIs, REST endpoints, request validation, and LLM integrations — so features move from idea to production with fewer hand-offs between layers.",
  "I translate Figma into code with Tailwind CSS and Styled Components, with clean state management (Redux, Context) and interfaces that are intuitive and accessible.",
];

export const skillCategories = [
  {
    label: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Styled Components",
      "Redux",
      "Context API",
      "Accessibility",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "Prisma",
      "PostgreSQL",
      "REST APIs",
      "JWT auth",
      "OAuth",
    ],
  },
  {
    label: "AI & LLM",
    skills: [
      "OpenRouter",
      "RAG pipelines",
      "Semantic search",
      "Streaming APIs",
      "Document ingestion",
    ],
  },
] as const;

export const skillBuildingGroups = [
  {
    label: "Document & ingestion",
    skills: ["OCR", "PDF/DOCX parsing"],
  },
  {
    label: "Data & persistence",
    skills: ["SQL optimization", "Schema design"],
  },
  {
    label: "Delivery & craft",
    skills: ["CI/CD", "UI/UX design"],
  },
] as const;

export const skillBuilding = skillBuildingGroups.flatMap((group) => group.skills);

export const skillGroups = {
  core: skillCategories.flatMap((category) => category.skills),
  deepening: [...skillBuilding],
} as const;

export const heroFocus = ["AI", "React / TypeScript", "RAG & APIs"] as const;

export const twinStarterQuestions = [
  "What did you work on at Whilter.AI?",
  "Summarize my background for a hiring manager in 3 bullets.",
  "Which skills are you actively building depth in?",
] as const;

export const twinWelcome =
  "Hi — I'm Yatharth's career twin. Ask about my production experience, stack, projects, or hiring fit." as const;

export const sectionCopy = {
  about: {
    title: "Production full-stack engineering with AI at the core",
    recruiterBullets: [
      "Production React/TypeScript + REST APIs at Whilter.AI (Dec 2025 — Jun 2026)",
      "Shipped RAG, document ingestion, OAuth CRM, and recruiter tooling end to end",
      "Open to full-time roles · India / remote-friendly",
    ],
    stackHelper:
      "Core stack I ship in production — React/TypeScript UIs, REST APIs, and LLM integrations.",
    buildingTitle: "Building depth in",
    buildingHelper: "Focused growth areas — where I am actively leveling up.",
  },
  portfolio: {
    title: "Featured full-stack & AI builds",
    description:
      "Three flagship projects — production RAG support SaaS, recruiter AI tooling, and multi-tenant CRM — with problem, outcome, and stack at a glance. Live demos and repos linked where available.",
    moreBuildsLabel: "More builds",
  },
  contact: {
    title: "Open to full-time engineering roles",
    description:
      "Especially teams shipping React/TypeScript products with AI integrations — RAG, LLMs, and document ingestion. Email is fastest; resume and GitHub are one click below.",
    responseTime: "I typically respond within 2 business days.",
    emailLabel: "Email Yatharth",
  },
  certifications: {
    title: "Certifications that back the stack",
    description:
      "Azure AI/Data credentials and cloud architecture training — aligned with the LLM, RAG, and API work in my projects.",
  },
  journey: {
    title: "From analytics to production full-stack AI engineering",
    description:
      "Grounded in data work at EY and Honeywell, then into web development and production software — most recently full-stack AI features at Whilter.AI (through Jun 2026) with React, TypeScript, REST APIs, and LLM/RAG integrations.",
  },
  digitalTwin: {
    description:
      "A conversational way to explore my background — roles, stack, and projects. Answers are based on this portfolio's career data.",
    chatTitle: "Career Twin",
    inputPlaceholder: "Ask about my React/TypeScript work, RAG projects, or full-time role search...",
    formFooter: "Ready to talk? Email me or download my resume from the contact section.",
  },
} as const;

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Native" },
  { name: "French", level: "Beginner" },
] as const;

export const currentlyLearning = [...skillBuilding] as const;

export const linkedInProfileSnapshot = {
  headline:
    "AI-Focused Full-Stack Developer — React/TypeScript, REST APIs, RAG, and LLM integrations.",
  about:
    "Strong work ethic, adaptability, and interpersonal collaboration. Comfortable working independently across the stack — from UI components to API endpoints — learning quickly, and delivering end-to-end features.",
  interests: ["Web Development", "Full-Stack Engineering", "AI & LLM Integration", "React"],
  currentlyLearning: [...currentlyLearning],
  achievements: ["Pull Shark x2", "Quickdraw", "YOLO"],
} as const;

export type JourneyItem = {
  title: string;
  org: string;
  period: string;
  location: string;
  description?: string[];
  current?: boolean;
};

export const journey: JourneyItem[] = [
  {
    title: "Software Engineer Trainee",
    org: "Whilter.AI",
    period: "Dec 2025 — Jun 2026",
    location: "Gurugram, Haryana",
    current: false,
    description: [
      "Contributed to a production AI product stack — shipped React and TypeScript UI features, reusable component patterns, and interface polish in a fast-moving engineering environment.",
      "Built and maintained REST endpoints on the backend, including request validation, service integration, and API contracts that supported live product workflows.",
      "Integrated third-party services and LLM-powered capabilities into application flows — connecting external APIs to front-end experiences with clear error handling and predictable behavior.",
      "Owned full-stack feature slices end to end: UI states, backend routes, data handling, and hand-off between layers so features could move from idea to production with fewer dependencies.",
    ],
  },
  {
    title: "Data Analyst Intern",
    org: "Ernst & Young Global Consulting Services",
    period: "Feb 2025 — May 2025",
    location: "Gurugram, Haryana",
    description: [
      "Supported consulting and reporting workstreams by working with multi-source datasets pulled from different business systems and formats.",
      "Cleaned, validated, and preprocessed data to improve accuracy before analysis — catching inconsistencies, standardizing fields, and preparing datasets stakeholders could trust.",
      "Helped turn raw data into structured reporting outputs that highlighted trends, exceptions, and business-relevant signals for review.",
      "Collaborated in a professional services setting where attention to detail, documentation, and clear deliverables mattered as much as the analysis itself.",
    ],
  },
  {
    title: "Data Analyst",
    org: "Honeywell",
    period: "Jan 2023",
    location: "—",
    description: [
      "Analyzed customer feedback data to assess product and service performance — identifying recurring themes, pain points, and areas where experience could improve.",
      "Supported cross-functional analytical work by helping shape dashboards, summaries, and research inputs used in product and business discussions.",
      "Contributed to market and customer insight work that connected qualitative feedback with structured reporting for easier decision-making.",
      "Built early experience turning business questions into data-backed observations — the analytical foundation that later carried into engineering and product-focused roles.",
    ],
  },
  {
    title: "Web Development Intern",
    org: "Arctic Innovage Pvt. Ltd.",
    period: "Jul 2022 — Sep 2022",
    location: "—",
    description: [
      "Built and maintained responsive marketing and content pages with HTML, CSS, and JavaScript — focusing on layout, readability, and mobile-friendly presentation.",
      "Improved page structure and UI flow so content was easier to scan, navigate, and interact with across screen sizes.",
      "Used analytics and performance observations to refine UX choices — reducing friction in key user paths and keeping pages lightweight where possible.",
      "Gained hands-on experience translating design intent into front-end implementation, which became the base for later React, TypeScript, and full-stack work.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA), Data Analytics",
    school: "Birla Institute of Technology, Mesra",
    period: "Aug 2023 — Jul 2025",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Manav Rachna University, Faridabad",
    period: "2020 — 2023",
  },
];

export const certifications = [
  "Microsoft Certified: Azure AI Fundamentals",
  "Microsoft Certified: Azure Data Fundamentals",
  "Microsoft Certified: Azure Fundamentals",
  "AWS S3 Project (Coursera)",
  "Data Encryption using AWS KMS (UST)",
  "Cloud Architecture: Core Concepts",
  "Cloud Architecture: Advanced Concepts",
  "Excellent Contributor Award — Alibaba Cloud Low Code Development Contest 2022",
  "Devtown Backend Web Development Bootcamp",
  "Python & Data Science Essentials Bootcamp",
  "Python and Machine Learning Bootcamp",
  "Udemy — Agentic Engineer Course",
] as const;

export type PortfolioLink = {
  title: string;
  description: string;
  href: string;
  status: "Coming soon" | "In progress" | "Add URL" | "Profile" | "Live" | "Private";
  external?: boolean;
  demoUrl?: string;
  featured?: boolean;
  problem?: string;
  result?: string;
  stack?: string[];
};

export const portfolioLinks: PortfolioLink[] = [
  {
    title: "SupportAI — Customer Support Platform",
    description:
      "Multi-tenant SaaS for AI-powered customer support — document ingestion, streaming RAG chat with citations, agent inbox, ticket escalation, deflection analytics, and an embeddable widget.",
    href: "https://github.com/YatharthSharma1309/ai-customer-support-platform",
    status: demoStatus(getDemoUrl("supportAI")),
    external: true,
    featured: true,
    demoUrl: getDemoUrl("supportAI"),
    problem:
      "Support teams need grounded AI answers, agent handoff, and measurable deflection — without bolting together separate chat, ticketing, and analytics tools.",
    result:
      "Shipped a full support platform: knowledge-base ingestion (PDF/DOCX/TXT/MD), streaming RAG with citations, agent inbox, ticket copilot, embeddable widget, help center, and deflection analytics — multi-tenant with Clerk orgs.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "OpenRouter", "RAG"],
  },
  {
    title: "RecruitAI — Smart Recruitment Assistant",
    description: "Recruiter dashboard for resume screening and candidate scoring.",
    href: "https://github.com/YatharthSharma1309/AI-Recruitment-Assistant",
    status: demoStatus(getDemoUrl("recruitAI")),
    external: true,
    featured: true,
    demoUrl: getDemoUrl("recruitAI"),
    problem:
      "Manual resume screening is slow and inconsistent when matching candidates to job requirements.",
    result:
      "Built a dashboard that parses PDF/DOCX resumes, scores candidates against job descriptions, surfaces skill gaps, and generates interview questions.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "OpenRouter", "PDF parsing"],
  },
  {
    title: "AI Sales Assistant CRM",
    description: "Multi-tenant B2B CRM with OAuth integrations and AI-drafted follow-ups.",
    href: "https://github.com/YatharthSharma1309/ai-sales-assistant-crm",
    status: demoStatus(getDemoUrl("salesCRM")),
    external: true,
    featured: true,
    demoUrl: getDemoUrl("salesCRM"),
    problem:
      "Sales teams juggle leads across tools without a unified pipeline or AI-assisted follow-up workflow.",
    result:
      "Shipped a multi-tenant CRM with drag-and-drop pipeline, activity timelines, lead scoring, and OAuth sync for HubSpot, Salesforce, Google Calendar, and Gmail.",
    stack: ["React", "Express", "Prisma", "PostgreSQL", "JWT", "OAuth"],
  },
  {
    title: "IntelliRAG",
    description: "Production RAG platform for contextual querying and semantic search.",
    href: "",
    status: "Private",
    featured: false,
    problem:
      "Organisations need reliable semantic search over proprietary documents without exposing source code.",
    result:
      "Delivered end-to-end RAG — document ingestion, chunking, embeddings, retrieval, and LLM response generation — as private org infrastructure.",
    stack: ["RAG", "Embeddings", "Semantic search", "LLM APIs", "Document ingestion"],
  },
  {
    title: "EduTech — AI Document Processing",
    description:
      "Early-phase exploration of AI-powered educational document processing — OCR-based Q&A extraction from PDFs, classification, and Excel-ready output. Official organisation repo; source is private and not publicly shareable.",
    href: "",
    status: "Private",
  },
  {
    title: "TermLens",
    description:
      "Legal-tech SaaS (parked for job search) — explains Terms, Privacy, and Refund policies in plain English with risk scores. FastAPI backend, browser extension, desktop app, Razorpay billing. Private repo; interview narrative only.",
    href: "https://github.com/YatharthSharma1309/TermLens",
    status: "Private",
    external: true,
  },
  {
    title: "Arena Deathmatch",
    description:
      "Browser-based 3D first-person arena shooter — waves, dual weapons, minimap, difficulty tiers, and persistent high scores. Pure HTML/CSS/JS, no install required.",
    href: "https://github.com/YatharthSharma1309/arena-deathmatch",
    status: "Live",
    external: true,
  },
];

export const featuredPortfolioLinks = portfolioLinks.filter((p) => p.featured);
export const morePortfolioLinks = portfolioLinks.filter((p) => !p.featured);

/** Projects on the resume — featured builds first, then additional AI/full-stack work. */
export const resumeProjectLinks = [
  ...featuredPortfolioLinks,
  ...morePortfolioLinks.filter((p) => p.status === "Private" || p.status === "Live"),
];
