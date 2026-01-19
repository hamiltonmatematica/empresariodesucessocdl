import React from 'react';
import { Button } from './Button';
import { MapPin, CalendarClock } from 'lucide-react';
import { CITIES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-brand-dark">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-brand-dark to-brand-dark z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-neon/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/30 border border-brand-neon/30 text-brand-neon mb-6 backdrop-blur-sm animate-fade-in-down shadow-[0_0_15px_rgba(0,209,255,0.3)]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
          </span>
          <span className="text-sm font-semibold tracking-wide">ROADSHOW NORTE DE MINAS</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight tracking-tight">
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">EMPRESÁRIOS</span>
          <br />
          <span className="neon-text-gradient drop-shadow-[0_0_15px_rgba(0,209,255,0.5)]">DE SUCESSO</span>
        </h1>

        <p className="font-light text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
          Como vender mais em 2026 usando <span className="text-brand-neon font-semibold">estratégia, processo e inteligência</span>
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
            <p className="text-brand-neon font-bold text-lg">FRED ROCHA</p>
            <p className="text-slate-400 text-xs uppercase tracking-widest">Vendas e Inovação</p>
          </div>
          <div className="h-12 w-[1px] bg-brand-neon/30 shadow-[0_0_10px_rgba(0,209,255,0.5)]"></div>
          <div className="text-left">
            <p className="text-brand-neon font-bold text-lg">DIEGO SUZANO</p>
            <p className="text-slate-400 text-xs uppercase tracking-widest">Estratégia e Gestão</p>
          </div>
        </div>

        {/* City Ticker */}
        <div className="w-full max-w-4xl bg-brand-dark/50 border border-brand-neon/20 backdrop-blur-md rounded-xl p-6 shadow-[0_0_30px_rgba(0,209,255,0.05)]">
          <p className="text-gray-400 text-sm mb-4 uppercase tracking-widest">Cidades Confirmadas</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {CITIES.map((city) => (
              <div key={city.name} className="flex flex-col items-center group cursor-default">
                <div className="flex items-center gap-2 text-white font-semibold transition-colors group-hover:text-brand-neon">
                  <MapPin size={16} className="text-brand-neon group-hover:drop-shadow-[0_0_8px_rgba(0,209,255,0.8)] transition-all" />
                  {city.name}
                </div>
                {city.date && <div className="text-xs text-brand-neon/80 mt-1">{city.date}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};