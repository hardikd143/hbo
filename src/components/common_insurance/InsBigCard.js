import React from "react";
import HeadingCopy from "../HeadingCopy";
const InsBigCard = ({ data, heading }) => {
  const getHeading = (title) => {
    if (heading) {
    //   return <HeadingCopy text={title} />;
      return <h3>{title}</h3> ;
    }
  };
  return (
    <div className="InsBigCard-wrapper">
      {data.map((item, index) => {
        const { content } = item;
        return (
          <div key={index} className="InsBigCard">
            {getHeading(item.title)}
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InsBigCard;
