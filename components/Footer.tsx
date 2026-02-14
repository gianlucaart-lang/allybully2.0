
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-[#1d1d1f] border-t border-white/5 text-[#86868b]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold text-white tracking-tight">Humanity</span>
          <span className="text-xs">© 2024 Humanity Project. Tutti i diritti riservati.</span>
        </div>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-white apple-transition">Privacy</a>
          <a href="#" className="hover:text-white apple-transition">Termini</a>
          <a href="#" className="hover:text-white apple-transition">Contatti</a>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-8 pt-8 border-t border-white/5 text-[10px] leading-relaxed">
        Nota bene: Humanity è un assistente basato su intelligenza artificiale. Non sostituisce il supporto professionale di uno psicologo, un medico o un consulente legale. Se sei in una situazione di pericolo, contatta le autorità competenti.
      </div>
    </footer>
  );
};

export default Footer;
