import { React } from "react";
import "../css/home.scss";
import Helmet from "react-helmet";
import HomeTabs from "../components/HomeTabs";
import OfficialPartner from "../components/OfficialPartner";
// import FavApps from "../components/FavApps";
import Testimonial from "../components/Testimonial";
import FavApps from "../components/FavApps";
import mainImg1 from "../img/main-img-1.svg";
import mainImg2 from "../img/main-img-2.svg";

const Home = () => {
  return (
    <div className="main ">
      <Helmet bodyAttributes={{ id: "body-sm" }} />
      <div className="home-main ">
        <div className="home-main-img-wrapper">
          <img src={mainImg1} className="w-100" alt="home-img" />
        </div>
        <div className="container max-w-520">
          <div className="home-content">
            <h2>Insurance made easy</h2>
            <p>Zero commission. Zero paperwork</p>
          </div>
          <div className="home-tabs">
            <HomeTabs />
          </div>
        </div>
        <div className="home-main-img-wrapper">
          <img src={mainImg2} className="w-100" alt="home-img" />
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
