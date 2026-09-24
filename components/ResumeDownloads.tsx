"use client";

import { ConnectIcon } from "@/components/ConnectIcons";
import { resumeDownloads, type ResumeVariantId } from "@/lib/resume-variants";
import { trackEvent } from "@/lib/analytics";

const variants: ResumeVariantId[] = ["fullstack", "ai"];

type ResumeDownloadPairProps = {
  layout?: "stack" | "grid";
  source?: "site" | "hero";
};

export function ResumeDownloadPair({
  layout = "grid",
  source = "site",
}: ResumeDownloadPairProps) {
  return (
    <div
      className={
        layout === "grid"
          ? "grid w-full grid-cols-1 gap-2 sm:grid-cols-2"
          : "flex w-full flex-col gap-2"
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

        return (
          <a
            key={id}
            href={item.href}
            download={item.download}
            onClick={() => trackEvent("resume_download", { source: event })}
            className="border-border-highlight hover:border-accent/40 group flex items-start gap-3 rounded-2xl border bg-white/80 px-3.5 py-3.5 text-left shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-colors"
          >
            <span className="border-border-highlight text-text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-white">
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
  );
}

export function ResumeDownloads() {
  return <ResumeDownloadPair />;
}
