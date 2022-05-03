import { React } from "react";
import "../../node_modules/antd/dist/antd.min.css";
import { useGlobalContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "../icons";
const ThemeButton = ({ defaultColor }) => {
  const { darkTheme, changeTheme } = useGlobalContext();
  return (
    <div className="theme-selector">
      <button className={`theme-btn ${defaultColor}`} onClick={() => changeTheme()}>
        {darkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  );
};

export default ThemeButton;
