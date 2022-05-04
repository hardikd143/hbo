import React from "react";
import ackoContent from "../../data/ackoContent";
const AckoInsurance = ({ currentPage }) => {
  let mainContent = ackoContent.find((item) => item.page === currentPage);
  console.log(mainContent);
  const { subTitle, policies, policyDesc, reasons } = mainContent;
  return (
    <div className="InsTab-Content">
      <div className="ackoInsurance-Wrapper">
        <div>
          <h3 className="header">{currentPage} insurance on ACKO </h3>
          <p className="subTitle">{subTitle}</p>
        </div>
        <div className="reasons">
          {reasons.map((item, index) => {
            const { img, rTitle, rContent } = item;
            return (
              <div key={index} className="reason-wrapper">
                <img src={img} alt="" />
                <h3>{rTitle}</h3>
                <p>{rContent}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AckoInsurance;
