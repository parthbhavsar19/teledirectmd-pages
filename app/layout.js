export const metadata = {
  metadataBase: new URL('https://teledirectmd.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
