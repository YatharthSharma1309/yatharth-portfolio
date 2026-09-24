"use client";

import Link from "next/link";
import { ResumeDownloadPair } from "@/components/ResumeDownloads";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { heroMetrics, site } from "@/lib/content";
import { btnPrimary, labelMono, linkAccent, stackChip } from "@/lib/ui-classes";

export function Hero() {
  return (
    <section id="top" className="relative pb-10 pt-[5.25rem] sm:pb-14 sm:pt-28 md:pb-16">
      <div
        className="gradient-ring pointer-events-none absolute top-[2%] left-1/2 h-[min(240px,60vw)] w-[min(240px,60vw)] -translate-x-1/2 rounded-full opacity-70 sm:h-[min(360px,60vw)] sm:w-[min(360px,60vw)]"
        aria-hidden
      />

      <div className="page-gutter relative z-[1] mx-auto w-full max-w-3xl text-center">
        <SectionEyebrow>{site.availability}</SectionEyebrow>

        <h1 className="font-display text-text-primary mt-3 text-[clamp(1.85rem,5vw,3.25rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">
          {site.name}
        </h1>

        <p className="font-sans text-text-primary/95 mt-2 text-base font-semibold tracking-[-0.01em] leading-snug sm:text-xl">
          {site.role}
        </p>

        <ul className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
          {site.roleStack.split("·").map((item) => (
            <li key={item.trim()} className={stackChip}>
              {item.trim()}
            </li>
          ))}
        </ul>

        <p className="text-text-muted mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:mt-4 sm:text-base">
          {site.heroLead}
        </p>

        <ul className="text-text-muted mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-1 text-xs font-medium sm:mt-4 sm:text-sm">
          <li>{site.location}</li>
          <li className="text-text-muted/30" aria-hidden>
            ·
          </li>
          <li>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
              {site.phone}
            </a>
          </li>
          <li className="text-text-muted/30" aria-hidden>
            ·
          </li>
          <li className="max-w-full">
            <a
              href={`mailto:${site.email}`}
              className="hover:text-accent break-all transition-colors"
            >
              {site.email}
            </a>
          </li>
        </ul>

        <ul className="mx-auto mt-4 grid w-full max-w-xl grid-cols-4 gap-1.5 sm:mt-5 sm:gap-2">
          {heroMetrics.map((metric) => (
            <li
              key={metric.label}
              className="border-border-subtle rounded-xl border bg-white/70 px-1.5 py-2 text-center sm:px-3 sm:py-2.5"
            >
              <p className="font-display text-text-primary text-base font-bold tracking-[-0.02em] sm:text-xl">
                {metric.value}
              </p>
              <p className="text-text-muted mt-0.5 text-[10px] leading-snug font-medium sm:text-[11px]">
                {metric.label}
              </p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-5 w-full max-w-xl sm:mt-7">
          <Link href="/#featured-work" className={`${btnPrimary} w-full`}>
            View flagship projects
          </Link>

          <p className={`${labelMono} mt-5 mb-2.5`}>Resumes</p>
          <ResumeDownloadPair layout="grid" source="hero" />

          <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-1 gap-y-2" aria-label="More">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkAccent}
            >
              LinkedIn
            </a>
            <span className="text-text-muted/30 mx-3 text-xs select-none" aria-hidden>
              ·
            </span>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkAccent}
            >
              GitHub
            </a>
            <span className="text-text-muted/30 mx-3 text-xs select-none" aria-hidden>
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
