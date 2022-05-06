import { React } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Submenu from "../components/Submenu";
import Submodal from "../components/Submodal";
const Layout = () => {
  return (
    <>
        <Navbar />
      <div className="container">
        <Submenu />
        <Submodal />
      </div>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
