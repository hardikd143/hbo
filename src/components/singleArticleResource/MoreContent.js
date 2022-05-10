import React from "react";
import CommonContent from "./moreContentComponents/Content";
const MoreContent = ({ data }) => {
  const { contentData, contentType } = data;
  return (
    <>
      <div className="inner">
        {contentData.map((item, index) => {
          return <CommonContent key={index} data={item} />;
        })}
      </div>
    </>
  );
};

export default MoreContent;
