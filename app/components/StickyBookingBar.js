// Sticky booking bar — conversion architecture element.
// Renders a fixed bottom bar with price + same-day value prop + Book CTA.
// Enabled per-condition via condition.conversion.stickyBar (UTI canary first).
// Static-export safe: markup only + one vanilla <script> for dismiss.
export default function StickyBookingBar({ price = '79' }) {
  return (
    <>
      {/* Spacer so the fixed bar never covers footer content */}
      <div aria-hidden="true" style={{ height: '72px' }} />
      <div
        id="tdmd-book-bar"
        className="tdmd-book-bar"
        role="region"
        aria-label="Book a visit"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 60,
          background: '#003E52',
          color: '#fff',
          boxShadow: '0 -2px 14px rgba(0,0,0,0.18)',
          padding: '0.6rem 1rem',
        }}
      >
        <div
          className="tdmd-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', flexWrap: 'wrap' }}>
            <strong style={{ fontSize: '1.05rem', color: '#ffffff' }}>Get treated today for ${price}</strong>
            <span style={{ fontSize: '0.9rem', color: '#e8f2f4' }}>
              Same-day video visit &middot; prescription sent to your pharmacy
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a
              href="/book-online"
              className="tdmd-btn tdmd-btn-primary"
              style={{ whiteSpace: 'nowrap' }}
            >
              Book a Visit &rarr;
            </a>
            <button
              type="button"
              id="tdmd-book-bar-dismiss"
              aria-label="Dismiss booking bar"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#cfe6e9',
                fontSize: '1.3rem',
                lineHeight: 1,
                cursor: 'pointer',
                padding: '0 0.25rem',
              }}
            >
              &times;
            </button>
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(){var d=document.getElementById('tdmd-book-bar-dismiss');if(d){d.addEventListener('click',function(){var b=document.getElementById('tdmd-book-bar');if(b){b.style.display='none';}});}})();",
        }}
      />
    </>
  );
}
