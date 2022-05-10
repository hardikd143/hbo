import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import "../css/termsConditions.scss";
import termsData from "../data/termsConditionsData";
const TermsConditions = () => {
  const { maintitle, maincontent, list } = termsData;
  return (
    <>
      <Helmet>
        <body className="body-white"></body>
      </Helmet>
      <div className="container-xl terms-conditions">
        <div className="customBreadCrumb">
          <p>
            <Link to="/">Home</Link> / Terms and Conditions
          </p>
        </div>
        <div className="content">
          <h2 className="mainHeader">{maintitle}</h2>
          {maincontent.map((item, index) => {
            return (
              <p className="ContentText" key={index}>
                {item.para}
              </p>
            );
          })}
          <div className="wrapper">
            {list.map((item, index) => {
              const { title, paras } = item;
              return (
                <>
                  <div key={index}>
                    <h2 className="title">{title}</h2>
                    {paras.map((item, index) => {
                      return (
                        <p className="ContentText" key={index}>
                          {item.para}
                        </p>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
