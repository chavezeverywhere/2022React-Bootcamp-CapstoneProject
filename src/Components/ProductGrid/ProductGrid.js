/* eslint-disable max-len */
import React from "react";
import "./ProductGrid.css";
import ProductCard from "./ProductCard/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <>
      <div className="productGrid">
        {products.map((product) => {
          return (
            <ProductCard
              proImage={product.data.images[0].image}
              proName={product.data.name}
              proCategory={product.data.category.slug}
              proPrice={product.data.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductGrid;
