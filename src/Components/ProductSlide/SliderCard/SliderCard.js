import React from "react";
import "./SliderCard.css";

const SliderCard = ({urlImg, alt}) => {
  return (
    <div className="sliderCard">
    <img src={urlImg} alt={alt}/>
    </div>
  );
};

export default SliderCard;
