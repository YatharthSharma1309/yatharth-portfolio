"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import {
  featuredPortfolioLinks,
  morePortfolioLinks,
  sectionCopy,
  type PortfolioLink,
} from "@/lib/content";

function statusBadgeClass(status: PortfolioLink["status"]) {
  switch (status) {
    case "Live":
      return "bg-accent/[0.12] text-accent";
    case "Coming soon":
      return "bg-[rgba(232,164,58,0.1)] text-accent-warm/95";
    case "In progress":
      return "bg-[rgba(232,164,58,0.08)] text-accent-warm/85 border border-accent-warm/20";
    case "Private":
      return "border-border-highlight text-text-muted border bg-transparent";
    case "Profile":
      return "bg-accent/[0.08] text-accent/90";
    default:
      return "bg-[rgba(232,164,58,0.1)] text-accent-warm/95";
  }
}

function hasInteractiveLink(item: PortfolioLink) {
  return (
    item.href &&
    (item.status === "Live" || item.status === "Profile" || item.status === "Add URL")
  );
}

function FeaturedProjectCard({ item }: { item: PortfolioLink }) {
  const isInteractive = hasInteractiveLink(item);
  const cardClass = `surface-card border-border-subtle from-bg-elevated/40 group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b to-transparent p-7 transition-[border-color,box-shadow,transform] duration-300 ${
    isInteractive
      ? "hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(62,232,200,0.12),0_20px_40px_-20px_rgba(0,0,0,0.5)]"
      : "opacity-95"
  }`;

  return (
    <article className={cardClass}>
      <span
        className={`mb-5 inline-flex w-fit rounded-md px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase ${statusBadgeClass(item.status)}`}
      >
        {item.status}
      </span>
      <h3 className="font-display text-text-primary text-lg font-bold tracking-tight">
        {item.title}
      </h3>
      {item.description ? (
        <p className="text-text-muted mt-2 text-sm leading-relaxed">{item.description}</p>
      ) : null}

      {item.problem ? (
        <div className="mt-5">
          <p className="text-accent font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
            Problem
          </p>
          <p className="text-text-muted mt-1.5 text-sm leading-relaxed">{item.problem}</p>
        </div>
      ) : null}

      {item.result ? (
        <div className="mt-4">
          <p className="text-accent font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
            Result
          </p>
          <p className="text-text-muted mt-1.5 text-sm leading-relaxed">{item.result}</p>
        </div>
      ) : null}

      {item.stack && item.stack.length > 0 ? (
        <div className="mt-4">
          <p className="text-accent font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
            Stack
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {item.stack.map((tag) => (
              <li
                key={tag}
                className="border-border-highlight text-text-muted rounded-md border bg-[var(--bg-card)] px-2 py-0.5 text-[11px] font-medium"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        {isInteractive ? (
          <Link
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="text-accent text-sm font-semibold opacity-85 transition-opacity hover:opacity-100"
          >
            {item.status === "Profile" ? "View profile →" : "View repo →"}
          </Link>
        ) : item.status === "Private" ? (
          <>
            <span className="text-text-muted text-sm font-semibold">Private org project</span>
            <Link
              href="#digital-twin"
              className="text-accent text-sm font-semibold opacity-85 transition-opacity hover:opacity-100"
            >
              Ask career twin →
            </Link>
          </>
        ) : null}
        {item.demoUrl ? (
          <Link
            href={item.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent text-sm font-medium underline-offset-2 hover:underline"
          >
            Live demo →
          </Link>
        ) : null}
      </div>
    </article>
  );
}

function PortfolioCard({ item }: { item: PortfolioLink }) {
  const isInteractive = hasInteractiveLink(item);
  const cardClass = `surface-card border-border-subtle from-bg-elevated/40 group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b to-transparent p-7 transition-[border-color,box-shadow,transform] duration-300 ${
    isInteractive
      ? "hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(62,232,200,0.12),0_20px_40px_-20px_rgba(0,0,0,0.5)]"
      : "opacity-90"
  }`;

  return (
    <article className={cardClass}>
      <span
        className={`mb-5 inline-flex w-fit rounded-md px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase ${statusBadgeClass(item.status)}`}
      >
        {item.status}
      </span>
      <h3 className="font-display text-text-primary text-lg font-bold tracking-tight">
        {item.title}
      </h3>
      <p className="text-text-muted mt-3 flex-1 text-sm leading-relaxed">{item.description}</p>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        {isInteractive ? (
          <Link
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="text-accent text-sm font-semibold opacity-85 transition-opacity hover:opacity-100"
          >
            {item.status === "Profile"
              ? "View profile →"
              : item.status === "Add URL"
                ? "Configure link →"
                : "View repo →"}
          </Link>
        ) : (
          <span className="text-text-muted text-sm font-semibold">
            {item.status === "In progress"
              ? "Architecture in progress"
              : item.status === "Coming soon"
                ? "Reserved"
                : "Private project"}
          </span>
        )}
        {item.demoUrl ? (
          <Link
            href={item.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent text-sm font-medium underline-offset-2 hover:underline"
          >
            Live demo →
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export function PortfolioSection() {
  const { portfolio } = sectionCopy;

  return (
    <section
      id="portfolio"
      className="border-border-subtle scroll-mt-[4.25rem] border-t py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Portfolio"
          title={portfolio.title}
          description={portfolio.description}
        />

        <div id="featured-work" className="mx-auto mt-10 flex max-w-3xl flex-col gap-5 sm:mt-14 sm:gap-6">
          {featuredPortfolioLinks.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <FeaturedProjectCard item={item} />
            </Reveal>
          ))}
        </div>

        <h3 className="text-text-primary mx-auto mt-12 max-w-3xl text-center text-base font-semibold tracking-tight sm:mt-16 sm:text-lg">
          {portfolio.moreBuildsLabel}
        </h3>

        <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-5 sm:mt-8 sm:gap-6">
          {morePortfolioLinks.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>

        <p className="text-text-muted mt-12 text-center text-sm leading-relaxed">
          {portfolio.footerPrompt}{" "}
          <a href="#digital-twin" className="text-accent font-semibold hover:underline">
            {portfolio.footerTwin}
          </a>{" "}
          or{" "}
          <a href="#contact" className="text-accent font-semibold hover:underline">
            {portfolio.footerContact}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
