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
    <div id="mobile-navbar-container">
      <ul id="mobile-navbar">
        <a href="#Home" className="mobile-nav-link">
          <li className="mobile-nav-list" onClick={() => HideSidebar()}>
            <div className="mobile-nav-link-container">
                Home
            </div>
          </li>
        </a>

        <a href="#About" className="mobile-nav-link">
          <li className="mobile-nav-list" onClick={() => HideSidebar()}>
            <div className="mobile-nav-link-container">
                About
            </div>
          </li>
        </a>

        <a href="#Product" className="mobile-nav-link">
          <li className="mobile-nav-list" onClick={() => HideSidebar()}>
            <div className="mobile-nav-link-container">
                Product
            </div>
          </li>
        </a>

        <a href="#Contact" className="mobile-nav-link">
          <li className="mobile-nav-list" onClick={() => HideSidebar()}>
            <div className="mobile-nav-link-container">
                Contact
            </div>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default MobileSidebar;
