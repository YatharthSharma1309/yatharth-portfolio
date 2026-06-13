export const site = {
  name: "Yatharth Sharma",
  role: "Software Engineer · Full-Stack & UI",
  tagline:
    "Building precise, engaging web experiences — from design systems to production React. Full-stack focused: REST API routes, LLM integrations, and backend services alongside polished, accessible UIs.",
  availability: "Open to full-time software engineering roles",
  location: "Faridabad, Haryana, India",
  email: "yatharthsharma1309@gmail.com",
  linkedin: "https://www.linkedin.com/in/yatharth-sharma-32a1a1200",
  github: "https://github.com/YatharthSharma1309",
};

export const aboutParagraphs = [
  "I am a full-stack-leaning software engineer focused on shipping exceptional digital experiences: performance, accessibility, and craft at every layer.",
  "My stack centers on React, TypeScript, Next.js (App Router + API Routes), and Node.js. I build responsive, fast UIs and the backend services that power them — REST endpoints, request validation, LLM integrations — so I can own more of the vertical slice with fewer hand-offs between layers.",
  "I translate Figma into code with Tailwind CSS, Styled Components, and Framer Motion. I care about user-centered design, clean state management (Redux, Context), and interfaces that are beautiful, intuitive, and inclusive.",
];

export const skillGroups = {
  core: [
    "React & TypeScript",
    "Next.js (App Router & API Routes)",
    "Node.js & REST API development",
    "LLM / OpenRouter API integration",
    "HTML5 / CSS3 / ES6+",
    "Tailwind · Styled Components",
    "Redux · Context API",
    "Framer Motion",
    "Design systems · Figma to code",
  ],
  deepening: [
    "SQL & relational modeling",
    "Auth patterns (sessions, JWT)",
    "Streaming APIs & real-time patterns",
    "Infrastructure & deployment (Vercel, CI/CD)",
    "UI & UX design",
  ],
} as const;

export const linkedInProfileSnapshot = {
  headline:
    "Software Engineer — full-stack-leaning; React/TypeScript UIs, REST APIs, and LLM integrations.",
  about:
    "Strong work ethic, adaptability, and interpersonal collaboration. Comfortable working independently across the stack — from UI components to API endpoints — learning quickly, and delivering end-to-end features.",
  interests: ["Web Development", "Full-Stack Engineering", "AI & LLM Integration", "React"],
  currentlyLearning: ["SQL & relational modeling", "Auth patterns (JWT, sessions)", "Streaming APIs & real-time patterns", "Infrastructure & deployment"],
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
    description: [
      "Shipped production front-end features — React, TypeScript, component systems — in a fast-moving AI product environment.",
      "Built and maintained REST endpoints and integrated third-party and LLM services on the backend.",
      "Owned full-stack feature slices end-to-end, from UI through API contracts to the data layer.",
    ],
  },
  {
    title: "Student Intern",
    org: "Ernst & Young Global Consulting Services",
    period: "Feb 2025 — May 2025",
    location: "Noida, Uttar Pradesh",
    description: [
      "Consulting exposure alongside engineering practices in a global delivery setup.",
    ],
  },
  {
    title: "Data Analyst",
    org: "Honeywell",
    period: "Jan 2023",
    location: "—",
    description: [
      "Analyzed customer feedback for product and service performance.",
      "Worked cross-functionally on analytical solutions, dashboards, and market research.",
    ],
  },
  {
    title: "Web Development Intern",
    org: "Arctic Innovage Pvt. Ltd.",
    period: "Jul 2022 — Sep 2022",
    location: "—",
    description: [
      "Built and maintained responsive sites with HTML, CSS, and JavaScript.",
      "Improved UX and performance using analytics; structured content with strong UI focus.",
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
    degree: "Bachelor of Computer Science",
    school: "Manav Rachna International University, Faridabad",
    period: "2020 — 2023",
  },
];

export const certifications = [
  "Microsoft Certified: Azure AI Fundamentals",
  "Data Encryption using AWS KMS (UST)",
  "Managing Your Personal Finances — Foundations",
  "Foundations: Data, Data, Everywhere",
  "NPTEL — E-Business",
];

export type PortfolioLink = {
  title: string;
  description: string;
  href: string;
  status: "Coming soon" | "Add URL" | "Profile" | "Live" | "Private";
  external?: boolean;
  demoUrl?: string;
};

export const portfolioLinks: PortfolioLink[] = [
  {
    title: "AI Sales Assistant CRM",
    description:
      "Multi-tenant B2B CRM with lead scoring, drag-and-drop pipeline, activity timelines, and AI-drafted follow-ups — plus OAuth integrations for HubSpot, Salesforce, Google Calendar, and Gmail. Monorepo: React SPA, Express API, Prisma, JWT auth with refresh rotation.",
    href: "https://github.com/YatharthSharma1309/ai-sales-assistant-crm",
    status: "Live",
    external: true,
  },
  {
    title: "SupportAI — Customer Support Platform",
    description:
      "Portfolio-grade support stack: document ingestion, streaming RAG chat with citations, agent inbox, ticket escalation, deflection analytics, and an embeddable widget. Next.js 16, Prisma, PostgreSQL, OpenRouter.",
    href: "#",
    status: "Coming soon",
  },
  {
    title: "RecruitAI — Smart Recruitment Assistant",
    description:
      "Recruiter dashboard for resume screening: upload PDF/DOCX, extract skills, score candidates against a job description, surface gaps, and generate interview questions. Next.js, Prisma, SQLite/Supabase, OpenRouter.",
    href: "https://github.com/YatharthSharma1309/AI-Recruitment-Assistant",
    status: "Live",
    external: true,
  },
  {
    title: "TermLens",
    description:
      "Legal-tech SaaS that explains Terms, Privacy, and Refund policies in plain English with risk scores and clause flags. Monorepo: FastAPI backend, Chrome/Firefox extension, Tauri desktop app, Razorpay billing, team accounts. Source is private — code not publicly shareable.",
    href: "https://github.com/YatharthSharma1309/TermLens",
    status: "Private",
    external: true,
  },
  {
    title: "Teleport AI",
    description:
      "Upload a photo and composite yourself onto a Google Street View scene — background removed server-side via Remove.bg. Django + DRF backend; React Native (Expo) mobile client with draggable cutout overlay.",
    href: "https://github.com/YatharthSharma1309/Teleport.AI",
    status: "Live",
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
  {
    title: "GitHub",
    description:
      "Repositories, forks, and experiments — code and activity in one place.",
    href: site.github,
    status: "Profile",
    external: true,
  },
];
