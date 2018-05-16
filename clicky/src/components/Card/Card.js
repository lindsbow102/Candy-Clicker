import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={require('../images/candycane.png')} />
    </div>
  </div>
);

export default Card;