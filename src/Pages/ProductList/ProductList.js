import React, { useEffect, useState, useMemo, useCallback } from "react";
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

  /**let possibleCategories = [];
  ProductCategories.results.map((result) => {
    possibleCategories = { ...possibleCategories, [result.id]: false };
  });*/

  //Saving the last state of the products
  const [filteredProducts, setFilteredProducts] = useState(
    originalFilteredProducts.results
  );

  const initialPossibleCategories = useMemo(() => {
    let possibleCategories = [];
    ProductCategories.results.map((result) => {
      possibleCategories = { ...possibleCategories, [result.id]: false };
    });
    return possibleCategories;
  }, []);

  console.log("Original", initialPossibleCategories);

  const [categoryStatus, setCategoryStatus] = useState(
    initialPossibleCategories
  );

  const updateCategory = useCallback(
    (id) => {
      categoryStatus[id] = !categoryStatus[id];
      setCategoryStatus(categoryStatus);
      console.log("CatStatus", categoryStatus);
    },
    [categoryStatus]
  );

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
