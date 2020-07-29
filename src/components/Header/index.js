import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  const location = useLocation();
  return ( 
  <div className="navbar bg-light shadow-sm py-0 media">
    <div className="container px-0 d-flex flex-column flex-md-row align-items-center">
        <h2 className="my-0 p-2 mr-md-auto font-weight-normal">Aleks Saiyan</h2>
        <nav className="nav nav-tabs">
          <Link to="/" className="p-2 text-dark" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            About
          </Link>
          <Link to="/contact" className="p-2 text-dark" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
            Contact
          </Link>
          <Link to="/portfolio" className="p-2 text-dark" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
            Portfolio
          </Link>
        </nav>
    </div>
  </div>
  );
}

export default Header;
