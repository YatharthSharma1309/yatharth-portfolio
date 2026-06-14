"use client";

import { useEffect, useState } from "react";
import { ConnectIcon } from "@/components/ConnectIcons";
import { useMobileNav } from "@/components/MobileNavContext";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { connectLinks } from "@/lib/connect";
import { trackEvent } from "@/lib/analytics";

export function StickyRecruiterBar() {
  const [visible, setVisible] = useState(false);
  const [contactInView, setContactInView] = useState(false);
  const { menuOpen } = useMobileNav();

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

    return () => {
      contactObserver.disconnect();
      showObserver.disconnect();
    };
  }, []);

  const resume = connectLinks.find((item) => item.channel === "resume");

  if (!visible || contactInView || menuOpen) return null;

  return (
    <div
      className="border-border-subtle bg-bg-deep/92 fixed right-0 bottom-0 left-0 z-40 border-t px-4 py-3 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      role="region"
      aria-label="Quick contact"
    >
      <div className="mx-auto flex max-w-6xl gap-3">
        <a
          href="#contact"
          className={`${btnSecondary} flex-1 gap-2 px-4 py-2.5`}
        >
          <ConnectIcon channel="email" size={16} />
          Email
        </a>
        {resume ? (
          <a
            href={resume.href}
            download={resume.download}
            onClick={() => trackEvent("resume_download", { source: "sticky_bar" })}
            className={`${btnPrimary} flex-1 gap-2 px-4 py-2.5`}
          >
            <ConnectIcon channel="resume" size={16} className="text-bg-deep" />
            Resume
          </a>
        ) : null}
      </div>
    </div>
  );
}
