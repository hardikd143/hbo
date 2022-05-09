//
// content for single  resource
//

import React from "react";
import CategoryTab from "./CategoryTab";
import PopularResource from "./PopularResource";
import ResourceWrapper from "./ResourceWrapper";

const Content = ({ data, mainPage, category }) => {
  // console.log(`mainPage is ${mainPage} and category is ${category}`);
  return (
    <div className="resource-content ">
      <CategoryTab mainPage={mainPage} category={category} />
      {category === "all" && (
        <PopularResource data={data.slice(0, 4)} mainPage={mainPage} />
      )}
      <h2 className="Header">
        All {mainPage} {category !== "all" ? `on ${category}` : ""}
      </h2>
      <div className="single-resource-wrapper">
        {data.map((item, index) => {
          console.log(item);
          return (
            <ResourceWrapper key={index} item={item} mainPage={mainPage} />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
