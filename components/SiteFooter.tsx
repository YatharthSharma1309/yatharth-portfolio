"use client";

import Link from "next/link";
import { ConnectIcon, type ConnectChannel } from "@/components/ConnectIcons";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/content";
import { connectLinks } from "@/lib/connect";
import { trackEvent } from "@/lib/analytics";
import { primaryNav, resolveNavHref } from "@/lib/navigation";
import { resumeDownloads } from "@/lib/resume-variants";
import { labelMono, linkMuted } from "@/lib/ui-classes";

function footerConnectLabel(channel: string, href: string): string {
  if (channel === "email") return "Email";
  if (channel === "linkedin") return "LinkedIn";
  if (channel === "github") return "GitHub";
  if (href === resumeDownloads.ai.href) return resumeDownloads.ai.compactLabel;
  return resumeDownloads.fullstack.compactLabel;
}

function FooterAnchor({
  href,
  label,
  external,
  download,
  trackSource,
  icon,
}: {
  href: string;
  label: string;
  external?: boolean;
  download?: string;
  trackSource?: string;
  icon?: ConnectChannel;
}) {
  const className = icon
    ? `${linkMuted} inline-flex items-center gap-2.5 py-1.5`
    : `${linkMuted} inline-flex py-1.5`;

  const body = (
    <>
      {icon ? <ConnectIcon channel={icon} size={15} className="opacity-70" /> : null}
      {label}
    </>
  );

  if (download) {
    return (
      <a
        href={href}
        download={download}
        className={className}
        onClick={
          trackSource
            ? () => trackEvent("resume_download", { source: trackSource })
            : undefined
        }
      >
        {body}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {body}
      </a>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("/#") || href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer id="site-footer" className="border-border-subtle border-t bg-white/45">
      <div className="page-gutter mx-auto grid max-w-6xl gap-10 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-[minmax(0,1.35fr)_repeat(2,minmax(0,1fr))] lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="text-text-primary hover:text-accent inline-flex items-center gap-3 transition-colors"
            aria-label={`${site.name} — home`}
          >
            <Logo />
            <span className="font-display text-base font-bold tracking-[-0.02em]">
              {site.name}
            </span>
          </Link>
          <p className="text-text-muted mt-3 max-w-xs text-sm leading-relaxed">
            {site.role}
          </p>
          <p className="text-text-muted mt-4 text-xs font-medium">{site.availability}</p>
        </div>

        <nav aria-label="Footer">
          <p className={`${labelMono} mb-4`}>Navigate</p>
          <ul className="flex flex-col">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <FooterAnchor href={resolveNavHref(item.href)} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={`${labelMono} mb-4`}>Connect</p>
          <ul className="flex flex-col">
            {connectLinks.map((item) => (
              <li key={item.href}>
                <FooterAnchor
                  href={item.href}
                  label={footerConnectLabel(item.channel, item.href)}
                  external={item.external}
                  download={item.download}
                  trackSource={item.channel === "resume" ? "footer_pdf" : undefined}
                  icon={item.channel}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-border-subtle border-t">
        <div className="page-gutter text-text-muted mx-auto flex max-w-6xl flex-col gap-1 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
