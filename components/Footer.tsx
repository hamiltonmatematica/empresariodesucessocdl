import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 text-center">
        <div className="font-serif font-bold text-2xl tracking-tighter leading-none text-amber-500 mb-6 opacity-50">
          EMPRESÁRIOS<br/>
          <span className="text-white text-base tracking-widest font-sans font-light">DE SUCESSO</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-4">
          Um evento realizado por T3 Hub e Confraria do Fred.
        </p>
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};