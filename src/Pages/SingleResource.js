import React from "react";
import Content from "../components/resources/Content";
import MainSection from "../components/resources/MainSection";
import SideBar from "../components/resources/SideBar";
import { useResourceContext } from "../resContext";
import { mainContentData, resourceData } from "../data/resource";
const SingleResource = ({ resourceType }) => {
  const { getActive } = useResourceContext();
  const pageResource = resourceData.filter((item) => item.type === resourceType);
  // console.log(pageResource);

  return (
    <>
      <MainSection resType={resourceType} />
      <div className=" rPage ">
        <div className="resource-page-content m-auto">
          <SideBar activeLink={getActive(resourceType)} />
          <Content data={pageResource} />
        </div>
      </div>
    </>
  );
};

export default SingleResource;
