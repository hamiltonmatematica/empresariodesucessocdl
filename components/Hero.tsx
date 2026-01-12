import React from 'react';
import { Button } from './Button';
import { MapPin, CalendarClock } from 'lucide-react';
import { CITIES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-950 to-black z-0"></div>
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-200 mb-6 backdrop-blur-sm animate-fade-in-down">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <span className="text-sm font-semibold tracking-wide">ROADSHOW NORTE DE MINAS</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
          <span className="text-white">EMPRESÁRIOS</span>
          <br />
          <span className="gold-text-gradient">DE SUCESSO</span>
        </h1>

        <p className="font-light text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
          Um dia inteiro de <span className="text-white font-semibold">mentoria de alto impacto</span> com os maiores empresários da região.
        </p>

        {/* CTA Area */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <Button onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}>
            QUERO PARTICIPAR AGORA
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}>
            SAIBA MAIS
          </Button>
        </div>

        {/* Speakers Teaser */}
        <div className="flex items-center justify-center gap-8 mb-12 opacity-90">
            <div className="text-right">
                <p className="text-amber-400 font-bold text-lg">FRED ROCHA</p>
                <p className="text-slate-400 text-xs uppercase tracking-widest">Vendas e Inovação</p>
            </div>
            <div className="h-12 w-[1px] bg-slate-700"></div>
            <div className="text-left">
                <p className="text-amber-400 font-bold text-lg">DIEGO SUZANO</p>
                <p className="text-slate-400 text-xs uppercase tracking-widest">Estratégia e Gestão</p>
            </div>
        </div>

        {/* City Ticker */}
        <div className="w-full max-w-4xl bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-4 uppercase tracking-widest">Cidades Confirmadas</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {CITIES.map((city) => (
              <div key={city.name} className="flex items-center gap-2 text-white font-semibold">
                <MapPin size={16} className="text-amber-500" />
                {city.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};