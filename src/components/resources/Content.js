import React from "react";
import CategoryTab from "./CategoryTab";
import ResourceWrapper from "./ResourceWrapper";

const Content = ({ data }) => {
  return (
    <div className="resource-content ">
      <CategoryTab />
      <div className="single-resource-wrapper">
        {data.map((item, index) => {
          return (
              <ResourceWrapper key={index} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
