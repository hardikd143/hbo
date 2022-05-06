// import Item from "antd/lib/list/Item";
import React from "react";
import insuranceTabData from "../../data/insuranceTabData";

const InsTab = ({ type, activeTab, changeTab }) => {
  let pageContent = insuranceTabData.find((item) => item.page === type);
  const { tabs } = pageContent;
  return (
    <div className="InsTab">
      <div className="tabButton-wrapper">
        <div className="inner">
          {tabs.map((item, index) => {
            const { tabButton } = item;
            return (
              <button
                key={index}
                className={`tabButton ${index === activeTab ? "active" : null}`}
                onClick={() => changeTab(index)}
              >
                {tabButton}
              </button>
            );
          })}
        </div>
      </div>
      <div className="tabcontent">

      </div>
    </div>
  );
};

export default InsTab;
