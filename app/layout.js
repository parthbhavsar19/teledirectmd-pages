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
