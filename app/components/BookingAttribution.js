'use client';

import { useEffect } from 'react';
import { captureAttribution, decorateUrl } from '../../lib/attribution';

// Booking destinations whose links should carry attribution params.
const BOOKING_HREF_PATTERNS = ['/book-online', 'jotform.com', 'acuityscheduling.com', 'app.acuityscheduling'];

// Mounted once in the root layout. On each page load it captures attribution
// from the URL/referrer and appends the stored params to every booking link,
// so the external booking system receives them and can map to hidden fields.
export default function BookingAttribution() {
  useEffect(() => {
    const attr = captureAttribution();
    if (!attr) return;

    const links = document.querySelectorAll('a[href]');
    links.forEach((a) => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (BOOKING_HREF_PATTERNS.some((p) => href.includes(p))) {
        const next = decorateUrl(href, attr);
        if (next !== href) a.setAttribute('href', next);
      }
    });
  }, []);

  return null;
}
