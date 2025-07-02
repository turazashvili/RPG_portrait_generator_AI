
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, fullWidth, ...rest }) => {
  const baseClasses = `
    inline-flex items-center justify-center px-6 py-3 border border-transparent 
    text-base font-medium rounded-md shadow-sm text-gray-900 
    bg-gradient-to-r from-purple-400 to-amber-400 
    hover:from-purple-500 hover:to-amber-500 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 
    transition-all duration-200 ease-in-out transform hover:scale-105
    disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
  `;
  
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${widthClass} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
