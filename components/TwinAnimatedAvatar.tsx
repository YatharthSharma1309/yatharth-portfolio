"use client";

import Image from "next/image";
import { site } from "@/lib/content";

type TwinAnimatedAvatarProps = {
  active?: boolean;
  className?: string;
};

export function TwinAnimatedAvatar({ active = false, className = "" }: TwinAnimatedAvatarProps) {
  return (
    <div
      className={`twin-avatar relative h-11 w-11 shrink-0 ${active ? "twin-avatar-active" : ""} ${className}`.trim()}
      role="img"
      aria-label="Career twin avatar"
    >
      <div className="from-accent via-accent-warm to-accent absolute inset-0 rounded-full bg-gradient-to-br p-[2px]">
        <div className="bg-bg-deep relative h-full w-full overflow-hidden rounded-full shadow-[0_0_20px_-6px_rgba(62,232,200,0.45)]">
          <Image
            src={site.profileImage}
            alt=""
            fill
            sizes="44px"
            className="object-cover object-[center_18%]"
            priority
          />
        </div>
      </div>
      <span
        className={`border-bg-deep absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 ${
          active ? "bg-accent animate-pulse" : "bg-accent/90"
        }`}
        aria-hidden
      />
    </div>
  );
}
