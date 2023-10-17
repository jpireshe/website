import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ButtonLink: ({
  to,
  text,
}: {
  to: string;
  text: string;
}) => JSX.Element = ({ to, text }: { to: string; text: string }) => {
  return (
    <Link to={to} className="COMPONENTS-button-link">
      {text}
    </Link>
  );
};

export default ButtonLink;
