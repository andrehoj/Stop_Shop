// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

//swiper height and width are begin difficult, if you cant fix it by the end of the week change carousel libaries

export default function Slider({ imageLinks }) {
  return (
    <Swiper
      className="swiper-container"
      effect={"fade"}
      slidesPerView={1}
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 5000 }}
      waitForTransition={true}
    >
      {imageLinks.map((link) => {
        return (
          <SwiperSlide>
            <img
              src={`${link}`}
              alt="product cover"
              
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
