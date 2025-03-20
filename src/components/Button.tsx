import React from "react";

interface ButtonPorps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonPorps> = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} type={type} className="btn">
      {children}
    </button>
  );
};

export default Button;
