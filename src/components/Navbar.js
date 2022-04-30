import React from "react";
import Logo from "./Logo";
import "../css/navbar.scss";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useGlobalContext } from "../context";
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
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-right d-flex align-items-center">
        <Logo />
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
        <a href="/login" className="btn btn-login btn-sm">
          login
        </a>
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
    </nav>
  );
};

export default Navbar;
