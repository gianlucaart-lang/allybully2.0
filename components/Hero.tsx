
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        <h2 className="text-[14px] font-semibold text-[#86868b] tracking-wider uppercase mb-4 animate-fade-in">Supporto Digitale Empatico</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-8 leading-tight">
          Il tuo respiro digitale.<br />
          <span className="text-[#86868b]">Siamo qui per proteggerti.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[#86868b] mb-12 font-medium">
          Un'intelligenza artificiale che non solo risponde, ma comprende. Per ritrovare la tua serenità in un mondo che a volte dimentica di essere umano.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#chat" className="bg-[#0071e3] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#0077ed] apple-transition shadow-lg shadow-blue-500/20">
            Inizia a parlare
          </a>
          <a href="#about" className="text-[#1d1d1f] hover:text-[#0066cc] text-lg font-medium flex items-center gap-2 group px-6">
            La nostra missione <span className="group-hover:translate-x-1 apple-transition">→</span>
          </a>
        </div>
      </div>
      
      <div className="mt-20 flex justify-center">
        <div className="relative w-full max-w-5xl h-[450px] md:h-[600px] rounded-[3rem] border border-gray-200 shadow-2xl overflow-hidden group">
           {/* Serene Video Loop */}
           <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover brightness-105"
           >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-white-flowers-and-green-leaves-under-the-sun-42614-large.mp4" type="video/mp4" />
           </video>
           
           <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
           
           <div className="absolute inset-x-0 bottom-0 p-10 text-left glass border-t border-gray-200/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-2xl animate-pulse">🤍</span>
                </div>
                <div>
                  <p className="text-[#1d1d1f] text-lg font-medium italic">"Ogni persona che incontri sta combattendo una battaglia di cui non sai nulla. Sii gentile. Sempre."</p>
                  <p className="text-[#86868b] text-sm mt-1 uppercase tracking-widest font-bold">— Humanity Manifesto</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
