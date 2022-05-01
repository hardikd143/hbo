import React from "react";
import "../css/supportHelp.scss";
import Logo from "../components/Logo";

const SupportHelp = () => {
  return (
    <div style={{width:'100%',height:'100vh'}} className="bg-white">
      <header>
        <div className="container h-80 d-flex align-items-center">
          <Logo type={"logo-purple"} />
        </div>
      </header>
    </div>
  );
};

export default SupportHelp;
