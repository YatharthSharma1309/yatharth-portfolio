"use client";

import { useEffect, useState } from "react";
import { ConnectIcon } from "@/components/ConnectIcons";
import { connectLinks } from "@/lib/connect";
import { trackEvent } from "@/lib/analytics";

export function StickyRecruiterBar() {
  const [visible, setVisible] = useState(false);
  const [contactInView, setContactInView] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const contactEl = document.getElementById("contact");
    if (!contactEl) return;

    const contactObserver = new IntersectionObserver(
      ([entry]) => setContactInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    contactObserver.observe(contactEl);

    const showObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-20% 0px 0px 0px" },
    );
    const heroEl = document.getElementById("top");
    if (heroEl) showObserver.observe(heroEl);

    const syncNavOpen = () => {
      setNavOpen(document.body.dataset.mobileNavOpen === "true");
    };
    syncNavOpen();

    const navObserver = new MutationObserver(syncNavOpen);
    navObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-mobile-nav-open"],
    });

    return () => {
      contactObserver.disconnect();
      showObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  const resume = connectLinks.find((item) => item.channel === "resume");

  if (!visible || contactInView || navOpen) return null;

  return (
    <div
      className="border-border-subtle bg-bg-deep/92 fixed right-0 bottom-0 left-0 z-40 border-t px-4 py-3 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      role="region"
      aria-label="Quick contact"
    >
      <div className="mx-auto flex max-w-6xl gap-3">
        <a
          href="#contact"
          className="border-border-highlight text-text-primary hover:border-accent/45 hover:text-accent inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border bg-[var(--bg-card)] px-4 text-sm font-semibold transition-colors"
        >
          <ConnectIcon channel="email" size={16} />
          Email
        </a>
        {resume ? (
          <a
            href={resume.href}
            download={resume.download}
            onClick={() => trackEvent("resume_download", { source: "sticky_bar" })}
            className="bg-accent text-bg-deep inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-4 text-sm font-bold tracking-wide shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[box-shadow,transform] active:scale-[0.98]"
          >
            <ConnectIcon channel="resume" size={16} className="text-bg-deep" />
            Resume
          </a>
        ) : null}
      </div>
    </div>
  );
}
