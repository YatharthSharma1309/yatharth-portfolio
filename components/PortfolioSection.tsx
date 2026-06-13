"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { portfolioLinks, type PortfolioLink } from "@/lib/content";

function statusBadgeClass(status: PortfolioLink["status"]) {
  switch (status) {
    case "Live":
      return "bg-accent/[0.12] text-accent";
    case "Coming soon":
      return "bg-[rgba(232,164,58,0.1)] text-accent-warm/95";
    case "Private":
      return "border-border-highlight text-text-muted border bg-transparent";
    case "Profile":
      return "bg-accent/[0.08] text-accent/90";
    default:
      return "bg-[rgba(232,164,58,0.1)] text-accent-warm/95";
  }
}

function PortfolioCard({ item, featured }: { item: PortfolioLink; featured?: boolean }) {
  const isInteractive =
    item.status === "Live" || item.status === "Profile" || item.status === "Add URL";
  const cardClass = `surface-card border-border-subtle from-bg-elevated/40 group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b to-transparent p-7 transition-[border-color,box-shadow,transform] duration-300 ${
    isInteractive
      ? "hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(62,232,200,0.12),0_20px_40px_-20px_rgba(0,0,0,0.5)]"
      : "opacity-90"
  }`;

  const inner = (
    <>
      <span
        className={`mb-5 inline-flex w-fit rounded-md px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase ${statusBadgeClass(item.status)}`}
      >
        {item.status}
      </span>
      <h3
        className={`font-display text-text-primary font-bold tracking-tight ${featured ? "text-xl" : "text-lg"}`}
      >
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
            {item.status === "Coming soon" ? "Reserved" : "Private project"}
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
    </>
  );

  if (isInteractive) {
    return <article className={cardClass}>{inner}</article>;
  }

  return <article className={cardClass}>{inner}</article>;
}

export function PortfolioSection() {
  const featuredTitle = portfolioLinks.find((p) => p.status === "Live")?.title;

  return (
    <section
      id="portfolio"
      className="border-border-subtle scroll-mt-[4.25rem] border-t py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Portfolio"
          title="Selected builds"
          description="Full-stack and AI products I've designed and built end-to-end — from RAG support platforms to multi-tenant CRMs. Source linked on each card where available."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioLinks.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className={item.title === featuredTitle ? "sm:col-span-2" : undefined}
            >
              <PortfolioCard item={item} featured={item.title === featuredTitle} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
