/**
 * PressStrip — compact "As Featured In" component
 *
 * Reusable scrolling marquee of publication logos. Used across the site:
 *   - SiteFooter (compact, site-wide)
 *   - Condition pages (trust signal above CTA)
 *   - About page (replaces text-only logo list)
 *
 * All logos link to /media-mentions for the full coverage page.
 *
 * Variant prop:
 *   - 'full'     : with label + marquee animation (default — for condition pages, about)
 *   - 'footer'   : minimal, no label, slower scroll (for SiteFooter)
 */

// Logos are 72px-tall WebP copies in public/logos/strip/ (about 2x the largest
// displayed height). The full-size originals in public/logos/ are still used by
// the about and employers pages. width/height are the files' pixel sizes; CSS sets
// the rendered height and the browser keeps the aspect ratio.
// SHEfinds is left out until there is a real logo file: public/logos/shefinds.png
// is a byte-for-byte copy of the Woman's World logo (the homepage strip drops it too).
const PRESS_OUTLETS = [
  { name: 'TIME', logo: '/logos/strip/time.webp', w: 98, h: 72 },
  { name: 'Newsweek', logo: '/logos/strip/newsweek.webp', w: 104, h: 72 },
  { name: 'HuffPost', logo: '/logos/strip/huffpost.webp', w: 96, h: 72 },
  { name: 'U.S. News', logo: '/logos/strip/usnews.webp', w: 103, h: 72 },
  { name: 'British GQ', logo: '/logos/strip/gq.webp', w: 96, h: 72 },
  { name: 'Atlanta Journal-Constitution', logo: '/logos/ajc.svg', w: 400, h: 82 },
  { name: 'New York Post', logo: '/logos/strip/nypost.webp', w: 105, h: 72 },
  { name: 'Fox News', logo: '/logos/strip/fox.webp', w: 103, h: 72 },
  { name: 'Daily Mail', logo: '/logos/strip/dailymail.webp', w: 106, h: 72 },
  { name: 'Healthline', logo: '/logos/strip/healthline.webp', w: 102, h: 72 },
  { name: 'Yahoo Health', logo: '/logos/strip/yahoo.webp', w: 106, h: 72 },
  { name: "Woman's World", logo: '/logos/strip/womansworld.webp', w: 96, h: 72 },
  { name: 'EatingWell', logo: '/logos/strip/eatingwell.webp', w: 96, h: 72 },
  { name: 'Everyday Health', logo: '/logos/strip/everydayhealth.webp', w: 102, h: 72 },
  { name: 'Parade', logo: '/logos/strip/parade.webp', w: 118, h: 72 },
  { name: "Men's Journal", logo: '/logos/strip/mensjournal.webp', w: 101, h: 72 },
];

export default function PressStrip({ variant = 'full' }) {
  const isFooter = variant === 'footer';
  const wrapClass = isFooter ? 'tdmd-press-strip tdmd-press-strip--footer' : 'tdmd-press-strip';

  return (
    <section className={wrapClass} aria-label="As featured in">
      <div className="tdmd-press-strip__inner">
        {!isFooter && (
          <div className="tdmd-press-strip__label">As Featured In</div>
        )}
        <div className="tdmd-press-strip__wrap">
          <div className="tdmd-press-strip__track">
            {[...PRESS_OUTLETS, ...PRESS_OUTLETS].map((item, i) => {
              // The second copy only exists so the marquee loops seamlessly;
              // hide it from screen readers and keyboard focus.
              const dup = i >= PRESS_OUTLETS.length;
              return (
                <a
                  key={`${item.name}-${i}`}
                  href="/media-mentions/"
                  aria-label={dup ? undefined : `Read TeleDirectMD coverage in ${item.name}`}
                  aria-hidden={dup ? 'true' : undefined}
                  tabIndex={dup ? -1 : undefined}
                  className="tdmd-press-strip__link"
                >
                  <img
                    src={item.logo}
                    alt={dup ? '' : item.name}
                    data-outlet={item.name}
                    width={item.w}
                    height={item.h}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              );
            })}
          </div>
        </div>
        {!isFooter && (
          <div className="tdmd-press-strip__cta">
            <a href="/media-mentions/">See all 27 media mentions →</a>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .tdmd-press-strip {
          padding: 56px 0;
          background: #FAF8F5;
          border-top: 1px solid #E8E8E8;
          border-bottom: 1px solid #E8E8E8;
        }
        .tdmd-press-strip--footer {
          padding: 28px 0 24px;
          background: transparent;
          border: 0;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .tdmd-press-strip__inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }
        .tdmd-press-strip__label {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #666;
          margin-bottom: 22px;
        }
        .tdmd-press-strip__wrap {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
        }
        .tdmd-press-strip__track {
          display: flex;
          align-items: center;
          gap: 36px;
          width: max-content;
          animation: tdmd-press-marquee 70s linear infinite;
        }
        .tdmd-press-strip--footer .tdmd-press-strip__track {
          gap: 28px;
          animation-duration: 85s;
        }
        .tdmd-press-strip__wrap:hover .tdmd-press-strip__track {
          animation-play-state: paused;
        }
        .tdmd-press-strip__link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          flex-shrink: 0;
          background: #ffffff;
          padding: 10px 22px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          height: 56px;
          box-sizing: border-box;
        }
        .tdmd-press-strip__track img {
          height: 36px;
          width: auto;
          object-fit: contain;
          filter: grayscale(20%);
          opacity: 1;
          transition: filter 0.2s ease;
        }
        .tdmd-press-strip--footer .tdmd-press-strip__link {
          background: #fff;
          padding: 6px 14px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 38px;
          box-sizing: border-box;
        }
        .tdmd-press-strip--footer .tdmd-press-strip__track img {
          height: 20px;
          filter: none;
          opacity: 0.85;
        }
        .tdmd-press-strip__link:hover img {
          filter: grayscale(0%);
        }
        .tdmd-press-strip--footer .tdmd-press-strip__link:hover img {
          opacity: 1;
          filter: grayscale(0%);
        }
        /* Per-logo size tuning (match media-mentions page proportions) */
        .tdmd-press-strip__track img[data-outlet="TIME"] { height: 30px; }
        .tdmd-press-strip__track img[data-outlet="HuffPost"] { height: 26px; }
        .tdmd-press-strip__track img[data-outlet="Daily Mail"] { height: 30px; }
        .tdmd-press-strip__track img[data-outlet="British GQ"] { height: 26px; }
        .tdmd-press-strip__track img[data-outlet="Atlanta Journal-Constitution"] { height: 38px; }
        .tdmd-press-strip__track img[data-outlet="Fox News"] { height: 28px; }
        .tdmd-press-strip__track img[data-outlet="Healthline"] { height: 28px; }
        .tdmd-press-strip__track img[data-outlet="EatingWell"] { height: 22px; }
        .tdmd-press-strip__track img[data-outlet="Everyday Health"] { height: 22px; }
        .tdmd-press-strip__track img[data-outlet="Yahoo Health"] { height: 24px; }
        .tdmd-press-strip__track img[data-outlet="Parade"] { height: 28px; }
        .tdmd-press-strip__track img[data-outlet="Men's Journal"] { height: 22px; }
        .tdmd-press-strip__track img[data-outlet="Woman's World"] { height: 28px; }
        .tdmd-press-strip__track img[data-outlet="U.S. News"] { height: 30px; }
        .tdmd-press-strip__track img[data-outlet="New York Post"] { height: 22px; }
        .tdmd-press-strip__track img[data-outlet="Newsweek"] { height: 24px; }
        /* Footer scale-down — AJC is stacked wordmark, needs less aggressive reduction */
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="Atlanta Journal-Constitution"] { height: 28px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="TIME"] { height: 16px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="U.S. News"] { height: 16px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="HuffPost"] { height: 14px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="EatingWell"] { height: 13px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="Everyday Health"] { height: 13px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="Men's Journal"] { height: 13px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="Yahoo Health"] { height: 14px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="New York Post"] { height: 14px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="Newsweek"] { height: 14px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="British GQ"] { height: 16px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="Daily Mail"] { height: 18px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="Fox News"] { height: 18px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="Healthline"] { height: 16px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="Parade"] { height: 18px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[data-outlet="Woman's World"] { height: 18px; }
        .tdmd-press-strip__cta {
          margin-top: 22px;
        }
        .tdmd-press-strip__cta a {
          font-size: 0.85rem;
          font-weight: 500;
          color: #006B73;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s ease;
        }
        .tdmd-press-strip__cta a:hover {
          color: #003E52;
          text-decoration: underline;
        }
        @keyframes tdmd-press-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .tdmd-press-strip { padding: 40px 0; }
          .tdmd-press-strip__track { gap: 28px; }
          .tdmd-press-strip__track img { height: 28px; }
          .tdmd-press-strip__track img[data-outlet="Atlanta Journal-Constitution"] { height: 30px; }
        }
      ` }} />
    </section>
  );
}
