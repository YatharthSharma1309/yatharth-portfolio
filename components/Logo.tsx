"use client";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

/** Yatharth Sharma — geometric Y + S, matched cap-height. */
const yPath =
  "M1 3.2h5.8l4.85 10.6L16.5 3.2h5.8L15.2 18.8V27h-5.4V18.8L1 3.2Z";

const sPath =
  "M41.4 8.1c0-3.35-2.7-5.5-6.7-5.5-4.15 0-6.85 2.25-7.2 5.8h4.05c.28-1.5 1.5-2.4 3.15-2.4 1.55 0 2.6.85 2.6 2.15 0 1.5-1.1 2.25-3.95 3.15-3.7 1.15-6.05 2.9-6.05 6.25 0 3.55 2.8 5.9 7 5.9 4.4 0 7.15-2.45 7.5-6.05h-4.1c-.28 1.65-1.65 2.75-3.45 2.75-1.8 0-2.95-.95-2.95-2.4 0-1.5 1.15-2.3 4.15-3.25 3.6-1.15 6-3 6-6.4Z";

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
        viewBox="0 0 44 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-[3.25rem] sm:h-9 sm:w-[3.65rem]"
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
