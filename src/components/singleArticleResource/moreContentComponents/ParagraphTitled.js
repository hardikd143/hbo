import React from "react";

const ParagraphTitled = ({ data }) => {
  return (
    <>
      <p className="commonParagraph">
        {data.title && <b>{data.title}</b>}
        
        {`${data.para ? data.para : data}`}
      </p>
    </>
  );
};

export default ParagraphTitled;
