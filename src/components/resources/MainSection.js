import React, { useEffect } from "react";
import img1 from "../../img/resource-main-1.svg";
import img2 from "../../img/resource-main-2.svg";
import "../../css/resource.scss";
import { useResourceContext } from "../../resContext";
const MainSection = ({ resType }) => {
  const { mainContent, getMainContent } = useResourceContext();
  useEffect(() => {
    getMainContent(resType);
  });
  const { heading, desc } = mainContent;
  return (
    <div className="mainSection ">
      <div className="mainImg hide-md">
        <img src={img1} alt="img" />
      </div>
      <div className="mainContent">
        <h2>{heading}</h2>

        <p>{desc}</p>
        <button
          className="btn btn-green btn-md 
        "
        >
          subscribe
        </button>
      </div>
      <div className="mainImg">
        <img src={img2} alt="img" />
      </div>
    </div>
  );
};

export default MainSection;
