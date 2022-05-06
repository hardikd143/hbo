import React from "react";
import {
  growthCarInsIndia,
  glimpseInsIndustry,
  need4CarIns,
  underPenetrationIns,
} from "../../data/ackoContent";
import InsBigCard from "../common_insurance/InsBigCard";

import InsListStyledCard from "../common_insurance/InsListStyledCard";
import HeadingCopy from "../HeadingCopy";
const CarInsIndia = () => {
  return (
    <div className="InsTab-Content">
      <div className="carInsIndia-wrapper">
        {/* need for car insurance ?*/}
        <div className=" Ins-Card-main">
          <div className="inner max-w-1068 ">
            <HeadingCopy text={need4CarIns.title} classes="header mb-2" />
            <p className="subTitle">{need4CarIns.desc}</p>
            <InsBigCard data={need4CarIns.list} heading={true} img={true} />
          </div>
        </div>
        <div className="gCard-wrapper">
          <div className="container-lg">
            <h3 className="header mb-4">{glimpseInsIndustry.title}</h3>
            <div className="inner">
              {glimpseInsIndustry.list.map((item, index) => {
                const { title, content } = item;
                return (
                  <div className="gCard" key={index}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="typesOFinsurance Ins-Card-main">
          <div className="inner max-w-1068 ">
            <HeadingCopy text={growthCarInsIndia.title} classes="header mb-5" />
            <InsListStyledCard data={growthCarInsIndia.list} />
          </div>
        </div>
        {/* under penetration of auto insurance  */}
        <div className=" Ins-Card-main">
          <div className="inner max-w-1068 ">
            <h3 className="header ">{underPenetrationIns.title}</h3>
            <p className="subTitle">{underPenetrationIns.desc}</p>
            <InsBigCard
              data={underPenetrationIns.list}
              heading={true}
              img={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInsIndia;
