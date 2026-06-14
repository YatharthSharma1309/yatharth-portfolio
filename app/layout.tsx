import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { DM_Sans, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { featuredPortfolioLinks, site } from "@/lib/content";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
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
  "Full-stack SWE shipping React/TypeScript UIs and LLM/RAG backends. Recent production experience at Whilter.AI. Open to full-time software engineering roles.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · Full-Stack Software Engineer (AI/RAG)`,
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
    "OAuth",
    "India",
  ],
  openGraph: {
    title: `${site.name} · Full-Stack Software Engineer (AI/RAG)`,
    description: seoDescription,
    type: "website",
    locale: "en_IN",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Full-Stack Software Engineer (AI/RAG)`,
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
        project.status === "Live" && project.href
          ? project.href
          : `${site.url}/#portfolio`,
    },
  })),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full`}
      style={{ colorScheme: "dark" }}
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
