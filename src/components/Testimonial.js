import React from "react";
import testimonialData from "../data/testimonialData";
import ratingImg from "../img/rating.svg";
const Testimonial = () => {
  return (
    <div className="testimonial-Wrapper">
      <div className="inner">
        {testimonialData.map((item, index) => {
          const { name, view, city, content, img } = item;
          return (
            <div className={`testiMonial ${view}`} key={index}>
              <img src={ratingImg} alt="" className="ratingImg"/>
              <p className="content">{content}</p>
              <div className="person">
                <img src={img} alt="person" />
                <div className="person-info">
                  <p>{name}</p>
                  <span>{city}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
