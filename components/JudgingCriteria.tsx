import React from 'react';
import Animated from './Animated';
import { judgingCriteria } from '../constants';

const JudgingCriteria: React.FC = () => {
  return (
    <section id="judging" className="py-24 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animated>
          <div className="text-center mb-16">
            <h2 className="section-title section-title--cool text-5xl md:text-6xl font-bold">Judging Criteria</h2>
            <p className="mt-4 text-xl text-slate-100">How projects will be evaluated.</p>
          </div>
        </Animated>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {judgingCriteria.map((criterion, index) => (
                 <Animated key={criterion.title} staggerIndex={index}>
                    <div className="glow-card is-interactive glow-card--variant-cool p-8 h-full">
                        <h3 className="text-3xl font-bold text-white mb-4">{criterion.title}</h3>
                        <p className="text-slate-100 leading-relaxed">{criterion.description}</p>
                    </div>
                </Animated>
            ))}
        </div>
      </div>
    </section>
  );
};

export default JudgingCriteria;