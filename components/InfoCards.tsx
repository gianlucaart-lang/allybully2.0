
import React from 'react';

const InfoCards: React.FC = () => {
  const cards = [
    {
      title: "Perché accade?",
      description: "La cattiveria spesso è una maschera per l'insicurezza. Chi bullizza cerca un controllo che non ha nella propria vita.",
      color: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      title: "Essere Umani",
      description: "L'umanità non è data alla nascita, si sceglie. Significa scegliere l'empatia quando sarebbe più facile essere indifferenti.",
      color: "bg-purple-50 text-purple-700 border-purple-100"
    },
    {
      title: "Il tuo Valore",
      description: "Nessun giudizio esterno può definire chi sei. Sei un'opera in divenire, preziosa e unica.",
      color: "bg-green-50 text-green-700 border-green-100"
    }
  ];

  return (
    <section id="resources" className="py-20 px-6 bg-[#fbfbfd]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] border ${card.color} apple-transition hover:scale-[1.02]`}>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-lg leading-relaxed opacity-90">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
