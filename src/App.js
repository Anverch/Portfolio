import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar/index";
import Home from "./components/pages/Home/Index";
import Contact from "./components/pages/Contact/Index";
import Portfolio from "./components/pages/Portfolio/Index";
// import Footer from "./components/Footer";
// import "./App.css";

function App() {
  return (
      <div>
        <Navbar />
          <Home />
          <Contact />
          <Portfolio />
        {/* <Footer /> */}
      </div>
  );
}

export default App;

