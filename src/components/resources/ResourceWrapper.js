import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "../../icons";
const ResourceWrapper = ({ item, mainPage }) => {
  const { img, title, type, date } = item;
  console.log(img);
  return (
    <Link to={`/${type}`} className="resourceWrapper">
      <div className="img-wrapper">
        <img src={img} alt="img" />
      </div>
      <div className="content-wrapper">
        <p className="maintitle">{title}</p>

        {mainPage === "articles" && (
          <div className="articlePage-content">
            <p>Team acko</p>
            <div className="dot"></div>
            <p>{date}</p>
          </div>
        )}
        {mainPage !== "articles" && (
          <p className="readMore">
            Read more <MdOutlineKeyboardArrowRight />{" "}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ResourceWrapper;
