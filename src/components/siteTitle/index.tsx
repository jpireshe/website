import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const SiteTitle: () => React.JSX.Element = () => {
  return (
    <Link to="/" className="COMPONENTS-site-title">
      Toin & Jonas
    </Link>
  );
};

export default SiteTitle;
