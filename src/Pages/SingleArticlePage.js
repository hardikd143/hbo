import React from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/singleArticleResource/BreadCrumb";
import { resourceData } from "../data/resource";
import '../css/singleArticle.scss'
import InsureFamily from "../components/singleArticleResource/InsureFamily";
const SingleArticlePage = () => {
  const { article_url: url } = useParams();
  const articleData = resourceData
    .filter((item) => item.type === "articles")
    .find((item) => item.article_url === url);
  console.log(articleData);
  console.log(url);
  const { img, title, type, category } = articleData;
  return (
    <>
      <div className="article-content container-xl">
        
        <Helmet>
          <body className="body-white"></body>
        </Helmet>
        <BreadCrumb {...articleData} />
        <div className="article-main-content">
          <div className="content-right"></div>
          <div className="content-left">
            <InsureFamily/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleArticlePage;
