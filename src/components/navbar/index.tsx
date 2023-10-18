import React from "react";
import LogoSVG from "../logo";
import ClickableText from "../clickableText";
import "./index.css";

const NavBar: React.FC = () => {
  return (
    <div className="COMPONENTS-navbar">
      <ClickableText text="Toin & Jonas" to="/" color="black" />
      <ClickableText text="About" to="/about" color="black" />
      <ClickableText text="Contact" to="/contact" color="black" />
      <div></div>
      <div></div>
      <div></div>
      <LogoSVG color="black" />
    </div>
  );
};

export default NavBar;
