
export const metadata = {
  title: 'Book Online | TeleDirectMD',
  description: 'Complete your TeleDirectMD patient intake and book your video visit.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://teledirectmd.com/book-online'
  }
}

export default function BookOnlinePage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html:has(.tdmd-intake-page) {
              height: 100%;
              overflow: hidden;
            }

            body:has(.tdmd-intake-page) {
              display: flex;
              flex-direction: column;
              height: 100dvh;
              margin: 0;
              padding: 0 !important;
              overflow: hidden;
            }

            body:has(.tdmd-intake-page) .tdmd-site-header {
              flex-shrink: 0;
            }

            body:has(.tdmd-intake-page) .tdmd-site-footer,
            body:has(.tdmd-intake-page) .tdmd-mobile-sticky-bar,
            body:has(.tdmd-intake-page) .tdmd-uti-scope {
              display: none !important;
            }

            body:has(.tdmd-intake-page) #main-content {
              display: flex;
              flex: 1 1 auto;
              width: 100%;
              min-height: 0;
              max-width: none;
              margin: 0;
              padding: 0;
              overflow: hidden;
            }

            .tdmd-intake-page {
              position: relative;
              display: flex;
              flex: 1 1 auto;
              width: 100%;
              min-width: 0;
              min-height: 0;
              margin: 0;
              padding: 0;
              overflow: hidden;
            }
                    
            .tdmd-intake-frame {
              position: absolute;
              top: -82px;
              left: 0;
              width: 100%;
              height: calc(100% + 82px);
              margin: 0;
              padding: 0;
              border: none;
              background: #ffffff;
            }
          `
        }}
      />

      <div className="tdmd-intake-page">
        <iframe
          src="https://teledirectmd.onrender.com/intake"
          title="TeleDirectMD Patient Intake"
          className="tdmd-intake-frame"
          allow="camera; microphone; payment"
        />
      </div>
    </>
  )
}
