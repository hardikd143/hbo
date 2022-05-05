import React from "react";
import HeadingCopy from "../HeadingCopy";
const InsSmallCard = ({ data }) => {
  return (
    <div className="InsSmallCard-wrapper">
      {data.map((item, index) => {
        const { img, title, content } = item;
        return (
          <div key={index} className="InsSmallCard">
            <img src={img} alt="img" />
            <HeadingCopy text={title}  />
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InsSmallCard;
