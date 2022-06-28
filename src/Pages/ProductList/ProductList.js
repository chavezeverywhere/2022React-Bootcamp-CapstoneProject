import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../../Components/ProductGrid";
import Pagination from "../../Components/Pagination";

import FilterColumn from "../../Components/FilterColumn";
import Loading from "../../Components/Loading/Loading";

import { useProducts } from "../../API/Hooks/useProducts";
import { useProductCategories } from "../../API/Hooks/useProductCategories";
import "./ProductList.css";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const productsAPI = useProducts(16);
  const productCategoriesData = useProductCategories();
  const originalFilteredProducts = productsAPI.data;

  useEffect(() => {
    console.log(
      "Fernando este es el nuevo param",
      searchParams.get("category")
    );
  }, [searchParams]);

  return (
    <>
      <h1>This is the Product List Page</h1>
      <div className="productList">
        <div className="filterWrapper">
          {productCategoriesData.isLoading ? (
            <Loading />
          ) : (
            <FilterColumn categories={productCategoriesData.data.results} />
          )}
        </div>
        <div className="productGridWrapper">
          {productsAPI.isLoading ? (
            <Loading />
          ) : (
            <ProductGrid products={productsAPI.data.results} />
          )}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default ProductList;
