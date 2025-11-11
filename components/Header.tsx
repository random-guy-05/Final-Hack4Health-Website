import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-[#0A0F1F]/80 backdrop-blur-lg border-b border-blue-500/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={handleLinkClick} className="text-3xl font-bold text-white">
              Hack4Health
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-10">
            <a href="#about" onClick={handleLinkClick} className="text-slate-200 hover:text-white transition-colors text-lg relative group">
              About
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </a>
            <a href="#hackathons" onClick={handleLinkClick} className="text-slate-200 hover:text-white transition-colors text-lg relative group">
              Events
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </a>
            <a href="#judging" onClick={handleLinkClick} className="text-slate-200 hover:text-white transition-colors text-lg relative group">
              Judging
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </a>
            <a href="#tutorials" onClick={handleLinkClick} className="text-slate-200 hover:text-white transition-colors text-lg relative group">
              Resources
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </a>
            <a href="#sponsors" onClick={handleLinkClick} className="text-slate-200 hover:text-white transition-colors text-lg relative group">
              Partners
              <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </a>
            <a href="https://discord.com/invite/SZhaZcNh4D"
               target="_blank"
               rel="noopener noreferrer"
               className="glow-btn header-cta-btn text-lg py-2 px-6 rounded-lg"
            >
              Join Discord
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;