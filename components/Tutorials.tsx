import React from 'react';
import { tutorials } from '../constants';
import Animated from './Animated';

const Tutorials: React.FC = () => {
  return (
    <section id="tutorials" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animated>
          <div className="text-center mb-16">
            <h2 className="section-title section-title--warm text-5xl md:text-6xl font-bold">Learn to Hack</h2>
            <p className="mt-4 text-xl text-slate-100">Resources to get you started.</p>
          </div>
        </Animated>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Animated key={index} staggerIndex={index}>
              <div className="glow-card is-interactive glow-card--variant-warm p-8 flex flex-col h-full">
                <h3 className="text-3xl font-bold text-white mb-4">{tutorial.title}</h3>
                <p className="text-slate-100 mb-6 flex-grow leading-relaxed">{tutorial.description}</p>
                <div className="flex flex-col items-start space-y-2">
                  {tutorial.links.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors font-semibold group">
                      {link.name} <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
                    </a>
                  ))}
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;