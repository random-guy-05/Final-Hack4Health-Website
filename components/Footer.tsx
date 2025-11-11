import React from 'react';

const Footer: React.FC = () => {
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
    <footer id="footer" className="bg-[#060913] border-t border-blue-500/10 pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
                 <a href="#" onClick={handleLinkClick} className="text-3xl font-bold text-white">
                    Hack4Health
                 </a>
                 <p className="text-slate-300 mt-4">Innovate. Code. Cure.</p>
                 <p className="text-sm text-slate-400 mt-2">hack4health.org@gmail.com</p>
                 <p className="text-sm text-slate-400">Los Gatos, CA 95030</p>
            </div>
            <div>
                <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Explore</h4>
                <ul className="space-y-2">
                    <li><a href="#about" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition">About</a></li>
                    <li><a href="#hackathons" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition">Hackathons</a></li>
                    <li><a href="#judging" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition">Judging</a></li>
                    <li><a href="#sponsors" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition">Sponsors</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Resources</h4>
                <ul className="space-y-2">
                    <li><a href="#tutorials" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition">Tutorials</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Subscribe</h4>
                 <p className="text-slate-300 mb-4">Get the latest news and updates.</p>
                <form>
                    <div className="flex">
                        <input type="email" placeholder="your@email.com" className="w-full bg-white/5 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10 rounded-l-md" />
                        <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold p-2.5 rounded-r-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className="border-t border-blue-500/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 Hack4Health. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
                <a href="https://discord.com/invite/SZhaZcNh4D" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.283 3.003s-1.401-1.79-3.323-1.79a11.332 11.332 0 00-2.133.223c-2.454 1.03-4.52 3.42-4.52 3.42s-1.25-1.57-3.44-1.57c-2.85 0-3.61 2.38-3.61 2.38s-2.062 5.03-3.953 10.38c1.385 1.15 3.03 2.155 4.965 2.155 1.54 0 2.87-.585 3.95-1.57.975 1.03 2.395 1.83 4.22 1.83 2.155 0 3.79-.81 4.965-2.155.195-.35.37-1.12.37-1.12s-1.85-5.045-2.49-6.79c.73-.55 1.055-1.42 1.055-1.42s.785-1.15 0-2.38c-.35-.55-.785-1.03-1.255-1.27zM8.89 14.868c-.85 0-1.54-.83-1.54-1.85s.69-1.85 1.54-1.85c.85 0 1.54.83 1.54 1.85s-.69 1.85-1.54 1.85zm6.22 0c-.85 0-1.54-.83-1.54-1.85s.69-1.85 1.54-1.85c.85 0 1.54.83 1.54 1.85s-.689 1.85-1.54 1.85z" /></svg>
                </a>
                 <a href="https://github.com/hack4health" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.286 3.057 7.906 7.135 9.094.545.1.732-.236.732-.524 0-.258-.01-1.182-.015-2.14-2.95.64-3.57-1.42-3.57-1.42-.495-1.26-1.208-1.59-1.208-1.59-1.01-.68.075-.665.075-.665 1.115.08 1.7.14 1.7.14 1.003 1.72 2.63 1.22 3.27.93.102-.72.39-1.22.713-1.5-2.49-.28-5.1-1.24-5.1-5.55 0-1.22.435-2.22 1.15-3.01-.115-.28-.5-1.42.11-2.97 0 0 .94-.3 3.08 1.15.89-.25 1.85-.37 2.8-.37.95 0 1.91.12 2.8.37 2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.225 2.69.11 2.97.715.79 1.15 1.79 1.15 3.01 0 4.32-2.61 5.27-5.1 5.55.4.34.75 1.02.75 2.06 0 1.5-.015 2.9-.015 3.3 0 .29.185.62.735.52C18.94 19.902 22 16.286 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                </a>
                 <a href="https://x.com/hack4health" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;