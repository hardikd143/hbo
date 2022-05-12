import React from "react";

const ParagraphTitled = ({ data, isArray }) => {
  if (isArray) {
    return (
      <>
        {data.map((item, index) => {
          return (
            <p className="commonParagraph" key={index}>
              {item.title && <b>{item.title}</b>}
              {item.para}
            </p>
          );
        })}
      </>
    );
  }
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
