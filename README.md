# Yatharth Sharma — Portfolio Site

**Use this one URL** on LinkedIn, resumes, and job applications: [yatharthsharma.vercel.app](https://yatharthsharma.vercel.app)

That page is the whole portfolio — both resume PDFs, projects, and `/hire`. GitHub is the source repo; Vercel hosts the live site. Do not submit extra Vercel or GitHub Pages URLs.

Freelance offer (AI Hiring Desk): [yatharthsharma.vercel.app/hire](https://yatharthsharma.vercel.app/hire)

## Features

- Featured AI/full-stack project cards with live demo links (defaults in `lib/demo-urls.ts`; override via env)
- Career journey timeline and two downloadable resume PDFs (Full-Stack and AI / GenAI)
- `/hire` conversion page for businesses (demo, pricing, FAQ, WhatsApp)
- Digital Twin chat (OpenRouter) grounded in portfolio content
- Contact form (Resend on Vercel)
- Dual deploy: Vercel + GitHub Pages

## Local development

```bash
npm install
cp .env.example .env.local
# Set OPENROUTER_API_KEY, NEXT_PUBLIC_SITE_URL, demo URLs after deploy
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
|----------|---------|
| `OPENROUTER_API_KEY` | Digital Twin API |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `NEXT_PUBLIC_DEMO_OPSCONCIERGE_URL` | Live OpsConcierge demo link |
| `NEXT_PUBLIC_DEMO_SALES_CRM_URL` | Live Sales CRM demo link |
| `RESEND_API_KEY` | Contact form (production) |

## Resumes

Both PDFs are linked from the homepage:

- [Full-Stack](https://yatharthsharma.vercel.app/resume/yatharth-sharma-resume.pdf) — Software Engineer / Full-Stack
- [AI / GenAI](https://yatharthsharma.vercel.app/resume/yatharth-sharma-resume-ai.pdf) — AI / GenAI Engineer, RAG and LLM

The email stays in the page 1 contact line. The page 2 header shows the name and role only.

## After deploying flagship apps

1. Demo URLs default to production (`lib/demo-urls.ts`) — override with env vars if needed
2. Redeploy portfolio after changing env vars on Vercel
3. Project cards show **Live demo** when a URL resolves

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, `@react-pdf/renderer`, Resend
