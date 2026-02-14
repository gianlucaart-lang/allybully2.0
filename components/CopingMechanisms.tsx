
import React from 'react';

const CopingMechanisms: React.FC = () => {
  const techniques = [
    {
      title: "Respirazione 4-4-4",
      icon: "🌬️",
      steps: ["Inspira (4s)", "Trattieni (4s)", "Espira (4s)"],
      description: "Spegne immediatamente la risposta di allarme del corpo."
    },
    {
      title: "Il Cerchio di Controllo",
      icon: "🎯",
      steps: ["Cosa controlli?", "Cosa non controlli?", "Lascia andare il resto"],
      description: "Non puoi controllare i bulli, ma puoi controllare la tua risposta."
    },
    {
      title: "Grounding 5-4-3",
      icon: "🌱",
      steps: ["5 cose che vedi", "4 cose che senti", "3 cose che tocchi"],
      description: "Ti riporta nel qui e ora quando l'ansia prende il sopravvento."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Strumenti per la tua mente.</h2>
          <p className="text-[#86868b] text-xl max-w-2xl mx-auto">Piccole azioni che creano una grande protezione emotiva.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {techniques.map((tech, idx) => (
            <div key={idx} className="group p-8 rounded-[3rem] bg-[#f5f5f7] hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-2xl apple-transition">
              <div className="text-5xl mb-8 group-hover:scale-110 apple-transition inline-block">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
              <p className="text-[#86868b] mb-8 leading-relaxed">{tech.description}</p>
              <div className="space-y-3">
                {tech.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center">{i+1}</span>
                    <span className="text-sm font-medium text-[#1d1d1f]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CopingMechanisms;
