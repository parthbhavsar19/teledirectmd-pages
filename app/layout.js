import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import GlobalStyles from './components/GlobalStyles';
import Analytics from './components/Analytics';
import UtiScopeNotice from './components/UtiScopeNotice';

// Applies the saved theme (or the system preference) to <html data-theme>
// before the first paint, so a dark-mode visitor never sees a light flash.
// The static health guides (public/health-guides/dark-mode.js) use the same
// key ('tdmd-theme'); 'tdmd-dark-mode' is the guides' older key.
const THEME_INIT = "(function(){var d=document.documentElement,t=null;try{t=localStorage.getItem('tdmd-theme');if(t!=='dark'&&t!=='light'){var o=localStorage.getItem('tdmd-dark-mode');t=o==='true'?'dark':o==='false'?'light':null}}catch(e){}if(!t)t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';d.setAttribute('data-theme',t)})()";

const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..700,0..100,0..1&family=JetBrains+Mono:wght@400;500&family=Merriweather:wght@400;700&family=Inter:wght@400;500;600;700&family=Patrick+Hand&family=Space+Mono:wght@400;700&family=Karla:wght@400;700&display=swap';

export const metadata = {
  metadataBase: new URL('https://teledirectmd.com'),
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon-192.png', type: 'image/png', sizes: '192x192' }],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    images: [
      {
        url: 'https://teledirectmd.com/images/tdmd-og-navy.png',
        width: 1200,
        height: 630,
        alt: 'TeleDirectMD — Physician-Only Telemedicine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://teledirectmd.com/images/tdmd-og-navy.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fonts load without blocking the first paint (display=swap shows
            fallback text until they arrive). media="print" makes the browser
            fetch the sheet at low priority; the inline script applies it on load. */}
        <link rel="preload" as="style" href={FONTS_URL} />
        <link id="tdmd-fonts" rel="stylesheet" href={FONTS_URL} media="print" />
        <script dangerouslySetInnerHTML={{ __html: "(function(l){if(!l)return;function a(){l.media='all'}if(l.sheet)a();else l.addEventListener('load',a)})(document.getElementById('tdmd-fonts'))" }} />
        <noscript><link rel="stylesheet" href={FONTS_URL} /></noscript>
        <GlobalStyles />
      </head>
      <body style={{ margin: 0 }}>
        <style>{`.tdmd-skip-link{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;}.tdmd-skip-link:focus{position:fixed;top:0;left:0;width:auto;height:auto;padding:.75rem 1.5rem;background:#003E52;color:#fff;font-size:1rem;font-family:sans-serif;z-index:99999;text-decoration:none;border-radius:0 0 8px 0;overflow:visible;}`}</style>
        <a href="#main-content" className="tdmd-skip-link">Skip to main content</a>
        <SiteHeader />
        <UtiScopeNotice />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
