import React from "react";
import "./Cartoons.css";

const Cartoons = props => (

  <div role="img"  className="clickable"  style={{ backgroundImage : `url(${props.image})` }} onClick={() => props.AlertHell(props.id)} ></div>
 
);

export default Cartoons;
