import React, { useState } from "react";
import InsBreadCrumb from "../common_insurance/InsBreadCrumb";
import InsHeading from "../common_insurance/InsHeading";
import InsTab from "../common_insurance/InsTab";
import TabContent from "./TabContent";
const Insurance = ({ pageFor }) => {
  const [activeTab, setActiveTab] = useState(0);
  const changeTab = (num) => {
    setActiveTab(num);
  };
  return (
    <>
      <InsBreadCrumb type={pageFor} />
      <InsHeading type={pageFor} />
      <InsTab type={pageFor} activeTab={activeTab} changeTab={changeTab} />
      <TabContent activeTab={activeTab} pageFor={pageFor}/>
    </>
  );
};

export default Insurance;
