# Yatharth Sharma — Portfolio Site

Personal portfolio and career hub: [yatharthsharma.vercel.app](https://yatharthsharma.vercel.app)

## Features

- Featured AI/full-stack project cards with live demo links (when env URLs set)
- Career journey timeline and downloadable resume PDF
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
| `NEXT_PUBLIC_DEMO_RECRUITAI_URL` | Live RecruitAI demo link |
| `NEXT_PUBLIC_DEMO_SUPPORTAI_URL` | Live SupportAI demo link |
| `NEXT_PUBLIC_DEMO_SALES_CRM_URL` | Live Sales CRM demo link |
| `RESEND_API_KEY` | Contact form (production) |

## After deploying flagship apps

1. Set demo URL env vars in Vercel
2. Redeploy portfolio
3. Project cards show **View demo** when URLs are present

## Career OS

Job search trackers and templates: `../Career-OS/`

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, `@react-pdf/renderer`, Resend
