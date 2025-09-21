import React from 'react';

interface ButtonProps {
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, size = 'md', children, className }) => {
  // Defina tamanhos de botão com base no tamanho
  const sizeClass = size === 'sm' ? 'px-4 py-2 text-sm' : size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-md';

  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/25 ${sizeClass} text-white font-semibold rounded-lg focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
