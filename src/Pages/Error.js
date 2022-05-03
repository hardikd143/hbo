import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import ThemeButton from "../components/ThemeButton";
import "../css/error.scss";
import errorImg from "../img/error.svg";
const Error = () => {
  return (
    <div className="error-page">
      <header className="header common">
        <div className="container header-inner">
          <Logo type="logo-purple" />
          <div className="d-flex align-items-center">
            <Link to="/support/home" className="me-3">
              help
            </Link>
            <ThemeButton defaultColor="primary2white" />
          </div>
        </div>
      </header>
      <div className="error-body container">
        <img src={errorImg} alt="error" />

        <p className="error-text ">
          <h2>404</h2> Sorry, the page doesn’t exist
        </p>
        <Link to="/" className="btn btn-md btn-purple ">
          home
        </Link>
      </div>
    </div>
  );
};

export default Error;
