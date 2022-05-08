import React from "react";
import MainContent from "../components/resources/MainContent";
import MainSection from "../components/resources/MainSection";
import SideBar from "../components/resources/SideBar";
import { useResourceContext } from "../resContext";
const Resources = ({ resourceType }) => {
  const {getActive} = useResourceContext();
  return (
    <>
      <MainSection resType={resourceType} />
      <div className="rPage">
        <div className="resource-page-content">
          <SideBar activeLink={getActive(resourceType)} />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Resources;
