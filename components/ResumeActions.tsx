"use client";

import Link from "next/link";
import { site } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

export function ResumeActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={site.resumePdf}
        download="Yatharth-Sharma-Resume.pdf"
        onClick={() => trackEvent("resume_download", { source: "resume_page" })}
        className="bg-accent text-bg-deep focus-visible:ring-accent/50 inline-flex min-h-11 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold tracking-wide shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[box-shadow,transform] hover:shadow-[0_0_32px_var(--glow)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-deep)]"
      >
        Download PDF
      </a>
      <a
        href={site.resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        className="border-border-highlight text-text-primary hover:border-accent/45 hover:text-accent inline-flex min-h-11 items-center rounded-xl border bg-[var(--bg-card)] px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-colors"
      >
        Open in new tab
      </a>
      <Link
        href="/"
        className="text-text-muted hover:text-accent text-sm font-semibold tracking-wide underline-offset-[6px] transition-colors hover:underline"
      >
        Back to portfolio
      </Link>
    </div>
  );
}
