import React from "react";

const FavApps = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../img/apps", false, /\.(png|jpe?g|svg)$/)
  );
  const appImages = Object.values(images);
  return (
      <div className="favApps-Wrapper">
      {appImages.map((item, index) => {
          return (
          <div key={index} className="app-img">
            <img src={item} alt="app-img" />
          </div>
        );
      })}
    </div>
  );
};

export default FavApps;
