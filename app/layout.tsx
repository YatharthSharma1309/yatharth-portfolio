import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { DM_Sans, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import { featuredPortfolioLinks, site } from "@/lib/content";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const seoDescription =
  "Software Engineer and Full-Stack Developer. Built production React/TypeScript, FastAPI/Node.js, PostgreSQL, and RAG features at Whilter.AI. Open to full-time software engineering roles.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · ${site.role}`,
  description: seoDescription,
  keywords: [
    "full-stack",
    "software engineer",
    "AI",
    "RAG",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "REST API",
    "Python",
    "LLM",
    "document ingestion",
    "pgvector",
    "OpenRouter",
    "OAuth",
    "India",
  ],
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description: seoDescription,
    type: "website",
    locale: "en_IN",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: seoDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: site.email,
  sameAs: [site.linkedin, site.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
};

const featuredProjectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Projects",
  itemListElement: featuredPortfolioLinks.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url:
        project.demoUrl?.trim() ||
        (project.status !== "Private" && project.href?.trim() ? project.href : `${site.url}/#portfolio`),
    },
  })),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: "#F2F4FA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sora.variable} ${jetbrainsMono.variable} h-full`}
      data-scroll-behavior="smooth"
      style={{ colorScheme: "light" }}
    >
      <body className="font-sans relative min-h-full overflow-x-hidden antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredProjectsJsonLd) }}
        />
        <div className="noise" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
