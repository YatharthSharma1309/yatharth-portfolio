/** Short display label for external profile URLs (e.g. linkedin.com/in/handle). */
export function formatExternalLabel(url: string): string {
  try {
    const { hostname, pathname } = new URL(url);
    const host = hostname.replace(/^www\./, "");
    const path = pathname.replace(/\/$/, "");
    return `${host}${path}`;
  } catch {
    return url;
  }
}
