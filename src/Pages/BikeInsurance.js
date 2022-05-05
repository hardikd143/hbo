import React from "react";
import Insurance from "../components/bike_insurance/Insurance";
import Input from "../components/Input";
import "../css/insuranceCommon.scss";
import mainImg from "../img/bike-ins-main.jpeg";
const BikeInsurance = () => {
  return (
    <>
      <div className="container-lg">
        <div className="insurance-main">
          <div className="main-left">
            <p className="insuranceTitle-main">
              Get your bike insured in a simple and hassle-free way
            </p>
            <p className="insuranceTitle-secondary">
              Bike insurance starting at ₹499*
            </p>
            <div className="max-w-520 insuranceContent">
              <Input type="bike" />
            </div>
          </div>
          <div className="main-right">
            <img src={mainImg} alt="bike-insurance" />
          </div>
        </div>
      </div>
      <div className="Insurance-Section">
        <Insurance pageFor="bike" />
      </div>
    </>
  );
};

export default BikeInsurance;
