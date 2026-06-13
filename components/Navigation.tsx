"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#digital-twin", label: "AI Twin" },
  { href: "#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navLinkClass =
    "text-text-muted hover:text-text-primary relative block px-3 py-2.5 text-sm font-medium tracking-wide transition-colors after:absolute after:bottom-1 after:left-3 after:h-px after:w-[calc(100%-1.5rem)] after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100 md:inline-block md:px-3 md:py-2 md:text-[11px] md:tracking-[0.14em] md:uppercase";

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
        aria-label="Primary"
      >
        <Link
          href="#top"
          className="font-display text-text-primary hover:text-accent text-lg font-bold tracking-tight transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          YS<span className="text-accent">.</span>
        </Link>

        <ul className="text-text-muted hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={navLinkClass}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border-highlight bg-bg-card text-text-primary hover:border-accent/40 hover:text-accent rounded-xl border px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors"
          >
            GitHub
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border-highlight bg-bg-card text-text-primary hover:border-accent/40 hover:text-accent rounded-xl border px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors"
          >
            LinkedIn
          </Link>
        </div>

        <button
          type="button"
          className="border-border-highlight bg-bg-card text-text-primary hover:border-accent/40 rounded-xl border px-3 py-2.5 text-xs font-semibold tracking-wide transition-colors md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-border-subtle border-t bg-bg-deep/95 px-5 py-6 backdrop-blur-xl md:hidden"
        >
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2">
            <a
              href={site.resumePdf}
              download="Yatharth-Sharma-Resume.pdf"
              className="border-border-highlight bg-bg-card text-text-primary hover:border-accent/40 hover:text-accent rounded-xl border px-4 py-3 text-center text-sm font-semibold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Download resume
            </a>
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border-highlight bg-bg-card text-text-primary hover:border-accent/40 hover:text-accent rounded-xl border px-4 py-3 text-center text-sm font-semibold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border-highlight bg-bg-card text-text-primary hover:border-accent/40 hover:text-accent rounded-xl border px-4 py-3 text-center text-sm font-semibold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
