import React from "react";
import "./MobileNavbar.css";

const MobileSidebar = () => {
  const HideSidebar = () => {
    // console.log("entered")
    let mobileNavbarContainer = document.getElementById(
      "mobile-navbar-container"
    );

    if (
      mobileNavbarContainer &&
      mobileNavbarContainer.style &&
      mobileNavbarContainer.style.height === "16rem"
    ) {
      mobileNavbarContainer.style.height = "0rem";
    } 
  };

  return (
    <div id="mobile-navbar-container" >
      <ul id="mobile-navbar">
        <li className="mobile-nav-list" onClick={() => HideSidebar()}>
          <div className="mobile-nav-link-container">
            <a href="#Home" className="mobile-nav-link">
              Home
            </a>
          </div>
        </li>
        <li className="mobile-nav-list" onClick={() => HideSidebar()}>
          <div className="mobile-nav-link-container">
            <a href="#About" className="mobile-nav-link">
              About
            </a>
          </div>
        </li>
        <li className="mobile-nav-list" onClick={() => HideSidebar()}>
          <div className="mobile-nav-link-container">
            <a href="#Product" className="mobile-nav-link">
              Product
            </a>
          </div>
        </li>
        <li className="mobile-nav-list" onClick={() => HideSidebar()}>
          <div className="mobile-nav-link-container">
            <a href="#Contact" className="mobile-nav-link">
              Contact
            </a>
          </div>
        </li>
      </ul>

    </div>
  );
};

export default MobileSidebar;
