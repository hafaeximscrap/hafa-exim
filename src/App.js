import React, { Component } from "react";

// CSS
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Header from "./Components/HeaderComponents/Header";
import Footer from "./Components/FooterComponents/Footer";

// Screens
import Home from "./Screens/HomeScreen/Home";
import About from "./Screens/AboutScreen/About";
import Product from "./Screens/ProductScreen/Product";
import Contact from "./Screens/ContactScreen/Contact";

class App extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="App montserrat-regular">
        {/* Header */}
        <Header />

        {/* Screens */}
          <Home />
          <About />
          <Product />
          <Contact />

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
