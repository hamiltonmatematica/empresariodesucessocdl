import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-gradient-to-r from-brand-deep to-brand-neon text-white hover:from-blue-600 hover:to-cyan-400 shadow-neon border border-brand-neon/20",
    outline: "border-2 border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-brand-dark shadow-[0_0_10px_rgba(0,209,255,0.2)]"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};