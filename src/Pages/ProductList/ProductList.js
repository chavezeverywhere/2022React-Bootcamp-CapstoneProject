import React, { useEffect, useState } from "react";
import ProductGrid from "../../Components/ProductGrid";
import Pagination from "../../Components/Pagination";
import ProductCategories from "../../MocData/product-categories.json";
//For the product grid ../../../mocks/en-us/featured-products.json
import Products from "../../MocData/products.json";
import FilterColumn from "../../Components/FilterColumn";
import "./ProductList.css";

const ProductList = () => {
  //Local store of the Products
  const originalFilteredProducts = Products;

  const possibleCategories = [];
  ProductCategories.results.map((result) => {
    possibleCategories.push({
      id: result.id,
      active: false,
    });
  });

  //Saving the last state of the products
  const [filteredProducts, setFilteredProducts] = useState(
    originalFilteredProducts.results
  );

  const [categoryStatus, setCategoryStatus] = useState(possibleCategories);

  const updateCategory = (id) => {
    const objIndex = categoryStatus.findIndex((object) => {
      return object.id === id;
    });
    categoryStatus[objIndex].active = !categoryStatus[objIndex].active;
    setCategoryStatus(categoryStatus);
  };

  //This function filters the products that are shown
  const filteringProducts = (id) => {
    const fProducts = originalFilteredProducts.results.filter((product) =>
      product.data.category.id.includes(id)
    );
    updateCategory(id);
    setFilteredProducts(fProducts);
  };

  return (
    <>
      <h1>This is the Product List Page</h1>
      <div className="productList">
        <div className="filterWrapper">
          <FilterColumn
            categories={ProductCategories.results}
            filteringFunc={filteringProducts}
          />
        </div>
        <div className="productGridWrapper">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default ProductList;
