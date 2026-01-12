import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

export const Registration: React.FC = () => {
  return (
    <section id="inscricao" className="py-20 relative overflow-hidden bg-brand-blue">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Vagas Limitadas para uma <span className="text-amber-400">Experiência Exclusiva</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Não perca a oportunidade de estar lado a lado com grandes líderes e transformar o futuro do seu negócio.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-left">
            <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-green-500" />
                <span>Imersão Completa (Dia Inteiro)</span>
            </div>
            <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-green-500" />
                <span>Almoço Incluso</span>
            </div>
            <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-green-500" />
                <span>Networking de Alto Nível</span>
            </div>
          </div>

          <Button 
            className="text-xl px-12 py-6 shadow-amber-500/20 shadow-2xl animate-pulse" 
            onClick={() => alert("Simulação: Redirecionando para plataforma de pagamento...")}
          >
            GARANTIR MINHA VAGA AGORA
          </Button>

          <p className="mt-6 text-sm text-gray-500">
            *Condições especiais para grupos de empresas.
          </p>
        </div>
      </div>
    </section>
  );
};