import React from "react";
import { Link } from "react-router-dom";
import { useResourceContext } from "../../resContext";

const SideBar = ({activeLink}) => {
  const { sideBarLinks } = useResourceContext();
  return (
    <div className="resource-sidebar">
      <div className="sidebar">
        {sideBarLinks.links.map((item, index) => {
          const { label, icon, url ,type} = item;
          return (
            <Link to={`/${url}`} key={index} className={`${activeLink === type?'active':''}`}>
              {icon} {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
