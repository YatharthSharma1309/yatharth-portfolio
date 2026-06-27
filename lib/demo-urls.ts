/**
 * Live demo URLs — set in .env.local / Vercel env after deploying flagship apps.
 * Portfolio shows "View demo" only when URL is non-empty.
 */
export function getDemoUrl(
  key: "recruitAI" | "supportAI" | "salesCRM"
): string | undefined {
  const map = {
    recruitAI: process.env.NEXT_PUBLIC_DEMO_RECRUITAI_URL,
    supportAI: process.env.NEXT_PUBLIC_DEMO_SUPPORTAI_URL,
    salesCRM: process.env.NEXT_PUBLIC_DEMO_SALES_CRM_URL,
  };
  const url = map[key]?.trim();
  return url && url.length > 0 ? url : undefined;
}

export function demoStatus(demoUrl?: string): "Live" | "In progress" {
  return demoUrl ? "Live" : "In progress";
}
