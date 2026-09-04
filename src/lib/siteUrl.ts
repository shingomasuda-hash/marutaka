/**
 * Resolves the absolute base URL used for canonical links and OGP images.
 *
 * Every source is treated as untrusted: an unset, blank or malformed value
 * must never break the build (a blank NEXT_PUBLIC_SITE_URL is easy to create
 * in the Vercel dashboard, and `??` does not catch an empty string).
 *
 * Order of preference:
 *   1. NEXT_PUBLIC_SITE_URL          — the custom domain, once it is known
 *   2. VERCEL_PROJECT_PRODUCTION_URL — the stable *.vercel.app production host
 *   3. VERCEL_URL                    — the per-deployment host (previews)
 *   4. http://localhost:3000         — local development
 */
function parse(value: string | undefined, { assumeHttps = false } = {}): URL | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;

  const withScheme =
    assumeHttps && !/^https?:\/\//i.test(trimmed) ? `https://${trimmed}` : trimmed;

  try {
    const url = new URL(withScheme);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url : null;
  } catch {
    return null;
  }
}

export function getSiteUrl(): URL {
  return (
    parse(process.env.NEXT_PUBLIC_SITE_URL) ??
    parse(process.env.VERCEL_PROJECT_PRODUCTION_URL, { assumeHttps: true }) ??
    parse(process.env.VERCEL_URL, { assumeHttps: true }) ??
    new URL('http://localhost:3000')
  );
}
