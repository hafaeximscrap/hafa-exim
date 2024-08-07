import React, { useState } from "react";
import "./Product.css";
const Product = () => {
  const [ProductListShow, setProductListShow] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState("");
  const ProductDetails = [
    { imgpath: "/assets/products/aluminium-scrap.jpg", name: "aluminium" },
    {
      imgpath: "/assets/products/copper_cathode_scrap.jpg",
      name: "coppercathode",
    },
    { imgpath: "/assets/products/copperwire_scrap.jpg", name: "copperwire" },
    { imgpath: "/assets/products/ignots_scrap.jpg", name: "ignots" },
    { imgpath: "/assets/products/paper_scrap.jpg", name: "paper" },
    { imgpath: "/assets/products/plastic_scrap.jpg", name: "plastic" },
    { imgpath: "/assets/products/rubber_scrap.jpg", name: "rubber" },
  ];

  const OpenProduct = (productName) => {
    if (productName) {
      setProductListShow(false);
      setSelectedProduct(productName);
      setTimeout(() => {
        window.location.href = "#Product"
      }, 200)
    }
  };

  return (
    <section id="Product" className="product-container">
      <h2 className="mt-4" data-aos="fade-up" data-aos-duration="1000">
        Products
      </h2>
      {ProductListShow ? (
        <div className="products-list content-section">
          <div className="product-box col-lg-4 col-md-6 col-sm-12">
            <div
              className="product aluminium-scrap"
              data-aos="zoom-in"
              data-aos-duration="1500"
              onClick={() => OpenProduct("aluminium")}
            >
              <button className="he-button fs-smaller">Aluminium Scrap</button>
            </div>
          </div>

          <div className="product-box col-lg-4 col-md-6 col-sm-12">
            <div
              className="product rubber"
              data-aos="zoom-in"
              data-aos-duration="1500"
              onClick={() => OpenProduct("rubber")}
            >
              <button className="he-button fs-smaller">Rubber Scrap</button>
            </div>
          </div>

          <div className="product-box col-lg-4 col-md-6 col-sm-12">
            <div
              className="product plastic"
              data-aos="zoom-in"
              data-aos-duration="1500"
              onClick={() => OpenProduct("plastic")}
            >
              <button className="he-button fs-smaller">Plastic Scrap</button>
            </div>
          </div>

          <div className="product-box col-lg-4 col-md-6 col-sm-12">
            <div
              className="product paper"
              data-aos="zoom-in"
              data-aos-duration="1500"
              onClick={() => OpenProduct("paper")}
            >
              <button className="he-button fs-smaller">Used paper Scrap</button>
            </div>
          </div>

          <div className="product-box col-lg-4 col-md-6 col-sm-12">
            <div
              className="product ignots"
              data-aos="zoom-in"
              data-aos-duration="1500"
              onClick={() => OpenProduct("ignots")}
            >
              <button className="he-button fs-smaller">Ignots Scrap</button>
            </div>
          </div>

          <div className="product-box col-lg-4 col-md-6 col-sm-12">
            <div
              className="product copper-wire"
              data-aos="zoom-in"
              data-aos-duration="1500"
              onClick={() => OpenProduct("copperwire")}
            >
              <button className="he-button fs-smaller">
                Copper wire Scrap
              </button>
            </div>
          </div>

          <div className="product-box col-lg-4 col-md-6 col-sm-12">
            <div
              className="product copper-cathode"
              data-aos="zoom-in"
              data-aos-duration="1500"
              onClick={() => OpenProduct("coppercathode")}
            >
              <button className="he-button fs-smaller">Copper Cathode</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-showcase content-section">
          <button
            className="he-button back-button"
            onClick={() => {
              // show list and close product
              setProductListShow(true);
              setSelectedProduct("");
            }}
          >
            <span class="material-symbols-rounded">arrow_back</span>
          </button>
          <br></br>
          <div className="product-content row">
            <div className="product-navbar-container col-lg-4">
              <ul className="product-navbar">
                <li
                  className={`product-menu ${
                    selectedProduct === "aluminium" && "selected-menu"
                  }`}
                  onClick={() => OpenProduct("aluminium")}
                >
                  Aluminium Scrap
                </li>
                <li
                  className={`product-menu ${
                    selectedProduct === "rubber" && "selected-menu"
                  }`}
                  onClick={() => OpenProduct("rubber")}
                >
                  Rubber Scrap
                </li>
                <li
                  className={`product-menu ${
                    selectedProduct === "plastic" && "selected-menu"
                  }`}
                  onClick={() => OpenProduct("plastic")}
                >
                  Plastic Scrap
                </li>
                <li
                  className={`product-menu ${
                    selectedProduct === "paper" && "selected-menu"
                  }`}
                  onClick={() => OpenProduct("paper")}
                >
                  Used paper Scrap
                </li>
                <li
                  className={`product-menu ${
                    selectedProduct === "ignots" && "selected-menu"
                  }`}
                  onClick={() => OpenProduct("ignots")}
                >
                  Ignots Scrap
                </li>
                <li
                  className={`product-menu ${
                    selectedProduct === "copperwire" && "selected-menu"
                  }`}
                  onClick={() => OpenProduct("copperwire")}
                >
                  Copper wire Scrap
                </li>
                <li
                  className={`product-menu ${
                    selectedProduct === "coppercathode" && "selected-menu"
                  }`}
                  onClick={() => OpenProduct("coppercathode")}
                >
                  Copper Cathode
                </li>
              </ul>
            </div>
            <div className="product-details col-lg-8 col-sm-12">
              <div className="product-image-container">
                <img
                  className="product-image"
                  src={`${
                    selectedProduct
                      ? ProductDetails.filter(
                          (ival) => ival.name === selectedProduct
                        )[0].imgpath
                      : ""
                  }`}
                  alt="image_not_found"
                />
              </div>
              <div className="product-description-container">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
