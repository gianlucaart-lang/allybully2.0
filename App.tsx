
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatInterface from './components/ChatInterface';
import InfoCards from './components/InfoCards';
import CopingMechanisms from './components/CopingMechanisms';
import SerenityGallery from './components/SerenityGallery';
import SafetyPanel from './components/SafetyPanel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        <section id="about" className="py-24 px-6 border-y border-gray-100 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[14px] font-semibold text-blue-600 uppercase tracking-widest mb-4">La Nostra Missione</h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Perché esiste Humanity?</h2>
            <p className="text-xl md:text-2xl text-[#86868b] leading-relaxed font-medium">
              Siamo uno sportello digitale nato per combattere l'isolamento. 
              Attraverso l'intelligenza artificiale, vogliamo fornire gli strumenti psicologici e pratici per reagire con forza, 
              dignità e consapevolezza. Essere "umani" è una scelta coraggiosa che facciamo ogni giorno.
            </p>
          </div>
        </section>

        <ChatInterface />
        
        <CopingMechanisms />

        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">Decodificare la cattiveria.</h2>
              <p className="text-xl text-[#86868b] mb-12 leading-relaxed">
                Ti aiutiamo a smontare i comportamenti ostili. Capire la psicologia dietro l'odio è il modo più potente per togliergli il controllo sulla tua vita.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Analisi Psicologica</h4>
                    <p className="text-[#86868b]">Spieghiamo le dinamiche del bullo: spesso la sua rabbia è solo paura riflessa.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Integrità Totale</h4>
                    <p className="text-[#86868b]">La tua privacy è sacra. Nessun dato viene condiviso, mai.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative aspect-square bg-[#f5f5f7] rounded-[4rem] p-16 flex items-center justify-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] group">
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 blur-[120px] rounded-full animate-pulse"></div>
               <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/20 blur-[120px] rounded-full"></div>
               <div className="text-center z-10 transition-transform duration-700 group-hover:scale-105">
                  <div className="w-28 h-28 bg-white rounded-[2rem] shadow-xl flex items-center justify-center mx-auto mb-8">
                    <span className="text-5xl animate-bounce">🕊️</span>
                  </div>
                  <h3 className="text-3xl font-bold">Essere Umani</h3>
                  <p className="text-lg text-[#86868b] mt-4 font-medium italic max-w-xs mx-auto">"La gentilezza è l'unica lingua che i sordi possono sentire e i ciechi possono vedere."</p>
               </div>
            </div>
          </div>
        </section>

        <SerenityGallery />
        <InfoCards />
        <SafetyPanel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
