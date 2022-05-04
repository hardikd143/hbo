import { React } from "react";
import "../css/home.scss";
import Helmet from "react-helmet";
import HomeTabs from "../components/HomeTabs";
import OfficialPartner from "../components/OfficialPartner";
// import FavApps from "../components/FavApps";
import Testimonial from "../components/Testimonial";
import FavApps from "../components/FavApps";

const Home = () => {
  return (
    <div className="main ">
      <Helmet bodyAttributes={{ id: "body-sm" }} />
      <div className="home-main max-w-520">
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
      <div className="container-lg op pb-md-4 pb-0 ">
        <div className="official-partner ">
          <OfficialPartner />
        </div>
      </div>
      <div className=" tMonial ">
        <div className="container">
          <Testimonial />
        </div>
        {/* <FavApps/> */}
      </div>
      <div className="favApps">
        <div className="container">
          <h2>ACKO Insurance on your favourite apps</h2>
          <p>India’s top brands choose ACKO Insurance for their customers</p>
          <FavApps />
        </div>
      </div>

      {/* <Input type="health" />
      <Input type="car" /> */}
    </div>
  );
};

export default Home;
