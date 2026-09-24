"use client";

import type { ReactNode } from "react";
import { ConnectIcon } from "@/components/ConnectIcons";
import { connectLinks } from "@/lib/connect";
import { freelanceOffer, site } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { resumeDownloads } from "@/lib/resume-variants";
import { labelMono } from "@/lib/ui-classes";

type Variant = "job" | "hire";

const rowClass =
  "group flex min-h-14 items-center gap-3.5 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-bg-elevated focus-visible:bg-bg-elevated focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none";

const iconWrap =
  "border-border-highlight text-text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white";

const iconWrapAccent =
  "border-accent/25 bg-accent/[0.08] text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border";

function handleFromUrl(url: string): string {
  try {
    const { hostname, pathname } = new URL(url);
    const host = hostname.replace(/^www\./, "");
    const path = pathname.replace(/\/$/, "");
    return path ? `${host}${path}` : host;
  } catch {
    return url;
  }
}

function ArrowHint({ external }: { external?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-text-muted/50 group-hover:text-accent shrink-0 transition-colors"
      aria-hidden
    >
      {external ? (
        <path
          d="M7 17L17 7M10 7h7v7"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.2 3.8c.4-.4 1-.5 1.5-.3l2.1.8c.5.2.8.7.8 1.2v2.1c0 .4-.2.8-.5 1L11 9.8c.8 1.7 2.2 3.1 3.9 3.9l1.2-1.1c.3-.3.7-.5 1.1-.5h2.1c.5 0 1 .3 1.2.8l.8 2.1c.2.5.1 1.1-.3 1.5l-1.2 1.2c-.4.4-1 .6-1.6.5C11.7 18.5 5.5 12.3 4.8 5.6c-.1-.6.1-1.2.5-1.6L8.2 3.8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.5c-4.7 0-8.5 3.8-8.5 8.5 0 1.5.4 2.9 1.1 4.1L3.5 20.5l4.5-1.2c1.2.7 2.6 1.1 4 1.1 4.7 0 8.5-3.8 8.5-8.5S16.7 3.5 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M9.2 8.6c.2-.5.5-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.5.6c-.1.1-.1.3 0 .5.4.7 1.1 1.4 1.9 1.8.2.1.4.1.5 0l.7-.5c.2-.1.4-.1.6 0l1.6.8c.3.1.4.3.4.6v.6c0 .3 0 .6-.5.8-1 .5-2.6.6-4.3-.8-1.6-1.3-2.4-3.1-2.5-4.3-.1-.5.1-1 .5-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ContactRow({
  href,
  title,
  detail,
  accent,
  external,
  download,
  onClick,
  icon,
}: {
  href: string;
  title: string;
  detail: string;
  accent?: boolean;
  external?: boolean;
  download?: string;
  onClick?: () => void;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download}
      onClick={onClick}
      className={rowClass}
    >
      <span className={accent ? iconWrapAccent : iconWrap}>{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="text-text-primary block text-sm font-semibold tracking-[-0.01em]">
          {title}
        </span>
        <span className="text-text-muted mt-0.5 block break-all text-xs leading-relaxed">
          {detail}
        </span>
      </span>
      <ArrowHint external={external} />
    </a>
  );
}

export function DirectContact({ variant = "job" }: { variant?: Variant }) {
  const email = connectLinks.find((item) => item.channel === "email");
  const linkedin = connectLinks.find((item) => item.channel === "linkedin");
  const github = connectLinks.find((item) => item.channel === "github");
  const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;
  const whatsapp = `https://wa.me/${site.phone.replace(/\D/g, "")}?text=${encodeURIComponent(freelanceOffer.whatsappText)}`;
  const hireEmail = `mailto:${site.email}?subject=${encodeURIComponent(freelanceOffer.emailSubject)}`;

  return (
    <div className="surface-card border-border-subtle overflow-hidden rounded-2xl border">
      <div className="divide-border-subtle divide-y px-2 py-2 sm:px-3">
        {variant === "hire" ? (
          <ContactRow
            href={whatsapp}
            title="WhatsApp"
            detail={freelanceOffer.whatsappLabel}
            accent
            external
            icon={<WhatsAppIcon />}
          />
        ) : null}

        {email ? (
          <ContactRow
            href={variant === "hire" ? hireEmail : email.href}
            title="Email"
            detail={site.email}
            accent={variant === "job"}
            icon={<ConnectIcon channel="email" size={17} />}
          />
        ) : null}

        <ContactRow
          href={phoneHref}
          title="Phone"
          detail={site.phone}
          icon={<PhoneIcon />}
        />

        {variant === "job" && linkedin ? (
          <ContactRow
            href={linkedin.href}
            title="LinkedIn"
            detail={handleFromUrl(linkedin.href)}
            external
            icon={<ConnectIcon channel="linkedin" size={17} />}
          />
        ) : null}

        {variant === "job" && github ? (
          <ContactRow
            href={github.href}
            title="GitHub"
            detail={handleFromUrl(github.href)}
            external
            icon={<ConnectIcon channel="github" size={17} />}
          />
        ) : null}
      </div>

      {variant === "job" ? (
        <div className="border-border-subtle border-t px-4 py-4 sm:px-5">
          <p className={`${labelMono} mb-3`}>Resumes</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {(["fullstack", "ai"] as const).map((id) => {
              const item = resumeDownloads[id];
              return (
                <a
                  key={id}
                  href={item.href}
                  download={item.download}
                  onClick={() =>
                    trackEvent("resume_download", {
                      source: id === "fullstack" ? "site_pdf" : "site_pdf_ai",
                    })
                  }
                  className="border-border-highlight hover:border-accent/40 group flex items-start gap-3 rounded-xl border bg-white/70 px-3.5 py-3 transition-colors"
                >
                  <span className={`${iconWrap} h-9 w-9`}>
                    <ConnectIcon channel="resume" size={15} />
                  </span>
                  <span className="min-w-0">
                    <span className="text-text-primary block text-sm font-semibold tracking-[-0.01em]">
                      {item.compactLabel}
                    </span>
                    <span className="text-text-muted mt-0.5 block text-xs leading-relaxed">
                      {item.shortHint}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
