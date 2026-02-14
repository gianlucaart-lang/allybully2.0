
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-gray-200/50">
      <div className="max-w-screen-xl mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-xl font-semibold tracking-tight text-[#1d1d1f] flex items-center gap-2">
            <span className="w-6 h-6 bg-[#1d1d1f] rounded-full flex items-center justify-center">
              <span className="text-white text-[10px]">H</span>
            </span>
            Humanity
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-[12px] font-medium text-[#1d1d1f]/80 hover:text-[#0066cc] apple-transition">Chi Siamo</a>
            <a href="#chat" className="text-[12px] font-medium text-[#1d1d1f]/80 hover:text-[#0066cc] apple-transition">Assistente</a>
            <a href="#resources" className="text-[12px] font-medium text-[#1d1d1f]/80 hover:text-[#0066cc] apple-transition">Risorse</a>
            <a href="#safety" className="text-[12px] font-medium text-[#d70015] apple-transition">Aiuto Urgente</a>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-[#0071e3] text-white text-[12px] font-medium px-3 py-1 rounded-full hover:bg-[#0077ed] apple-transition">
            Gratuito per sempre
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
