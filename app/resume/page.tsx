import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ResumeActions } from "@/components/ResumeActions";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { btnPrimary } from "@/lib/ui-classes";
import { site } from "@/lib/content";
import { formatExternalLabel } from "@/lib/format";

export const metadata: Metadata = {
  title: `Resume — ${site.name}`,
  description: `Resume of ${site.name}, ${site.role}. Download PDF or view online.`,
};

export default function ResumePage() {
  return (
    <PageShell>
      <main id="main" className="scroll-mt-[4.25rem] pt-[4.25rem]">
        <section className="border-border-subtle relative border-b py-16 sm:py-20">
          <div className="section-glow-top pointer-events-none absolute inset-0 opacity-40" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <SectionEyebrow className="mb-3">Resume</SectionEyebrow>
            <h1 className="font-display text-text-primary text-3xl font-bold tracking-tight sm:text-4xl">
              {site.name}
            </h1>
            <p className="text-text-primary/90 mt-2 text-lg font-medium">{site.role}</p>
            <p className="text-text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed">
              {site.availability}. PDF below is generated from this portfolio and stays in sync with
              the site.
            </p>
            <p className="font-mono text-text-muted mt-4 text-xs leading-relaxed">
              {site.email}
              &nbsp;·&nbsp;
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {formatExternalLabel(site.linkedin)}
              </a>
              &nbsp;·&nbsp;
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {formatExternalLabel(site.github)}
              </a>
            </p>
            <div className="mt-8">
              <ResumeActions />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
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
                className={`${btnPrimary} mt-6 px-6 py-3`}
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
    </PageShell>
  );
}
