import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "../../icons";
const ResourceWrapper = ({ item, mainPage }) => {
  const { img, category, title, type, date } = item;
  return (
    <Link
      to={
        mainPage === "guides"
          ? `/${category.toLowerCase().replaceAll(" ", "-")}`
          : mainPage === "articles"
          // ? `${category.toLowerCase().replaceAll(" ", "-")}/${item.article_url}`
          ? `/article/${item.article_url}`
          : `/${type}`
      }
      className="resourceWrapper"
    >
      <div className="img-wrapper">
        <img src={img} alt="img" />
      </div>
      <div className="content-wrapper">
        <p className="maintitle">{title}</p>

        {mainPage === "articles" && (
          <div className="articlePage-content article-date">
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
