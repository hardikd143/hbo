import React from "react";
import listStyled from "../../img/list-style-img.svg";
const InsListStyledCard = ({ data }) => {
  return (
    <div className="InsListStyledCard-Wrapper">
      {data.map((item, index) => {
        return (
          <div key={index} className="InsListStyledCard">
            <div className="header">
              <div className="svg">
                <img src={listStyled} alt="img" />
              </div>
              <h3>{item.title}</h3>
            </div>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};
export default InsListStyledCard;