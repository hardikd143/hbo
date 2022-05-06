import React from "react";
import {
  ackoContent,
  notCovered,
  buyBikeIns,
  whereShouldBuy,
  bikeInsTerminologies,
  benefitsRenewBikeIns,
  easyClaim,
  needHelp,
} from "../../data/ackoContent";
import HeadingCopy from "../HeadingCopy";
import InsSmallCard from "../common_insurance/InsSmallCard";
import InsBigCard from "../common_insurance/InsBigCard";
import InsListStyledCard from "../common_insurance/InsListStyledCard";
const ContentPage = () => {
  const pageName = "bike";
  let mainContent = ackoContent.find((item) => item.page === pageName);
  const { subTitle, policies, policyDesc, reasons, keyFeature, benefits } =
    mainContent;
  return (
    <div className="InsTab-Content">
      <div className="ackoInsurance-Wrapper">
        {/* buy new car insurance  */}
        <div className="BuyCarIns Ins-Card-main">
          <div className="inner max-w-1068 ">
            <h3 className="header mb-5">{buyBikeIns.title}</h3>
            <InsBigCard data={buyBikeIns.list} heading={true} />
          </div>
        </div>
        {/* Why do you need two-wheeler/bike insurance? */}
        <div className="py-5">
          <div className="container-lg">
            <h3 className="header">
              Why do you need two-wheeler/bike insurance?
            </h3>
            <p
              className="subTitle text-start"
              style={{ color: "var(--dark7502light750)" }}
            >
              The number of two-wheelers in India has grown rapidly in recent
              years. In the financial year 2021, two-wheeler sales in India were
              at 15.12 million units. With the high density of two-wheelers on
              the road, the possibility of accidents also increases. Maybe that
              is why Third-party Two-wheeler Insurance is mandatory by law. It
              covers you against damages to a third party two-wheeler/property
              or injury to the third party.
              <br />
              <br />
              ACKO provides three types of two-wheeler insurance plans. The
              extensive Comprehensive Insurance, the standalone Third-party
              Insurance and the Own Damage Two-wheeler Insurance policies. The
              best part is that you can buy these three bike insurance plans
              online with zero paperwork.
            </p>
          </div>
        </div>

        <div className="container-fluid py-5">
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
            <InsBigCard data={policies} heading={true} col={true} />
          </div>
        </div>
        {/* key features table  */}
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
        {/* benefits of bike insurance */}
        <div className="container-fluid">
          <div className="benefits py-4">
            <div>
              <HeadingCopy text={benefits.bTitle} classes="header" />
              <p className="subTitle">{benefits.bDesc}</p>
              <InsSmallCard data={benefits.list} />
            </div>
          </div>
        </div>

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
        <div className="container-fluid">
          <div className=" py-4">
            <div>
              <HeadingCopy text={whereShouldBuy.title} classes="header" />
              <p className="subTitle">{whereShouldBuy.desc}</p>
              <InsSmallCard data={whereShouldBuy.list} />
            </div>
          </div>
        </div>
        <div className="responsibleFactor py-5">
          <div className="container-lg">
            <HeadingCopy text={bikeInsTerminologies.title} classes="header" />
            <p className="subTitle">{bikeInsTerminologies.desc}</p>
            <InsListStyledCard data={bikeInsTerminologies.list} />
          </div>
        </div>
        {/* buy new car insurance  */}
        <div className=" Ins-Card-main">
          <div className="inner max-w-1068 ">
            <h3 className="header ">{benefitsRenewBikeIns.title}</h3>
            <p className="subTitle">{benefitsRenewBikeIns.desc}</p>
            <InsBigCard data={benefitsRenewBikeIns.list} />
          </div>
        </div>
        {/* easy claims with acko */}
        <div className="container-fluid">
          <div className=" py-4">
            <div>
              <HeadingCopy text={easyClaim.title} classes="header" />
              <p className="subTitle">{easyClaim.desc}</p>
              <InsSmallCard data={easyClaim.list} />
            </div>
          </div>
        </div>
        {/* need more help  */}
        <div className=" Ins-Card-main">
          <div className="inner max-w-1068 ">
            <h3 className="header ">{needHelp.title}</h3>
            <p className="subTitle">{needHelp.desc}</p>
            <InsBigCard data={needHelp.list} heading={true} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContentPage;
