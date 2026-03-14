/**
 * Cloudflare Worker: reverse proxy that routes condition pages to Vercel
 * and everything else to the existing Squarespace site.
 *
 * Deploy via Wrangler or the Cloudflare dashboard.
 *
 * Environment variables (set in wrangler.toml or dashboard):
 *   VERCEL_ORIGIN  – e.g. "https://teledirectmd-pages.vercel.app"
 *   SQUARESPACE_ORIGIN – e.g. "https://teledirectmd.squarespace.com"
 */

// All state slugs served by the Next.js static site
const STATE_SLUGS = new Set([
  'al','az','ca','co','ct','fl','ga','hi','id','il','in','ia','ks','ky','la',
  'md','mi','mn','ms','mo','mt','ne','nv','nj','nm','nc','oh','ok','or','pa',
  'sc','tn','tx','ut','va','wa','wv','wi','wy'
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/').filter(Boolean);

    // Route /{stateSlug}/{conditionSlug} to Vercel
    // A condition page has exactly 2 path segments where the first is a state slug
    const isConditionPage = pathParts.length === 2 && STATE_SLUGS.has(pathParts[0]);

    const origin = isConditionPage
      ? (env.VERCEL_ORIGIN || 'https://teledirectmd-pages.vercel.app')
      : (env.SQUARESPACE_ORIGIN || 'https://teledirectmd.squarespace.com');

    const targetUrl = new URL(url.pathname + url.search, origin);

    const response = await fetch(targetUrl.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
      redirect: 'follow',
    });

    // Clone response so we can modify headers
    const newResponse = new Response(response.body, response);

    // Security headers
    newResponse.headers.set('X-Content-Type-Options', 'nosniff');
    newResponse.headers.set('X-Frame-Options', 'SAMEORIGIN');
    newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Cache condition pages at the edge for 1 hour (they are static)
    if (isConditionPage) {
      newResponse.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    }

    return newResponse;
  },
};
