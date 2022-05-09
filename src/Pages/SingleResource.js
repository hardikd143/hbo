import { React } from "react";
import { useParams } from "react-router-dom";
import Content from "../components/resources/Content";
import MainSection from "../components/resources/MainSection";
import SideBar from "../components/resources/SideBar";
import { useResourceContext } from "../resContext";
// import { mainContentData, resourceData } from "../data/resource";
import Capitalize from "../Capitalize";
const SingleResource = () => {
  let { url, category } = useParams();
  const { getActiveLink, getResourceContent } = useResourceContext();
  let finalCategory;
  if (category === undefined) {
    finalCategory = "all";
  } else {
    finalCategory = category;
  }
  return (
    <>
      <MainSection resType={url} />
      <div className=" rPage ">
        <div className="resource-page-content m-auto">
          <SideBar activeLink={getActiveLink(url)} />
          <Content
            data={getResourceContent(url ,Capitalize(finalCategory))}
            category={finalCategory}
            mainPage={url}
          />
        </div>
      </div>
    </>
  );
};

export default SingleResource;
