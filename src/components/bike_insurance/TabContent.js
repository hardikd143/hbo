import React from "react";
import AckoInsurance from "../common_insurance/AckoInsurance";

const TabContent = ({ activeTab, pageFor }) => {
  if (activeTab === 0) {
    return <AckoInsurance currentPage={pageFor} />;
  }
  if (activeTab === 1) {
    return <div>Buying Guide</div>;
  }
  if (activeTab === 2) {
    return <div>Bike Insurance in India</div>;
  }
};

export default TabContent;
