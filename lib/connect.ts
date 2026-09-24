import { site } from "@/lib/content";
import { resumeDownloads } from "@/lib/resume-variants";
import { formatExternalLabel } from "@/lib/format";
import type { ConnectChannel } from "@/components/ConnectIcons";

export type ConnectLinkItem = {
  channel: ConnectChannel;
  href: string;
  label: string;
  external?: boolean;
  download?: string;
};

export const connectLinks: ConnectLinkItem[] = [
  {
    channel: "email",
    href: `mailto:${site.email}?subject=${encodeURIComponent("Software Engineering Opportunity")}`,
    label: site.email,
  },
  {
    channel: "linkedin",
    href: site.linkedin,
    label: formatExternalLabel(site.linkedin),
    external: true,
  },
  {
    channel: "github",
    href: site.github,
    label: formatExternalLabel(site.github),
    external: true,
  },
  {
    channel: "resume",
    href: resumeDownloads.fullstack.href,
    label: resumeDownloads.fullstack.label,
    download: resumeDownloads.fullstack.download,
  },
  {
    channel: "resume",
    href: resumeDownloads.ai.href,
    label: resumeDownloads.ai.label,
    download: resumeDownloads.ai.download,
  },
];
