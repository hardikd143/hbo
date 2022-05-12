import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import ThemeButton from "../components/ThemeButton";
import "../css/error.scss";
import errorImg from "../img/error.svg";
const Error = ({hideMainNav}) => {
  return (
    <div className="error-page">
      {hideMainNav && <Helmet>
        <body className="hideMainNav">
          
        </body></Helmet>}
      <header className="header common">
        <div className="container-lg header-inner">
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
