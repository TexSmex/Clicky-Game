import React from "react";

import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <div>
  <nav className="navbar-nav navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around mb-3 fixed-top">
    
        <li className="p-2 font-weight-bold">
        <a href=".">
          Clicky Game
        </a>
        </li>
        <li className="p-2">
          {props.title}
        </li>
        <li className="p-2">
        Score: {props.score} | Top Score: {props.topScore} 
        </li>
  </nav>
   <div className="jumbotron">
   <h1 className="white">Clicky Game!</h1>      
   <p className="white">Click on an image to earn points, but don't click on any more than once!</p>
 </div>
 </div>

);

export default Navbar;
