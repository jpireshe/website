import React from "react";
import Logo from "../../components/logo";
import ButtonLink from "../../components/buttonLink";
import SiteTitle from "../../components/siteTitle";

const About: () => React.JSX.Element = () => {
  return (
    <div>
      <Logo />
      <SiteTitle />
      <ButtonLink to="/" text="Home" />
    </div>
  );
};

export default About;
