import React, { useEffect, useRef, useState } from "react";

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  color: string;

  constructor(x: number, y: number, colors: string[]) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 4 + 1.5; 
    this.speedX = (Math.random() * 2 - 1) * 1.5;
    this.speedY = (Math.random() * 2 - 1) * 1.5 - 0.5; // Hơi bay lên trên một chút
    this.maxLife = Math.random() * 40 + 20; // Sống được tầm 20-60 frames
    this.life = this.maxLife;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
    this.size = Math.max(0, this.size - 0.05); // Nhỏ dần
  }

  draw(ctx: CanvasRenderingContext2D) {
    const opacity = this.life / this.maxLife;
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const requestRef = useRef<number>();
  const mouse = useRef({ x: -100, y: -100 });
  const previousMouse = useRef({ x: -100, y: -100 });
  const particles = useRef<Particle[]>([]);
  const colorsRef = useRef<string[]>(['#9333ea', '#ec4899', '#a855f7', '#3b82f6']);

  useEffect(() => {
    // Không chạy trên mobile
    if (window.matchMedia("(max-width: 768px)").matches) return;
    
    setIsVisible(true);

    // Lấy màu từ CSS variables nếu có
    setTimeout(() => {
      const styles = getComputedStyle(document.documentElement);
      const primary = styles.getPropertyValue('--color-primary').trim();
      const secondary = styles.getPropertyValue('--color-secondary').trim();
      if (primary && secondary) {
        colorsRef.current = [primary, secondary, '#c084fc', '#f472b6'];
      }
    }, 100);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Update dot ngay lập tức
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Tạo hạt bụi mới mỗi khi chuột di chuyển
      if (Math.random() > 0.3) { // 70% cơ hội tạo hạt mỗi pixel di chuyển
        particles.current.push(new Particle(e.clientX, e.clientY, colorsRef.current));
      }
      if (Math.random() > 0.5) { // Tạo thêm hạt cho dày
        particles.current.push(new Particle(e.clientX, e.clientY, colorsRef.current));
      }
    };

    const animate = () => {
      // 1. Cập nhật vòng sáng (Ring) chạy theo sau chuột
      previousMouse.current.x += (mouse.current.x - previousMouse.current.x) * 0.15;
      previousMouse.current.y += (mouse.current.y - previousMouse.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${previousMouse.current.x}px, ${previousMouse.current.y}px, 0) translate(-50%, -50%)`;
      }

      // 2. Cập nhật và vẽ các hạt bụi (Canvas)
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (canvas && ctx) {
        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
           canvas.width = window.innerWidth;
           canvas.height = window.innerHeight;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.current.length; i++) {
          particles.current[i].update();
          particles.current[i].draw(ctx);
        }
        // Xóa các hạt đã hết "tuổi thọ" hoặc quá nhỏ
        particles.current = particles.current.filter(p => p.life > 0 && p.size > 0.1);
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        {/* Canvas vẽ hạt bụi sáng */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
        />
        
        <div
          ref={dotRef}
          className={`absolute top-0 left-0 w-2 h-2 rounded-full bg-[var(--color-primary)] transition-opacity duration-200 pointer-events-none shadow-[0_0_10px_var(--color-primary)] ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
          style={{ willChange: "transform" }}
        />
        
        <div
          ref={ringRef}
          className={`absolute top-0 left-0 rounded-full border border-[var(--color-secondary)] transition-all duration-300 ease-out pointer-events-none shadow-[0_0_15px_var(--color-secondary)] ${
            isHovering
              ? "w-16 h-16 bg-[var(--color-secondary)]/20 backdrop-blur-sm scale-110"
              : "w-10 h-10 bg-transparent scale-100"
          }`}
          style={{ willChange: "transform" }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
