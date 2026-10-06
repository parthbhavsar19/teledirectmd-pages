'use client';

import { usePathname } from 'next/navigation';

// Keep the exclusion visible before the first booking action on UTI entry points.
// This is a service-scope rule, not a statement about what other providers treat.
export default function UtiScopeNotice() {
  const pathname = usePathname() || '/';
  const show = /(?:uti|burning-urination|what-we-treat|book-online)/.test(pathname);
  if (!show) return null;
  return (
    <aside className="tdmd-uti-scope" aria-label="UTI treatment eligibility" data-uti-scope="women-only">
      <style>{`
        .tdmd-uti-scope{box-sizing:border-box;margin:0;padding:16px max(20px,calc((100% - 1080px)/2));background:#fff5df;border-bottom:2px solid #d99c35;color:#16333e;font:16px/1.55 'DM Sans',system-ui,sans-serif}
        .tdmd-uti-scope strong{display:block;font-weight:800;color:inherit}
        .tdmd-uti-scope p{margin:3px 0 0;color:inherit}
        :root[data-theme="dark"] .tdmd-uti-scope{background:#30291d;color:#fff2d8;border-color:#e8a33d}
        @media(prefers-color-scheme:dark){:root:not([data-theme="light"]) .tdmd-uti-scope{background:#30291d;color:#fff2d8;border-color:#e8a33d}}
      `}</style>
      <strong>We do not treat male UTIs.</strong>
      <p>TeleDirectMD UTI care is for non-pregnant adult women (18+) with uncomplicated symptoms only. Men with UTI symptoms should seek in-person care, not book a TeleDirectMD UTI visit.</p>
    </aside>
  );
}
