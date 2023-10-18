import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../images/logo.svg";
import IconBlack from "../../images/logo-black.svg";
import "./index.css";

const LogoSVG: React.FC<{ color: string }> = ({ color }) => {
  let c = Icon;
  if (color === "black") {
    c = IconBlack;
  }

  return (
    <Link to="/">
      <img src={c} alt="Logo" className="COMPONENTS-logo" />
    </Link>
  );
};

export default LogoSVG;
