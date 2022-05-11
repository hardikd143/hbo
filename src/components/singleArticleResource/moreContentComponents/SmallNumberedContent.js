import React from "react";
import ParagraphTitled from "./ParagraphTitled";

const SmallNumberedContent = ({ data, ordered }) => {
  return (
    <>
      {/* <ol> */}
      {data.map((item, index) => {
        return (
          <li key={index} className="smallNumbered-item">
            <span className={`${ordered ? "item-index" : "dot"}`}>
              {`${ordered ? `${index + 1}.` : ""}`}
            </span>
            <ParagraphTitled data={item}/>
            
          </li>
        );
      })}
      {/* </ol> */}
    </>
  );
};

export default SmallNumberedContent;
