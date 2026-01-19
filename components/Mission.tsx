import React from 'react';
import { BENEFITS } from '../constants';

export const Mission: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-dark relative">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-brand-neon font-bold tracking-widest uppercase text-sm drop-shadow-[0_0_5px_rgba(0,209,255,0.5)]">O Manifesto da Virada</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
              Destravar o futuro empresarial e preparar 2026
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Dezembro não foi escolhido por acaso: 2026 bate à porta com muitas incertezas e desafios. O empresário, em sua grande maioria, permanece solitário em sua tomada de decisão.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Decidimos realizar este <span className="text-brand-neon font-semibold">Roadshow presencial</span>, totalmente focado em planejamento, conteúdo estratégico e imersão prática.
            </p>
            <div className="bg-brand-blue/20 p-6 border-l-4 border-brand-neon rounded-r-lg shadow-[0_0_20px_rgba(0,209,255,0.05)]">
              <p className="text-white italic">
                "Sentar à mesa com Fred Rocha e Diego Suzano em um dia de alta troca, muito conhecimento e grandes insights."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-neon/20 rounded-xl blur-xl"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-xl border border-brand-neon/20">
              <h4 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                Para quem é esta imersão?
              </h4>
              <ul className="space-y-4">
                {BENEFITS.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-200 group">
                    <div className="p-2 bg-brand-neon/10 rounded-lg text-brand-neon group-hover:bg-brand-neon group-hover:text-brand-dark transition-colors duration-300">
                      <benefit.icon size={20} />
                    </div>
                    <span className="font-medium group-hover:text-white transition-colors">{benefit.title}</span>
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