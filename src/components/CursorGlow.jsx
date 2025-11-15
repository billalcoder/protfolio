import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    // 1️⃣ Detect Mobile (Any touch device)
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;

    // If mobile → do nothing
    if (isMobile) return;

    // 2️⃣ Desktop Only → Continue effect
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = 1;
    canvas.className = "cursor-glow";

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particleCount = 10;
    const particles = [];

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: mouse.x,
        y: mouse.y,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.05 + 0.02,
        offsetX: Math.random() * 200 - 100,
        offsetY: Math.random() * 200 - 100,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += (mouse.x + p.offsetX - p.x) * p.speed;
        p.y += (mouse.y + p.offsetY - p.y) * p.speed;

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 12
        );
        gradient.addColorStop(0, "rgba(0, 229, 255, 0.55)");
        gradient.addColorStop(1, "rgba(179, 0, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 10, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    const mouseListener = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", mouseListener);
    draw();

    return () => {
      window.removeEventListener("mousemove", mouseListener);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
}
