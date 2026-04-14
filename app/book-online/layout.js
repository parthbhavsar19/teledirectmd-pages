export const metadata = {
  title: 'Book a Visit — TeleDirectMD',
  description: 'Book your $49 telehealth visit with a board-certified physician. Same-day appointments available 7 days a week.',
  robots: { index: false, follow: false },
  other: {
    'http-equiv': 'refresh',
  },
};

export default function BookOnlineLayout({ children }) {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=https://teledirectmd.as.me/" />
      {children}
    </>
  );
}
