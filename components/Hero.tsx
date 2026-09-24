"use client";

import Link from "next/link";
import { ResumeDownloadPair } from "@/components/ResumeDownloads";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { heroMetrics, site } from "@/lib/content";
import { btnPrimary, linkAccent } from "@/lib/ui-classes";

export function Hero() {
  return (
    <section id="top" className="relative pb-10 pt-[4.5rem] sm:pb-14 sm:pt-24 md:pb-16">
      <div
        className="gradient-ring pointer-events-none absolute top-[8%] left-1/2 h-[min(280px,50vw)] w-[min(280px,50vw)] -translate-x-1/2 rounded-full opacity-50"
        aria-hidden
      />

      <div className="page-gutter relative z-[1] mx-auto w-full max-w-3xl text-center">
        <SectionEyebrow>{site.availability}</SectionEyebrow>

        <h1 className="font-display text-text-primary mt-3 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">
          {site.name}
        </h1>

        <p className="font-sans text-text-primary mt-2 text-lg font-semibold tracking-[-0.015em] sm:text-xl">
          {site.role}
        </p>

        <p className="text-text-muted mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed sm:text-base">
          {site.heroLead}
        </p>

        <p className="text-text-muted mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium">
          <span>{site.locationShort}</span>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
            {site.email}
          </a>
        </p>

        <p className="text-text-muted/80 mx-auto mt-3 max-w-2xl text-xs leading-relaxed sm:text-sm">
          {site.roleStack}
        </p>

        <dl className="border-border-subtle mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-3 border-t pt-5 sm:grid-cols-4">
          {heroMetrics.map((item) => (
            <div key={item.label}>
              <dt className="text-text-muted text-[11px] leading-snug">{item.label}</dt>
              <dd className="font-display text-text-primary mt-0.5 text-lg font-bold tracking-[-0.03em]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mx-auto mt-7 flex w-full max-w-md flex-col gap-3">
          <Link href="/#portfolio" className={`${btnPrimary} w-full`}>
            View flagship projects
          </Link>
          <ResumeDownloadPair layout="compact" source="hero" />
          <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2" aria-label="More">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={linkAccent}>
              LinkedIn
            </a>
            <span className="text-text-muted/30 mx-2 text-xs select-none" aria-hidden>
              ·
            </span>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className={linkAccent}>
              GitHub
            </a>
            <span className="text-text-muted/30 mx-2 text-xs select-none" aria-hidden>
              ·
            </span>
            <Link href="/hire" className={linkAccent}>
              For businesses
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
