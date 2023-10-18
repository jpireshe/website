import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const ClickableText: React.FC<{ text: string; to: string; color: string }> = ({
  text,
  to,
  color,
}) => {
  if (color === "white") {
    // change class into COMPONENTS-site-title-white
    return (
      <Link to={to} className="COMPONENTS-site-title-white">
        {text}
      </Link>
    );
  }

  return (
    <Link to={to} className="COMPONENTS-site-title">
      {text}
    </Link>
  );
};

export default ClickableText;
