import React from 'react';
import { BENEFITS } from '../constants';

export const Mission: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm">O Manifesto da Virada</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
              Destravar o futuro empresarial e preparar 2026
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Dezembro não foi escolhido por acaso: 2026 bate à porta com muitas incertezas e desafios. O empresário, em sua grande maioria, permanece solitário em sua tomada de decisão.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Decidimos realizar este <span className="text-amber-400 font-semibold">Roadshow presencial</span>, totalmente focado em planejamento, conteúdo estratégico e imersão prática.
            </p>
            <div className="bg-blue-950/50 p-6 border-l-4 border-amber-500 rounded-r-lg">
                <p className="text-white italic">
                  "Sentar à mesa com Fred Rocha e Diego Suzano em um dia de alta troca, muito conhecimento e grandes insights."
                </p>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-amber-500/20 rounded-xl blur-xl"></div>
             <div className="relative bg-slate-800 p-8 rounded-xl border border-slate-700">
                <h4 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">
                  Para quem é esta imersão?
                </h4>
                <ul className="space-y-4">
                  {BENEFITS.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-4 text-gray-200">
                      <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
                        <benefit.icon size={20} />
                      </div>
                      <span className="font-medium">{benefit.title}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};