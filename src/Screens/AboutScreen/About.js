import React from "react";
import "./About.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/Scrap2.jpg"
import image2 from "../../assets/Scrap3.jpg"
import image3 from "../../assets/Scrap4.jpg"
import image4 from "../../assets/Scrap5.jpg"

const Home = () => {
  return (
    <section id="About" className="about-container ">
      <div className="about-head content-section row align-items-center m-0">
        <div
          className="image-container col-sm-12 col-md-12 col-lg-5"
          data-aos="zoom-in"
        >
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={1800}
            showArrows={false}
            showThumbs={false}
            stopOnHover={false}
            showStatus={false}
            emulateTouch={true}
            // width={'80%'}
            showIndicators={false}
            swipeable={true}
          >
            <div>
              <img
                className="about-img"
                src={image1}
                alt="no_img_found"
              />
            </div>
            <div>
              <img
                className="about-img"
                src={image2}
                alt="no_img_found"
              />
            </div>
            <div>
              <img
                className="about-img"
                src={image3}
                alt="no_img_found"
              />
            </div>
            <div>
              <img
                className="about-img"
                src={image4}
                alt="no_img_found"
              />
            </div>
          </Carousel>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-7">
          <h2 className="mt-4" data-aos="fade-up" data-aos-duration="1000">
            About us
          </h2>
          <p data-aos="fade-up" data-aos-duration="2000">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
      <div className="about-card row pt-5 align-items-center">
        <div className="col-lg-3 col-md-12 col-sm-12">
          <h6 className="ta-left">Why choose us?</h6>
          <h3 className="ta-left">Provide perfect and practical services</h3>
          <p className="ta-left p-0 mt-4">
            Lorem Ipsum is simply dummy text.
          </p>
        </div>

        <div
          className="col-lg-3 col-md-6 col-sm-12 mt-2"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="card">
            <h3>100+</h3>
            <strong>Happy Customers</strong>
            <p>
              Lorem Ipsum is simply dummy text.
            </p>
          </div>
        </div>

        <div
          className="col-lg-3 col-md-6 col-sm-12  mt-2"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="card">
            <h3>20+ </h3> 
            <strong>Countries</strong>
            <p>
              Lorem Ipsum is simply dummy text.
            </p>
          </div>
        </div>

        <div
          className="col-lg-3 col-md-6 col-sm-12 mt-2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="card">
            <h3>20+</h3>
            <strong>products</strong>
            <p>
              Lorem Ipsum is simply dummy text.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
