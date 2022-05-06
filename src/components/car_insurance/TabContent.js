import React from "react";
import AckoInsurance from "./AckoInsurance";
import BuyingGuide from "./BuyingGuide";
import CarInsIndia from './CarInsIndia';

const TabContent = ({ activeTab, pageFor }) => {
  if (activeTab === 0) {
    return <AckoInsurance  />;
  }
  if (activeTab === 1) {
    return <BuyingGuide currentPage={pageFor} />;
  }
  if (activeTab === 2) {
    return <CarInsIndia/>;
  }
};

export default TabContent;
