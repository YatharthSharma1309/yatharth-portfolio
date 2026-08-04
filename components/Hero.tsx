"use client";

import Link from "next/link";
import { site } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";

export function Hero() {
  return (
    <section
      id="top"
      className="font-display relative flex flex-col justify-center pb-12 pt-24 sm:pb-16 sm:pt-28 md:pb-20 lg:min-h-[92svh] lg:pb-20 lg:pt-32"
    >
      <div
        className="gradient-ring pointer-events-none absolute top-[6%] left-1/2 h-[min(380px,80vw)] w-[min(380px,80vw)] -translate-x-1/2 rounded-full opacity-80 sm:h-[min(480px,85vw)] sm:w-[min(480px,85vw)] lg:h-[500px] lg:w-[500px]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <p className="text-accent font-mono text-[11px] font-semibold tracking-[0.2em] uppercase">
          {site.availability}
        </p>

        <h1 className="text-text-primary mt-4 text-[clamp(2rem,6.5vw,4rem)] leading-[1.08] font-extrabold tracking-[-0.025em] sm:mt-5 sm:leading-[1.06]">
          {site.name.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-gradient">{site.name.split(" ").slice(-1)[0]}</span>
        </h1>

        <p className="text-text-primary/95 mt-4 text-lg font-semibold tracking-tight sm:mt-5 sm:text-xl lg:text-2xl">
          {site.role}
        </p>

        <p className="text-text-muted mx-auto mt-2 max-w-2xl font-mono text-[11px] tracking-wide sm:text-xs">
          {site.roleStack}
        </p>

        <p className="text-text-muted mx-auto mt-5 max-w-2xl text-[0.9375rem] leading-[1.75] sm:mt-6 sm:text-base lg:text-[1.0625rem]">
          {site.tagline}
        </p>

        <ul className="text-text-muted mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:mt-7 sm:text-sm">
          <li>{site.location}</li>
          <li className="text-text-muted/35 hidden sm:list-item" aria-hidden>
            ·
          </li>
          <li>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
              {site.phone}
            </a>
          </li>
          <li className="text-text-muted/35 hidden sm:list-item" aria-hidden>
            ·
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
              {site.email}
            </a>
          </li>
        </ul>

        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
          <a href="#featured-work" className={`${btnPrimary} w-full max-w-xs sm:w-auto sm:px-7`}>
            View flagship projects
          </a>
          <a
            href={site.resumePdf}
            download="Yatharth-Sharma-Resume.pdf"
            onClick={() => trackEvent("resume_download", { source: "hero_pdf" })}
            className={`${btnSecondary} w-full max-w-xs sm:w-auto`}
          >
            Download resume
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-7 sm:gap-x-8">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm font-semibold hover:underline"
          >
            LinkedIn
          </a>
          <span className="text-text-muted/35 hidden text-xs select-none sm:inline" aria-hidden>
            ·
          </span>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm font-semibold hover:underline"
          >
            GitHub
          </a>
          <span className="text-text-muted/35 hidden text-xs select-none sm:inline" aria-hidden>
            ·
          </span>
          <Link href="/resume" className="text-accent text-sm font-semibold hover:underline">
            Resume page
          </Link>
          <span className="text-text-muted/35 hidden text-xs select-none sm:inline" aria-hidden>
            ·
          </span>
          <a href="#contact" className="text-accent text-sm font-semibold hover:underline">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
