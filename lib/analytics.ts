import { track as vercelTrack } from "@vercel/analytics";

export function trackEvent(
  name: string,
  properties?: Record<string, string | number | boolean | null>,
) {
  try {
    vercelTrack(name, properties);
  } catch {
    // Analytics is optional — never block UX
  }
}
