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

const PRESS_OUTLETS = [
  { name: 'TIME', logo: '/logos/time.png' },
  { name: 'Newsweek', logo: '/logos/newsweek.png' },
  { name: 'HuffPost', logo: '/logos/huffpost.jpg' },
  { name: 'U.S. News', logo: '/logos/usnews.png' },
  { name: 'British GQ', logo: '/logos/gq.jpg' },
  { name: 'Atlanta Journal-Constitution', logo: '/logos/ajc.svg' },
  { name: 'New York Post', logo: '/logos/nypost.png' },
  { name: 'Fox News', logo: '/logos/fox.png' },
  { name: 'Daily Mail', logo: '/logos/dailymail.png' },
  { name: 'Healthline', logo: '/logos/healthline.png' },
  { name: 'Yahoo Health', logo: '/logos/yahoo.png' },
  { name: "Woman's World", logo: '/logos/womansworld.png' },
  { name: 'EatingWell', logo: '/logos/eatingwell.jpg' },
  { name: 'Everyday Health', logo: '/logos/everydayhealth.png' },
  { name: 'Parade', logo: '/logos/parade.png' },
  { name: "Men's Journal", logo: '/logos/mensjournal.png' },
  { name: 'SHEfinds', logo: '/logos/shefinds.png' },
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
            {[...PRESS_OUTLETS, ...PRESS_OUTLETS].map((item, i) => (
              <a
                key={`${item.name}-${i}`}
                href="/media-mentions"
                aria-label={`Read TeleDirectMD coverage in ${item.name}`}
                className="tdmd-press-strip__link"
              >
                <img src={item.logo} alt={item.name} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
        {!isFooter && (
          <div className="tdmd-press-strip__cta">
            <a href="/media-mentions">See all 27 media mentions →</a>
          </div>
        )}
      </div>

      <style>{`
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
          color: #999;
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
        .tdmd-press-strip__track img[alt="TIME"] { height: 30px; }
        .tdmd-press-strip__track img[alt="HuffPost"] { height: 26px; }
        .tdmd-press-strip__track img[alt="Daily Mail"] { height: 30px; }
        .tdmd-press-strip__track img[alt="British GQ"] { height: 26px; }
        .tdmd-press-strip__track img[alt="Atlanta Journal-Constitution"] { height: 38px; }
        .tdmd-press-strip__track img[alt="Fox News"] { height: 28px; }
        .tdmd-press-strip__track img[alt="Healthline"] { height: 28px; }
        .tdmd-press-strip__track img[alt="EatingWell"] { height: 22px; }
        .tdmd-press-strip__track img[alt="Everyday Health"] { height: 22px; }
        .tdmd-press-strip__track img[alt="Yahoo Health"] { height: 24px; }
        .tdmd-press-strip__track img[alt="Parade"] { height: 28px; }
        .tdmd-press-strip__track img[alt="Men's Journal"] { height: 22px; }
        .tdmd-press-strip__track img[alt="SHEfinds"] { height: 28px; }
        .tdmd-press-strip__track img[alt="Woman's World"] { height: 28px; }
        .tdmd-press-strip__track img[alt="U.S. News"] { height: 30px; }
        .tdmd-press-strip__track img[alt="New York Post"] { height: 22px; }
        .tdmd-press-strip__track img[alt="Newsweek"] { height: 24px; }
        /* Footer scale-down — AJC is stacked wordmark, needs less aggressive reduction */
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="Atlanta Journal-Constitution"] { height: 28px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="TIME"] { height: 16px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="U.S. News"] { height: 16px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="HuffPost"] { height: 14px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="EatingWell"] { height: 13px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="Everyday Health"] { height: 13px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="Men's Journal"] { height: 13px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="Yahoo Health"] { height: 14px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="New York Post"] { height: 14px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="Newsweek"] { height: 14px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="British GQ"] { height: 16px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="Daily Mail"] { height: 18px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="Fox News"] { height: 18px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="Healthline"] { height: 16px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="Parade"] { height: 18px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="SHEfinds"] { height: 16px; }
        .tdmd-press-strip--footer .tdmd-press-strip__track img[alt="Woman's World"] { height: 18px; }
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
          .tdmd-press-strip__track img[alt="Atlanta Journal-Constitution"] { height: 30px; }
        }
      `}</style>
    </section>
  );
}
