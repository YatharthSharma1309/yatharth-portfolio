"use client";

import { useId } from "react";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

/** SVG monogram — shared by nav logo and favicon. */
export function LogoMark({ size = 38, className }: LogoMarkProps) {
  const gradientId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0.14)" />
          <stop offset="1" stopColor="rgba(62,232,200,0.35)" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        fill="var(--bg-elevated)"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
      />
      <path
        d="M10.5 12.5L17.5 24.5L24.5 12.5"
        stroke="var(--text-primary)"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 24.5V31"
        stroke="var(--text-primary)"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
      <path
        d="M28.5 13.5C24.5 13.5 22.5 15.75 22.5 18.5C22.5 21.25 25.5 22.25 28 23.25C30.5 24.25 31 26.75 28.5 28.75C26.25 30.5 23.5 29.5 23.5 29.5"
        stroke="var(--accent)"
        strokeWidth="2.35"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="31.5" cy="31.5" r="1.75" fill="var(--accent)" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markSize?: number;
};

export function Logo({ className = "", markSize = 38 }: LogoProps) {
  return (
    <span className={`group/logo inline-flex items-center ${className}`}>
      <span className="relative shrink-0 transition-transform duration-300 group-hover/logo:scale-[1.04]">
        <span
          className="bg-accent/25 pointer-events-none absolute -inset-1.5 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover/logo:opacity-100"
          aria-hidden
        />
        <LogoMark
          size={markSize}
          className="relative rounded-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_8px_24px_-12px_rgba(62,232,200,0.35)]"
        />
      </span>
    </span>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0"
    >
      {open ? (
        <path
          d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path d="M3 5.25H15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M3 9H15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M3 12.75H15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export { MenuIcon };
