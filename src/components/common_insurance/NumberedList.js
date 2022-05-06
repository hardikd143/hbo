import React from "react";

const NumberedList = ({ data }) => {
  return (
    <div className="numberedList-wrapper">
      {data.map((item, index) => {
        const { title, content } = item;
        return (
          <div key={index} className="numberedList-item">
            <h3>
              {index + 1}. {title}
            </h3>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NumberedList;
