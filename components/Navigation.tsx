"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, MenuIcon } from "@/components/Logo";
import { ConnectIcon } from "@/components/ConnectIcons";
import { useMobileNav } from "@/components/MobileNavContext";
import { iconButton, labelMono } from "@/lib/ui-classes";
import { compactNav, primaryNav, resolveNavHref, type NavItem } from "@/lib/navigation";
import { site } from "@/lib/content";
import { connectLinks } from "@/lib/connect";
import { resumeDownloads } from "@/lib/resume-variants";
import { trackEvent } from "@/lib/analytics";

const navLinkClass =
  "text-text-muted hover:text-text-primary relative block rounded-lg px-2 py-2 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors xl:px-2.5 xl:text-sm";

const navLinkActive =
  "text-text-primary after:bg-accent after:absolute after:right-2.5 after:bottom-1 after:left-2.5 after:h-px after:content-['']";

const socials = connectLinks.filter(
  (item) => item.channel === "github" || item.channel === "linkedin",
);

function shortConnectLabel(channel: string, href: string): string {
  if (channel === "github") return "GitHub";
  if (channel === "linkedin") return "LinkedIn";
  if (channel === "email") return "Email";
  if (href === resumeDownloads.ai.href) return resumeDownloads.ai.compactLabel;
  if (href === resumeDownloads.fullstack.href) return resumeDownloads.fullstack.compactLabel;
  return "Resume";
}

export function Navigation() {
  const pathname = usePathname();
  const { menuOpen, setMenuOpen, toggleMenu } = useMobileNav();
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    closeOnDesktop();
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, [setMenuOpen]);

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

  function isActive(href: string) {
    if (href === "/hire") return pathname === "/hire";
    if (href.startsWith("#")) return pathname === "/" && hash === href;
    return pathname === href;
  }

  function renderNavItems(items: NavItem[]) {
    return items.map((item) => {
      const href = resolveNavHref(item.href);
      const className = `${navLinkClass} ${isActive(item.href) ? navLinkActive : ""}`;
      return (
        <li key={item.href}>
          {href.startsWith("/#") ? (
            <a href={href} className={className}>
              {item.label}
            </a>
          ) : (
            <Link href={href} className={className}>
              {item.label}
            </Link>
          )}
        </li>
      );
    });
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-[background,box-shadow] duration-300 ${
        scrolled || menuOpen
          ? "border-border-subtle bg-bg-deep/92 shadow-[0_8px_28px_rgba(15,23,42,0.07)] backdrop-blur-xl"
          : "border-border-subtle/80 bg-bg-deep/78 backdrop-blur-xl"
      }`}
    >
      <nav
        className="page-gutter mx-auto flex h-[4.25rem] max-w-6xl items-center gap-2 sm:gap-3"
        aria-label="Site"
      >
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-75"
          onClick={() => setMenuOpen(false)}
          aria-label={`${site.name} — home`}
        >
          <Logo />
        </Link>

        <ul className="hidden min-w-0 items-center md:flex xl:hidden">
          {renderNavItems(compactNav)}
        </ul>
        <ul className="hidden min-w-0 items-center xl:flex">
          {renderNavItems(primaryNav)}
        </ul>

        <div className="ml-auto hidden shrink-0 items-center gap-0.5 md:flex">
          <span className="bg-border-highlight mr-1.5 h-4 w-px" aria-hidden />
          {socials.map((item) => (
            <a
              key={item.channel}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.channel === "github" ? "GitHub" : "LinkedIn"}
              className={iconButton}
            >
              <ConnectIcon channel={item.channel} size={16} />
            </a>
          ))}
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className={`${iconButton} ml-auto md:hidden`}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={toggleMenu}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-nav"
          ref={mobileNavRef}
          className="page-gutter border-border-subtle max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain border-t bg-bg-deep/94 py-5 backdrop-blur-xl md:hidden"
        >
          <p className={`${labelMono} mb-3`}>Navigate</p>
          <ul className="divide-border-subtle divide-y overflow-hidden rounded-2xl border border-border-subtle bg-white/70">
            {primaryNav.map((item) => {
              const href = resolveNavHref(item.href);
              const active = isActive(item.href);
              const className = `flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${
                active ? "text-accent" : "text-text-primary hover:bg-bg-elevated"
              }`;
              const label = (
                <>
                  {item.label}
                  {active ? (
                    <span className="bg-accent h-1.5 w-1.5 rounded-full" aria-hidden />
                  ) : null}
                </>
              );
              return (
                <li key={item.href}>
                  {href.startsWith("/#") ? (
                    <a href={href} className={className} onClick={() => setMenuOpen(false)}>
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className={className} onClick={() => setMenuOpen(false)}>
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <p className={`${labelMono} mt-6 mb-3`}>Connect</p>
          <ul className="divide-border-subtle divide-y overflow-hidden rounded-2xl border border-border-subtle bg-white/70">
            {connectLinks.map((item) => {
              const label = shortConnectLabel(item.channel, item.href);
              const className =
                "text-text-primary hover:bg-bg-elevated flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors";

              if (item.download) {
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      download={item.download}
                      className={className}
                      onClick={() => {
                        trackEvent("resume_download", { source: "nav_mobile_pdf" });
                        setMenuOpen(false);
                      }}
                    >
                      <ConnectIcon channel="resume" size={16} />
                      {label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={className}
                    onClick={() => setMenuOpen(false)}
                  >
                    <ConnectIcon channel={item.channel} size={16} />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
