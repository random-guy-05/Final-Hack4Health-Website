import React, { useState } from 'react';
import { prizes, judges } from '../constants';
import { Prize } from '../types';
import Animated from './Animated';
import CountUp from './CountUp';

const PrizeModal: React.FC<{ isOpen: boolean, onClose: () => void, prizes: Prize[] }> = ({ isOpen, onClose, prizes }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0A0F1F]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="glow-card w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b border-blue-500/20 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white">Prize Pool</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-4xl">&times;</button>
        </div>
        <div className="p-8 space-y-8 overflow-y-auto">
          {prizes.map((prize, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10">
               <h4 className="text-xl font-bold text-white">{prize.category}</h4>
               {prize.division && <p className="text-md text-slate-200 mb-2">{prize.division}</p>}
               <p className="text-lg font-semibold mt-1"><span className="prize-value-highlight">{prize.value}</span></p>
               <p className="text-sm text-slate-300 mb-4">{prize.winners}</p>
               <ul className="space-y-2 text-slate-100 text-sm list-disc list-inside">
                  {prize.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
               </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [isPrizeModalOpen, setIsPrizeModalOpen] = useState(false);
  
  const featuredPrizes = prizes.filter(p =>
      (p.category === "First Place" && p.division === "Upper Division (18+)") ||
      (p.category === "First Place" && p.division === "Lower Division (13-18)") ||
      p.category === "Participant Prize"
  );
  
  const actionButtons = [
      { name: "REGISTER NOW", href: "https://forms.gle/bTinPfsdc36DhqLA8" },
      { name: "JOIN DISCORD", href: "https://discord.com/invite/SZhaZcNh4D" },
      { name: "GET DATASET", href: "https://drive.google.com/drive/folders/1jGfWOHuA3kSbOQ4y26TI_ogBtDetw1SW" },
  ]

  return (
    <section id="hackathons" className="pt-32 pb-48 relative overflow-hidden">
       <PrizeModal isOpen={isPrizeModalOpen} onClose={() => setIsPrizeModalOpen(false)} prizes={prizes} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Animated>
          <div className="glow-card p-8 md:p-12 ai-hackathon-card">
              
            <Animated>
                <div className="py-4">
                    <div className="text-center p-3 mb-10 border-2 border-blue-500/50 bg-blue-500/10 rounded-lg">
                        <p className="text-lg text-blue-300">
                            <span className="font-bold">Submission Deadline:</span> December 31, 2025 @ 2:00 PM PST
                        </p>
                    </div>
                    <h3 className="text-6xl md:text-7xl font-bold text-center mb-4 ai-hackathon-title">
                        AI 4 Alzheimer's
                    </h3>
                    <p className="text-xl text-center text-slate-100 max-w-4xl mx-auto leading-relaxed mb-12">
                        Our inaugural hackathon challenges you to leverage the power of artificial intelligence to build models for the early detection of Alzheimer’s disease.
                    </p>
                </div>
            </Animated>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
                {actionButtons.map((btn, index) => (
                    <Animated staggerIndex={index} key={btn.name}>
                        <a href={btn.href} target="_blank" rel="noopener noreferrer" className="action-btn block w-full text-xl font-bold py-5 px-8 rounded-lg">
                            {btn.name}
                        </a>
                    </Animated>
                ))}
            </div>

            <hr className="gradient-divider my-16" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1 text-center lg:text-left">
                <Animated>
                  <h4 className="section-title text-5xl font-bold mb-4">Prizes</h4>
                  <div className="total-prize-value text-7xl font-bold text-transparent bg-clip-text mb-4">
                    <CountUp end={184730} prefix="$" />
                  </div>
                  <p className="text-slate-100 mb-6">Total prize pool, including cash, software, and mentorship.</p>
                  <button onClick={() => setIsPrizeModalOpen(true)} className="text-blue-300 font-semibold hover:text-white transition-colors group">
                    View All Prizes <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
                  </button>
                </Animated>
              </div>
              <div className="lg:col-span-2 space-y-4">
                {featuredPrizes.map((prize, index) => (
                  <Animated staggerIndex={index} key={index}>
                     <div className="bg-white/5 p-5 rounded-lg border border-white/10 flex items-center justify-between">
                        <div>
                            <p className="font-bold text-lg text-white">{prize.category}</p>
                            {prize.division && <p className="text-sm text-slate-200">{prize.division}</p>}
                        </div>
                        <p className="font-bold text-xl"><span className="prize-value-highlight">{prize.value}</span></p>
                    </div>
                  </Animated>
                ))}
              </div>
            </div>

            <hr className="gradient-divider my-16" />

            <div className="text-center">
              <Animated>
                <h4 className="section-title text-5xl font-bold mb-12">Meet the Judges</h4>
              </Animated>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {judges.map((judge, index) => (
                  <Animated key={judge.name} staggerIndex={index}>
                    <div className="judge-card-container glow-card is-interactive h-40">
                      <div className="judge-card-front">
                        <h5 className="text-xl font-bold text-white text-center px-2">{judge.name}</h5>
                      </div>
                      <div className="judge-card-back">
                        <p className="text-lg font-semibold text-slate-100 text-center px-2">{judge.affiliation}</p>
                      </div>
                    </div>
                  </Animated>
                ))}
              </div>
            </div>

          </div>
        </Animated>
      </div>
    </section>
  );
};

export default Timeline;