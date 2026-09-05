import { getSiteUrl } from "@/lib/site-url";
import { demoStatus, getDemoUrl } from "@/lib/demo-urls";

export const site = {
  name: "Yatharth Sharma",
  role: "AI Full-Stack Engineer",
  roleStack:
    "React · Next.js · FastAPI · Node.js · TypeScript · RAG · pgvector · PostgreSQL",
  tagline:
    "Hands-on experience shipping production AI applications — multi-tenant SaaS, RAG systems, semantic search, OCR pipelines, and enterprise REST APIs across recruitment, customer support, legal-tech, CRM, and document intelligence.",
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
  "AI Full-Stack Engineer with production experience shipping React/TypeScript UIs, FastAPI and Node.js APIs, and LLM/RAG systems at Whilter.AI. Delivered multi-tenant SaaS, semantic search, OCR, and document intelligence across recruitment, CRM, support, and LegalTech, and built Debrief for OpenAI Build Week 2026.";

/** Flat keyword line for ATS parsers — mirrors common JD terminology. */
export const resumeSkillKeywords =
  "TypeScript, JavaScript, Python, React, Next.js, Node.js, FastAPI, PostgreSQL, pgvector, Prisma, REST APIs, RAG, LLMs, Embeddings, OpenRouter, Semantic Search, Prompt Engineering, OCR, Document Processing, PDF/DOCX Parsing, Streaming APIs, Multi-tenant SaaS, Clerk, OAuth, JWT, Tailwind CSS, Vercel, Railway, Neon, Docker, Playwright";

export const engineeringHighlights = [
  "Shipped 8+ end-to-end AI features at Whilter.AI across frontend, API, and data layers",
  "Built Debrief for OpenAI Build Week 2026 with cited Decision Briefs and streaming RAG Q&A",
  "Delivered enterprise RAG with FastAPI, PostgreSQL, pgvector, and LLM APIs",
] as const;

export const heroMetrics = [
  { value: "3", label: "Live demos" },
  { value: "8+", label: "Whilter.AI features" },
  { value: "3", label: "Azure certifications" },
  { value: "3", label: "Flagship builds" },
] as const;

export const aboutParagraphs = [
  "I ship intelligent web applications end to end — from RAG pipelines and semantic search to polished, accessible interfaces with strong attention to performance and craft.",
  "I own full vertical slices: responsive UIs, REST endpoints, request validation, and LLM integrations — so features move from idea to production with fewer hand-offs between layers.",
  "Recent production experience at Whilter.AI (Dec 2025 — Jun 2026) delivering React/TypeScript interfaces, FastAPI and Node.js APIs, and LLM-powered document intelligence workflows.",
];

export const skillCategories = [
  {
    label: "Frontend stack",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend & APIs",
    skills: [
      "FastAPI",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "JWT",
      "OAuth",
    ],
  },
  {
    label: "AI / ML",
    skills: [
      "RAG",
      "Embeddings",
      "Semantic Search",
      "pgvector",
      "OpenRouter",
      "Prompt Engineering",
      "OCR",
      "Streaming APIs",
    ],
  },
  {
    label: "Cloud & tooling",
    skills: ["Vercel", "Railway", "Neon", "Docker", "Git", "Playwright"],
  },
] as const;

export const skillBuildingGroups = [
  {
    label: "RAG quality",
    skills: ["LLM evals", "Hybrid search", "Citation grounding"],
  },
  {
    label: "Document AI",
    skills: ["Chunking strategies", "Table extraction", "PDF/DOCX parsing"],
  },
  {
    label: "Systems & delivery",
    skills: ["SQL tuning", "Schema design", "CI/CD"],
  },
] as const;

export const skillBuilding = skillBuildingGroups.flatMap((group) => group.skills);

export const skillGroups = {
  core: skillCategories.flatMap((category) => category.skills),
  deepening: [...skillBuilding],
} as const;

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
    description:
      "Production experience across React, FastAPI, RAG, and deployed full-stack AI products, with a focus on clear interfaces and reliable delivery.",
    recruiterBullets: [
      "Production React/TypeScript + FastAPI/Node.js APIs at Whilter.AI (Dec 2025 — Jun 2026)",
      "Three live demos: Debrief, OpsConcierge, and AI Sales Assistant CRM",
      "Open to full-time roles · India & remote-friendly",
    ],
    stackHelper:
      "Tools I actually ship with in production — not a buzzword list.",
    buildingTitle: "Building depth",
    buildingHelper: "Growth areas I am deliberately investing in beyond day-to-day shipping.",
  },
  portfolio: {
    title: "Flagship AI & full-stack builds",
    description:
      "Three live demos plus private commercial and enterprise work. Flagships include problem, outcome, and stack.",
    featuredLabel: "Flagship projects",
    moreBuildsLabel: "Additional projects",
  },
  contact: {
    title: "Open to full-time engineering roles",
    description:
      "Especially teams shipping React/TypeScript products with AI integrations — RAG, LLMs, and document ingestion. Email is fastest.",
    responseTime: "I typically respond within 2 business days.",
    emailLabel: "Email Yatharth",
  },
  certifications: {
    title: "Certifications & recognition",
    description:
      "Azure fundamentals credentials plus OpenAI Build Week — the strongest signals alongside the live projects above.",
  },
  journey: {
    title: "From analytics to production full-stack AI engineering",
    description:
      "Grounded in data work at EY, then into web development and production software — most recently full-stack AI features at Whilter.AI (through Jun 2026) with React, TypeScript, REST APIs, and LLM/RAG integrations.",
  },
  digitalTwin: {
    description:
      "A conversational way to explore my background — roles, stack, and projects. Answers are based on this portfolio's career data.",
    chatTitle: "Career Twin",
    inputPlaceholder: "Ask about my experience, stack, or projects...",
  },
} as const;

/** Freelance page — trade as Yatharth Sharma, not a studio brand. */
export const freelanceOffer = {
  eyebrow: "For businesses",
  kicker: "Stop screening every CV by hand.",
  title: "AI Hiring Desk for recruiters and service businesses",
  lede:
    "I set up an AI assistant that answers common enquiries, captures the lead, scores resumes against a job, and hands off to a human when it cannot answer. You keep the decision.",
  pitch:
    "I can show a working version in 10 minutes. If it matches how you screen CVs or handle FAQs, I customize it for your firm — deposit before build.",
  identityNote:
    "You hire Yatharth Sharma, an AI full-stack engineer in Faridabad. There is no separate company name to remember.",
  demoLabel: "Live demo — no sign-in",
  walkthroughLabel: "Request a walkthrough",
  whatsappLabel: "Chat on WhatsApp",
  whatsappText:
    "Hi Yatharth — I want a 10-minute walkthrough of the AI Hiring Desk.",
  demoHiringPath: "/recruitment",
  demoWidgetPath: "/widget",
  proof: [
    "Live demo you can click today",
    "No sign-in on the hiring lane",
    "Faridabad · India and remote",
    "50% deposit before I build",
  ],
  problems: [
    {
      title: "The same FAQ every day",
      body: "Staff repeat fees, slots, and documents on WhatsApp and email instead of doing the work that pays.",
    },
    {
      title: "CVs with no rubric",
      body: "Every PDF is opened by hand. There is no shared why / why-not, so shortlists change with whoever is tired.",
    },
    {
      title: "Leads that vanish in chat",
      body: "A name and phone sit in a thread. Nobody owns the follow-up, so the enquiry dies.",
    },
    {
      title: "No record of what was promised",
      body: "When a bot or intern answers, you cannot see the transcript if a client says they were told something else.",
    },
    {
      title: "Tools that need a six-month build",
      body: "Most firms do not need a new product. They need their FAQs and jobs on a desk that already works.",
    },
    {
      title: "Vendors who sell placements",
      body: "I do not promise hires, lead volume, or revenue. The desk answers, captures, and shortlists. You decide.",
    },
  ],
  outcomes: [
    {
      title: "A desk you can try first",
      body: "The hiring lane and widget are live. The walkthrough is the demo, not a slide deck.",
    },
    {
      title: "Your FAQs and jobs, not a generic bot",
      body: "Replies cite your documents. Resume scores use your job, not a one-size rubric.",
    },
    {
      title: "A shortlist with reasons",
      body: "Upload PDFs. You get ranked candidates and why / why-not. Hire or reject stays with you.",
    },
    {
      title: "Handoff with the full thread",
      body: "When it cannot answer, a ticket opens with the transcript so a human is not starting from zero.",
    },
  ],
  faq: [
    {
      q: "Who is this for?",
      a: "Owner-led recruitment firms, coaching institutes, clinics, CAs, and local professionals who can say yes on a call. Not enterprise RFPs, banks, or government tenders.",
    },
    {
      q: "What happens after I write or WhatsApp?",
      a: "I reply within two business days, usually with a 10-minute demo slot. I ask how you handle CVs or enquiries today. I do not quote a final price on that first call.",
    },
    {
      q: "What is included in a setup?",
      a: "Your FAQs or jobs on the live OpsConcierge desk, the widget or hiring lane, lead capture, and 30 days of bug fixes in scope. Monthly retain covers small changes and hosting coordination. AI API is billed at cost.",
    },
    {
      q: "Do you guarantee interviews, placements, or leads?",
      a: "No. The desk does not replace your judgement or your market. Anyone who sells a placement number is selling something I will not put in writing.",
    },
    {
      q: "How do we pay?",
      a: "Written proposal, then 50% deposit before I customize. Remaining payment before go-live. GST if a CA says it applies. UPI or bank transfer — details go in the proposal, not on this page.",
    },
    {
      q: "How fast can this go live?",
      a: "A typical customize-and-go-live is days to a few weeks after deposit, depending on how fast you send FAQs, jobs, and sample CVs. I do not start without the deposit.",
    },
  ],
  closingTitle: "See the desk, then decide.",
  closingBody:
    "Ten minutes on the live hiring lane. If it fits, I write a proposal. I do not start work before a deposit.",
  howItWorks: [
    {
      step: "01",
      title: "Answer enquiries",
      body: "Website widget trained on your FAQs. Replies cite your docs, not generic ChatGPT.",
    },
    {
      step: "02",
      title: "Capture the lead",
      body: "Name, phone, and requirement land with you instead of disappearing in chat.",
    },
    {
      step: "03",
      title: "Shortlist resumes",
      body: "Upload PDFs against a job. Ranked shortlist with why / why-not. You still hire or reject.",
    },
    {
      step: "04",
      title: "Human handoff",
      body: "When the assistant cannot answer, it opens a ticket with the full transcript.",
    },
  ],
  who: [
    "Recruitment consultants still reading every CV by hand",
    "Coaching institutes and consultants with the same FAQ every day",
    "Clinics, CAs, and local professionals who live in WhatsApp and email",
  ],
  menu: [
    {
      name: "AI Hiring Desk",
      when: "Lead offer — recruiters and agencies",
      band: "Pilot ₹10,000 · typical setup ₹15,000–₹40,000",
      retain: "Then ₹3,000–₹8,000/month + AI API at cost",
    },
    {
      name: "AI enquiry assistant",
      when: "FAQ-heavy sites without a hiring inbox",
      band: "₹15,000–₹40,000 setup",
      retain: "Maintenance ₹2,000–₹8,000/month + API at cost",
    },
    {
      name: "Website + lead capture",
      when: "Only if you ask — not a brochure site",
      band: "₹8,000–₹20,000",
      retain: "Form or WhatsApp capture included",
    },
  ],
  notIncluded: [
    "Guaranteed placements, lead volume, or revenue",
    "Official WhatsApp Business API approval unless quoted separately",
    "Native iOS/Android apps",
    "A new product built from scratch when the live desk already fits",
  ],
  process: [
    "10-minute demo on the live desk",
    "Seven questions about how you work today — no price on that call",
    "Written proposal · 50% deposit · then I customize",
    "Go-live after remaining payment · 30 days of bug fixes in scope",
  ],
  contactTitle: "Book a 10-minute walkthrough",
  contactDescription:
    "Tell me how you handle CVs or enquiries today. I typically reply within 2 business days. I do not start work before a deposit.",
  formIntro: "Business enquiry — I will reply by email.",
  companyPlaceholder: "Firm name · city",
  messagePlaceholder:
    "How you screen resumes or handle enquiries today, and whether you want a 10-minute demo.",
} as const;

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Native" },
  { name: "French", level: "Beginner" },
] as const;

export const linkedInProfileSnapshot = {
  headline:
    "AI Full-Stack Engineer — React/Next.js, FastAPI, RAG, Embeddings, Multi-tenant SaaS",
  about:
    "AI Full-Stack Engineer with production experience at Whilter.AI — React/TypeScript UIs, FastAPI and Node.js APIs, and LLM/RAG systems on a live AI product. I ship end-to-end: RAG pipelines, embeddings, document ingestion, streaming chat, multi-tenant SaaS, and polished interfaces. Flagships: OpsConcierge (support + hiring ops desk), Debrief (OpenAI Build Week 2026), and AI Sales Assistant CRM. Open to full-time roles — India and remote-friendly.",
  interests: ["Web Development", "Full-Stack Engineering", "AI & LLM Integration", "React"],
  currentlyLearning: [...skillBuilding],
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
      "Analyzed customer feedback to surface product and service themes for cross-functional discussions.",
    ],
  },
  {
    title: "Web Development Intern",
    org: "Arctic Innovage Pvt. Ltd.",
    period: "Jul 2022 — Sep 2022",
    location: "—",
    resume: false,
    description: [
      "Built responsive marketing pages with HTML, CSS, and JavaScript — early front-end foundation before React.",
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
  "OpenAI Build Week 2026 — Built and submitted Debrief (Work & Productivity)",
  "Microsoft Certified: Azure AI Fundamentals",
  "Microsoft Certified: Azure Fundamentals",
  "Microsoft Certified: Azure Data Fundamentals",
] as const;

export const resumeJourney = journey.filter((item) => item.resume !== false);

export type PortfolioLink = {
  title: string;
  description: string;
  href: string;
  status: "Coming soon" | "In progress" | "Live" | "Private" | "Open source";
  external?: boolean;
  demoUrl?: string;
  featured?: boolean;
  problem?: string;
  result?: string;
  stack?: string[];
  /** Short right-aligned label for the resume PDF (e.g. "Private · Whilter.AI"). */
  resumeTag?: string;
};

export const portfolioLinks: PortfolioLink[] = [
  {
    title: "Debrief — Decision Intelligence Workspace",
    description:
      "Decision-recovery RAG workspace that turns scattered PDFs, DOCX files, and notes into cited Decision Briefs with streaming Q&A.",
    href: "https://github.com/YatharthSharma1309/debrief",
    status: "Live",
    external: true,
    featured: true,
    demoUrl: "https://debrief-psi.vercel.app",
    problem:
      "Teams lose context across meetings and documents, making it hard to recover decisions, owners, risks, and open questions later.",
    result:
      "Built Debrief for OpenAI Build Week 2026 — a live decision-intelligence workspace with cited Decision Briefs, streaming RAG Q&A, and deployment on Vercel + Railway + Neon.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "pgvector", "OpenRouter", "Vercel", "Railway", "Neon"],
  },
  {
    title: "OpsConcierge — AI Ops Desk (Support + Hiring)",
    description:
      "Multi-tenant SaaS for small businesses: RAG support (KB, chat, tickets, widget), auditable execution logs, and AI hiring (resume parsing, JD scoring, pipeline).",
    href: "https://github.com/YatharthSharma1309/opsconcierge",
    status: demoStatus(getDemoUrl("opsConcierge")),
    external: true,
    featured: true,
    demoUrl: getDemoUrl("opsConcierge"),
    problem:
      "Small teams answer the same support questions at night and manually screen resumes with no rubric — usually across separate tools.",
    result:
      "Built OpsConcierge: widget intake → grounded FAQ answers → escalation with full transcript → execution log; plus recruitment shortlisting and pipeline in the same workspace.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "OpenRouter", "RAG", "PDF parsing"],
  },
  {
    title: "AI Sales Assistant CRM",
    description: "Multi-tenant CRM with OAuth, AI lead scoring, and HubSpot/Salesforce integrations.",
    href: "https://github.com/YatharthSharma1309/ai-sales-assistant-crm",
    status: demoStatus(getDemoUrl("salesCRM")),
    external: true,
    featured: true,
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
    href: "",
    status: "Private",
    featured: false,
    resumeTag: "Private · Commercial SaaS",
    problem:
      "Users struggle to understand legal documents buried in dense Terms of Service and Privacy policies.",
    result:
      "Built commercial legal-tech SaaS with a FastAPI backend, browser extension, desktop app, and Razorpay billing — private codebase.",
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
      "Built core parts of Whilter.AI's document-intelligence platform — org-isolated ingestion-to-retrieval pipelines, chunking, embedding storage, API contracts, and citation-backed LLM responses for enterprise B2B deployments.",
    stack: [
      "RAG",
      "Embeddings",
      "PostgreSQL",
      "Multi-tenant SaaS",
      "FastAPI",
      "Semantic search",
    ],
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
