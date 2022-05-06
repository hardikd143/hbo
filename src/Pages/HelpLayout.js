import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import ThemeButton from "../components/ThemeButton";
import "../css/themeButton.scss";
import "../css/help.scss";
const HelpLayout = () => {
  return (
    <>
      <header className="header common ">
        <div className="container-lg header-inner">
          <Logo type="logo-purple" />
          <ThemeButton defaultColor="primary2white" />
        </div>
      </header>
      <div className="help-body">
        <section className="container wrapper">
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default HelpLayout;
