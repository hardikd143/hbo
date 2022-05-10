import React from "react";
import ResourceWrapper from "./ResourceWrapper";

const PopularSubResource = ({ data, mainPage }) => {
  return (
    <>
      <div className="resource-popular">
        <h2 className="Header">Popular {mainPage}</h2>
        <div className="rs">
          <div className="main">
            <ResourceWrapper mainPage={mainPage} item={data[0]} />
          </div>
          <div className="other">
            {data.slice(1, 4).map((item, index) => {
              return (
                <ResourceWrapper item={item} key={index} mainPage={mainPage} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularSubResource;
