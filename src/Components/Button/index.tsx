import React from "react";
import "./Button.css";

interface IProps {
  children: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ children, onClick }) => {
  return (
    <button className="default-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
