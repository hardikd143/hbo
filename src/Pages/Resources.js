import React from "react";
import MainResourcePageContent from "../components/resources/MainResourceContent";
import MainSection from "../components/resources/MainSection";
import SideBar from "../components/resources/SideBar";
import { useResourceContext } from "../resContext";
const Resources = ({ resourceType }) => {
  const {getActiveLink} = useResourceContext();
  return (
    <>
      <MainSection resType={resourceType} />
      <div className="rPage">
        <div className="resource-page-content">
          <SideBar activeLink={getActiveLink(resourceType)} />
          <MainResourcePageContent />
        </div>
      </div>
    </>
  );
};

export default Resources;
