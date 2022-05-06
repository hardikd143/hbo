import React from "react";
import {
  expiredInsurance,
  buyCarIns,
  reponsibleFactor,
  claimProcess,
  carInsBenefits,
  carInsAdvantages,
} from "../../data/ackoContent";
import InsBigCard from "../common_insurance/InsBigCard";
import InsListStyledCard from "../common_insurance/InsListStyledCard";
import NumberedList from "../common_insurance/NumberedList";
import HeadingCopy from "../HeadingCopy";
const BuyingGuide = () => {
  //   let mainContent = ackoContent.find((item) => item.page === currentPage);
  //   const {} = mainContent;
  return (
    <div className="InsTab-Content">
      <div className="buyingGuide-Wrapper">
        <div className="gCard-wrapper">
          <div className="container-lg">
            <HeadingCopy text={buyCarIns.title} classes="header" />
            <p className="subTitle">{buyCarIns.desc}</p>
            <div className="inner">
              {buyCarIns.list.map((item, index) => {
                const { step, content } = item;
                return (
                  <div className="gCard" key={index}>
                    <h3>Step {step}</h3>
                    <p>{content}</p>
                  </div>
                );
              })}
            </div>
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
        {/* car insurance benefits */}
        <div className="py-5 numberedcontent">
          <div className="container-lg">
            <h3 className="header">{carInsBenefits.title}</h3>
            <p className="subTitle text-start mb-4">{carInsBenefits.desc}</p>
            <NumberedList data={carInsBenefits.list} />
          </div>
        </div>
        {/* car insurance benefits */}
        <div className="py-5 numberedcontent">
          <div className="container-lg">
            <h3 className="header">{carInsAdvantages.title}</h3>
            <p className="subTitle text-start mb-3">{carInsAdvantages.desc}</p>
            {carInsAdvantages.descList.map((item, index) => {
              return <p key={index} className="subTitle text-start mb-2">{item.content}</p>;
            })}
            <NumberedList data={carInsAdvantages.list} />
          </div>
        </div>

        {/* insurance is expired ?*/}
        <div className="expiredInsurance Ins-Card-main">
          <div className="inner max-w-1068 ">
            <HeadingCopy text={expiredInsurance.title} classes="header mb-2" />
            <p className="subTitle">{expiredInsurance.desc}</p>
            <InsBigCard data={expiredInsurance.list} heading={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyingGuide;
