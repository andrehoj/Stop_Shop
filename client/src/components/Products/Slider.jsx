// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Slider() {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      <SwiperSlide>
        Slide 1
        <img src="images/ergo-k860/ergo-k860-cover.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        Slide 1
        <img src="images/ergo-k860/ergo-k860-cover.webp" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
