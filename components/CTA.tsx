import React from 'react';
import Animated from './Animated';

const CTA: React.FC = () => {
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
        <section id="cta" className="cta-hub-section py-32">
            <div className="cta-hub-glow-container"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Animated>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="section-title text-5xl md:text-6xl font-bold mb-4">Shape the Future of Health</h2>
                        <p className="text-lg text-slate-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Partner with us to empower the next generation of health-tech pioneers. Your support fuels innovation and helps bring life-changing solutions to reality.
                        </p>
                        <a
                            href="#sponsors"
                            onClick={handleLinkClick}
                            className="cta-btn relative inline-flex items-center justify-center px-12 py-4 overflow-hidden text-lg text-white group rounded-lg"
                        >
                            Become A Sponsor
                        </a>
                    </div>
                </Animated>
            </div>
        </section>
    );
};

export default CTA;