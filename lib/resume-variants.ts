export type ResumeVariantId = "fullstack" | "ai";

export type ResumeSkillCategory = {
  label: string;
  skills: string[];
};

export type ResumeExperience = {
  org: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
  featured?: boolean;
};

export type ResumeProject = {
  title: string;
  live?: boolean;
  badge?: string;
  stack: string[];
  bullets: string[];
};

export type ResumeProfile = {
  id: ResumeVariantId;
  filename: string;
  downloadName: string;
  label: string;
  whenToUse: string;
  role: string;
  summary: string;
  skillKeywords: string;
  skillCategories: ResumeSkillCategory[];
  experience: ResumeExperience[];
  projectTitle: string;
  projects: ResumeProject[];
  education: { degree: string; school: string; period: string }[];
  certifications: string[];
  languages: string;
};

const education = [
  {
    degree: "MCA",
    school: "Birla Institute of Technology, Mesra",
    period: "Aug 2023 – Jul 2025",
  },
  {
    degree: "BCA",
    school: "Manav Rachna University, Faridabad",
    period: "2020 – 2023",
  },
] as const;

const certifications = [
  "OpenAI Build Week 2026 — Debrief (decision-intelligence / RAG workspace)",
  "Microsoft Certified: Azure AI Fundamentals · Azure Fundamentals · Azure Data Fundamentals",
  "Excellent Contributor Award — Alibaba Cloud Low Code Development Contest 2022",
] as const;

const languages = "English (Fluent) · Hindi (Native) · French (Beginner)";

const olderExperience = {
  ey: {
    org: "Ernst & Young Global Consulting Services",
    title: "Data Analyst Intern",
    period: "Feb 2025 – May 2025",
    location: "Gurugram, Haryana",
  },
  honeywell: {
    org: "Honeywell",
    title: "Data Analyst",
    period: "Jan 2023",
    location: "India",
  },
  arctic: {
    org: "Arctic Innovage Pvt. Ltd.",
    title: "Web Development Intern",
    period: "Jul 2022 – Sep 2022",
    location: "India",
  },
} as const;

export const resumeProfiles: Record<ResumeVariantId, ResumeProfile> = {
  fullstack: {
    id: "fullstack",
    filename: "yatharth-sharma-resume.pdf",
    downloadName: "Yatharth-Sharma-Resume.pdf",
    label: "Software Engineer / Full-Stack",
    whenToUse:
      "Default PDF for Software Engineer and Full-Stack roles — React, Next.js, TypeScript, FastAPI, Node.js, Python, and PostgreSQL.",
    role: "Software Engineer | Full-Stack Developer",
    summary:
      "Software Engineer and Full-Stack Developer with production experience building React/TypeScript applications, FastAPI and Node.js APIs, PostgreSQL-backed systems, and RAG/LLM-integrated products at Whilter.AI. Delivered 8+ end-to-end features across frontend, backend, PostgreSQL, document-processing pipelines, and REST APIs for multi-tenant SaaS.",
    skillKeywords:
      "JavaScript, TypeScript, Python, SQL, React, Next.js, HTML5, CSS3, Tailwind CSS, FastAPI, Node.js, Express, REST APIs, PostgreSQL, Prisma, JWT, OAuth, RAG, LLM APIs, Embeddings, Semantic Search, pgvector, OpenRouter, OCR, Streaming APIs, Azure, AWS, Vercel, Railway, Neon, Docker, Git, GitHub, Playwright, Vitest",
    skillCategories: [
      {
        label: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "SQL"],
      },
      {
        label: "Frontend",
        skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"],
      },
      {
        label: "Backend",
        skills: ["FastAPI", "Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma", "JWT", "OAuth"],
      },
      {
        label: "AI Integration",
        skills: ["RAG", "LLM APIs", "Embeddings", "Semantic Search", "pgvector", "OpenRouter", "OCR", "Streaming APIs"],
      },
      {
        label: "Cloud & Tools",
        skills: ["Azure", "AWS", "Vercel", "Railway", "Neon", "Docker", "Git", "GitHub", "Playwright", "Vitest"],
      },
    ],
    experience: [
      {
        org: "Whilter.AI",
        title: "Software Engineer Trainee",
        period: "Dec 2025 – Jun 2026",
        location: "Gurugram, Haryana",
        featured: true,
        bullets: [
          "Shipped production React/TypeScript UI and FastAPI/Node.js APIs for IntelliRAG, Whilter.AI's document-intelligence RAG platform used in enterprise workflows.",
          "Owned 8+ end-to-end features—application workflows, admin dashboards, document-processing pipelines, and REST API integrations—across frontend, backend, and PostgreSQL.",
          "Built shared React components and backend modules reused across multi-tenant SaaS tenants.",
          "Wired PDF/DOCX ingestion, semantic search, RAG retrieval, and streaming RAG Q&A into live product workflows.",
        ],
      },
      {
        ...olderExperience.ey,
        bullets: [
          "Cleaned, validated, and standardized multi-source datasets for consulting workstreams and stakeholder-ready analysis.",
          "Structured reporting outputs that highlighted trends, exceptions, and business-relevant signals for client discussions.",
        ],
      },
      {
        ...olderExperience.honeywell,
        bullets: [
          "Summarized customer-feedback themes into dashboard inputs used in product and business review discussions.",
        ],
      },
      {
        ...olderExperience.arctic,
        bullets: [
          "Built responsive marketing pages with HTML, CSS, and JavaScript.",
          "Used analytics insights to improve UX on high-traffic site paths.",
        ],
      },
    ],
    projectTitle: "Selected Projects",
    projects: [
      {
        title: "Debrief — Decision Intelligence Workspace",
        live: true,
        stack: [
          "React",
          "TypeScript",
          "FastAPI",
          "PostgreSQL",
          "pgvector",
          "OpenRouter",
          "Vercel",
          "Railway",
          "Neon",
        ],
        bullets: [
          "Built a full-stack RAG workspace that recovers decisions, rationale, owners, risks, and open questions from PDFs, DOCX, and notes.",
          "Shipped citation-backed Decision Briefs and streaming RAG Q&A; deployed on Vercel, Railway, and Neon.",
        ],
      },
      {
        title: "OpsConcierge — AI Ops Desk (Support + Hiring)",
        live: true,
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "OpenRouter", "RAG"],
        bullets: [
          "Built multi-tenant OpsConcierge: RAG-grounded support (KB, chat, tickets, widget) plus hiring—resume parsing, JD scoring, and interview-question generation.",
          "Implemented Clerk authentication, Prisma/PostgreSQL workflows, and OpenRouter LLM APIs for hiring and support.",
        ],
      },
      {
        title: "AI Sales Assistant CRM",
        live: true,
        stack: ["React", "Express", "Prisma", "PostgreSQL", "JWT", "OAuth", "OpenRouter", "HubSpot", "Salesforce"],
        bullets: [
          "Built a multi-tenant CRM with a drag-and-drop pipeline, AI email drafts, meeting summaries, AI lead scoring, and OAuth sync for HubSpot, Salesforce, Calendar, and Gmail.",
        ],
      },
    ],
    education: [...education],
    certifications: [...certifications],
    languages,
  },
  ai: {
    id: "ai",
    filename: "yatharth-sharma-resume-ai.pdf",
    downloadName: "Yatharth-Sharma-Resume-AI-GenAI.pdf",
    label: "AI / GenAI",
    whenToUse:
      "Targeted PDF for Generative AI, LLM, RAG, and AI application engineering postings — headed AI / GenAI Engineer | RAG & LLM Applications.",
    role: "AI / GenAI Engineer | RAG & LLM Applications",
    summary:
      "AI / GenAI Engineer with production experience building RAG pipelines, document-intelligence systems, and LLM-integrated full-stack products at Whilter.AI. Delivered 8+ production features on IntelliRAG and shipped Debrief, OpsConcierge, and AI Sales Assistant CRM.",
    skillKeywords:
      "Python, TypeScript, JavaScript, SQL, RAG, LLM Applications, Embeddings, Semantic Search, pgvector, Prompt Engineering, OCR, Streaming, FastAPI, Node.js, Express, REST APIs, PostgreSQL, Prisma, JWT, OAuth, React, Next.js, Tailwind CSS, OpenRouter, Azure, AWS, Vercel, Railway, Neon, Docker, Git, GitHub, Playwright, Vitest",
    skillCategories: [
      {
        label: "Languages",
        skills: ["Python", "TypeScript", "JavaScript", "SQL"],
      },
      {
        label: "AI / GenAI",
        skills: [
          "RAG",
          "LLM Applications",
          "Embeddings",
          "Semantic Search",
          "pgvector",
          "Prompt Engineering",
          "OCR",
          "Streaming",
        ],
      },
      {
        label: "Backend",
        skills: ["FastAPI", "Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma", "JWT", "OAuth"],
      },
      {
        label: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        label: "Cloud & Tools",
        skills: [
          "OpenRouter",
          "Azure",
          "AWS",
          "Vercel",
          "Railway",
          "Neon",
          "Docker",
          "Git",
          "GitHub",
          "Playwright",
          "Vitest",
        ],
      },
    ],
    experience: [
      {
        org: "Whilter.AI",
        title: "Software Engineer Trainee",
        period: "Dec 2025 – Jun 2026",
        location: "Gurugram, Haryana",
        featured: true,
        bullets: [
          "Shipped production UI and services for IntelliRAG, an enterprise document-intelligence and RAG platform at Whilter.AI.",
          "Implemented PDF/DOCX ingestion pipelines: chunking, embeddings, retrieval, and LLM generation wired into the product.",
          "Owned 8+ end-to-end features including citation-backed RAG chat, admin workflows, and document-processing pipelines across frontend, backend, and PostgreSQL.",
          "Integrated OpenRouter LLM APIs, semantic search, and streaming RAG Q&A for live, in-app AI interactions in a B2B SaaS product.",
        ],
      },
      {
        ...olderExperience.ey,
        bullets: [
          "Cleaned, validated, and standardized multi-source datasets for consulting workstreams and stakeholder-ready analysis.",
          "Structured reporting outputs that highlighted trends, exceptions, and business-relevant signals for client discussions.",
        ],
      },
      {
        ...olderExperience.honeywell,
        bullets: [
          "Summarized customer-feedback themes into dashboard inputs used in product and business review discussions.",
        ],
      },
      {
        ...olderExperience.arctic,
        bullets: [
          "Built responsive marketing pages with HTML, CSS, and JavaScript.",
          "Used analytics insights to improve UX on high-traffic site paths.",
        ],
      },
    ],
    projectTitle: "AI / GenAI Projects",
    projects: [
      {
        title: "Debrief — Decision Intelligence Workspace",
        live: true,
        badge: "OpenAI Build Week 2026",
        stack: [
          "React",
          "TypeScript",
          "FastAPI",
          "PostgreSQL",
          "pgvector",
          "OpenRouter",
          "Vercel",
          "Railway",
          "Neon",
        ],
        bullets: [
          "Built a RAG-based workspace that recovers decisions, rationale, owners, risks, and open questions from scattered PDFs, DOCX files, and notes.",
          "Implemented cited Decision Briefs and streaming RAG Q&A, deployed on Vercel, Railway, and Neon.",
        ],
      },
      {
        title: "OpsConcierge — AI Ops Desk (Support + Hiring)",
        live: true,
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "OpenRouter", "RAG"],
        bullets: [
          "Built multi-tenant OpsConcierge with RAG-grounded support and AI recruitment in one workspace.",
          "Shipped resume parsing, JD scoring, interview-question generation, and RAG-assisted support/ticket flows.",
        ],
      },
      {
        title: "AI Sales Assistant CRM",
        live: true,
        stack: ["React", "Express", "Prisma", "PostgreSQL", "JWT", "OAuth", "OpenRouter", "HubSpot", "Salesforce"],
        bullets: [
          "Built a multi-tenant CRM with a drag-and-drop pipeline, AI email drafts, meeting summaries, AI lead scoring, and OAuth sync for HubSpot, Salesforce, Calendar, and Gmail.",
        ],
      },
      {
        title: "IntelliRAG — Enterprise RAG Platform",
        stack: ["FastAPI", "PostgreSQL", "pgvector", "Embeddings", "Semantic Search", "LLM APIs"],
        bullets: [
          "Contributed to Whilter.AI's private enterprise RAG stack (ingestion through streaming generation). Source confidential.",
        ],
      },
      {
        title: "TermLens — LegalTech SaaS",
        stack: ["FastAPI", "Browser Extension", "Tauri", "Razorpay", "LLM APIs"],
        bullets: [
          "Built an AI-assisted LegalTech app that explains Terms, Privacy, and Refund policies in plain English, with risk scoring and clause-level flagging.",
        ],
      },
    ],
    education: [...education],
    certifications: [...certifications],
    languages,
  },
};

export const defaultResumeVariant: ResumeVariantId = "fullstack";

/** Bump when regenerating PDFs so browsers pick up the new file. */
export const RESUME_ASSET_VERSION = "20260925b";

export function resumePublicHref(filename: string): string {
  return `/resume/${filename}?v=${RESUME_ASSET_VERSION}`;
}

export type ResumeDownloadItem = {
  href: string;
  download: string;
  label: string;
  compactLabel: string;
  shortHint: string;
  whenToUse: string;
};

export const resumeDownloads: Record<ResumeVariantId, ResumeDownloadItem> = {
  fullstack: {
    href: resumePublicHref(resumeProfiles.fullstack.filename),
    download: resumeProfiles.fullstack.downloadName,
    label: `Resume · ${resumeProfiles.fullstack.label}`,
    compactLabel: "Resume · Full-Stack",
    shortHint: "Default for Software Engineer and Full-Stack roles",
    whenToUse: resumeProfiles.fullstack.whenToUse,
  },
  ai: {
    href: resumePublicHref(resumeProfiles.ai.filename),
    download: resumeProfiles.ai.downloadName,
    label: "Resume · AI / GenAI · RAG & LLM",
    compactLabel: "Resume · AI / GenAI",
    shortHint: "For RAG, LLM, and GenAI postings",
    whenToUse: resumeProfiles.ai.whenToUse,
  },
};

export function getResumeProfile(variant: ResumeVariantId = defaultResumeVariant): ResumeProfile {
  return resumeProfiles[variant];
}

export function parseResumeVariant(value: string | undefined): ResumeVariantId | "all" {
  if (value === "ai" || value === "fullstack" || value === "all") return value;
  return defaultResumeVariant;
}
