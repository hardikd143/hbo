import React from "react";
import { Link, useParams } from "react-router-dom";
import helpData from "../helpData";

const HelpArticlePage = () => {
  const { id } = useParams();
  const art = helpData.find((item) => item.id === id);
  console.log(id);
  console.log(art);
  const { articleName, articleText } = art;
  return (
    <>
      <div className="singleArticle-wrapper">
        <div className="breadCrumb">
          <Link to="/support/home">Help & Support </Link>/{" "}
          <Link to="/support/home"> Popular Topics</Link>
        </div>
        <h1 className="heading-1">{articleName}</h1>
        <article className="article-body ">
          <p>{articleText}</p>
        </article>
      </div>
    </>
  );
};

export default HelpArticlePage;
