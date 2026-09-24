import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { resolveNavHref } from "@/lib/navigation";
import {
  featuredPortfolioLinks,
  morePortfolioLinks,
  sectionCopy,
  type PortfolioLink,
} from "@/lib/content";

const cardBase =
  "surface-card border-border-subtle group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-bg-elevated/40 to-transparent p-5 transition-[border-color,box-shadow,transform] duration-300 sm:p-6";

const cardInteractive =
  "hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(79,70,229,0.14),0_14px_28px_-18px_rgba(15,23,42,0.16)]";

const stackTagClass =
  "border-border-highlight text-text-muted rounded-md border bg-bg-elevated px-2 py-0.5 text-[11px] font-medium";

function statusBadgeClass(status: PortfolioLink["status"], hasDemo: boolean) {
  if (status === "Open source") {
    return "border-border-highlight text-text-muted border bg-transparent";
  }
  if (status === "Live" && !hasDemo) {
    return "border-border-highlight text-text-muted border bg-transparent";
  }
  switch (status) {
    case "Live":
      return "bg-accent/[0.12] text-accent";
    case "Coming soon":
    case "In progress":
      return "bg-accent-warm/10 text-accent-warm/95 border border-accent-warm/20";
    case "Private":
      return "border-border-highlight text-text-muted border bg-transparent";
    default:
      return "bg-accent-warm/10 text-accent-warm/95";
  }
}

function statusLabel(status: PortfolioLink["status"], hasDemo: boolean): string {
  if (status === "In progress") return "Deploying";
  if (status === "Open source") return "Open source";
  if (status === "Live" && !hasDemo) return "Repo";
  return status;
}

function hasRepoLink(item: PortfolioLink) {
  return Boolean(item.href) && item.status !== "Private";
}

function StackTags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;

  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag} className={stackTagClass}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectActions({ item }: { item: PortfolioLink }) {
  const repo = hasRepoLink(item);
  const demo = Boolean(item.demoUrl);

  if (item.status === "Private") {
    return (
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <span className="text-text-muted text-sm font-medium">Confidential · ask for details</span>
        <a href={resolveNavHref("#contact")} className={`${btnPrimary} w-full gap-2 px-4 py-2.5 text-sm sm:w-auto`}>
          Contact
          <span aria-hidden>→</span>
        </a>
        <a href={resolveNavHref("#digital-twin")} className="text-accent text-sm font-semibold hover:underline">
          Ask career twin
        </a>
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

  return (
    <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
      {demo ? (
        <Link
          href={item.demoUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnPrimary} w-full gap-2 px-4 py-2.5 text-sm sm:w-auto`}
        >
          Live demo
          <span aria-hidden>↗</span>
        </Link>
      ) : null}
      {repo ? (
        <Link
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className={`${btnSecondary} w-full gap-2 px-4 py-2.5 text-sm sm:w-auto`}
        >
          Source code
          <span aria-hidden>↗</span>
        </Link>
      ) : null}
    </div>
  );
}

function DetailBlock({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <p className="text-accent font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
        {label}
      </p>
      <p className="text-text-muted mt-1.5 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function ProjectCard({
  item,
  variant,
}: {
  item: PortfolioLink;
  variant: "featured" | "standard";
}) {
  const hasDemo = Boolean(item.demoUrl);
  const isInteractive = hasRepoLink(item) || hasDemo || item.status === "Private";
  const stack = item.stack ?? [];

  return (
    <article className={`${cardBase} ${isInteractive ? cardInteractive : ""}`}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex rounded-md px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase ${statusBadgeClass(item.status, hasDemo)}`}
        >
          {statusLabel(item.status, hasDemo)}
        </span>
        {variant === "featured" ? (
          <span className="text-text-muted text-[10px] font-semibold tracking-[0.12em] uppercase">
            Flagship
          </span>
        ) : null}
        {item.resumeTag ? (
          <span className="text-text-muted/80 text-[10px] font-medium tracking-wide">
            {item.resumeTag}
          </span>
        ) : null}
      </div>

      <h3 className="font-display text-text-primary text-lg font-bold tracking-tight sm:text-xl">
        {item.title}
      </h3>

      <p className="text-text-muted mt-2.5 flex-1 text-sm leading-relaxed sm:text-[0.9375rem]">
        {item.description}
      </p>

      {variant === "featured" ? (
        <div className="mt-5 space-y-4">
          {item.problem ? <DetailBlock label="Problem">{item.problem}</DetailBlock> : null}
          {item.result ? <DetailBlock label="Outcome">{item.result}</DetailBlock> : null}
        </div>
      ) : null}

      {stack.length > 0 ? (
        <div className={variant === "featured" ? "mt-4" : ""}>
          {variant === "featured" ? (
            <p className="text-accent font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
              Stack
            </p>
          ) : null}
          <StackTags tags={stack} />
        </div>
      ) : null}

      <div className="mt-5 border-border-subtle border-t pt-5 sm:mt-6">
        <ProjectActions item={item} />
      </div>
    </article>
  );
}

function SubsectionHeading({ children }: { children: string }) {
  return (
    <h3 className="text-text-primary text-center text-base font-semibold tracking-tight sm:text-lg">
      {children}
    </h3>
  );
}

/** Avoid odd-count orphan cards in a 2-column layout. */
function projectGridClass(count: number): string {
  const base = "mt-6 grid gap-5 sm:mt-8 sm:gap-6";
  if (count <= 1) return base;
  if (count === 2) return `${base} sm:grid-cols-2`;
  if (count === 3) return `${base} lg:grid-cols-3`;
  // 4+: two columns from sm, three from lg — even rows stay balanced
  return `${base} sm:grid-cols-2 lg:grid-cols-3`;
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

        {featuredPortfolioLinks.length > 0 ? (
          <div id="featured-work" className="mt-10 sm:mt-14">
            <SubsectionHeading>{portfolio.featuredLabel}</SubsectionHeading>
            <div className={projectGridClass(featuredPortfolioLinks.length)}>
              {featuredPortfolioLinks.map((item) => (
                <ProjectCard key={item.title} item={item} variant="featured" />
              ))}
            </div>
          </div>
        ) : null}

        {morePortfolioLinks.length > 0 ? (
          <div className="mt-14 sm:mt-16">
            <SubsectionHeading>{portfolio.moreBuildsLabel}</SubsectionHeading>
            <div className={projectGridClass(morePortfolioLinks.length)}>
              {morePortfolioLinks.map((item) => (
                <ProjectCard key={item.title} item={item} variant="standard" />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
