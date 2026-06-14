import Link from "next/link";
import type { ConnectChannel } from "@/components/ConnectIcons";
import { site } from "@/lib/content";
import { connectLinks } from "@/lib/connect";
import { primaryNav } from "@/lib/navigation";

const linkClass = "text-text-muted hover:text-accent text-sm font-medium transition-colors";

const connectShortLabel: Record<ConnectChannel, string> = {
  email: "Email",
  linkedin: "LinkedIn",
  github: "GitHub",
  resume: "Resume",
};

function FooterAnchor({
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
  if (download) {
    return (
      <a href={href} download={download} className={linkClass}>
        {label}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {label}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={linkClass}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass}>
      {label}
    </Link>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border-subtle border-t py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="font-display text-text-primary text-lg font-bold tracking-tight">
          {site.name}
        </p>
        <p className="text-text-muted mt-1.5 text-sm">{site.role}</p>

        <nav className="mt-8" aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
            {primaryNav.map((item, index) => (
              <li key={item.href} className="inline-flex items-center">
                {index > 0 ? (
                  <span className="text-text-muted/30 mx-3 text-xs select-none" aria-hidden>
                    ·
                  </span>
                ) : null}
                <FooterAnchor href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
          {connectLinks.map((item, index) => (
            <span key={item.channel} className="inline-flex items-center">
              {index > 0 ? (
                <span className="text-text-muted/30 mx-3 text-xs select-none" aria-hidden>
                  ·
                </span>
              ) : null}
              <FooterAnchor
                href={item.href}
                label={connectShortLabel[item.channel]}
                external={item.external}
                download={item.download}
              />
            </span>
          ))}
        </div>

        <p className="text-text-muted mt-10 text-sm">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
