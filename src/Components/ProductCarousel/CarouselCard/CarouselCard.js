import React from "react";
import "./CarouselCard.css";

const CarouselCard = ({urlImg,alt}) => {
  return (
    <div className="carouselCard">
    <img src={urlImg} alt={alt}/>
    </div>
  );
};

export default CarouselCard;
