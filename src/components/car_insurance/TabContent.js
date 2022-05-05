import React from "react";
import AckoInsurance from "../common_insurance/AckoInsurance";
import BuyingGuide from "./BuyingGuide";

const TabContent = ({ activeTab, pageFor }) => {
  if (activeTab === 0) {
    return <AckoInsurance currentPage={pageFor} />;
  }
  if (activeTab === 1) {
    return <BuyingGuide currentPage={pageFor} />;
  }
  if (activeTab === 2) {
    return <div>Car Insurance in India</div>;
  }
};

export default TabContent;
