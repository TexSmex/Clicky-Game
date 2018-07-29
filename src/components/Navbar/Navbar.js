import React from "react";

import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar-nav navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around mb-3">
    
        <li className="p-2">
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
);

export default Navbar;
