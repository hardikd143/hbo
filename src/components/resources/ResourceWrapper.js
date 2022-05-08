import React from "react";
import { Link } from "react-router-dom";

const ResourceWrapper = ({item}) => {
    const {img,title,type}= item
  return (

    <Link to={`/${type}`} className="wrapper">
      <div className="img-wrapper">
        <img src={img} alt="img" />
      </div>
      <div className="content-wrapper">
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default ResourceWrapper;
