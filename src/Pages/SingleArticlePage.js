import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/singleArticleResource/BreadCrumb";
import { resourceData } from "../data/resource";
import "../css/singleArticle.scss";
import InsureFamily from "../components/singleArticleResource/InsureFamily";
import MoreContent from "../components/singleArticleResource/MoreContent";
const SingleArticlePage = () => {
  const { article_url: url } = useParams();
  const articleData = resourceData
    .filter((item) => item.type === "articles")
    .find((item) => item.article_url === url);
  const { img, title, date, mainContent,primContent,moreContent } = articleData;
  useEffect(() => {
    const setMainContent = (str) => {
      let para = document.querySelector("p.mainContent");
      para.innerHTML = str;
      // return str
    };
    setMainContent(mainContent);
  });
  return (
    <>
      <div className="article-content container-xl">
        <Helmet>
          <body className="body-white"></body>
        </Helmet>
        <BreadCrumb {...articleData} />
        <div className="article-main-content">
          <div className="content-right">
            <h2 className="title">{title}</h2>
            <div className="article-date">
              <p>Team acko</p>
              <div className="dot"></div>
              <p>{date}</p>
            </div>
            <p className="mainContent contentText"></p>
            <img src={img} alt="img" className="w-100 img" />
            {primContent && <p className="contentText">{primContent}</p>
            }
            <div className="more-content">
            <MoreContent data={moreContent}/>
            </div>
          </div>
          <div className="content-left">
            <InsureFamily />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleArticlePage;
