"use client";

import Link from "next/link";
import { ResumeDownloadPair } from "@/components/ResumeDownloads";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { site } from "@/lib/content";
import { btnPrimary, labelMono, linkAccent, stackChip } from "@/lib/ui-classes";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col justify-center pb-12 pt-24 sm:pb-16 sm:pt-28 md:pb-20 lg:min-h-[92svh] lg:pb-20 lg:pt-32"
    >
      <div
        className="gradient-ring pointer-events-none absolute top-[4%] left-1/2 h-[min(320px,72vw)] w-[min(320px,72vw)] -translate-x-1/2 rounded-full opacity-70 sm:h-[min(400px,70vw)] sm:w-[min(400px,70vw)] lg:h-[420px] lg:w-[420px]"
        aria-hidden
      />

      <div className="page-gutter relative z-[1] mx-auto w-full max-w-3xl text-center">
        <SectionEyebrow>{site.availability}</SectionEyebrow>

        <h1 className="font-display text-text-primary mt-4 text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">
          {site.name}
        </h1>

        <p className="font-sans text-text-primary/95 mt-3 text-lg font-semibold tracking-[-0.01em] leading-snug sm:text-xl">
          {site.role}
        </p>

        <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {site.roleStack.split("·").map((item) => (
            <li key={item.trim()} className={stackChip}>
              {item.trim()}
            </li>
          ))}
        </ul>

        <p className="text-text-muted mx-auto mt-5 max-w-2xl text-base leading-[1.7] sm:text-[1.0625rem]">
          {site.tagline}
        </p>

        <ul className="text-text-muted mt-5 flex flex-col items-center gap-2 text-sm font-medium sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-2">
          <li>{site.location}</li>
          <li className="text-text-muted/30 hidden sm:list-item" aria-hidden>
            ·
          </li>
          <li>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
              {site.phone}
            </a>
          </li>
          <li className="text-text-muted/30 hidden sm:list-item" aria-hidden>
            ·
          </li>
          <li className="max-w-full px-1">
            <a
              href={`mailto:${site.email}`}
              className="hover:text-accent break-all transition-colors sm:break-normal"
            >
              {site.email}
            </a>
          </li>
        </ul>

        <div className="mx-auto mt-8 w-full max-w-xl">
          <Link href="/#featured-work" className={`${btnPrimary} w-full`}>
            View flagship projects
          </Link>

          <p className={`${labelMono} mt-6 mb-3`}>Resumes</p>
          <ResumeDownloadPair layout="grid" source="hero" />

          <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-1 gap-y-2" aria-label="More">
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
