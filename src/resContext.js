import React, { useState, useContext } from "react";
import {sublinks} from "./data/data";
import { mainContentData } from "./data/resource";
import { resourceData } from "./data/resource";
const ResourceContext = React.createContext();
const ResourceProvider = ({ children }) => {
  const [mainContent, setMainContent] = useState("");
  // eslint-disable-next-line
  const [sideBarLinks, setSideBarLinks] = useState(() => {
    return sublinks.find((item) => item.page === "resources");
  });
  const getMainContent = (resType) => {
    const pageContent = mainContentData.find((item) => item.page === resType);
    setMainContent(pageContent);
  };
  const getActiveLink = (resType) => {
    let aTab = mainContentData.find((item) => item.type === resType);
    return aTab.type;
  };
  const getResourceContent = (resType, category) => {
    let pageResource = resourceData.filter((item) => item.type === resType);
    
    if (category === "All") {
      return pageResource;
    } else {
      const categorized = pageResource.filter(
        (item) => item.category === category
        );
        return categorized;
      }
    };
    
  return (
    <ResourceContext.Provider
      value={{
        mainContent,
        getMainContent,
        sideBarLinks,
        getActiveLink,
        getResourceContent,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};
export const useResourceContext = () => {
  return useContext(ResourceContext);
};

export { ResourceContext, ResourceProvider };
