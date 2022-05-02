import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ type }) => {
  return (
    <Link to={"/"} className={`main-logo ${type}`}>
      <h2>HBO</h2>
    </Link>
  );
};

export default Logo;
