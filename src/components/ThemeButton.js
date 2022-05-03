import { React} from "react";
import "../../node_modules/antd/dist/antd.min.css";
import { useGlobalContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "../icons";
const ThemeButton = () => {
  const {darkTheme,changeTheme}= useGlobalContext()
  
  return (
    <div className="theme-selector">
      <button className="theme-btn" onClick={() => changeTheme()}>
        {darkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  );
};

export default ThemeButton;
