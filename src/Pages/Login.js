import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import ThemeButton from "../components/ThemeButton";
import img from "../img/login-main.svg";
import "../css/login.scss";
import { message } from "antd";
const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [number, setNumber] = useState("");

  const validateNumber = (e) => {
    let value = e.target.value;
    // let reg = /^\d+$/;
    let notAllow = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]+$/g;
    if (value.match(notAllow)) {
        message.error("please enter number only", 2);
        e.preventDefault()
    } else {
        setNumber(() => {
            setNumber(value);
        });
    }
};
  return (
    <div className="login-page">
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
      <div className="login-body">
        <div className="wrapper">
          <img src={img} alt="login-img" />
          <p className="login-title">Login with your Mobile number</p>
          <p className="login-extra">Claim, edit or renew your policy</p>
          <div className="login-input">
            <div className="input">
              <span>+ 91</span>
              <input
                type="tel"
                maxLength={10}
                value={number}
                onChange={(e) => validateNumber(e)}
              />
            </div>
          </div>
          <div className="whatsappCheck">
            <label
              className={`customLabel ${isChecked ? "checked" : null}`}
              htmlFor="wappNotification"
            >
              <input
                type="checkbox"
                id="wappNotification"
                onChange={() => setIsChecked(!isChecked)}
                checked={isChecked}
              />
            </label>
            <p>Receive important updates on WhatsApp</p>
          </div>
          <button className={`btn btn-lg btn-getOTP`}>Get OTP</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
