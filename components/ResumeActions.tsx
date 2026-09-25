"use client";

import Link from "next/link";
import { site } from "@/lib/content";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { trackEvent } from "@/lib/analytics";

const downloads = [
  {
    href: site.resumePdf,
    filename: "Yatharth-Sharma-Resume.pdf",
    label: "Download PDF",
    primary: true,
    source: "resume_page_pdf",
  },
  {
    href: site.resumeDocx,
    filename: "Yatharth_Sharma_Premium_Resume_V2.docx",
    label: "Download DOCX",
    primary: false,
    source: "resume_page_docx",
  },
  {
    href: site.resumeZip,
    filename: "Yatharth-Sharma-Resume-Package.zip",
    label: "Download ZIP (PDF + DOCX)",
    primary: false,
    source: "resume_page_zip",
  },
] as const;

export function ResumeActions() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        {downloads.map((item) => (
          <a
            key={item.href}
            href={item.href}
            download={item.filename}
            onClick={() => trackEvent("resume_download", { source: item.source })}
            className={`${item.primary ? btnPrimary : btnSecondary} w-full max-w-xs gap-2 px-5 py-2.5 sm:w-auto`}
          >
            {item.label}
          </a>
        ))}
        <a
          href={site.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("resume_download", { source: "resume_page_open" })}
          className={`${btnSecondary} w-full max-w-xs px-5 py-2.5 sm:w-auto`}
        >
          Open PDF in tab
        </a>
      </div>
      <p className="text-text-muted max-w-md text-center text-xs leading-relaxed">
        PDF matches this site and stays in sync. DOCX is for ATS uploads. ZIP includes both.
      </p>
      <Link
        href="/"
        className="text-text-muted hover:text-accent text-sm font-semibold tracking-wide underline-offset-[6px] transition-colors hover:underline"
      >
        Back to portfolio
      </Link>
    </div>
  );
}
