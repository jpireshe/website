import React from "react";
import "./index.css";
import NavBar from "../../components/navbar";

const Home: () => React.JSX.Element = () => {
  return (
    <div className="PAGES-home">
      <NavBar />
      <h1>Welcome to Toin & Jonas!</h1>
    </div>
  );
};

export default Home;
