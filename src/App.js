import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/pages/Header/index";
import About from "./components/pages/About/Index";
import Contact from "./components/pages/Contact/Index";
import Portfolio from "./components/pages/Portfolio/Index";
import Footer from "./components/pages/Footer/index";
// import NavTabs from "./components/NavTabs";
// import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

