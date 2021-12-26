import { useState } from "react";

import classes from "./Slider.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowBackIos";
import { images } from "./DataSlider.js";

const Slider = () => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className={classes.slider}>
      <div
        className={classes.sliderInner}
        style={{ backgroundImage: `url(${images[currImg].image})` }}
      >
        <div
          className={classes.left}
          onClick={() => currImg > 0 && setCurrImg(currImg - 1)}
        >
          <ArrowBackIosIcon style={{fontSize: 30}}/>
        </div>
        <div className={classes.center}></div>
        <div
          className={classes.right}
          onClick={() => currImg < images.length - 1 && setCurrImg(currImg + 1)}
        >
          <ArrowForwardIosIcon  style={{fontSize: 30}}/>
        </div>
        {/* <img src={images[currImg].image} /> */}
        {/* <Image src={images[currImg].image} alt='villa' layout='fill'/> */}
      </div>
    </div>
  );
};

export default Slider;
