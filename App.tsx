import React from 'react';
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
  return (
    <div className="bg-[#0A0F1F] text-white/90 font-sans">
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
  );
};

export default App;