"use client";

import { useEffect, useState } from "react";
import { ConnectIcon } from "@/components/ConnectIcons";
import { useMobileNav } from "@/components/MobileNavContext";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { freelanceOffer, site } from "@/lib/content";
import { resumeDownloads } from "@/lib/resume-variants";

export function StickyRecruiterBar({
  variant = "job",
}: {
  variant?: "job" | "hire";
}) {
  const [pastHero, setPastHero] = useState(false);
  const [overlaySectionInView, setOverlaySectionInView] = useState(false);
  const { menuOpen } = useMobileNav();

  useEffect(() => {
    const observedIds =
      variant === "hire"
        ? (["contact", "site-footer"] as const)
        : (["contact", "digital-twin", "site-footer"] as const);
    const observedSections = observedIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const intersecting = new Set<string>();

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) intersecting.add(id);
          else intersecting.delete(id);
        }
        setOverlaySectionInView(intersecting.size > 0);
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    observedSections.forEach((element) => sectionObserver.observe(element));

    const showObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-20% 0px 0px 0px" },
    );
    const heroEl = document.getElementById("top");
    if (heroEl) showObserver.observe(heroEl);

    return () => {
      sectionObserver.disconnect();
      showObserver.disconnect();
    };
  }, [variant]);

  const showing = pastHero && !overlaySectionInView && !menuOpen;
  const whatsapp = `https://wa.me/${site.phone.replace(/\D/g, "")}?text=${encodeURIComponent(freelanceOffer.whatsappText)}`;

  return (
    <>
      <div
        className={`lg:hidden ${
          showing
            ? variant === "hire"
              ? "h-[calc(4.5rem+env(safe-area-inset-bottom,0px))]"
              : "h-[calc(11.75rem+env(safe-area-inset-bottom,0px))] min-[420px]:h-[calc(8.25rem+env(safe-area-inset-bottom,0px))]"
            : "h-0"
        }`}
        aria-hidden
      />
      {showing ? (
        <div
          className="border-border-subtle bg-bg-deep/90 fixed right-0 bottom-0 left-0 z-40 border-t px-4 py-3 shadow-[0_-8px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          role="region"
          aria-label="Quick contact"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            <div className="flex gap-3">
              <a href="#contact" className={`${btnSecondary} flex-1 gap-2 px-4 py-2.5`}>
                <ConnectIcon channel="email" size={16} />
                Contact
              </a>
              {variant === "hire" ? (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnPrimary} flex-1 gap-2 px-4 py-2.5`}
                >
                  WhatsApp
                </a>
              ) : null}
            </div>
            {variant === "job" ? (
              <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
                <a
                  href={resumeDownloads.fullstack.href}
                  download={resumeDownloads.fullstack.download}
                  className={`${btnPrimary} gap-1.5 px-2 py-2.5 text-xs`}
                >
                  <ConnectIcon channel="resume" size={14} className="text-on-accent" />
                  <span className="min-[420px]:hidden">Full-Stack</span>
                  <span className="hidden min-[420px]:inline">
                    {resumeDownloads.fullstack.compactLabel}
                  </span>
                </a>
                <a
                  href={resumeDownloads.ai.href}
                  download={resumeDownloads.ai.download}
                  className={`${btnSecondary} gap-1.5 px-2 py-2.5 text-xs`}
                >
                  <ConnectIcon channel="resume" size={14} />
                  <span className="min-[420px]:hidden">AI / GenAI</span>
                  <span className="hidden min-[420px]:inline">
                    {resumeDownloads.ai.compactLabel}
                  </span>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
