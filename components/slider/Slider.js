import { useState } from "react";
import Image from 'next/image'
import React from "react";
import classes from "./Slider.module.css";
// import { images } from "./DataSlider.js";
import {images} from './DataSlider.js';

const Slider = () => {
 const [currImg, setCurrImg] = useState(0)
  
  return (
    <div className={classes.slider}>
      <div className={classes.sliderInner} style={{backgroundImage: `url(${images[currImg].image})`}}>
        {/* <img src={images[currImg].image} /> */}
        {/* <Image src={images[currImg].image} alt='villa' layout='fill'/> */}
      </div>
    </div>
  );
};

export default Slider;
