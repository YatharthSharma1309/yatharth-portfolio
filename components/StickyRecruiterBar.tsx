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
            ? "h-[calc(4.25rem+env(safe-area-inset-bottom,0px))]"
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
          <div className="mx-auto flex max-w-6xl gap-2">
            {variant === "hire" ? (
              <>
                <a href="#contact" className={`${btnSecondary} flex-1 gap-2 px-3 py-2.5 text-sm`}>
                  <ConnectIcon channel="email" size={16} />
                  Contact
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnPrimary} flex-1 gap-2 px-3 py-2.5 text-sm`}
                >
                  WhatsApp
                </a>
              </>
            ) : (
              <>
                <a href="#contact" className={`${btnSecondary} flex-1 px-2 py-2.5 text-xs`}>
                  Contact
                </a>
                <a
                  href={resumeDownloads.fullstack.href}
                  download={resumeDownloads.fullstack.download}
                  className={`${btnPrimary} flex-1 px-2 py-2.5 text-xs`}
                >
                  Full-Stack
                </a>
                <a
                  href={resumeDownloads.ai.href}
                  download={resumeDownloads.ai.download}
                  className={`${btnSecondary} flex-1 px-2 py-2.5 text-xs`}
                >
                  AI / GenAI
                </a>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
