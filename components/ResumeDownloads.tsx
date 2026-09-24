"use client";

import { resumeDownloads, type ResumeVariantId } from "@/lib/resume-variants";
import { trackEvent } from "@/lib/analytics";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";

const variants: ResumeVariantId[] = ["fullstack", "ai"];

type ResumeDownloadPairProps = {
  layout?: "stack" | "grid";
  source?: "site" | "hero";
  emphasizeDefault?: boolean;
};

export function ResumeDownloadPair({
  layout = "stack",
  source = "site",
  emphasizeDefault = true,
}: ResumeDownloadPairProps) {
  return (
    <div
      className={
        layout === "grid"
          ? "grid w-full grid-cols-1 gap-3 sm:grid-cols-2"
          : "flex w-full flex-col gap-3"
      }
    >
      {variants.map((id) => {
        const item = resumeDownloads[id];
        const isDefault = id === "fullstack";
        const event =
          source === "hero"
            ? isDefault
              ? "hero_pdf"
              : "hero_pdf_ai"
            : isDefault
              ? "site_pdf"
              : "site_pdf_ai";
        const buttonClass =
          emphasizeDefault && isDefault ? btnPrimary : btnSecondary;

        return (
          <div key={id} className="flex min-w-0 flex-col gap-1.5">
            <a
              href={item.href}
              download={item.download}
              onClick={() => trackEvent("resume_download", { source: event })}
              className={`${buttonClass} w-full px-4 py-3 text-center text-sm`}
            >
              {item.label}
            </a>
            <p
              className={`text-text-muted px-1 text-xs leading-relaxed ${
                layout === "grid" ? "text-center sm:text-left" : "text-left"
              }`}
            >
              {item.whenToUse}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function ResumeDownloads() {
  return <ResumeDownloadPair />;
}
