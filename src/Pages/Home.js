import { React } from "react";
import "../css/home.scss";
import Helmet from "react-helmet";
import HomeTabs from "../components/HomeTabs";
import OfficialPartner from "../components/OfficialPartner";

const Home = () => {
  return (
    <div className="main ">
      <Helmet
        bodyAttributes={{ id: "body-sm" }}
      />
      <div className="home-main">
        <div className="container">
          <div className="home-content">
            <h2>Insurance made easy</h2>
            <p>Zero commission. Zero paperwork</p>
          </div>
          <div className="home-tabs">
            <HomeTabs />
          </div>
        </div>
      </div>
        <div className="container-lg op">
          <div className="official-partner ">
            
            <OfficialPartner />
          </div>
        </div>
      {/* <Input type="health" />
      <Input type="car" /> */}
    </div>
  );
};

export default Home;
