import { useRef, useEffect, useCallback } from 'react';

/**
 * ClickSpark — fixed-viewport click effect overlay.
 * Renders a fullscreen, pointer-events:none canvas. Intended to be
 * mounted ONCE, near the root, as a sibling of your content.
 *
 * Bug fixes vs. original:
 * - Was sized to its parent (collapsed when parent had no explicit
 *   height) and stretched across the entire document on long pages,
 *   wasting GPU/RAM. Now it's fixed to viewport dimensions.
 * - The original swallowed clicks via an interactive wrapper; this
 *   version listens on window so the overlay never blocks UI.
 * - Animation loop is stopped when no sparks are active.
 */
const ClickSpark = ({
  sparkColor = '#fff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1.0,
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const rafRef = useRef(null);

  const easeFunc = useCallback(
    (t) => {
      switch (easing) {
        case 'linear': return t;
        case 'ease-in': return t * t;
        case 'ease-in-out': return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default: return t * (2 - t);
      }
    },
    [easing]
  );

  // Resize canvas to the viewport (DPR-aware).
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Draw loop — only runs while sparks exist.
  const tick = useCallback(
    (timestamp) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased = easeFunc(progress);
        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const cos = Math.cos(spark.angle);
        const sin = Math.sin(spark.angle);
        const x1 = spark.x + distance * cos;
        const y1 = spark.y + distance * sin;
        const x2 = spark.x + (distance + lineLength) * cos;
        const y2 = spark.y + (distance + lineLength) * sin;

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        return true;
      });

      if (sparksRef.current.length > 0) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    },
    [duration, easeFunc, extraScale, sparkColor, sparkRadius, sparkSize]
  );

  // Listen for clicks on the window (so we never block UI).
  useEffect(() => {
    const handleClick = (e) => {
      const now = performance.now();
      for (let i = 0; i < sparkCount; i++) {
        sparksRef.current.push({
          x: e.clientX,
          y: e.clientY,
          angle: (2 * Math.PI * i) / sparkCount,
          startTime: now,
        });
      }
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [sparkCount, tick]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default ClickSpark;
