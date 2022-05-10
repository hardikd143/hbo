import React from "react";
import { Link } from "react-router-dom";
import Capitalize from "../../Capitalize";

const BreadCrumb = ({ type, category, article_url, title }) => {
  return (
    <div className="article-breadcrumb customBreadCrumb">
      <p>
        <Link to={`/`}>Home</Link> /{" "}
        <Link to={`/${type}`}>{Capitalize(type)}</Link> /{" "}
        <Link to={`/articles/${category.toLowerCase().replaceAll(" ", "-")}`}>
          {category}
        </Link>{" "}
        / {title}
      </p>
    </div>
  );
};

export default BreadCrumb;
