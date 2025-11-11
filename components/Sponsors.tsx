import React from 'react';
import { sponsors } from '../constants';
import { Sponsor } from '../types';
import Animated from './Animated';

const SponsorCard: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => {
    const tierStyles = {
        Platinum: { height: 'h-32', text: 'text-2xl' },
        Gold:     { height: 'h-28', text: 'text-xl' },
        Silver:   { height: 'h-24', text: 'text-lg' }
    };
    const styles = tierStyles[sponsor.tier];

    return (
        <div className={`glow-card is-interactive p-6 rounded-lg flex items-center justify-center text-center group ${styles.height}`}>
            <h4 className={`${styles.text} font-bold text-slate-100 group-hover:text-white transition-colors`}>
                {sponsor.name}
            </h4>
        </div>
    );
}

const Sponsors: React.FC = () => {
  const tiers: Sponsor['tier'][] = ['Platinum', 'Gold', 'Silver'];

  return (
    <section id="sponsors" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animated>
          <div className="text-center mb-16">
            <h2 className="section-title text-5xl md:text-6xl font-bold">Our Partners</h2>
            <p className="mt-4 text-xl text-slate-100">Powering the next generation of health tech innovators.</p>
          </div>
        </Animated>
        <div className="max-w-5xl mx-auto space-y-16">
            {tiers.map((tier, tierIndex) => {
                const tierSponsors = sponsors.filter(s => s.tier === tier);
                if (tierSponsors.length === 0) return null;

                const gridClasses = {
                    Platinum: 'grid-cols-1 max-w-sm mx-auto',
                    Gold: 'grid-cols-2 md:grid-cols-3',
                    Silver: 'grid-cols-2'
                };
                
                return (
                    <Animated key={tier} staggerIndex={tierIndex}>
                        <div>
                            <h3 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-400 mb-8 hero-title-shimmer">{tier} Tier</h3>
                            <div className={`grid ${gridClasses[tier]} gap-8`}>
                                {tierSponsors.map((sponsor, index) => (
                                <Animated key={index}>
                                    <SponsorCard sponsor={sponsor} />
                                </Animated>
                                ))}
                            </div>
                        </div>
                    </Animated>
                )
            })}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;