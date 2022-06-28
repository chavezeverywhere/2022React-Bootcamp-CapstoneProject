import React, { useState, useEffect } from "react";
import "./ProductCarousel.css";
import CarouselCard from "./CarouselCard/CarouselCard";
import { Link, useSearchParams } from "react-router-dom";

const ProductCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parans, setParams] = useSearchParams();

  useEffect(() => {
    setTimeout(() => {
      increment();
    }, 3000);
  });

  const increment = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const addParams = () => {
    setParams("asd");
  };

  return (
    <div className="productCarrousel">
      <div className="carouselWrapper">
        {/**     Preguntar mentor  
         * slides.map((slide)=>{
            return (
            <CarouselCard 
              urlImg={slide.data.main_image.url} 
              alt={slide.data.main_image.alt}/>
            )
          })
        */}
        {/**<CarouselCard
          urlImg={slides[currentSlide].data.main_image.url}
          alt={slides[currentSlide].data.main_image.alt}
        /> */}
        <CarouselCard
          urlImg={slides[currentSlide].data.main_image.url}
          alt={slides[currentSlide].data.main_image.alt}
        />
        <p>
          <Link to={`productlist/?category=${slides[currentSlide].id}`}>
            {slides[currentSlide].data.name}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProductCarousel;
