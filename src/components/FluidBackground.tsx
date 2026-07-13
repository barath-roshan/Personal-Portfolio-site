import { useEffect, useRef } from 'react';

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2 };
    const lastMouse = { x: width / 2, y: height / 2 };

    const spinners = [
      { angle: 0, radius: 20, speed: 0.15, size: 3 },
      { angle: Math.PI, radius: 20, speed: 0.15, size: 3 },
      { angle: Math.PI / 2, radius: 35, speed: -0.1, size: 2 },
    ];

    const particles: {
      x: number; y: number; vx: number; vy: number; life: number; size: number;
    }[] = [];

    let stars = Array.from({ length: 400 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.2,
      z: Math.random() * 0.8 + 0.2,
      alpha: Math.random() * 0.6 + 0.1,
    }));

    // Scroll progress: 0 = hero top, 1 = hero fully scrolled past
    let scrollProgress = 0;

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const raw = (window.scrollY - heroHeight * 0.3) / (heroHeight * 0.45);
      scrollProgress = Math.min(Math.max(raw, 0), 1);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars = Array.from({ length: 400 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.2,
        z: Math.random() * 0.8 + 0.2,
        alpha: Math.random() * 0.6 + 0.1,
      }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Helper: lerp a channel between two values
    const lerp = (a: number, b: number, t: number) =>
      Math.round(a + (b - a) * t);

    let animationId: number;
    let time = 0;
    let lastExecuted = Date.now();

    const animate = () => {
      if (document.hidden) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      const now = Date.now();
      if (now - lastExecuted < 15) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastExecuted = now;
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      const p = scrollProgress; // 0 = hero (white), 1 = post-hero (dark)

      // ─── Background color: #ffffff → #212121 ───
      const bgR = lerp(255, 13, p);
      const bgG = lerp(255, 17, p);
      const bgB = lerp(255, 23, p);
      ctx.fillStyle = `rgba(${bgR}, ${bgG}, ${bgB}, 0.30)`;
      ctx.fillRect(0, 0, width, height);

      // ─── Particle/star/comet color: black (0,0,0) → #1e7e34 (30,126,52) ───
      const cR = lerp(0, 30, p);
      const cG = lerp(0, 126, p);
      const cB = lerp(0, 52, p);

      // Parallax
      const parallaxX = (mouse.x - width / 2) * 0.05;
      const parallaxY = (mouse.y - height / 2) * 0.05;

      // Stars (dark dots on white in hero, green dots on dark after)
      stars.forEach(star => {
        let drawX = (star.x - parallaxX * star.z) % width;
        let drawY = (star.y - parallaxY * star.z) % height;
        if (drawX < 0) drawX += width;
        if (drawY < 0) drawY += height;

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
        const twinkle = Math.sin(time * 5 + star.x) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(${cR}, ${cG}, ${cB}, ${star.alpha * twinkle})`;
        ctx.fill();
      });

      // Spinners around cursor
      spinners.forEach(spinner => {
        spinner.angle += spinner.speed;
        const sx = mouse.x + Math.cos(spinner.angle) * spinner.radius;
        const sy = mouse.y + Math.sin(spinner.angle) * spinner.radius;
        ctx.beginPath();
        ctx.arc(sx, sy, spinner.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(176, 255, 68, 0.85)`;  // always #b0ff44
        ctx.fill();
      });



      // Emit particles on mouse move
      const speed = Math.sqrt(
        Math.pow(mouse.x - lastMouse.x, 2) + Math.pow(mouse.y - lastMouse.y, 2)
      );
      const count = Math.min(speed * 0.5, 6) + 1;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 8,
          y: mouse.y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          life: 1.0,
          size: Math.random() * 2 + 1,
        });
      }

      lastMouse.x += (mouse.x - lastMouse.x) * 0.15;
      lastMouse.y += (mouse.y - lastMouse.y) * 0.15;

      for (let i = particles.length - 1; i >= 0; i--) {
        const pt = particles[i];
        pt.x += pt.vx - parallaxX * 0.05;
        pt.y += pt.vy - parallaxY * 0.05;
        pt.life -= 0.015;
        if (pt.life <= 0) { particles.splice(i, 1); continue; }
        // Particles: lime (#b0ff44) in hero, green (#1e7e34) in dark — never black
        const pR = Math.round(176 + (30 - 176) * scrollProgress);
        const pG = Math.round(255 + (126 - 255) * scrollProgress);
        const pB = Math.round(68  + (52  - 68)  * scrollProgress);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size * pt.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pR}, ${pG}, ${pB}, ${pt.life * 0.7})`;
        ctx.fill();
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    />
  );
}