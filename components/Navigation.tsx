"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, MenuIcon } from "@/components/Logo";
import { ConnectIcon } from "@/components/ConnectIcons";
import { useMobileNav } from "@/components/MobileNavContext";
import { btnSecondary } from "@/lib/ui-classes";
import { primaryNav, resolveNavHref } from "@/lib/navigation";
import { site } from "@/lib/content";
import { connectLinks } from "@/lib/connect";

const navLinkClass =
  "font-sans text-text-muted hover:text-text-primary block rounded-lg px-2 py-2 text-xs font-medium tracking-normal transition-colors xl:px-3 xl:py-2.5 xl:text-sm";

const mobileNavLinkClass =
  "font-sans text-text-muted hover:text-text-primary block rounded-lg px-3 py-2.5 text-[0.9375rem] font-medium tracking-normal transition-colors";

export function Navigation() {
  const pathname = usePathname();
  const { menuOpen, setMenuOpen, toggleMenu } = useMobileNav();
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const homeHref = pathname === "/" ? "#top" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const firstFocusable = mobileNavRef.current?.querySelector<HTMLElement>("a, button");
    firstFocusable?.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, setMenuOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled || menuOpen
          ? "border-border-subtle border-b bg-bg-deep/78 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Site"
      >
        <Link
          href={homeHref}
          className="text-text-primary hover:text-accent group transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label={`${site.name} — home`}
        >
          <Logo />
        </Link>

        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-0 overflow-x-auto lg:flex xl:gap-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link href={resolveNavHref(item.href, pathname)} className={navLinkClass}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          {connectLinks
            .filter((item) => item.channel === "github" || item.channel === "linkedin")
            .map((item) => (
              <Link
                key={item.channel}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.channel === "github" ? "GitHub" : "LinkedIn"}
                className={`${btnSecondary} gap-2 px-2.5 py-2.5 text-sm font-medium xl:px-4`}
              >
                <ConnectIcon channel={item.channel} size={16} />
                <span className="hidden xl:inline">
                  {item.channel === "github" ? "GitHub" : "LinkedIn"}
                </span>
              </Link>
            ))}
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className={`${btnSecondary} gap-2 px-3 py-2.5 sm:px-4 lg:hidden`}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={toggleMenu}
        >
          <MenuIcon open={menuOpen} />
          <span className="hidden min-[420px]:inline">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-nav"
          ref={mobileNavRef}
          className="border-border-subtle max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain border-t bg-bg-deep/95 px-5 py-6 backdrop-blur-xl lg:hidden"
        >
          <p className="font-mono text-accent mb-4 text-[11px] font-semibold tracking-[0.18em] uppercase">
            Navigate
          </p>
          <ul className="space-y-0.5">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={resolveNavHref(item.href, pathname)}
                  className={mobileNavLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2 pb-[env(safe-area-inset-bottom)]">
            {connectLinks.map((item) => {
              const content = (
                <>
                  <ConnectIcon channel={item.channel} size={16} />
                  {item.channel === "github"
                    ? "GitHub"
                    : item.channel === "linkedin"
                      ? "LinkedIn"
                      : item.label}
                </>
              );

              if (item.download) {
                return (
                  <a
                    key={item.channel}
                    href={item.href}
                    download={item.download}
                    className={`${btnSecondary} gap-2 px-4 py-2.5`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {content}
                  </a>
                );
              }

              if (item.external) {
                return (
                  <Link
                    key={item.channel}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnSecondary} gap-2 px-4 py-2.5`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <a
                  key={item.channel}
                  href={item.href}
                  className={`${btnSecondary} gap-2 px-4 py-2.5`}
                  onClick={() => setMenuOpen(false)}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
