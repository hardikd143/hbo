import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import sublinks from "../data";

const Submodal = () => {
  const {
    toggleSubmodal,
    isSubmodalOpen,
  } = useGlobalContext();
  return (
    <div 
      className={`container-fluid ${
        isSubmodalOpen ? "submodal show" : "submodal"
      }`}
    >
      <div className="container submodal-inner">
        <div className="btn-div mb-3 ">
          <Link to="/login" className="btn btn-md btn-black">
            login
          </Link>
          <Link to="/support/home" className="btn btn-md btn-transparent text-white text-capitalize">
            help
          </Link>
        </div>
        {sublinks.map((item, index) => {
          const { links, page } = item;
          return (
            <article key={index} className="submodal-wrapper">
              <h4>{page}</h4>
              <div className="submodal-links">
                {links.map((link, index) => {
                  const { url, icon, label } = link;
                  return (
                    <Link
                      key={index}
                      to={url}
                      className="subLinks"
                      onClick={() => toggleSubmodal()}
                    >
                      {icon}
                      {label}
                    </Link>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Submodal;
