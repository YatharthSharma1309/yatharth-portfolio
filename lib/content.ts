import { getSiteUrl } from "@/lib/site-url";
import { demoStatus, getDemoUrl } from "@/lib/demo-urls";
import { resumeDownloads, resumeProfiles } from "@/lib/resume-variants";

const defaultResume = resumeProfiles.fullstack;
const targetedResume = resumeProfiles.ai;

export const site = {
  name: "Yatharth Sharma",
  role: defaultResume.role,
  targetedRole: targetedResume.role,
  targetedRoleWhenToUse: targetedResume.whenToUse,
  roleStack:
    "React · Next.js · TypeScript · FastAPI · Node.js · PostgreSQL · RAG",
  tagline:
    "Software Engineer and Full-Stack Developer with production React/TypeScript interfaces, FastAPI and Node.js APIs, and PostgreSQL-backed RAG features at Whilter.AI — plus deployed products with OpenRouter, embeddings, and document intelligence.",
  availability: "Open to full-time · India & remote",
  location: "Faridabad, Haryana, India",
  phone: "+91 8802518567",
  email: "yatharthsharma1309@gmail.com",
  linkedin: "https://www.linkedin.com/in/yatharthsharma-ai/",
  github: "https://github.com/YatharthSharma1309",
  resumePdf: resumeDownloads.fullstack.href,
  resumePdfAi: resumeDownloads.ai.href,
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

/** Default (Software Engineer) resume summary — AI-targeted copy lives in resume-variants. */
export const resumeSummary = defaultResume.summary;

export const engineeringHighlights = [
  "Delivered 8+ end-to-end features at Whilter.AI across frontend, backend, and PostgreSQL",
  "Built Debrief for OpenAI Build Week 2026 with cited Decision Briefs and streaming RAG Q&A",
  "Production React/TypeScript interfaces and FastAPI/Node.js APIs on IntelliRAG",
] as const;

export const heroMetrics = [
  { value: "3", label: "Live demos" },
  { value: "8+", label: "Whilter.AI features" },
  { value: "3", label: "Azure certifications" },
  { value: "3", label: "Flagship builds" },
] as const;

export const aboutParagraphs = [
  "I build software end to end — React/TypeScript interfaces, FastAPI and Node.js APIs, PostgreSQL-backed systems, and the AI-integrated features those products need.",
  "I own full vertical slices: responsive UIs, REST endpoints, request validation, and integrations — so features move from idea to production with fewer hand-offs between layers.",
  "At Whilter.AI (Dec 2025 — Jun 2026) I worked as a Software Engineer Trainee and delivered production React/TypeScript interfaces, FastAPI and Node.js APIs, and RAG document-intelligence workflows for IntelliRAG.",
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
    skills: ["Azure", "AWS", "Vercel", "Railway", "Neon", "Docker", "Git", "Playwright"],
  },
] as const;

export const skillBuildingGroups = [
  {
    label: "RAG quality",
    skills: ["LLM evals", "Hybrid search", "Citation grounding"],
  },
  {
    label: "Document AI",
    skills: ["Chunking strategies", "Table extraction", "PDF/DOCX ingestion"],
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
    title: "Production full-stack engineering — with real AI product experience",
    description:
      "React, TypeScript, FastAPI, Node.js, and PostgreSQL in production, plus RAG and LLM integrations where the product needs them.",
    recruiterBullets: [
      "Software Engineer Trainee at Whilter.AI (Dec 2025 — Jun 2026) — 8+ production features across frontend, backend, and PostgreSQL",
      "Three live demos: Debrief (streaming RAG Q&A), OpsConcierge — AI Ops Desk (Support + Hiring), and AI Sales Assistant CRM",
      "Open to full-time Software Engineer and Full-Stack roles · India & remote",
      `Second resume for GenAI / RAG postings: ${targetedResume.role}`,
    ],
    stackHelper:
      "Tools I actually ship with in production — not a buzzword list.",
    buildingTitle: "Building depth",
    buildingHelper: "Growth areas I am deliberately investing in beyond day-to-day shipping.",
  },
  portfolio: {
    title: "Flagship full-stack & AI builds",
    description:
      "Three live demos plus private commercial and enterprise work. Flagships include problem, outcome, and stack.",
    featuredLabel: "Flagship projects",
    moreBuildsLabel: "Additional projects",
  },
  contact: {
    title: "Open to full-time software engineering roles",
    description: `Especially Software Engineer and Full-Stack teams shipping React/TypeScript products. For Generative AI, LLM, or RAG postings, download the ${targetedResume.role} resume. Email is fastest.`,
    responseTime: "I typically respond within 2 business days.",
    emailLabel: "Email Yatharth",
  },
  certifications: {
    title: "Certifications & recognition",
    description:
      "Azure fundamentals credentials, OpenAI Build Week, and the Alibaba Cloud contributor award — the strongest signals alongside the live projects above.",
  },
  journey: {
    title: "From analytics into production software engineering",
    description:
      "Data work at EY and Honeywell, early web development at Arctic Innovage, then production full-stack features at Whilter.AI — React, TypeScript, REST APIs, PostgreSQL, and RAG (retrieval-augmented generation) integrations.",
  },
  digitalTwin: {
    description: `A conversational way to explore my background — roles, stack, projects, and which resume to use (default ${defaultResume.role} vs targeted ${targetedResume.role}). Answers are based on this portfolio's career data.`,
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
    "You hire Yatharth Sharma, a software engineer in Faridabad who builds AI hiring tools. There is no separate company name to remember.",
  demoLabel: "Live demo — no sign-in",
  walkthroughLabel: "Request a walkthrough",
  whatsappLabel: "Chat on WhatsApp",
  whatsappText:
    "Hi Yatharth — I want a 10-minute walkthrough of the AI Hiring Desk.",
  emailSubject: "AI Hiring Desk walkthrough",
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
    `${defaultResume.role} — React/TypeScript, FastAPI, Node.js, PostgreSQL`,
  about:
    "Software Engineer and Full-Stack Developer. As a Software Engineer Trainee at Whilter.AI I built production React/TypeScript interfaces, FastAPI and Node.js APIs, and PostgreSQL-backed RAG features. I also ship Debrief (streaming RAG Q&A), OpsConcierge — AI Ops Desk (Support + Hiring), and AI Sales Assistant CRM. Open to full-time Software Engineer and Full-Stack roles — India and remote-friendly.",
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
      "Built production React/TypeScript interfaces and FastAPI/Node.js APIs for IntelliRAG, a document-intelligence RAG platform used in enterprise workflows.",
      "Delivered 8+ end-to-end features across frontend, backend, and PostgreSQL — application workflows, admin dashboards, document-processing pipelines, and REST API integrations.",
      "Developed reusable UI components and backend modules reused across multi-tenant SaaS tenants.",
      "Wired PDF/DOCX ingestion, semantic search, RAG retrieval, and streaming RAG Q&A into production application workflows.",
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
    location: "India",
    description: [
      "Summarized customer-feedback themes into dashboard inputs used in product and business review discussions.",
    ],
  },
  {
    title: "Web Development Intern",
    org: "Arctic Innovage Pvt. Ltd.",
    period: "Jul 2022 — Sep 2022",
    location: "India",
    description: [
      "Built responsive marketing pages using HTML, CSS, and JavaScript.",
      "Used analytics insights to improve UX on high-traffic site paths.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
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
  "OpenAI Build Week 2026 — Debrief (decision-intelligence / RAG workspace)",
  "Microsoft Certified: Azure AI Fundamentals",
  "Microsoft Certified: Azure Fundamentals",
  "Microsoft Certified: Azure Data Fundamentals",
  "Excellent Contributor Award — Alibaba Cloud Low Code Development Contest 2022",
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
      "Decision-recovery RAG workspace that turns scattered PDFs, DOCX files, and notes into cited Decision Briefs with streaming RAG Q&A.",
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
      "Built OpsConcierge: widget intake → RAG-grounded FAQ answers → escalation with full transcript → execution log; plus resume parsing, JD scoring, interview-question generation, and hiring pipeline.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "OpenRouter", "RAG"],
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
      "Built commercial legal-tech SaaS with a FastAPI backend, browser extension, Tauri desktop app, and Razorpay billing — private codebase.",
    stack: ["FastAPI", "Browser Extension", "Tauri", "Razorpay", "LLM APIs"],
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
      "Built core parts of Whilter.AI's document-intelligence RAG platform — org-isolated ingestion-to-retrieval pipelines, chunking, pgvector embedding storage, API contracts, and citation-backed RAG answers for enterprise B2B deployments.",
    stack: [
      "RAG",
      "Embeddings",
      "PostgreSQL",
      "pgvector",
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
