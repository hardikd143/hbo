import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "../css/navbar.scss";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useGlobalContext } from "../context";
import ThemeButton from "./ThemeButton";
import "../css/themeButton.scss";
const Navbar = () => {
  const { openSubmenu, closeSubmenu, toggleSubmodal, isSubmodalOpen } =
    useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav onMouseMove={handleSubmenu}>
      <div className="container-lg">
        <div className="nav-right d-flex align-items-center">
          <Logo type="logo-white" />
          <ul className="nav-links ">
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                products
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                resources
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-left d-flex align-items-center">
          <Link to="/login" className="btn btn-login btn-sm btn-green">
            login
          </Link>
          <Link
            to="/support/home"
            className="btn-help  text-capitalize"
          >
            help
          </Link>
          <ThemeButton defaultColor="white-lg black2white" />
          {isSubmodalOpen ? (
            <IoIosClose className="menu-icon " onClick={toggleSubmodal} />
          ) : (
            <IoIosMenu
              className="menu-icon"
              style={{ transform: "scaleX(0.8)" }}
              onClick={toggleSubmodal}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
