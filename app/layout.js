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
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&display=swap" rel="stylesheet" />
        <GlobalStyles />
      </head>
      <body style={{ margin: 0 }}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
