import React from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import { resourceData } from "../data/resource";
const SingleArticlePage = () => {
  const { article_url: url } = useParams();
const articleData = resourceData.filter((item)=>item.type === 'articles').find((item)=>item.article_url === url)
console.log(articleData);
  console.log(url);
  return (
    <>
      <Helmet>
        <body className="body-white"></body>
      </Helmet>
      <div>SingleArticlePage</div>
    </>
  );
};

export default SingleArticlePage;
