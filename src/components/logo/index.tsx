import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../images/logo.svg";
import "./index.css";

const Logo = (): React.ReactElement => {
  return (
    <Link to="/">
      <img src={Icon} alt="Logo" className="COMPONENTS-logo" />
    </Link>
  );
};

export default Logo;
