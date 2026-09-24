/** Canonical production demos — used when env vars are unset (keeps SSR/client in sync). */
export const productionDemoUrls = {
  opsConcierge: "https://support-ai-nine-mu.vercel.app",
  salesCRM: "https://ai-sales-assistant-crm.vercel.app",
} as const;

/** Hostname for resume bullets and compact link text. */
export function formatDemoHost(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

/** github.com/owner/repo style path for resume bullets. */
export function formatRepoPath(url: string): string {
  try {
    const { host, pathname } = new URL(url);
    const path = pathname.replace(/\/$/, "");
    return `${host.replace(/^www\./, "")}${path}`;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

/**
 * Live demo URLs — env overrides production defaults.
 * Portfolio shows "Live demo" when a URL resolves.
 */
function resolveDemoUrl(envValue: string | undefined, fallback: string): string {
  const trimmed = envValue?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : fallback;
}

export function getDemoUrl(
  key: "opsConcierge" | "salesCRM"
): string | undefined {
  const map = {
    opsConcierge: resolveDemoUrl(
      process.env.NEXT_PUBLIC_DEMO_OPSCONCIERGE_URL,
      productionDemoUrls.opsConcierge,
    ),
    salesCRM: resolveDemoUrl(
      process.env.NEXT_PUBLIC_DEMO_SALES_CRM_URL,
      productionDemoUrls.salesCRM,
    ),
  };
  const url = map[key]?.trim();
  return url && url.length > 0 ? url : undefined;
}

export function demoStatus(demoUrl?: string): "Live" | "In progress" {
  return demoUrl ? "Live" : "In progress";
}
