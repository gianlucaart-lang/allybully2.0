
import React from 'react';

const SerenityGallery: React.FC = () => {
  const visuals = [
    {
      url: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800",
      title: "Respiro di Primavera",
      description: "La bellezza nei piccoli petali che danzano nella luce.",
      category: "Fiori"
    },
    {
      url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
      title: "Amico Fedele",
      description: "Un cucciolo per ricordarti la gioia delle piccole cose.",
      category: "Cuccioli"
    },
    {
      url: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800",
      title: "Gioia Pura",
      description: "Uno sguardo che trasmette pace e accoglienza.",
      category: "Cuccioli"
    },
    {
      url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800",
      title: "Luce e Speranza",
      description: "Fiorire ogni giorno, con calma e gentilezza.",
      category: "Fiori"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#fbfbfd]">
      <style>{`
        @keyframes breathing {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .animate-breathing {
          animation: breathing 20s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-widest mb-4">
            Visual Zen
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Fiori e Cuccioli per l'Anima.</h2>
          <p className="text-[#86868b] text-xl max-w-2xl mx-auto">
            Abbiamo scelto queste immagini per darti un momento di pace immediata. Osserva il loro movimento lento e respira con loro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visuals.map((v, i) => (
            <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white apple-transition hover:-translate-y-2">
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={v.url} 
                  alt={v.title}
                  className="w-full h-full object-cover animate-breathing"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-white/70 text-[10px] uppercase tracking-widest font-bold mb-2">{v.category}</span>
                <h4 className="text-white text-xl font-bold mb-1">{v.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[#86868b] italic text-sm">"La bellezza è una forma di cura silenziosa."</p>
        </div>
      </div>
    </section>
  );
};

export default SerenityGallery;
