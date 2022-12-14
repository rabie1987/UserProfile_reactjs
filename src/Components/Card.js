import React, { useState } from "react";
import "./Card.css";
import image from "./img1.JPG";
function Card({ name, profile, address }) {
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src={image} alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className="lower-container">
        <h3>{name}</h3>
        <h4>{profile}</h4>
        <p>{address}</p>
        <button>Visit Profile</button>
      </div>
    </div>
  );
}

export default Card;
