export type ConnectChannel = "email" | "linkedin" | "github" | "resume";

type ConnectIconProps = {
  channel: ConnectChannel;
  className?: string;
  size?: number;
};

export function ConnectIcon({ channel, className = "", size = 18 }: ConnectIconProps) {
  const shared = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true as const,
  };

  switch (channel) {
    case "email":
      return (
        <svg {...shared}>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M4 7.5L12 13l8-5.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...shared} fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "github":
      return (
        <svg {...shared} fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.522.105-3.21 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "resume":
      return (
        <svg {...shared}>
          <path
            d="M8 3.5h5.2L18 8.3V20.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 20.5v-16A1.5 1.5 0 0 1 5.5 3H8Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M13 3.5V8.5H18"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 12.5h7M8.5 15.5h7M8.5 18.5h4.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M16.5 17.5v3.5M15 19h3"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

type ConnectIconBadgeProps = {
  channel: ConnectChannel;
  className?: string;
};

export function ConnectIconBadge({ channel, className = "" }: ConnectIconBadgeProps) {
  return (
    <span
      className={`bg-accent/12 text-accent inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${className}`}
    >
      <ConnectIcon channel={channel} size={16} />
    </span>
  );
}
