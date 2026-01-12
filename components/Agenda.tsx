import React from 'react';
import { AGENDA } from '../constants';
import { Clock } from 'lucide-react';

export const Agenda: React.FC = () => {
  return (
    <section id="agenda" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2">Cronograma Oficial</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
                Imersão nas Cidades
            </h3>
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 space-y-8 md:space-y-12">
                {AGENDA.map((item, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-8 group">
                        
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-0 md:top-2 w-4 h-4 rounded-full bg-slate-700 border-2 border-slate-900 group-hover:bg-amber-500 transition-colors"></div>

                        {/* Time - Desktop: Left side, Mobile: Top */}
                        <div className="md:w-32 flex-shrink-0 pt-1 md:text-right pl-6 md:pl-0">
                            <span className="inline-flex items-center gap-2 text-amber-500 font-bold font-mono">
                                <Clock size={14} />
                                {item.time.split(' – ')[0]}
                            </span>
                        </div>

                        {/* Content Card */}
                        <div className="flex-1 bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-amber-500/30 transition-colors ml-6 md:ml-0">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                {item.speaker && (
                                    <span className="text-sm px-3 py-1 bg-blue-900/40 text-blue-200 rounded-full w-fit">
                                        com {item.speaker}
                                    </span>
                                )}
                            </div>
                            {item.description && (
                                <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};