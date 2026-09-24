import type { ReactNode } from "react";
import { eyebrowMono } from "@/lib/ui-classes";

type Props = {
  children: ReactNode;
  className?: string;
};

export function SectionEyebrow({ children, className = "" }: Props) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span
        className="from-accent h-px w-10 shrink-0 bg-gradient-to-r to-transparent"
        aria-hidden
      />
      <p className={eyebrowMono}>{children}</p>
    </div>
  );
}
