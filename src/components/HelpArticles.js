import React from "react";
import { Link } from "react-router-dom";
import helpData from "../data/helpData";
import {IoIosArrowForward} from 'react-icons/io'
const HelpArticle = () => {
  return (
    <>
      {helpData.map((article) => {
        const { id, articleName } = article;
        return (
          <section className="article-list" key={id}>
            <Link to={`/support/home/article/${id}`} className="article-Link">
            {/* <Link to={`/support/home/article/${id}-${articleName.replaceAll(' ','_')}`} className="article-Link"> */}
              <div className="article-name">
                <p>{articleName}</p>
                <IoIosArrowForward/>
              </div>
            </Link>
          </section>
        );
      })}
    </>
  );
};

export default HelpArticle;
