import React from "react";

const Button = ({ children, variant = "primary", onClick, className }) => {
  const baseStyles =
    "px-6 py-2 rounded-lg font-semibold transition duration-300";
  
  const variants = {
    primary: "bg-red-700 text-white hover:bg-red-800",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    outline: "border border-red-700 text-red-700 hover:bg-red-700 hover:text-white",
    disabled: "bg-gray-400 text-white cursor-not-allowed",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={variant === "disabled"}
    >
      {children}
    </button>
  );
};

export default Button;
