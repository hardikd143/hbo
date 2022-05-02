import React from "react";
import OffPartnerData from "../partnerData";
const OfficialPartner = () => {
  console.log(OffPartnerData);
  return (
    <>
      <div className="inner">
        <div className="container">
          <p className="title">Official Partner</p>
          <div className="wrapper">
            {OffPartnerData.map((img, index) => {
              return (
                <>
                  <div className="img">
                    <img src={img.src} alt="img" key={index} />
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

export default OfficialPartner;
