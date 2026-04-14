'use client';

import { useEffect } from 'react';

export default function BookOnlinePage() {
  useEffect(() => {
    window.location.replace('https://teledirectmd.as.me/');
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', sans-serif", color: '#003E52' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '16px' }}>Redirecting to booking...</p>
        <p style={{ fontSize: '0.9rem', color: '#5A6B75' }}>
          If you are not redirected, <a href="https://teledirectmd.as.me/" style={{ color: '#006B73', textDecoration: 'underline' }}>click here</a>.
        </p>
      </div>
    </div>
  );
}
