import { getSiteUrl } from "@/lib/site-url";
import { demoStatus, getDemoUrl } from "@/lib/demo-urls";

export const site = {
  name: "Yatharth Sharma",
  role: "AI Full-Stack Engineer",
  roleStack:
    "React · Next.js · FastAPI · Node.js · TypeScript · RAG · LLMs · Clerk · PostgreSQL",
  tagline:
    "AI Full-Stack Engineer with hands-on experience developing production-grade AI applications — scalable SaaS platforms, RAG systems, semantic search, OCR pipelines, and enterprise REST APIs across recruitment, customer support, legal-tech, CRM, and document intelligence.",
  availability: "Open to full-time · India & remote",
  location: "Faridabad, Haryana, India",
  phone: "+91 8802518567",
  email: "yatharthsharma1309@gmail.com",
  linkedin: "https://www.linkedin.com/in/yatharthsharma-ai/",
  github: "https://github.com/YatharthSharma1309",
  resumePdf: "/resume/yatharth-sharma-resume.pdf",
  resumeDocx: "/resume/Yatharth_Sharma_Premium_Resume_V2.docx",
  resumeZip: "/resume/Yatharth-Sharma-Resume-Package.zip",
  profileImage: "/profile-avatar.jpeg",
  url: getSiteUrl(),
};

export type ResumeContactItem = {
  label: string;
  href?: string;
};

export const resumeContactPrimary: ResumeContactItem[] = [
  { label: "Faridabad, Haryana" },
  { label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { label: site.email, href: `mailto:${site.email}` },
];

export const resumeContactLinks: ResumeContactItem[] = [
  { label: "Portfolio", href: site.url },
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
];

/** ATS-friendly summary for the downloadable resume PDF. */
export const resumeSummary =
  "AI Full-Stack Engineer with production experience at Whilter.AI — React/TypeScript UIs, FastAPI/Node.js REST APIs, and LLM integrations (RAG pipelines, embeddings, document ingestion, semantic search, streaming cited answers). Shipped 8+ end-to-end features across multi-tenant SaaS, enterprise RAG, and commercial LegalTech.";

/** Flat keyword line for ATS parsers — mirrors common JD terminology. */
export const resumeSkillKeywords =
  "TypeScript, JavaScript, Python, React, Next.js, Node.js, FastAPI, PostgreSQL, Prisma, REST APIs, RAG, LLMs, Embeddings, OpenRouter, Semantic Search, Prompt Engineering, Document Processing, PDF/DOCX Parsing, Streaming APIs, Multi-tenant SaaS, Clerk, Supabase, Zod, OAuth, JWT, Tailwind CSS, Azure, AWS, Vercel, Playwright";

export const engineeringHighlights = [
  "Built 6+ production-quality AI applications",
  "Developed end-to-end multi-tenant SaaS platforms with RAG and streaming chat",
  "Integrated LLMs, embeddings, semantic search, and OCR into business workflows",
] as const;

export const heroMetrics = [
  { value: "6+", label: "AI applications shipped" },
  { value: "1", label: "Live flagship demo" },
  { value: "4+", label: "Production domains" },
  { value: "3", label: "Azure certifications" },
] as const;

export const aboutParagraphs = [
  "I ship intelligent web applications end to end — from RAG pipelines and semantic search to polished, accessible interfaces with strong attention to performance and craft.",
  "I own full vertical slices: responsive UIs, REST endpoints, request validation, and LLM integrations — so features move from idea to production with fewer hand-offs between layers.",
  "Recent production experience at Whilter.AI (Dec 2025 — Jun 2026) delivering React/TypeScript interfaces, FastAPI and Node.js APIs, and LLM-powered document intelligence workflows.",
];

export const skillCategories = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "Context API",
      "Responsive UI",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Prisma",
      "Clerk",
      "Supabase",
      "Zod",
      "JWT",
      "OAuth",
      "Webhooks",
    ],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    label: "AI",
    skills: [
      "LLMs",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "Prompt Engineering",
      "OCR",
      "OpenRouter",
      "Document Processing",
      "PDF/DOCX Parsing",
      "Streaming APIs",
      "Multi-tenant SaaS",
    ],
  },
  {
    label: "Cloud",
    skills: ["Microsoft Azure", "AWS", "Vercel"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Playwright", "Vitest", "Postman", "Linux", "Resend"],
  },
] as const;

export const skillBuildingGroups = [
  {
    label: "AI infrastructure",
    skills: ["Vector databases (pgvector)", "LLM eval tooling", "Docker"],
  },
  {
    label: "Document & ingestion",
    skills: ["OCR", "PDF/DOCX parsing", "Chunking strategies"],
  },
  {
    label: "Data & delivery",
    skills: ["SQL optimization", "Schema design", "CI/CD"],
  },
] as const;

export const skillBuilding = skillBuildingGroups.flatMap((group) => group.skills);

export const skillGroups = {
  core: skillCategories.flatMap((category) => category.skills),
  deepening: [...skillBuilding],
} as const;

export const heroFocus = ["AI / LLMs", "React / TypeScript", "RAG & Multi-tenant SaaS"] as const;

export const twinStarterQuestions = [
  "What did you work on at Whilter.AI?",
  "Summarize my background for a hiring manager in 3 bullets.",
  "Which skills are you actively building depth in?",
] as const;

export const twinWelcome =
  "Hi — I'm Yatharth's career twin. Ask about my production experience, stack, projects, or hiring fit." as const;

export const sectionCopy = {
  highlights: {
    title: "Engineering highlights",
    description:
      "Production-grade AI engineering across full-stack SaaS — from RAG and semantic search to enterprise APIs and commercial software.",
  },
  about: {
    title: "Production full-stack engineering with AI at the core",
    recruiterBullets: [
      "Production React/TypeScript + FastAPI/Node.js APIs at Whilter.AI (Dec 2025 — Jun 2026)",
      "Flagship demo: OpsAI — unified support + recruitment AI platform",
      "Open to full-time roles · India & remote-friendly",
    ],
    stackHelper:
      "Core stack I ship in production — React/TypeScript UIs, REST APIs, and LLM integrations.",
    buildingTitle: "Building depth in",
    buildingHelper: "Focused growth areas — where I am actively leveling up.",
  },
  portfolio: {
    title: "Flagship AI & full-stack builds",
    description:
      "Production-style SaaS demo — multi-tenant RAG support — plus additional full-stack work. Each card summarizes the problem, outcome, and stack recruiters care about.",
    moreBuildsLabel: "Additional projects",
    demoSoonLabel: "Live demo deploying",
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
    "AI Full-Stack Engineer — React/Next.js, FastAPI, RAG, Embeddings, Multi-tenant SaaS",
  about:
    "Full-stack developer with production experience at Whilter.AI — React/TypeScript UIs, REST APIs, and LLM integrations on a live AI product. I ship end-to-end: RAG pipelines, embeddings, document ingestion, streaming chat, multi-tenant SaaS dashboards, and polished interfaces. Portfolio flagship: OpsAI (unified support + recruitment platform). Open to full-time roles — India and remote-friendly.",
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
  /** Include on PDF resume (default true). */
  resume?: boolean;
};

export const journey: JourneyItem[] = [
  {
    title: "Software Engineer Trainee",
    org: "Whilter.AI",
    period: "Dec 2025 — Jun 2026",
    location: "Gurugram, Haryana",
    current: false,
    description: [
      "Shipped React/TypeScript UI and FastAPI/Node.js REST APIs for Whilter.AI document-intelligence product (IntelliRAG): ingestion, embeddings, semantic retrieval, and LLM responses.",
      "Delivered 8+ end-to-end features across frontend, API, and PostgreSQL — document pipelines, admin dashboards, and streaming RAG chat with citation-backed answers.",
      "Integrated OpenRouter/LLM APIs with prompt templates and validation; automated PDF/DOCX parsing and embedding workflows for production RAG.",
      "Contributed to multi-tenant SaaS patterns (auth, org scoping, API contracts) for B2B AI deployments.",
    ],
  },
  {
    title: "Data Analyst Intern",
    org: "Ernst & Young Global Consulting Services",
    period: "Feb 2025 — May 2025",
    location: "Gurugram, Haryana",
    description: [
      "Supported consulting and reporting workstreams by working with multi-source datasets pulled from different business systems and formats.",
      "Cleaned, validated, and preprocessed data to improve accuracy before analysis — catching inconsistencies and standardizing fields.",
      "Helped turn raw data into structured reporting outputs that highlighted trends, exceptions, and business-relevant signals.",
      "Collaborated in a professional services setting where attention to detail, documentation, and clear deliverables mattered.",
    ],
  },
  {
    title: "Data Analyst",
    org: "Honeywell",
    period: "Jan 2023",
    location: "—",
    resume: false,
    description: [
      "Analyzed customer feedback data to assess product and service performance — identifying recurring themes, pain points, and areas for improvement.",
      "Supported cross-functional analytical work by helping shape dashboards, summaries, and research inputs used in product discussions.",
      "Contributed to market and customer insight work connecting qualitative feedback with structured reporting.",
    ],
  },
  {
    title: "Web Development Intern",
    org: "Arctic Innovage Pvt. Ltd.",
    period: "Jul 2022 — Sep 2022",
    location: "—",
    resume: false,
    description: [
      "Built and maintained responsive marketing and content pages with HTML, CSS, and JavaScript — focusing on layout, readability, and mobile-friendly presentation.",
      "Improved page structure and UI flow so content was easier to scan, navigate, and interact with across screen sizes.",
      "Gained hands-on experience translating design intent into front-end implementation, forming the base for later React and TypeScript work.",
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
  "Microsoft Certified: Azure Fundamentals",
  "Microsoft Certified: Azure Data Fundamentals",
  "Udemy — Agentic Engineer",
  "AWS S3 Project (Coursera)",
  "Data Encryption using AWS KMS",
  "Cloud Architecture — Core Concepts",
  "Cloud Architecture — Advanced Concepts",
  "Alibaba Cloud Excellent Contributor Award",
] as const;

export const resumeJourney = journey.filter((item) => item.resume !== false);

/** Static demo URLs for PDF (env may be empty at generate time). */
export const resumeDemoUrls = {
  supportAI: "https://support-ai-nine-mu.vercel.app",
} as const;

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
  resumeBullets?: string[];
  /** Short right-aligned label for the resume PDF (e.g. "Private · Whilter.AI"). */
  resumeTag?: string;
};

export const portfolioLinks: PortfolioLink[] = [
  {
    title: "OpsAI — AI Operations Platform",
    description:
      "Unified multi-tenant SaaS: RAG customer support (KB, chat, tickets, widget) plus AI recruitment (resume parsing, JD scoring, hiring pipeline).",
    href: "https://github.com/YatharthSharma1309/ai-customer-support-platform",
    status: demoStatus(getDemoUrl("supportAI")),
    external: true,
    featured: true,
    demoUrl: getDemoUrl("supportAI"),
    problem:
      "Teams need both customer support AI and hiring automation — usually as separate tools with duplicate auth, document parsing, and LLM plumbing.",
    result:
      "Built OpsAI: multi-tenant platform with RAG support module and recruitment module (resume screening, match scores, interview questions, hire-safety workflow).",
    resumeBullets: [
      "Live: support-ai-nine-mu.vercel.app | GitHub: github.com/YatharthSharma1309/ai-customer-support-platform",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "OpenRouter", "RAG", "PDF parsing"],
  },
  {
    title: "AI Sales Assistant CRM",
    description: "Multi-tenant CRM with OAuth, AI lead scoring, and HubSpot/Salesforce integrations.",
    href: "https://github.com/YatharthSharma1309/ai-sales-assistant-crm",
    status: demoStatus(getDemoUrl("salesCRM")),
    external: true,
    featured: false,
    demoUrl: getDemoUrl("salesCRM"),
    problem:
      "Sales teams juggle leads across tools without a unified pipeline or AI-assisted follow-up workflow.",
    result:
      "Shipped a multi-tenant CRM with drag-and-drop pipeline, activity timelines, lead scoring, and OAuth sync for HubSpot, Salesforce, Google Calendar, and Gmail.",
    stack: ["React", "Express", "Prisma", "PostgreSQL", "JWT", "OAuth", "HubSpot", "Salesforce"],
  },
  {
    title: "TermLens — LegalTech SaaS",
    description:
      "Commercial LegalTech SaaS — explains Terms, Privacy, and Refund policies in plain English with risk scores. Source code confidential.",
    href: "https://github.com/YatharthSharma1309/TermLens",
    status: "Private",
    external: true,
    featured: false,
    resumeTag: "Private · Commercial SaaS",
    problem:
      "Users struggle to understand legal documents buried in dense Terms of Service and Privacy policies.",
    result:
      "Architected commercial legal-tech SaaS with FastAPI backend, browser extension, desktop app, and Razorpay billing — private codebase.",
    stack: ["FastAPI", "Browser extension", "Desktop app", "Razorpay", "LLM APIs"],
  },
  {
    title: "EduTech — AI Document Processing",
    description:
      "OCR document processing with classification and structured export for educational workflows.",
    href: "",
    status: "Private",
    featured: false,
    problem:
      "Educational institutions need automated document processing — OCR, classification, and structured data export.",
    result:
      "Built AI-powered OCR pipeline with document classification and Excel-ready structured export — private organisation repo.",
    stack: ["OCR", "Document classification", "AI processing"],
  },
  {
    title: "IntelliRAG",
    description: "Private enterprise RAG platform built during Whilter.AI tenure. Source confidential.",
    href: "",
    status: "Private",
    featured: false,
    resumeTag: "Private · Whilter.AI",
    problem:
      "B2B clients need org-isolated semantic search over proprietary documents with reliable retrieval quality and auditable, citation-backed answers.",
    result:
      "Architected Whilter.AI's document-intelligence platform — org-isolated ingestion-to-retrieval pipeline with chunking, embedding storage, API contracts, and citation-backed LLM responses for multi-tenant enterprise B2B deployments.",
    stack: [
      "RAG",
      "Embeddings",
      "PostgreSQL",
      "Multi-tenant SaaS",
      "FastAPI",
      "Semantic search",
    ],
  },
  {
    title: "Arena Deathmatch",
    description:
      "Browser-based 3D first-person arena shooter — waves, dual weapons, minimap, difficulty tiers, and persistent high scores.",
    href: "https://github.com/YatharthSharma1309/arena-deathmatch",
    status: "Live",
    external: true,
  },
];

export const featuredPortfolioLinks = portfolioLinks.filter((p) => p.featured);
export const morePortfolioLinks = portfolioLinks.filter((p) => !p.featured);

/** Flagship projects on the resume PDF. */
export const resumeProjectLinks = portfolioLinks.filter((p) => p.featured);

/** Private/confidential work summarized (with detail) on the resume PDF. */
export const resumeConfidentialProjects = ["IntelliRAG", "TermLens — LegalTech SaaS"]
  .map((title) => portfolioLinks.find((p) => p.title === title))
  .filter((p): p is PortfolioLink => Boolean(p));
