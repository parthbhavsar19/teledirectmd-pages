'use client';
import { useEffect, useRef, useState } from 'react';

/* Two rows of illustrated condition tiles that drift in opposite directions.
   Rows ease to a stop under a pointer, finger or keyboard focus, can be
   dragged/swiped by hand, and have a pause button (WCAG 2.2.2). With
   prefers-reduced-motion the rows stay still and scroll sideways by hand. */

const DRIFT_PX_PER_SEC = 42;
const RESUME_DELAY_MS = 1200;

function Tile({ item, inert }) {
  return (
    <a
      href={item.href}
      className="hp-drift-tile"
      tabIndex={inert ? -1 : undefined}
      draggable={false}
    >
      <img
        src={`/images/wwt/${item.img}.webp`}
        alt=""
        width="880"
        height="491"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <span className="hp-drift-name">{item.name}</span>
    </a>
  );
}

function Row({ items, reverse }) {
  return (
    <div className="hp-drift-row" data-dir={reverse ? -1 : 1}>
      <div className="hp-drift-track">
        <div className="hp-drift-set">
          {items.map((item) => <Tile key={item.name} item={item} />)}
        </div>
        <div className="hp-drift-set" aria-hidden="true">
          {items.map((item) => <Tile key={item.name} item={item} inert />)}
        </div>
      </div>
    </div>
  );
}

export default function ConditionDriftRows({ items }) {
  const rootRef = useRef(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  const rowA = items.filter((_, i) => i % 2 === 0);
  const rowB = items.filter((_, i) => i % 2 === 1);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const cleanups = [];
    const rows = Array.from(root.querySelectorAll('.hp-drift-row')).map((el) => ({
      el,
      track: el.querySelector('.hp-drift-track'),
      set: el.querySelector('.hp-drift-set'),
      dir: Number(el.dataset.dir),
      off: Number(el.dataset.dir) === -1 ? 400 : 0,
      v: 0,
      hold: false,
      drag: false,
    }));

    const listen = (target, type, fn, opts) => {
      target.addEventListener(type, fn, opts);
      cleanups.push(() => target.removeEventListener(type, fn, opts));
    };

    rows.forEach((r) => {
      let resumeTimer;
      const hold = (on) => {
        clearTimeout(resumeTimer);
        if (on) r.hold = true;
        else resumeTimer = setTimeout(() => { r.hold = false; }, RESUME_DELAY_MS);
      };
      cleanups.push(() => clearTimeout(resumeTimer));

      listen(r.el, 'pointerenter', (e) => { if (e.pointerType === 'mouse') hold(true); });
      listen(r.el, 'pointerleave', (e) => { if (e.pointerType === 'mouse' && !r.drag) hold(false); });
      listen(r.el, 'focusin', () => hold(true));
      listen(r.el, 'focusout', () => hold(false));
      listen(r.el, 'dragstart', (e) => e.preventDefault());
      listen(r.el, 'pointerdown', (e) => {
        if (e.button > 0) return;
        hold(true);
        const id = e.pointerId;
        const startX = e.clientX;
        const startY = e.clientY;
        const startOff = r.off;
        let moved = false;

        const move = (ev) => {
          if (ev.pointerId !== id) return;
          const dx = ev.clientX - startX;
          if (!moved && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(ev.clientY - startY)) {
            moved = true;
            r.drag = true;
            r.el.classList.add('hp-drift-dragging');
          }
          if (moved) { r.off = startOff - dx; r.v = 0; }
        };
        const up = (ev) => {
          if (ev.pointerId !== id) return;
          window.removeEventListener('pointermove', move);
          window.removeEventListener('pointerup', up);
          window.removeEventListener('pointercancel', up);
          r.drag = false;
          if (moved) {
            // Swallow the click that ends a drag so it doesn't open a tile.
            const swallow = (ce) => { ce.preventDefault(); ce.stopPropagation(); };
            r.el.addEventListener('click', swallow, { capture: true, once: true });
            setTimeout(() => {
              r.el.removeEventListener('click', swallow, { capture: true });
              r.el.classList.remove('hp-drift-dragging');
            }, 0);
          }
          if (ev.pointerType !== 'mouse' || !r.el.matches(':hover')) hold(false);
        };
        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', up);
        window.addEventListener('pointercancel', up);
      });
    });

    // Only animate while the section is on screen.
    let visible = true;
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(root);
    cleanups.push(() => io.disconnect());

    let raf;
    let last = performance.now();
    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (visible) {
        rows.forEach((r) => {
          const gap = parseFloat(getComputedStyle(r.track).columnGap) || 16;
          const half = r.set.offsetWidth + gap;
          if (!half) return;
          if (!r.drag) {
            const target = r.hold || pausedRef.current ? 0 : DRIFT_PX_PER_SEC * r.dir;
            r.v += (target - r.v) * Math.min(1, dt * 3);
            r.off += r.v * dt;
          }
          const x = ((r.off % half) + half) % half;
          r.track.style.transform = `translate3d(${-x}px,0,0)`;
        });
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    cleanups.push(() => cancelAnimationFrame(raf));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  const togglePause = () => {
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
  };

  return (
    <div className="hp-drift" ref={rootRef}>
      <Row items={rowA} />
      <Row items={rowB} reverse />
      <div className="hp-container hp-drift-controls">
        <button
          type="button"
          className="hp-drift-pause"
          onClick={togglePause}
          aria-label={paused ? 'Play moving conditions' : 'Pause moving conditions'}
        >
          {paused ? (
            <svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9.5-5.5z" /></svg>
          ) : (
            <svg viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="1" width="3.5" height="12" rx="1" /><rect x="8.5" y="1" width="3.5" height="12" rx="1" /></svg>
          )}
        </button>
      </div>
    </div>
  );
}
