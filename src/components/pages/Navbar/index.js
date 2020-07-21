import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return ( 
  <div class="navbar bg-light shadow-sm py-0">
    <div class="container px-0 d-flex flex-column flex-md-row align-items-center">
        <h2 class="my-0 p-2 mr-md-auto font-weight-normal">Alex Saiyan</h2>
        <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="./index.html">About</a>
            <a class="p-2 text-dark" href="./contact.html">Contact</a>
            <a class="p-2 text-dark" href="./portfolio.html">Portfolio</a>
        </nav>
    </div>
  </div>
  );
}

export default Navbar;
