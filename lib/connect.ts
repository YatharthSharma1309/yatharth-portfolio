import { site } from "@/lib/content";
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
    href: site.resumePdf,
    label: "Download resume",
    download: "Yatharth-Sharma-Resume.pdf",
  },
];
