import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/input.scss";
import { RiMotorbikeFill, FaCarSide, AiOutlineArrowRight } from "../icons";

const Input = ({ type }) => {
  // console.log(type);
  const icon = () => {
    return type === "car" ? <FaCarSide /> : <RiMotorbikeFill />;
  };
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [hide, setHide] = useState(false);
  const [floated, setFloated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handlechange = (e) => {
    let value = e.target.value;
    console.log(value);
    setInputValue(() => {
      return [value];
    });
    // handleBlur(e);
  };
  const handleFocus = () => {
    if (!focused) {
      setHide(true);
      setFloated(true);
    } else {
      setHide(false);
      setFloated(false);
    }
  };
  const handleBlur = (e) => {
    if (e.target.value === "") {
      setHide(false);
      setFloated(false);
      setShowAlert(true);
    } else {
      setHide(true);
      setFloated(true);
      setShowAlert(false);
    }
  };
  if (type === "health") {
    return (
      <div className="inp-content">
        <div className="wrapper health mt-2">
          <div className="inner">
            <div>
              <p className="plan">Acko Health Plan</p>
              <p className="text">
                <span> Zero waiting period.</span>
                <span> Zero deductions at claim.</span>
              </p>
            </div>
            <Link
              to="/login"
              className="btn btn-lg btn-green btn-input health-input-btn"
            >
              <span className="health-span text-center w-100 d-inline-block">Get a quote</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="inp-content">
        <div className="wrapper vehicle mt-2">
          <form className="inner" onSubmit={(e)=>{
              e.preventDefault()
          }}>
            <input
              type="text"
              className="input"
              value={inputValue}
              onChange={(e) => handlechange(e)}
              onFocus={() => {
                setFocused(true);
                handleFocus();
              }}
              onBlur={(e) => {
                setFocused(false);
                handleBlur(e);
              }}
            />
            <button
              type="submit "
              className="btn btn-lg btn-green btn-submit btn-input vehicle-input-btn"
            >
              <span>Insure now</span>
              <AiOutlineArrowRight />
            </button>
          </form>
          <div
            className={`floatingPlaceHolder floatPosition ${
              floated ? "floated" : null
            }`}
          >
            Enter your {type} number
          </div>
          <div className={`placeHolder floatPosition ${hide ? "hide" : null}`}>
            {icon()}{" "}
            <span>
              Enter your <span>{type}</span> number
            </span>
          </div>
        </div>
        <div
          className={`requireCarNumber  red-alert ${showAlert ? "show" : null}`}
        >
          <p>We require your Car number!</p>
        </div>
      </div>
    </>
  );
};

export default Input;
