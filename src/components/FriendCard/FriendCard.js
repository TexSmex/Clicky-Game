import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
   
      <img alt={props.name} src={props.image} onClick={() => props.AlertHell(props.id)} />
      
    
  </div>
);

export default FriendCard;
