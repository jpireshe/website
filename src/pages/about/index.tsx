import React from "react";
import Logo from "../../components/logo";
import SiteTitle from "../../components/siteTitle";
import "./index.css";

const About: () => React.JSX.Element = () => {
  return (
    <div className="PAGES-about">
      <div className="row">
        <SiteTitle />
        <div></div>
        <div></div>
        <Logo />
      </div>
    </div>
  );
};

export default About;
