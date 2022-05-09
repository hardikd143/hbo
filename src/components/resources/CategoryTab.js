import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Capitalize from "../../Capitalize";
import { resourceCategories } from "../../data/resource";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "../../icons";
const CategoryTab = ({ mainPage, category }) => {
  const [resourceTabValue, setResourceTabValue] = useState();
  useEffect(() => {
      resourceCategories.forEach((item, index) => {
        if (resourceCategories[index].category === Capitalize(category)) {
          setResourceTabValue(index);
        }
      });
    if (category === "all") {
      setResourceTabValue(0);
    }
  }, [category]);

  return (
    <div className="resource-category">
      <button className="resource-category-button">
        <MdOutlineKeyboardArrowLeft />
      </button>
      <div className="resource-cateories-list">
        {resourceCategories.map((item, index) => {
          const res = `${mainPage}/${item.category
            .toLowerCase()
            .replaceAll(" ", "-")}`;
          return (
            <Link
              to={`/${item.category === "All" ? mainPage : res}`}
              key={index}
              className={`resource-categories-item ${
                resourceTabValue === index ? "active" : ""
              }`}
              onClick={() => {
                setResourceTabValue(index);
              }}
            >
              {item.category}
            </Link>
          );
        })}
      </div>
      <button className="resource-category-button">
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default CategoryTab;
