import React from "react";
import "./Home.css";
import HomeLogo from "../../assets/logo.png";

const Home = () => {

  return (
    <section id="Home" className="home-container">

      {/* Home image desktop header which will be hidden when the webpage is scrolled */}
      <div id="home-image-header" className="desktop-header-container p-2">
        <div className="desktop-header">
          <div className="logo-container">
            <img
              src={HomeLogo}
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

      <div className="home-main-content">
        <div className="home-text-small">Hey, we are</div>
        <div
          className="home-text"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          HAFA EXIM
        </div>
        <div
          className="home-button-container"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <a href="#About">
            <button className="he-button"> Contact us</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
