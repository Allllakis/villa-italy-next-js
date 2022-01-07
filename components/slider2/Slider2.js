
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Parallax, Navigation } from "swiper";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css";

import { images } from "../slider/DataSlider";
import Button from "../ui/button";

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
            // data-swiper-parallax="5%"
            style={{ backgroundImage: `url(${images[1].image})`}}
          >
            <div className={classes["content-wrapper"]} 
            >
              <h1>
                Welcome to your <br /> beautiful villa
              </h1>
              <div className={classes.btn}>
                <Button link={"/"}>
                  <span>Book now</span>
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={classes.sliderInner}
            // data-swiper-parallax="5%"
            style={{ backgroundImage: `url(${images[0].image})` }}
          >
             <div className={classes["content-wrapper"]}>
              <h1>
                Welcome to your <br /> beautiful villa
              </h1>
              <div className={classes.btn}>
                <Button link={"/"}>
                  <span>Book now</span>
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={classes.sliderInner}
            // data-swiper-parallax="5%"
            style={{ backgroundImage: `url(${images[2].image})` }}
          >
            <div className={classes["content-wrapper"]}>
              <h1>
                Welcome to your <br /> beautiful villa
              </h1>
              <div className={classes.btn}>
                <Button link={"/"}>
                  <span>Book now</span>
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider2;
