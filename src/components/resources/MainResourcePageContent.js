//
// content main resource page
//

import React from "react";
import { mainContentData, resourceData } from "../../data/resource";
import ResourceWrapper from "./ResourceWrapper";
const MainContent = () => {
  return (
    <div className="resource-content resourcePage">
      <h2 className="mainHeading">All resources</h2>
      {mainContentData.slice(1, 4).map((ite, index) => {
        // console.log(`maintype : ${type}`);
        const { type } = ite;
        const mainData = resourceData.filter((rsrc) => {
          return rsrc.type === type;
        });

        return (
          <div className="single-popular" key={index}>
            <h2 className="Header">Popular {type}</h2>
            <div className="single-resource-wrapper mb-5">
              {mainData.slice(0, 3).map((item, index) => {
                return (
                  <ResourceWrapper
                    key={index}
                    item={item}
                    mainPage={item.type}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainContent;
