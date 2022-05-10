import React from "react";

const CommonNumberedContent = ({ data }) => {
    // console.log(data);
  return (
    <>
      <div>
        {data.map((item, index) => {
          const { heading, para } = item;
            console.log(item);
          return (
            <div key={index}>
              <h3 className="commonNumberedHeading">
                {index + 1}. {heading}
              </h3>
              {para.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommonNumberedContent;
