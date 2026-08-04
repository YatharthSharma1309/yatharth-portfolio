"use client";

import { useEffect, useState } from "react";
import { ConnectIcon } from "@/components/ConnectIcons";
import { useMobileNav } from "@/components/MobileNavContext";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { connectLinks } from "@/lib/connect";
import { trackEvent } from "@/lib/analytics";

export function StickyRecruiterBar() {
  const [pastHero, setPastHero] = useState(false);
  const [overlaySectionInView, setOverlaySectionInView] = useState(false);
  const { menuOpen } = useMobileNav();

  useEffect(() => {
    const observedIds = ["contact", "digital-twin"] as const;
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
  }, []);

  const resume = connectLinks.find((item) => item.channel === "resume");
  const showing = pastHero && !overlaySectionInView && !menuOpen;

  return (
    <>
      <div
        className={`lg:hidden ${
          showing ? "h-[calc(4.5rem+env(safe-area-inset-bottom))]" : "h-0"
        }`}
        aria-hidden
      />
      {showing ? (
        <div
          className="border-border-subtle bg-bg-deep/92 fixed right-0 bottom-0 left-0 z-40 border-t px-4 py-3 backdrop-blur-xl lg:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          role="region"
          aria-label="Quick contact"
        >
          <div className="mx-auto flex max-w-6xl gap-3">
            <a href="#contact" className={`${btnSecondary} flex-1 gap-2 px-4 py-2.5`}>
              <ConnectIcon channel="email" size={16} />
              Contact
            </a>
            {resume ? (
              <a
                href={resume.href}
                download={resume.download}
                onClick={() => trackEvent("resume_download", { source: "sticky_pdf" })}
                className={`${btnPrimary} flex-1 gap-2 px-4 py-2.5`}
              >
                <ConnectIcon channel="resume" size={16} className="text-bg-deep" />
                Resume
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
