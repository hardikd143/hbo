import { message } from "antd";
import React from "react";
import { AiOutlineLink } from "../icons";
const HeadingCopy = ({ text, classes }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    message.success("text copied");
  };
  return (
    <>
      <h3 className={`${classes ? classes : ""} headingCopy`}>
        {text}
        <AiOutlineLink onClick={() => handleCopy()} />
      </h3>
    </>
  );
};

export default HeadingCopy;
