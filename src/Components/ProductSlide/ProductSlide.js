import React,{useState} from "react";
import "./ProductSlide.css";
import SliderCard from "./SliderCard"

const ProductSlide = ({slides}) => {
  const [currentImg, setCurrentImg] = useState(0);

  const increment= ()=>{
    if(currentImg===(slides.length -1)){
      setCurrentImg(0)
    }else{
      setCurrentImg(currentImg+1);
    }
  }

  const decrease = ()=>{
    if(currentImg===0){
      setCurrentImg(2)
    }else{
      setCurrentImg(currentImg-1);
    }
  }
  return (
    <div className="productSlider">
      <button onClick={decrease}>{"<"}</button>
      <div className="slideWrapper">
      {/** 
       * question to the mentor
        slides.map((slide)=>{
          return (
            <SliderCard 
              urlImg={slide.data.main_image.url} 
              alt={slide.data.main_image.alt}/>
          )
        })*/
      }
      <SliderCard 
        urlImg={slides[currentImg].data.main_image.url} 
        alt={slides[currentImg].data.main_image.alt}
      />
      </div>
      <button onClick={increment}>{">"}</button>
    </div>
  );
};

export default ProductSlide;
