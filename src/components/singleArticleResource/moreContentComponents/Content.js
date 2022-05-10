import React from "react";
import CommonHeading from "./CommonHeading";
import CommonParagraph from "./CommonParagraph";
import CommonNumberedContent from "./CommonNumberedContent";
const Content = ({ data }) => {
  const { type, content } = data;
  // return <div>Content</div>;
  // console.log(data );
  if (type === "commonHeading") {
    return <CommonHeading data={content} />;
  }
  if (type === "commonNumberedContent") {
    return <CommonNumberedContent data={content} />;
  }
  if (type === "commonParagraph") {
    return <CommonParagraph data={content} />;
  }
  // if (type === "commonNumberedContent") {
  //   return <CommonNumberedHeading data={Content} />;
  // }
};

export default Content;
