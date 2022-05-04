import React from "react";
import OffPartnerData from "../data/partnerData";
const OfficialPartner = () => {
  return (
    <>
      <div className="inner">
        <div className="container">
          <p className="title">Official Partner</p>
          <div className="wrapper">
            {OffPartnerData.map((img, index) => {
              return (
                  <div className="img" key={index}>
                    <img src={img.src} alt="img"  />
                  </div>
                  
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficialPartner;
