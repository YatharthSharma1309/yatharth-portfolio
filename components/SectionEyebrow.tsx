import type { ReactNode } from "react";
import { eyebrowMono } from "@/lib/ui-classes";

type Props = {
  children: ReactNode;
  className?: string;
  align?: "start" | "center";
};

export function SectionEyebrow({ children, className = "", align = "center" }: Props) {
  return (
    <div
      className={`flex items-center gap-3 ${align === "start" ? "justify-start" : "justify-center"} ${className}`}
    >
      <span
        className="from-accent h-px w-10 shrink-0 bg-gradient-to-r to-transparent"
        aria-hidden
      />
      <p className={eyebrowMono}>{children}</p>
    </div>
  );
}
