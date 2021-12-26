import { useState } from "react";
import { Swiper, SwiperSlide, Parallax } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import "swiper/css";

import { images } from "../slider/DataSlider";
import classes from './Slider2.module.css'

const Slider2 = () => {
    const [currImg, setCurrImg] = useState(0);
  const slides = [];

  for (let i = 0; i < 3; i += 1) {
    slides.push(
      <SwiperSlide key={`slide${i}`}>
        <div
          className={classes.sliderInner}
          style={{ backgroundImage: `url(${images[currImg].image})` }}
        ></div>
      </SwiperSlide>
    );
  }

  return (
    <div className={classes.slider}>
      <Swiper id="main">{slides}</Swiper>
    </div>
  );
};

export default Slider2;

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };
