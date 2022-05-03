import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import "../css/help.scss";
const HelpLayout = () => {
  return (
    <div className="main">
      <header>
        <div className="container">
          <div className=" h-80 d-flex align-items-center">
            <Logo  />
          </div>
        </div>
      </header>
      <div className="help-body">
        <section className="container wrapper">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default HelpLayout;
