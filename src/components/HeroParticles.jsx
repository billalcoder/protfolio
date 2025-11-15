import { useEffect, useRef } from "react";

export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // ❌ Disable particles on mobile screens
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const cursorParticles = [];
    const rainParticles = [];

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    // Cursor particles
    for (let i = 0; i < 25; i++) {
      cursorParticles.push({
        x: mouse.x,
        y: mouse.y,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.08 + 0.03,
        offsetX: Math.random() * 150 - 75,
        offsetY: Math.random() * 150 - 75,
      });
    }

    // Rain particles
    for (let i = 0; i < 50; i++) {
      rainParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Rain particles
      rainParticles.forEach((p) => {
        p.y += p.speed;
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 12);
        g.addColorStop(0, "rgba(0, 229, 255, 0.25)");
        g.addColorStop(1, "rgba(179, 0, 255, 0)");
        ctx.fillStyle = g;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Cursor particles
      cursorParticles.forEach((p) => {
        p.x += (mouse.x + p.offsetX - p.x) * p.speed;
        p.y += (mouse.y + p.offsetY - p.y) * p.speed;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 8);
        g.addColorStop(0, "rgba(0, 229, 255, 0.55)");
        g.addColorStop(1, "rgba(179, 0, 255, 0)");
        ctx.fillStyle = g;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    const move = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", move);
    draw();

    return () => {
      canvas.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
