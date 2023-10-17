import React from "react";
import "./index.css";
import ButtonLink from "../../components/buttonLink";
import SiteTitle from "../../components/siteTitle/index";

const Home: () => React.JSX.Element = () => {
  return (
    <div className="home">
      <SiteTitle />
      <ButtonLink to="/about" text="Sobre" />
    </div>
  );
};

export default Home;
