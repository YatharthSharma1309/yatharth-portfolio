import { MobileNavProvider } from "@/components/MobileNavContext";
import { Navigation } from "@/components/Navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyRecruiterBar } from "@/components/StickyRecruiterBar";

type Props = {
  children: React.ReactNode;
  showFooter?: boolean;
  showStickyBar?: boolean;
};

export function PageShell({
  children,
  showFooter = true,
  showStickyBar = false,
}: Props) {
  return (
    <MobileNavProvider>
      <div
        className={`bg-bg-deep relative z-[1] min-h-full ${
          showStickyBar ? "pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0" : ""
        }`}
      >
        <a
          href="#main"
          className="focus:bg-accent focus:text-bg-deep sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <div className="bg-grid pointer-events-none fixed inset-0 z-0" aria-hidden />
        <Navigation />
        {children}
        {showFooter ? <SiteFooter /> : null}
        {showStickyBar ? <StickyRecruiterBar /> : null}
      </div>
    </MobileNavProvider>
  );
}
