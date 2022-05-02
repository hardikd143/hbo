import React, { useState } from "react";
import Input from "./Input";
import homeTabData from "../homeTabData";
const HomeTabs = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="home-tab-btns">
        {homeTabData.map((item, index) => {
          return (
            <div
              key={index}
              className={`homeTab-btn ${index === value ? "active" : null}`}
              onClick={() => setValue(index)}
            >
              <div className="tab-icon">{item.icon}</div>
              <div className="tab-title">{item.title}</div>
            </div>
            //   <Input type={type} />
          );
        })}
      </div>
      <div className="home-tab-content">
        {homeTabData.map((item, index) => {
          const { type } = item;
          return (
            <>
              <div
                key={index}
                className={`tab-content tab-content-${index} ${
                  index === value ? "show" : null
                }`}
              >
                <Input type={type} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default HomeTabs;
