// Reusable vertical (9:16) explainer video player for TeleDirectMD pages.
//
// Drop-in usage:
//   import VisitVideo from '../components/VisitVideo';
//   <VisitVideo
//     src="/videos/visit-ready-explainer.mp4"
//     poster="/videos/visit-ready-explainer-poster.jpg"
//     eyebrow="Watch first"
//     heading="A quick look at what to expect"
//   />
//
// Every prop except `src` is optional. Colors default to the TeleDirectMD
// brand palette but can be overridden per page via the `colors` prop.

const DEFAULT_COLORS = {
  navyDark: '#0D384D',
  coral: '#DC643C',
  surface: '#FFFFFF',
  border: '#E5E2DA',
};

export default function VisitVideo({
  src,
  poster,
  webmSrc,
  eyebrow = 'Watch first',
  heading = 'A quick look at what to expect',
  maxWidth = 340,
  colors = {},
}) {
  const c = { ...DEFAULT_COLORS, ...colors };

  const styles = {
    card: {
      background: c.surface,
      border: `1px solid ${c.border}`,
      borderRadius: 16,
      padding: 24,
      textAlign: 'center',
      boxShadow:
        '0 1px 3px rgba(13,56,77,0.04), 0 4px 16px rgba(13,56,77,0.06)',
    },
    eyebrow: {
      fontFamily: '"Space Mono", monospace',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 11,
      fontWeight: 700,
      color: c.coral,
      marginBottom: 6,
    },
    heading: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: c.navyDark,
      marginBottom: 18,
    },
    frame: {
      position: 'relative',
      width: '100%',
      maxWidth,
      margin: '0 auto',
      aspectRatio: '9 / 16',
      borderRadius: 16,
      overflow: 'hidden',
      background: '#000',
      boxShadow: '0 10px 30px rgba(13,56,77,0.18)',
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
  };

  return (
    <div style={styles.card}>
      {eyebrow ? <div style={styles.eyebrow}>{eyebrow}</div> : null}
      {heading ? <h2 style={styles.heading}>{heading}</h2> : null}
      <div style={styles.frame}>
        <video
          style={styles.video}
          controls
          playsInline
          preload="metadata"
          poster={poster}
        >
          {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
          <source src={src} type="video/mp4" />
          Your browser does not support embedded video. You can{' '}
          <a href={src}>download the video</a> instead.
        </video>
      </div>
    </div>
  );
}
