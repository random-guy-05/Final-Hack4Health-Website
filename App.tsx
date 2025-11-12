import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import JudgingCriteria from './components/JudgingCriteria';
import Tutorials from './components/Tutorials';
import Sponsors from './components/Sponsors';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim();
    const secondaryColorRgb = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary-rgb').trim();

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    };
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(x: number, y: number, size: number, speedX: number, speedY: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        this.x += this.speedX;
        this.y += this.speedY;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) { // Mouse repulsion radius
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (120 - distance) / 120;
            this.x -= forceDirectionX * force * 2;
            this.y -= forceDirectionY * force * 2;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
        particles = [];
        const numberOfParticles = (canvas.width * canvas.height) / 15000;
        for (let i = 0; i < numberOfParticles; i++) {
            const size = Math.random() * 1.5 + 1;
            const x = Math.random() * (canvas.width - size * 2) + size;
            const y = Math.random() * (canvas.height - size * 2) + size;
            const speedX = (Math.random() * 0.4) - 0.2;
            const speedY = (Math.random() * 0.4) - 0.2;
            const color = Math.random() > 0.5 ? primaryColor : secondaryColor;
            particles.push(new Particle(x, y, size, speedX, speedY, color));
        }
    };

    const connectParticles = () => {
        if (!ctx) return;
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) { // Connection distance
                    opacityValue = 1 - (distance / 120);
                    ctx.strokeStyle = `rgba(${secondaryColorRgb}, ${opacityValue})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const particle of particles) {
            particle.update();
            particle.draw();
        }
        connectParticles();
        animationFrameId = requestAnimationFrame(animate);
    };
    
    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    };
    
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseleave', handleMouseLeave);
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    };

  }, []);

  return (
    <div className="bg-[#0A0F1F] text-white/90 font-sans">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Timeline />
          <JudgingCriteria />
          <Tutorials />
          <Sponsors />
          <CTA />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
};

export default App;
