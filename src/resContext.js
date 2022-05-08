import React, { useState, useContext } from "react";
import sublinks from "./data/data";
import { mainContentData } from "./data/resource";
const ResourceContext = React.createContext();
const ResourceProvider = ({ children }) => {
  const [mainContent, setMainContent] = useState("");
  const [sideBarLinks, setSideBarLinks] = useState(() => {
    return sublinks.find((item) => item.page === "resources");
  });
  const getContent = (resType) => {
    const pageContent = mainContentData.find((item) => item.page === resType);
    setMainContent(pageContent);
  };
  const getActive = (resType)=>{
    let aTab = mainContentData.find((item)=>item.type === resType)
    return aTab.type
  }
  return (
    <ResourceContext.Provider
      value={{
        mainContent,
        getContent,
        sideBarLinks,
        getActive
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
