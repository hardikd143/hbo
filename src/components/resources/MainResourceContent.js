//
// content main resource page
//

import React from "react";
import { Link } from "react-router-dom";
import { mainContentData, resourceData } from "../../data/resource";
import ResourceWrapper from "./ResourceWrapper";
import { MdOutlineKeyboardArrowRight } from "../../icons";
const MainResourceContent = () => {
  return (
    <div className="resource-content resourcePage">
      <h2 className="mainHeading">All resources</h2>
      {mainContentData.slice(1, 4).map((ite, index) => {
        const { type } = ite;
        const mainData = resourceData.filter((rsrc) => {
          return rsrc.type === type;
        });

        return (
          <div className="single-popular mb-5" key={index}>
            <h2 className="Header">Popular {type}</h2>
            <div className="single-resource-wrapper  mb-4">
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
            <Link to={`/${type}`} className="btn btn-lg btn-transparent b2w btn-explore">Explore more {type} <MdOutlineKeyboardArrowRight/></Link>
          </div>
        );
      })}
    </div>
  );
};

export default MainResourceContent;
