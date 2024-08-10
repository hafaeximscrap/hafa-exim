import React from "react";
import "./Footer.css";
import HomeLogo from "../../assets/logo.png";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content row m-0">
        <div
          className="footer-section-logo col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="footer-image-container">
            <img
              className="footer-img-logo"
              src={HomeLogo}
              alt="no_logo-found"
            />
          </div>
          <br></br>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div
          className="footer-section-text col-lg-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="footer-info">
            <h3 className="footer-section-heading"> Contact info</h3>
            <ul className="m-0 p-0">
              <li className="info-list">
                <strong> Phone: </strong> &nbsp; <p> 12345678910 </p>
              </li>
              <li className="info-list">
                <strong> Email: </strong> &nbsp; <p> lorem@ipsum.com </p>
              </li>
              <li className="info-list-address">
                <strong> Address: </strong> <br></br>
                <address> Lorem Ipsum is simply dummy text. </address>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="footer-section-links col-lg-4"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="footer-links">
            <h3 className="footer-section-heading">Quick links</h3>
            <br></br>
            <ul>
              <li>
                <a className="footer-link" href="#Home">
                  <div className="quick-link-list p-2">
                    {/* <span class="material-symbols-rounded menu-icon ">Home</span>
                  &nbsp; */}
                    Home
                  </div>
                </a>
              </li>
              <li>
                <a href="#About" className="footer-link">
                  <div className="quick-link-list p-2">
                    {/* <span class="material-symbols-rounded menu-icon ">info</span>
                  &nbsp; */}
                    About
                  </div>
                </a>
              </li>
              <li>
                <a href="#Product" className="footer-link">
                  <div className="quick-link-list p-2">
                    {/* <span class="material-symbols-rounded menu-icon ">precision_manufacturing</span> &nbsp; */}
                    Product
                  </div>
                </a>
              </li>
              <li>
                <a href="#Contact" className="footer-link">
                  <div className="quick-link-list p-2">
                    {/* <span class="material-symbols-rounded menu-icon ">alternate_email</span>
                  &nbsp; */}
                    Contact
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="page-rights pb-3">
        <div> ©️2024 All Rights Reserved @ loremipsum.com</div>
      </div>
    </footer>
  );
};

export default Footer;
