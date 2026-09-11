'use client';

// Hero background video for the Uninsured & Affordable Care page.
//
// Autoplays muted as a decorative loop (no controls, no audio), and pauses for
// visitors who prefer reduced motion. The poster is the first frame, served
// inline so LCP does not wait on the video to decode.

import { useEffect, useRef } from 'react';

export default function UninsuredVideoHero() {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      if (mq.matches) video.pause();
      else video.play().catch(() => {});
    };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <video
      ref={ref}
      className="uac-hero-video"
      src="/videos/hero-uti-story-a.mp4"
      poster="/videos/hero-uti-story-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}