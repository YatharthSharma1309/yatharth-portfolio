"use client";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

/** Yatharth Sharma — geometric Y + S. */
const yPath =
  "M1.2 5.2h6.1l5.15 11.15L17.6 5.2h6.1L14.7 24.1V31H8.3v-6.9L1.2 5.2Z";

const sPath =
  "M40.2 10.6c0-3.55-2.85-5.85-7.15-5.85-4.4 0-7.25 2.5-7.55 6.25h3.85c.35-1.6 1.7-2.65 3.65-2.65 1.8 0 3.05 1 3.05 2.5 0 1.75-1.35 2.7-4.5 3.7-4.05 1.25-6.6 3.2-6.6 6.85 0 3.9 3 6.45 7.55 6.45 4.7 0 7.7-2.7 8-6.7h-4c-.3 1.85-1.8 3.15-4 3.15-2.1 0-3.4-1.1-3.4-2.7 0-1.75 1.35-2.75 4.75-3.85 3.95-1.25 6.25-3.4 6.25-7.15Z";

/** Square plate for the browser tab. */
export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="9" fill="#EEF0FA" />
      <g transform="translate(2.2 2.4) scale(0.58)">
        <path d={yPath} fill="#0F172A" />
        <path d={sPath} fill="#4F46E5" />
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
};

/** YS monogram used in the header and footer. */
export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex shrink-0 items-center ${className}`} aria-hidden>
      <svg
        width="54"
        height="32"
        viewBox="0 0 46 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-[3.35rem] sm:h-9 sm:w-[3.75rem]"
      >
        <path d={yPath} fill="currentColor" />
        <path d={sPath} fill="#4F46E5" />
      </svg>
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
