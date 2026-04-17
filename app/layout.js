import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import GlobalStyles from './components/GlobalStyles';

export const metadata = {
  metadataBase: new URL('https://teledirectmd.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=Patrick+Hand&family=Space+Mono:wght@400;700&family=Karla:wght@400;700&display=swap" rel="stylesheet" />
        <GlobalStyles />
      </head>
      <body style={{ margin: 0 }}>
        <a href="#main-content" style={{
          position:'absolute',left:'-9999px',top:'auto',width:'1px',height:'1px',overflow:'hidden'
        }} onFocus={e => { e.target.style.cssText='position:fixed;top:0;left:0;width:auto;height:auto;padding:0.75rem 1.5rem;background:#003E52;color:#fff;font-size:1rem;font-family:sans-serif;z-index:99999;text-decoration:none;border-radius:0 0 8px 0;overflow:visible'; }} onBlur={e => { e.target.style.cssText='position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden'; }}>Skip to main content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
