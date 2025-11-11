import React from 'react';
import { impactStats } from '../constants';
import Animated from './Animated';
import CountUp from './CountUp';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animated>
          <div className="text-center mb-16">
            <h2 className="section-title text-5xl md:text-6xl font-bold">Our Impact</h2>
            <p className="mt-4 text-xl text-slate-100">Driving innovation in health through code.</p>
          </div>
        </Animated>
        <Animated>
            <div className="glow-card is-interactive p-10 md:p-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 text-center">
                {impactStats.map((stat, index) => (
                    <div key={index}>
                        <div className="text-6xl md:text-8xl font-bold text-white mb-2">
                            <CountUp end={parseInt(stat.value)} suffix={stat.label !== 'Participants' ? '+' : ''} />
                        </div>
                        <p className="text-lg text-white uppercase tracking-widest">{stat.label}</p>
                    </div>
                ))}
                </div>
            </div>
        </Animated>
      </div>
    </section>
  );
};

export default About;