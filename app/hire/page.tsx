import type { Metadata } from "next";
import { HirePageContent } from "@/components/HirePageContent";
import { PageShell } from "@/components/PageShell";
import { freelanceOffer, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `AI Hiring Desk — ${site.name}`,
  description: freelanceOffer.lede,
  alternates: { canonical: `${site.url}/hire` },
  openGraph: {
    title: `AI Hiring Desk — ${site.name}`,
    description: freelanceOffer.lede,
    url: `${site.url}/hire`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `AI Hiring Desk — ${site.name}`,
    description: freelanceOffer.lede,
  },
};

export default function HirePage() {
  return (
    <PageShell showStickyBar="hire">
      <main id="main" className="scroll-mt-[4.25rem] pt-[4.25rem]">
        <HirePageContent />
      </main>
    </PageShell>
  );
}
