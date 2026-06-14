"use client";

import Link from "next/link";
import { site } from "@/lib/content";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { trackEvent } from "@/lib/analytics";

export function ResumeActions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href={site.resumePdf}
        download="Yatharth-Sharma-Resume.pdf"
        onClick={() => trackEvent("resume_download", { source: "resume_page" })}
        className={`${btnPrimary} gap-2 px-5 py-2.5`}
      >
        Download PDF
      </a>
      <a
        href={site.resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnSecondary} px-5 py-2.5`}
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
