import { useEffect, useRef } from 'react';

const DotField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let time = 0;
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;

      // Cap devicePixelRatio at 2 as specified
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left - width / 2;
      mouse.targetY = e.clientY - rect.top - height / 2;
    };

    const drawFrame = () => {
      if (!ctx || width === 0 || height === 0) return;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Curved ripple / contour rings centered offset slightly to the left (like in screenshot)
      const centerX = width * 0.35 + mouse.x * 0.15;
      const centerY = height * 0.5 + mouse.y * 0.15;

      const spacing = 14;
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        const x = i * spacing;
        for (let j = 0; j < rows; j++) {
          const y = j * spacing;

          const dx = x - centerX;
          const dy = y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Halftone wave formula creating concentric bands with noise undulation
          const wave = Math.sin(dist * 0.038 - time * 0.015);
          const secondaryWave = Math.cos((dx * 0.02) + (dy * 0.01) + time * 0.01);
          const combined = (wave + secondaryWave * 0.5) / 1.5;

          // Only render visible dots
          if (combined > -0.2) {
            const intensity = Math.max(0, Math.min(1, (combined + 0.2) / 1.2));
            const radius = 0.6 + intensity * 2.2;
            const alpha = Math.max(0.04, Math.min(0.85, intensity * intensity * 0.9));

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
            ctx.fill();
          }
        }
      }
    };

    const loop = () => {
      if (!isVisible) return;
      time += 1;
      drawFrame();
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    // IntersectionObserver to pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            cancelAnimationFrame(animationFrameId);
            if (!prefersReducedMotion) {
              animationFrameId = requestAnimationFrame(loop);
            } else {
              drawFrame();
            }
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    handleResize();
    drawFrame();
    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-dotfield-canvas"
      aria-hidden="true"
    />
  );
};

export default DotField;
