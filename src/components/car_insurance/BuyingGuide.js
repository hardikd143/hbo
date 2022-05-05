import React from "react";
import {
  expiredInsurance,
  buyCarIns,
  reponsibleFactor,
  claimProcess,
} from "../../data/ackoContent";
import InsBigCard from "../common_insurance/InsBigCard";
import { InsListStyledCard } from "../common_insurance/InsListStyledCard";
import HeadingCopy from "../HeadingCopy";
const BuyingGuide = () => {
  //   let mainContent = ackoContent.find((item) => item.page === currentPage);
  //   const {} = mainContent;
  return (
    <div className="InsTab-Content">
      <div className="buyingGuide-Wrapper">
        <div className="BuyCarIns">
          <div className="container-lg">
            <HeadingCopy text={buyCarIns.title} classes="header" />
            <p className="subTitle">{buyCarIns.desc}</p>
            <div className="wrapper">
              {buyCarIns.list.map((item, index) => {
                const { step, content } = item;
                return (
                  <div className="carInsStep" key={index}>
                    <h3>Step {step}</h3>
                    <p>{content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="expiredInsurance Ins-Card-main">
          <div className="inner max-w-1068 ">
            <HeadingCopy text={expiredInsurance.title} classes="header mb-2" />
            <p className="subTitle">{expiredInsurance.desc}</p>
            <InsBigCard data={expiredInsurance.list} heading={true} />
          </div>
        </div>
        <div className="responsibleFactor py-5">
          <div className="container-lg">
            <HeadingCopy text={reponsibleFactor.title} classes="header" />
            <p className="subTitle">{reponsibleFactor.desc}</p>
            <InsListStyledCard data={reponsibleFactor.list} />
          </div>
        </div>
        <div className="claimProcess py-5">
          <div className="container-lg">
            <HeadingCopy text={claimProcess.title} classes="header" />
            <p className="subTitle">{claimProcess.desc}</p>
            <InsListStyledCard data={claimProcess.list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyingGuide;
