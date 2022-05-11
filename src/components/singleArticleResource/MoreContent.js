import React from "react";
import Content from "./moreContentComponents/Content";
const MoreContent = ({ data }) => {
  const { contentData } = data;
  return (
    <>
      <div className="inner">
        {contentData.map((item, index) => {
          return <Content key={index} data={item} />;
        })}
      </div>
    </>
  );
};

export default MoreContent;
