"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/content";

type TwinAnimatedAvatarProps = {
  active?: boolean;
  className?: string;
  size?: "sm" | "md";
};

const profileInitials = site.name
  .split(/\s+/)
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-11 w-11",
} as const;

const imageSizes = {
  sm: "32px",
  md: "44px",
} as const;

export function TwinAnimatedAvatar({
  active = false,
  className = "",
  size = "md",
}: TwinAnimatedAvatarProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`twin-avatar relative shrink-0 ${sizeClasses[size]} ${active ? "twin-avatar-active" : ""} ${className}`.trim()}
      role="img"
      aria-label="Career twin avatar"
    >
      <div className="from-accent via-accent-warm to-accent absolute inset-0 rounded-full bg-gradient-to-br p-[2px]">
        <div className="bg-bg-deep relative flex h-full w-full items-center justify-center overflow-hidden rounded-full shadow-[0_0_20px_-6px_rgba(62,232,200,0.45)]">
          {imageFailed ? (
            <span
              className={`text-accent font-display font-bold tracking-tight ${size === "sm" ? "text-[10px]" : "text-sm"}`}
            >
              {profileInitials}
            </span>
          ) : (
            <Image
              src={site.profileImage}
              alt=""
              fill
              sizes={imageSizes[size]}
              className="object-cover object-[center_18%]"
              priority={size === "md"}
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
      </div>
      <span
        className={`border-bg-deep absolute -right-0.5 -bottom-0.5 rounded-full border-2 ${
          size === "sm" ? "h-2.5 w-2.5" : "h-3 w-3"
        } ${active ? "bg-accent animate-pulse" : "bg-accent/90"}`}
        aria-hidden
      />
    </div>
  );
}
