import React from "react";
import Helmet from "react-helmet";
import "../css/insuranceCommon.scss";
import mainImg from "../img/group-health-ins-main.jpeg";
const GroupHealthInsurance = () => {
  return (
    <>
      <Helmet>
          <body className="body-white"></body>
      </Helmet>
      <div className="container-lg">
        <div className="insurance-main">
          <div className="main-left health-ins">
            <p className="insuranceTitle-main">
              Group Health Insurance Add-ons - Buy Online
            </p>
            <p className="insuranceTitle-secondary">
              Enhance your corporate health policy with a wide range of add-on
              covers.
            </p>
            <button className="btn btn-lg btn-green mt-3">
              Schedule a Demo
            </button>
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
        <h3 className="InDev b2w ">In Developement</h3>
      </div>
    </>
  );
};

export default GroupHealthInsurance;
