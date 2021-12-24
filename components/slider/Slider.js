import { useState } from "react";
import Image from "next/image";
import dataSlider from "./DataSlider";
import classes from "./Slider.module.css";
import BtnSlider from './BtnSlider';

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {

  }

  const prevSlide = () => {

  }
  return (
    <div className={classes.slidercontainer}>
      {dataSlider.map((item, index) => {
        const { id, title, image } = item;

        return (
          <div className={classes.slide} key={index}>
            <img src={image} alt={title} />
          </div>
        );
      })}
       <BtnSlider moveSlide={nextSlide} direction={'next'}/>
       <BtnSlider moveSlide={prevSlide} direction={'prev'}/>
    </div>
   
  );
 
};

export default Slider;
