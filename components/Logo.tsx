"use client";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

const brackets =
  "M14 7 L4 18 L14 29 M19 27.5 L29 8.5 M34 7 L44 18 L34 29";

/** Clean </> mark for the favicon. */
export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d={brackets}
        stroke="#0F172A"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
};

/** Single </> mark — no ring, no initials, no underline. */
export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex shrink-0 items-center text-current ${className}`}>
      <svg
        viewBox="0 0 48 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto sm:h-9"
        aria-hidden
      >
        <path
          d={brackets}
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
