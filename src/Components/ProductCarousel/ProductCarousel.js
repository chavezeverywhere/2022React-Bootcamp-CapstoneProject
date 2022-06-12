import React,{useState,useEffect} from "react";
import "./ProductCarousel.css";
import CarouselCard from "./CarouselCard/CarouselCard";

const ProductCarousel = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      increment()
    },3000)
  })

  const increment= ()=>{
    if(currentSlide===(slides.length -1)){
      setCurrentSlide(0)
    }else{
      setCurrentSlide(currentSlide+1);
    }
  }


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
        <CarouselCard 
              urlImg={slides[currentSlide].data.main_image.url} 
              alt={slides[currentSlide].data.main_image.alt}/>
      </div>
    </div>
  );
};

export default ProductCarousel;
