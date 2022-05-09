import React from "react";
import "../css/insuranceCommon.scss";
import mainImg from "../img/health-ins-main.jpeg";
const HealthInsurance = () => {
  return (
    <>
      <div className="container-lg">
        <div className="insurance-main">
          <div className="main-left health-ins">
            <p className="insuranceTitle-main">
              All hospital expenses, 100% covered
            </p>
            <p className="insuranceTitle-secondary">
              ✓ Zero waiting period ✓ Zero deductions at claim
            </p>
            <button className="btn btn-lg btn-green mt-3">Get your family covered</button>
          </div>
          <div className="main-right">
            <img
              src={mainImg}
              alt="bike-insurance"
              style={{ borderRadius: "1rem" }}
            />
          </div>
        </div>
      </div>
      <div>
      <h3 className="InDev ">In Developement</h3>
      </div>
    </>
  );
};

export default HealthInsurance;
