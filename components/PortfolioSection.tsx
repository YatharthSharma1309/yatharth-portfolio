"use client";

import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
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

function hasRepoLink(item: PortfolioLink) {
  return Boolean(item.href) && item.status !== "Private";
}

function ProjectActions({
  item,
  variant,
}: {
  item: PortfolioLink;
  variant: "featured" | "compact";
}) {
  const { portfolio } = sectionCopy;
  const repo = hasRepoLink(item);
  const demo = Boolean(item.demoUrl);

  if (item.status === "Private") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-text-muted text-sm font-medium">Private org project</span>
        <Link
          href="#digital-twin"
          className="text-accent text-sm font-semibold underline-offset-2 hover:underline"
        >
          Ask career twin →
        </Link>
      </div>
    );
  }

  if (!repo && !demo) {
    return (
      <span className="text-text-muted text-sm font-medium">
        {item.status === "Coming soon" ? "Reserved" : "Details on request"}
      </span>
    );
  }

  const demoClass =
    variant === "featured" && demo
      ? `${btnPrimary} gap-2 px-5 py-2.5 text-sm`
      : "text-accent text-sm font-semibold underline-offset-2 hover:underline";

  const repoClass =
    variant === "featured"
      ? `${btnSecondary} gap-2 px-5 py-2.5 text-sm`
      : "text-text-muted hover:text-accent text-sm font-medium underline-offset-2 hover:underline";

  return (
    <div className="flex flex-wrap items-center gap-3">
      {demo ? (
        <Link
          href={item.demoUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className={demoClass}
        >
          Live demo
          <span aria-hidden>→</span>
        </Link>
      ) : repo && variant === "featured" ? (
        <span className="border-accent-warm/25 bg-accent-warm/[0.06] text-accent-warm/90 inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-semibold tracking-wide">
          {portfolio.demoSoonLabel}
        </span>
      ) : null}

      {repo ? (
        <Link
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className={repoClass}
        >
          {item.status === "Profile" ? "View profile" : "Source code"}
          {variant === "featured" ? <span aria-hidden>↗</span> : <span aria-hidden> →</span>}
        </Link>
      ) : null}
    </div>
  );
}

function ProjectCard({
  item,
  variant = "compact",
}: {
  item: PortfolioLink;
  variant?: "featured" | "compact";
}) {
  const isInteractive = hasRepoLink(item) || Boolean(item.demoUrl);
  const cardClass = `surface-card border-border-subtle from-bg-elevated/40 group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b to-transparent p-5 transition-[border-color,box-shadow,transform] duration-300 sm:p-7 ${
    isInteractive
      ? "hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(62,232,200,0.12),0_20px_40px_-20px_rgba(0,0,0,0.5)]"
      : "opacity-92"
  }`;

  return (
    <article className={cardClass}>
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex w-fit rounded-md px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase ${statusBadgeClass(item.status)}`}
        >
          {item.status === "In progress" ? "Deploying" : item.status}
        </span>
        {variant === "featured" ? (
          <span className="text-text-muted text-[10px] font-semibold tracking-[0.12em] uppercase">
            Flagship
          </span>
        ) : null}
      </div>

      <h3 className="font-display text-text-primary text-lg font-bold tracking-tight sm:text-xl">
        {item.title}
      </h3>

      {variant === "featured" ? (
        <>
          {item.description ? (
            <p className="text-text-muted mt-2.5 text-sm leading-relaxed sm:text-[0.9375rem]">
              {item.description}
            </p>
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
                Outcome
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
        </>
      ) : (
        <p className="text-text-muted mt-3 flex-1 text-sm leading-relaxed">{item.description}</p>
      )}

      <div className={`mt-auto ${variant === "featured" ? "pt-6" : "pt-5"}`}>
        <ProjectActions item={item} variant={variant} />
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

        <div
          id="featured-work"
          className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {featuredPortfolioLinks.map((item) => (
            <ProjectCard key={item.title} item={item} variant="featured" />
          ))}
        </div>

        <h3 className="text-text-primary mt-14 text-center text-base font-semibold tracking-tight sm:mt-16 sm:text-lg">
          {portfolio.moreBuildsLabel}
        </h3>

        <div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {morePortfolioLinks.map((item) => (
            <ProjectCard key={item.title} item={item} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
