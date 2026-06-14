import Link from "next/link";
import { ConnectIcon, ConnectIconBadge } from "@/components/ConnectIcons";
import { focusAreas, site } from "@/lib/content";
import { connectLinks } from "@/lib/connect";
import { primaryNav } from "@/lib/navigation";

function FooterLink({
  href,
  label,
  external,
  download,
}: {
  href: string;
  label: string;
  external?: boolean;
  download?: string;
}) {
  const className =
    "text-text-muted hover:text-accent text-sm font-medium transition-colors";

  if (download) {
    return (
      <a href={href} download={download} className={className}>
        {label}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-border-subtle border-t py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-text-primary text-lg font-bold tracking-tight">
              {site.name}
            </p>
            <p className="text-text-primary/90 mt-2 text-sm font-medium">{site.role}</p>
            <p className="text-text-muted mt-3 max-w-xs text-sm leading-relaxed line-clamp-3">
              {site.tagline}
            </p>
            <p className="text-accent/90 mt-3 text-xs font-medium tracking-wide">
              {site.availability}
            </p>
            <p className="text-text-muted/80 mt-4 font-mono text-xs tracking-wide">
              {site.location}
            </p>
          </div>

          <div>
            <p className="text-accent mb-4 text-[11px] font-semibold tracking-[0.18em] uppercase">
              Explore
            </p>
            <ul className="space-y-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <FooterLink
                    href={item.href.startsWith("#") ? item.href : item.href}
                    label={item.label}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-accent mb-4 text-[11px] font-semibold tracking-[0.18em] uppercase">
              Connect
            </p>
            <ul className="space-y-3">
              {connectLinks.map((item) => (
                <li key={item.channel}>
                  <div className="flex items-center gap-3">
                    <ConnectIconBadge channel={item.channel} />
                    <FooterLink
                      href={item.href}
                      label={item.label}
                      external={item.external}
                      download={item.download}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-accent mb-4 text-[11px] font-semibold tracking-[0.18em] uppercase">
              Focus
            </p>
            <ul className="text-text-muted space-y-2.5 text-sm leading-relaxed">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-border-subtle mt-14 flex flex-col gap-5 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-text-muted text-center text-xs sm:text-left">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-col items-center gap-3 sm:items-end">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {connectLinks.map((item) => (
                <a
                  key={`footer-icon-${item.channel}`}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  download={item.download}
                  aria-label={item.label}
                  className="border-border-highlight text-text-muted hover:border-accent/40 hover:text-accent inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-[var(--bg-card)] transition-colors"
                >
                  <ConnectIcon channel={item.channel} size={17} />
                </a>
              ))}
            </div>
            <p className="text-text-muted/75 font-mono text-center text-xs tracking-wide sm:text-right">
              {site.availability} · {site.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
