import React, { useState, useContext } from "react";
import {sublinks} from "./data/data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmodalOpen, setIsSubmodalOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  // by default theme will be light
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleSubmodal = () => {
    setIsSubmodalOpen(!isSubmodalOpen);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const changeTheme = () => {
    setDarkTheme(!darkTheme);
    let htmDoc = document.querySelector("html");
    if (!darkTheme) {
      htmDoc.setAttribute("data-theme", "dark");
    } else {
      htmDoc.setAttribute("data-theme", "light");
    }
  };
  return (
    <AppContext.Provider
      value={{
        isSubmodalOpen,
        toggleSubmodal,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
        darkTheme,
        changeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
