"use client";

import Link from "next/link";
import { ResumeDownloadPair } from "@/components/ResumeDownloads";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { site } from "@/lib/content";
import { btnPrimary, linkAccent, stackChip } from "@/lib/ui-classes";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col justify-center pb-12 pt-24 sm:pb-16 sm:pt-28 md:pb-20 lg:min-h-[92svh] lg:pb-20 lg:pt-32"
    >
      <div
        className="gradient-ring pointer-events-none absolute top-[6%] left-1/2 h-[min(380px,80vw)] w-[min(380px,80vw)] -translate-x-1/2 rounded-full opacity-80 sm:h-[min(480px,85vw)] sm:w-[min(480px,85vw)] lg:h-[500px] lg:w-[500px]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <SectionEyebrow>{site.availability}</SectionEyebrow>

        <h1 className="font-display text-text-primary mt-4 text-[clamp(2rem,6.5vw,4rem)] leading-[1.08] font-extrabold tracking-[-0.025em] sm:mt-5 sm:leading-[1.06]">
          {site.name}
        </h1>

        <p className="font-display text-text-primary/95 mt-4 text-lg font-semibold tracking-tight sm:mt-5 sm:text-xl lg:text-2xl">
          {site.role}
        </p>

        <ul className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5">
          {site.roleStack.split("·").map((item) => (
            <li key={item.trim()} className={stackChip}>
              {item.trim()}
            </li>
          ))}
        </ul>

        <p className="text-text-muted mx-auto mt-5 max-w-2xl text-[0.9375rem] leading-[1.75] sm:mt-6 sm:text-base lg:text-[1.0625rem]">
          {site.tagline}
        </p>

        <ul className="text-text-muted mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:mt-7 sm:text-sm">
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
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
              {site.email}
            </a>
          </li>
        </ul>

        <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10">
          <a href="/#featured-work" className={`${btnPrimary} w-full max-w-xs sm:w-auto sm:px-7`}>
            View flagship projects
          </a>
          <ResumeDownloadPair layout="grid" source="hero" emphasizeDefault={false} />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:mt-7">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkAccent}
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkAccent}
          >
            GitHub
          </a>
          <Link href="/hire" className={linkAccent}>
            For businesses
          </Link>
        </div>
      </div>
    </section>
  );
}
