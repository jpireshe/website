import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Toin & Jonas</h1>
      <Link to="/about">Sobre</Link>
    </div>
  );
};

export default Home;
