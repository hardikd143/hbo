import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Submenu from "../components/Submenu";
import Submodal from "../components/Submodal";
const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <Submenu />
      <Submodal />
      <Outlet/>
    </div>
  );
};

export default Layout;
