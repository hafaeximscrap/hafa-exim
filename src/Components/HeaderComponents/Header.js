import React from "react";
import "./Header.css";
import MobileNavbar from "./MobileNavbar";
import Home from "../../assets/logo.png"

const Header = () => {
  
  const showSidebar = () => {
    // console.log("entered")
    let mobileNavbarContainer = document.getElementById(
      "mobile-navbar-container"
    );
    let header = document.getElementById("header-container");
    // console.log(mobileNavbarContainer.style.height, "MobileNavbar.style.height")
    if (
      mobileNavbarContainer &&
      mobileNavbarContainer.style &&
      mobileNavbarContainer.style.height === "16rem"
    ) {
      mobileNavbarContainer.style.height = "0rem";
      header.style.boxShadow = "0px 3px 6px lightgrey";
    } else {
      mobileNavbarContainer.style.height = "16rem";
      header.style.boxShadow = "none";
    }
  };

  return (
    <header id="header-container" className="header-hide">

      {/* Desktop header starts*/}
      <div className="desktop-header-container">
        <div className="desktop-header">
          <div className="logo-container">
            <img
              src={Home}
              alt="logo_not_loaded"
              className="comp-logo"
            />
          </div>
          <div className="navbar-container">
            <ul className="navbar">
              <li className="nav-list">
                <a href="#Home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-list">
                <a href="#About" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-list">
                <a href="#Product" className="nav-link">
                  Product
                </a>
              </li>
              <li className="nav-list">
                <a href="#Contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Desktop header ends*/}



      {/* Mobile header starts*/}
      <div className="mobile-header-container">
        <div className="mobile-header">
          <div
            className="menu-icon-container"
            onClick={() => {
              showSidebar();
            }}
          >
            <span class="material-symbols-rounded menu-icon ">menu</span>
          </div>
          <div className="logo-container">
            <img
              src={Home}
              alt="logo_not_loaded"
              className="comp-logo"
            />
          </div>
        </div>
      </div>
      <MobileNavbar />
       {/* Mobile header ends*/}


    </header>
  );
};

export default Header;
