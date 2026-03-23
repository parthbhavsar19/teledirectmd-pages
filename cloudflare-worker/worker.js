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

// All state slugs served by the Next.js static site (41 states)
const STATE_SLUGS = new Set([
  'al','az','ca','co','ct','de','fl','ga','hi','ia','id','il','in','ks','ky',
  'la','md','me','mi','mn','mo','ms','mt','nc','nd','ne','nh','nj','nv','oh',
  'ok','pa','sc','sd','tn','tx','ut','wa','wi','wv','wy'
]);

// All condition slugs served as national pages at /{conditionSlug}
const CONDITION_SLUGS = new Set([
  'acid-reflux-refills-online',
  'acne-treatment-online',
  'anti-aging-treatment-online',
  'asthma-refills-online',
  'bv-treatment-online',
  'cat-bite-treatment-online',
  'cellulitis-treatment-online',
  'chlamydia-treatment-online',
  'cold-sore-treatment-online',
  'common-cold-treatment-online',
  'contact-dermatitis-treatment-online',
  'covid-19-treatment-online',
  'dandruff-treatment-online',
  'dental-pain-treatment-online',
  'diabetes-refills-online',
  'dog-bite-treatment-online',
  'ear-pain-treatment-online',
  'eczema-treatment-online',
  'epipen-refills-online',
  'erectile-dysfunction-treatment-online',
  'excessive-sweating-treatment-online',
  'eyelash-growth-treatment-online',
  'genital-herpes-treatment-online',
  'genital-warts-treatment-online',
  'gout-treatment-online',
  'hair-loss-treatment-online',
  'head-lice-treatment-online',
  'hyperlipidemia-refills-online',
  'hypertension-refills-online',
  'hypothyroidism-refills-online',
  'impetigo-treatment-online',
  'influenza-treatment-online',
  'mastitis-treatment-online',
  'melasma-treatment-online',
  'migraine-refills-online',
  'motion-sickness-treatment-online',
  'performance-anxiety-treatment-online',
  'perioral-dermatitis-treatment-online',
  'pink-eye-treatment-online',
  'poison-ivy-oak-treatment-online',
  'psoriasis-refills-online',
  'rosacea-treatment-online',
  'scabies-treatment-online',
  'seasonal-allergies-treatment-online',
  'shingles-treatment-online',
  'sinus-infection-treatment-online',
  'smoking-cessation-treatment-online',
  'sore-throat-treatment-online',
  'tick-bite-treatment-online',
  'tinea-treatment-online',
  'tinea-versicolor-treatment-online',
  'trichomoniasis-treatment-online',
  'uti-treatment-online',
  'vaginal-dryness-treatment-online',
  'viral-gastroenteritis-treatment-online',
  'yeast-infection-treatment-online'
]);

// Other Vercel-hosted paths (state landing pages, static pages, etc.)
const VERCEL_PATHS = new Set([
  'what-we-treat',
  'health-guides'
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/').filter(Boolean);

    let routeToVercel = false;

    if (pathParts.length === 2 && STATE_SLUGS.has(pathParts[0])) {
      // /{stateSlug}/{conditionSlug} → state-specific condition page
      routeToVercel = true;
    } else if (pathParts.length === 1 && STATE_SLUGS.has(pathParts[0])) {
      // /{stateSlug} → state landing page
      routeToVercel = true;
    } else if (pathParts.length === 1 && CONDITION_SLUGS.has(pathParts[0])) {
      // /{conditionSlug} → national condition page
      routeToVercel = true;
    } else if (pathParts.length >= 1 && VERCEL_PATHS.has(pathParts[0])) {
      // /what-we-treat, /health-guides, etc.
      routeToVercel = true;
    } else if (url.pathname.startsWith('/health-guides/')) {
      // /health-guides/{slug} → individual health guide
      routeToVercel = true;
    }

    const origin = routeToVercel
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

    // Cache Vercel-served pages at the edge for 1 hour (they are static)
    if (routeToVercel) {
      newResponse.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    }

    return newResponse;
  },
};
