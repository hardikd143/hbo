import React from "react";
import Insurance from "../components/car_insurance/Insurance";
import Input from "../components/Input";
import "../css/insuranceCommon.scss";
import mainImg from "../img/car-ins-main.jpeg";
const CarInsurance = () => {
  return (
    <>
      <div className="container-lg">
        <div className="insurance-main">
          <div className="main-left">
            <p className="insuranceTitle-main">
              93% ACKO users save at least ₹1,200 on car insurance
            </p>
            <p className="insuranceTitle-secondary">
              Car insurance starting at ₹2,072*
            </p>
            <div className="max-w-520 insuranceContent">
              <Input type="car" />
            </div>
          </div>
          <div className="main-right">
            <img src={mainImg} alt="car-insurance" />
          </div>
        </div>
      </div>
      <div className="Insurance-Section">
        <Insurance pageFor="car" />
      </div>
    </>
  );
};

export default CarInsurance;
