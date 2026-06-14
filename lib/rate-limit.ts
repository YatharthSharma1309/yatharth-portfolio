type RateLimitEntry = { count: number; resetAt: number };

export function createRateLimiter(max: number, windowMs: number) {
  const store = new Map<string, RateLimitEntry>();

  return function isRateLimited(key: string): boolean {
    const now = Date.now();
    const entry = store.get(key);
    if (!entry || now > entry.resetAt) {
      store.set(key, { count: 1, resetAt: now + windowMs });
      return false;
    }
    if (entry.count >= max) return true;
    entry.count += 1;
    return false;
  };
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}
