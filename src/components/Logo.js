import React from "react";
import { Link } from "react-router-dom";


const Logo = () => {
  return (

    <Link to={'/'} className="nav-logo">
      <h2>HBO</h2>
    </Link>
  );
};

export default Logo;
