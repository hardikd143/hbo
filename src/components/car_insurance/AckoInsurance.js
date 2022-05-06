import React from "react";
import { ackoContent, notCovered,addOneCarIns } from "../../data/ackoContent";
import HeadingCopy from "../HeadingCopy";
import InsSmallCard from "../common_insurance/InsSmallCard";
import InsBigCard from "../common_insurance/InsBigCard";
import InsListStyledCard  from "../common_insurance/InsListStyledCard";
const AckoInsurance = () => {
  const pageName = "car";
  let mainContent = ackoContent.find((item) => item.page === pageName);
  const { subTitle, policies, policyDesc, reasons, keyFeature, benefits } =
    mainContent;
  return (
    <div className="InsTab-Content">
      <div className="ackoInsurance-Wrapper">
        <div className="container-fluid">
          <div>
            <HeadingCopy
              text={`${pageName} insurance on ACKO`}
              classes="header"
            />
            <p className="subTitle">{subTitle}</p>
          </div>
          <InsSmallCard data={reasons} />
        </div>
        <div className="typesOFinsurance Ins-Card-main">
          <div className="inner max-w-1068 ">
            <HeadingCopy
              text={`Types of ${pageName} insurance policies on ACKO`}
              classes="header mb-2"
            />
            <p className="subTitle">{policyDesc}</p>
            <InsBigCard data={policies} heading={true} />
          </div>
        </div>
        <div className="keyFeature">
          <div className="container-lg px-2">
            <HeadingCopy
              text={`Key featues of ACKO's ${pageName} insurance`}
              classes="header mb-5"
            />
            <table>
              <tbody>
                <tr className="tableHeading">
                  <th>KEY FEATURES</th>
                  <th>ACKO ADVANTAGE</th>
                </tr>
                {keyFeature.map((item, index) => {
                  const { feature, advantage } = item;
                  return (
                    <tr key={index}>
                      <td>{feature}</td>
                      <td>{advantage}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="addOneCarIns py-5">
          <div className="container-lg">
            <HeadingCopy text={addOneCarIns.title} classes="header" />
            <p className="subTitle">{addOneCarIns.desc}</p>
            <InsListStyledCard data={addOneCarIns.list} />
          </div>
        </div>
        <div className="container-fluid">
          <div className="benefits py-4">
            <div>
              <HeadingCopy text={benefits.bTitle} classes="header" />
              <p className="subTitle">{benefits.bDesc}</p>
              <InsSmallCard data={benefits.list} />
            </div>
          </div>
        </div>

        {/* <InsNotCovered currentPage={currentPage} /> */}
        <div className="NotCovered Ins-Card-main">
          <div className="inner max-w-1068 ">
            <HeadingCopy
              text={`What’s not covered in our ${pageName} insurance policy?`}
              classes="header mb-2"
            />
            <p className="subTitle">{notCovered.desc[pageName]}</p>
            <InsBigCard data={notCovered.list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AckoInsurance;
