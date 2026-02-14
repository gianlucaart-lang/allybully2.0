
import React from 'react';

const SafetyPanel: React.FC = () => {
  return (
    <section id="safety" className="py-20 px-6 bg-[#1d1d1f] text-white rounded-t-[3rem]">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="inline-block p-4 rounded-full bg-red-500/20 text-red-400 mb-6 font-semibold tracking-wide text-sm border border-red-500/30">
          AIUTO IMMEDIATO
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-10">La tua sicurezza è la priorità.</h2>
        <p className="text-[#86868b] text-xl mb-12 max-w-2xl mx-auto">
          Se senti di essere in pericolo immediato o hai pensieri che ti spaventano, non aspettare. Parla con un esperto ora.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left">
            <h4 className="text-xl font-bold mb-2">Telefono Azzurro</h4>
            <p className="text-[#86868b] mb-4">Servizio emergenza infanzia</p>
            <a href="tel:114" className="text-2xl font-bold text-[#0066cc]">114</a>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left">
            <h4 className="text-xl font-bold mb-2">Emergenza</h4>
            <p className="text-[#86868b] mb-4">Polizia di Stato / Soccorso</p>
            <a href="tel:112" className="text-2xl font-bold text-[#0066cc]">112</a>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left">
            <h4 className="text-xl font-bold mb-2">YouPol</h4>
            <p className="text-[#86868b] mb-4">App della Polizia per segnalare bullismo</p>
            <span className="text-sm font-semibold text-white/50">Disponibile su App Store & Play Store</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyPanel;
