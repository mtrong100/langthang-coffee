import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const SpaceSlider = ({ spaceImages }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      loop={true}
      grabCursor={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="rounded-md mySwiper"
    >
      {spaceImages.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="overflow-hidden rounded-md group">
            <img src={item} className="img-cover" alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SpaceSlider;
