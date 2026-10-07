export const metadata = {
  title: 'Page Not Found | TeleDirectMD',
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: '/book-online/', label: 'Book a $79 video visit' },
  { href: '/what-we-treat/', label: 'What we treat' },
  { href: '/states-we-serve/', label: 'States we serve' },
  { href: '/insurance/', label: 'Insurance and pricing' },
  { href: '/health-guides/', label: 'Health guides' },
  { href: '/faq/', label: 'FAQ' },
];

export default function NotFound() {
  return (
    <section style={{ maxWidth: 640, margin: '0 auto', padding: '4rem 1rem 5rem', fontFamily: 'Inter, system-ui, sans-serif', color: '#003e52' }}>
      <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#006b73', margin: 0 }}>Error 404</p>
      <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, margin: '0.5rem 0 1rem' }}>We couldn't find that page</h1>
      <p style={{ fontSize: 17, lineHeight: 1.6, margin: '0 0 2rem' }}>
        The link may be out of date or the page may have moved. These are the places most people are looking for:
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'grid', gap: 8 }}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} style={{ display: 'block', padding: '0.85rem 1rem', border: '1px solid #dde3e6', borderRadius: 10, color: '#003e52', fontWeight: 600, textDecoration: 'none' }}>
              {l.label} →
            </a>
          </li>
        ))}
      </ul>
      <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>
        Still stuck? Email <a href="mailto:contact@teledirectmd.com" style={{ color: '#006b73' }}>contact@teledirectmd.com</a>.
      </p>
    </section>
  );
}
