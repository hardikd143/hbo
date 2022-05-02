import { React } from "react";
import { Outlet } from "react-router-dom";
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
    </>
  );
};

export default Layout;
