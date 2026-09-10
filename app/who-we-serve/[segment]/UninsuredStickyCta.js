'use client';

// Sticky mobile booking bar for the Uninsured & Affordable Care page.
//
// Appears on narrow viewports once the hero has scrolled away, so the $79 price
// and the Book button are never more than a thumb from wherever the reader is.
// The site-wide .tdmd-mobile-sticky-bar is suppressed on this page in
// lib/uninsured-styles.js so only one bar is ever on screen.

import { useEffect, useState } from 'react';

const MOBILE_MAX = 900;

export default function UninsuredStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.innerWidth < MOBILE_MAX && window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="uac-sticky" role="region" aria-label="Book a visit">
      <div className="uac-sticky-copy">
        <span className="uac-sticky-price">$79 <span>flat, no insurance</span></span>
        <span className="uac-sticky-sub">Same-day, evenings, weekends</span>
      </div>
      <a className="uac-btn uac-btn--primary" href="/book-online" data-analytics="book_sticky">Book Now</a>
    </div>
  );
}
