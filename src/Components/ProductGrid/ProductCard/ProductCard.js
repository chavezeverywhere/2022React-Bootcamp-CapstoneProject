import React from "react";
import "./ProductCard.css";

const ProductCard = ({proImage,proName,proCategory,proPrice}) => {
  //Image of the product
  //Name of the product
  //Category
  //Price

  return (
    <div className="productCard">
      <img src={proImage.url} alt={proImage.alt}/>
      <div>Name: {proName}</div>
      <div>Category: {proCategory}</div>
      <div>Price: {proPrice}</div>
  </div>
  );
};

export default ProductCard;
