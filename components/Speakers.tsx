import React from 'react';
import { SPEAKERS } from '../constants';

export const Speakers: React.FC = () => {
  return (
    <section id="palestrantes" className="py-20 bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Os Mentores</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Aprenda com quem vive na prática os desafios e as vitórias do empreendedorismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SPEAKERS.map((speaker, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-amber-500 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
              <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 h-full flex flex-col items-center text-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-amber-500 mb-6 shadow-xl">
                    <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{speaker.name}</h3>
                <p className="text-amber-400 font-semibold tracking-wide uppercase text-sm mb-4">{speaker.role}</p>
                <p className="text-gray-300 leading-relaxed">
                  {speaker.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};