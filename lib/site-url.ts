/** One public URL for LinkedIn, resumes, and job applications. */
export const PRODUCTION_URL = "https://yatharthsharma.vercel.app";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  return PRODUCTION_URL;
}
