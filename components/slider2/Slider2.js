import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Parallax, Navigation } from "swiper";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css";

import { images } from "../slider/DataSlider";

import classes from "./Slider2.module.css";

SwiperCore.use([Parallax, Scrollbar, Navigation]);

const SliderConfigs = {
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 2400,
  spaceBetween: 0,
  effect: "slide",
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: "swiper-button-next",
  },
};

const Slider2 = () => {
  return (
    <div className={classes.slider}>
      <Swiper
        {...SliderConfigs}
        slidesPerView={1}
        loop={true}
        navigation
        scrollbar={{
          draggable: true,
          dragSize: 500,
        }}
      >
        <SwiperSlide>
          <div
            className={classes.sliderInner}
            data-swiper-parallax="20%"
            style={{ backgroundImage: `url(${images[0].image})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={classes.sliderInner}
            style={{ backgroundImage: `url(${images[1].image})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={classes.sliderInner}
            style={{ backgroundImage: `url(${images[2].image})` }}
          ></div>
        </SwiperSlide>
        {/* <SwiperSlide>
      <div className={classes['slider-scrollbar']}>
        <div className={classes['swiper-scrollbar']}>

        </div>
      </div>
    </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider2;
