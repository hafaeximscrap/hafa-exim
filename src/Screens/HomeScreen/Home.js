import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="Home" className="home-container">
     
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
