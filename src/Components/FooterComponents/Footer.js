import React from "react";
import "./Footer.css";
import HomeLogo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="quick-links">
            <a href="#Contact">
              {" "}
              <strong> Contact </strong>{" "}
            </a>
            <a href="#About">
              {" "}
              <strong> About</strong>{" "}
            </a>
            <a href="#Why">
              {" "}
              <strong> Why HafaExim </strong>{" "}
            </a>
            <a href="#Product">
              {" "}
              <strong> Our Products </strong>{" "}
            </a>
          </div>

          <img className="footer-logo" src={HomeLogo} alt="No_logo_found" />

          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              title="Contact us on Facebook"
              target="_blank"
            >
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              title="Contact us on LinkedIn"
              target="_blank"
            >
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com"
              title="Contact us on Instagram"
              target="_blank"
            >
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.x.com" title="Contact us on X" target="_blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>

          <div className="mail-area" title="Mail us">
            <a href="mailto:hafaeximscrap@gmail.com">
              <strong> hafaeximscrap@gmail.com </strong>
            </a>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="page-rights pb-3">
        <div> ©️2024 All Rights Reserved @ hafaeximscrap@gmail.com </div>
      </div>
    </footer>
  );
};

export default Footer;
