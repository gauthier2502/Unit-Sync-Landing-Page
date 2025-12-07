import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  withIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withIcon = false, 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#2E5BFF] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 focus:ring-blue-500",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white focus:ring-slate-900",
    outline: "border-2 border-slate-200 hover:border-[#2E5BFF] text-slate-600 hover:text-[#2E5BFF] bg-transparent",
    ghost: "text-[#2E5BFF] hover:text-blue-700 bg-transparent hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};