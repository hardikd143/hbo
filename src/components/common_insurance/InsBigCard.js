import React from "react";
const InsBigCard = ({ data, heading, col,img }) => {
  return (
    <div className={`InsBigCard-wrapper ${col?'col3':''} `}>
      {data.map((item, index) => {
        const { content } = item;
        return (
          <div key={index} className="InsBigCard">
            {img && <img src={item.img} alt="img" className="w-100 mb-2"/>}
            {heading && <h3>{item.title}</h3>}
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InsBigCard;
