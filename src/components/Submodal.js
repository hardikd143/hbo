import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import sublinks from "../data";

const Submodal = () => {
  const {
    page: { links },
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
          <a href="/login" className="btn btn-md btn-black">
            login
          </a>
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
