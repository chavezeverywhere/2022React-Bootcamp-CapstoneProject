import React from "react";
import ProductCarousel from "../../Components/ProductCarousel";
import ProductGrid from "../../Components/ProductGrid";
import ProductSlide from "../../Components/ProductSlide";
//For the slider
import FeaturedBanners from "../../MocData/featured-banners.json";
//For the product carousel
import ProductCategories from "../../MocData/product-categories.json";
//For the product grid ../../../mocks/en-us/featured-products.json
import FeaturedProducts from "../../MocData/featured-products.json";
import "./Home.css";

const Home = () => {
  const goToPage = () => {
    console.log(window.location.href);
    window.location.assign(window.location.href + "productlist");
  };

  return (
    <>
      <ProductSlide slides={FeaturedBanners.results} />
      <ProductCarousel slides={ProductCategories.results} />
      <ProductGrid products={FeaturedProducts.results} />
      <button onClick={goToPage}>View all products</button>
    </>
  );
};

export default Home;
