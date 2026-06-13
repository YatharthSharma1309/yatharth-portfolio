import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { ResumeActions } from "@/components/ResumeActions";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Resume — ${site.name}`,
  description: `Resume of ${site.name}, ${site.role}. Download PDF or view online.`,
};

function contactPath(url: string) {
  try {
    return new URL(url).pathname.replace(/^\//, "");
  } catch {
    return url;
  }
}

export default function ResumePage() {
  return (
    <div className="bg-bg-deep relative z-[1] min-h-full">
      <a
        href="#main"
        className="focus:bg-accent focus:text-bg-deep sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="bg-grid pointer-events-none fixed inset-0 z-0" aria-hidden />
      <Navigation />
      <main id="main" className="scroll-mt-[4.25rem] pt-[4.25rem]">
        <section className="border-border-subtle relative border-b py-16 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(62,232,200,0.14), transparent 65%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <p className="font-mono text-accent mb-3 text-[11px] font-semibold tracking-[0.22em] uppercase">
              Resume
            </p>
            <h1 className="font-display text-text-primary text-3xl font-bold tracking-tight sm:text-4xl">
              {site.name}
            </h1>
            <p className="text-text-primary/90 mt-2 text-lg font-medium">{site.role}</p>
            <p className="text-text-muted mt-3 max-w-2xl text-sm leading-relaxed">
              {site.availability}. Official PDF below — same document shared with recruiters.
            </p>
            <p className="font-mono text-text-muted mt-4 text-xs leading-relaxed">
              {site.email}
              &nbsp;·&nbsp;
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
                {site.phone}
              </a>
              &nbsp;·&nbsp;
              {site.location}
              &nbsp;·&nbsp;
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                {contactPath(site.linkedin)}
              </a>
              &nbsp;·&nbsp;
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                {contactPath(site.github)}
              </a>
            </p>
            <div className="mt-8">
              <ResumeActions />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="surface-card border-border-subtle hidden overflow-hidden rounded-2xl border md:block">
              <iframe
                src={site.resumePdf}
                title={`${site.name} resume PDF`}
                className="min-h-[80vh] w-full bg-white"
              />
            </div>
            <div className="surface-card border-border-subtle rounded-2xl border p-8 text-center md:hidden">
              <p className="text-text-muted text-sm leading-relaxed">
                PDF preview works best on desktop. Use the buttons above to download or open the
                resume on your device.
              </p>
              <a
                href={site.resumePdf}
                download="Yatharth-Sharma-Resume.pdf"
                className="bg-accent text-bg-deep mt-6 inline-flex min-h-11 items-center rounded-xl px-6 py-3 text-sm font-bold"
              >
                Download PDF
              </a>
            </div>
            <p className="text-text-muted mt-8 text-center text-xs leading-relaxed">
              Prefer the interactive portfolio?{" "}
              <Link href="/#journey" className="text-accent hover:underline">
                View career journey
              </Link>{" "}
              or{" "}
              <Link href="/#portfolio" className="text-accent hover:underline">
                explore projects
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
