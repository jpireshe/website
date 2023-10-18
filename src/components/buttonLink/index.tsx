import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ButtonLink: React.FC<{ to: string; text: string }> = ({ to, text }) => {
  return (
    <Link to={to} className="COMPONENTS-button-link">
      {text}
    </Link>
  );
};

export default ButtonLink;
