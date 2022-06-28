import React from "react";
import ProductCarousel from "../../Components/ProductCarousel";
import ProductGrid from "../../Components/ProductGrid";
import ProductSlide from "../../Components/ProductSlide";
//For the slider
//import FeaturedBanners from "../../MocData/featured-banners.json";
//For the product carousel
//import ProductCategories from "../../MocData/product-categories.json";
//For the product grid ../../../mocks/en-us/featured-products.json
//import FeaturedProducts from "../../MocData/featured-products.json";
import Loading from "../../Components/Loading/Loading";

import { useProductCategories } from "../../API/Hooks/useProductCategories";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import { useProducts } from "../../API/Hooks/useProducts";

import "./Home.css";

const Home = () => {
  const productCategoriesData = useProductCategories();
  const featuredBanners = useFeaturedBanners();
  const products = useProducts(16);

  const goToPage = () => {
    console.log(window.location.href);
    window.location.assign(window.location.href + "productlist");
  };

  console.log(featuredBanners.data);

  return (
    <>
      {/** 
       * <ProductSlide slides={FeaturedBanners.results} />
      <ProductCarousel slides={ProductCategories.results} />
      <ProductGrid products={FeaturedProducts.results} />
      */}

      {/** Loading Featured Banners using API */}
      {featuredBanners.isLoading ? (
        <Loading />
      ) : (
        <ProductSlide slides={featuredBanners.data.results} />
      )}

      {/** Loading Product Categories using API */}
      {productCategoriesData.isLoading ? (
        <Loading />
      ) : (
        <ProductCarousel slides={productCategoriesData.data.results} />
      )}

      {/** Loading Products using API */}
      {products.isLoading ? (
        <Loading />
      ) : (
        <ProductGrid products={products.data.results} />
      )}

      <button onClick={goToPage}>View all products</button>
    </>
  );
};

export default Home;
