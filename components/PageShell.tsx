"use client";

import { MobileNavProvider } from "@/components/MobileNavContext";
import { Navigation } from "@/components/Navigation";
import { SiteBackdrop } from "@/components/SiteBackdrop";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyRecruiterBar } from "@/components/StickyRecruiterBar";

type Props = {
  children: React.ReactNode;
  showFooter?: boolean;
  showStickyBar?: boolean | "hire";
};

export function PageShell({
  children,
  showFooter = true,
  showStickyBar = false,
}: Props) {
  return (
    <MobileNavProvider>
      <div className="relative z-[1] min-h-full">
        <a
          href="#main"
          className="focus:bg-accent focus:text-on-accent sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteBackdrop />
        <Navigation />
        {children}
        {showFooter ? <SiteFooter /> : null}
        {showStickyBar ? (
          <StickyRecruiterBar variant={showStickyBar === "hire" ? "hire" : "job"} />
        ) : null}
      </div>
    </MobileNavProvider>
  );
}
