import React from "react";

const InsHeading = ({ type }) => {
  if (type === "bike") {
    type = "Two Wheeler";
  }
  return <h1 className="InsHeading">{type} insurance</h1>;
};

export default InsHeading;
