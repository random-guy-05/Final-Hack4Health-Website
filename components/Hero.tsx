import React, { useState, useEffect } from 'react';
import Animated from './Animated';

const Hero: React.FC = () => {
  const fullTitle = "Innovate. Code. Cure.";
  const [title, setTitle] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    if (title.length < fullTitle.length) {
      const timeoutId = setTimeout(() => {
        setTitle(fullTitle.slice(0, title.length + 1));
      }, 100); // Typing speed
      return () => clearTimeout(timeoutId);
    } else {
      const doneTimeout = setTimeout(() => {
          setIsTypingDone(true);
      }, 500);
      return () => clearTimeout(doneTimeout);
    }
  }, [title]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className={`hero-title-streaks text-6xl md:text-8xl font-bold leading-tight mb-6 h-[1.2em] ${isTypingDone ? 'typing-done' : ''}`}>
            {title}
            {!isTypingDone && <span className="typing-cursor">|</span>}
        </h1>
        <Animated delay={400}>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Empowering youth to build innovative solutions that improve health and save lives.
            </p>
        </Animated>
        <Animated delay={600}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
                href="#hackathons"
                onClick={handleLinkClick}
                className="w-full sm:w-auto glow-btn px-10 py-4 text-lg rounded-lg"
            >
                Explore Events
            </a>
            <a
                href="https://discord.com/invite/SZhaZcNh4D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold py-4 px-10 text-lg transition-all transform hover:scale-105 rounded-lg"
            >
                Learn More
            </a>
            </div>
        </Animated>
      </div>
    </section>
  );
};

export default Hero;