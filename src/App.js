import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/index";
import About from "./components/pages/About/Index";
import Contact from "./components/pages/Contact/Index";
import Portfolio from "./components/pages/Portfolio/Index";
import Footer from "./components/Footer/index";
import "./app.css"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="main">
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

