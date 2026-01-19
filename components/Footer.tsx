import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark py-12 border-t border-brand-neon/10">
      <div className="container mx-auto px-4 text-center">
        <div className="font-serif font-bold text-2xl tracking-tighter leading-none text-brand-neon mb-6 opacity-80 drop-shadow-[0_0_5px_rgba(0,209,255,0.3)]">
          EMPRESÁRIOS<br />
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