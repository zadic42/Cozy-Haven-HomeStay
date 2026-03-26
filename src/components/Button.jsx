import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-3 uppercase tracking-widest text-sm font-semibold transition duration-300 transform active:scale-95 text-center flex items-center justify-center";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-dark",
    secondary: "bg-dark text-white hover:bg-accent",
    outline: "border border-white text-white hover:bg-white hover:text-dark",
    outlineDark: "border border-dark text-dark hover:bg-dark hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
