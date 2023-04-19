import React from "react";
import { reply } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLike } from "react-icons/ai";

const Reply = () => {
  const { title, caption, clients } = reply;
  return (
    <section className="py-[68px]">
      <div className="page-container">
        {/* heading */}
        <div className="text-center mb-[50px]">
          <h1 className="text-3xl uppercase mb-[30px] tracking-[-0.03em] text-primary md:text-[60px] font-bold">
            {title}
          </h1>
          <p className="opacity-60 text-lg md:text-[26px] tracking-[-0.03em]">
            {caption}
          </p>
        </div>
        {/* client-slider */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className=" mySwiper pt-[100px]"
        >
          {clients.map((item) => {
            const { id, img, name, job, desc } = item;
            return (
              <SwiperSlide key={id}>
                <div className="flex flex-col card-client py-[21px] px-[26px] items-center justify-center bg-clientBg rounded-xl">
                  <div className="w-[150px] card-img h-[150px] rounded-full border-[10px] border-solid border-blackSecondary">
                    <img className="rounded-full img-cover" src={img} alt="" />
                  </div>
                  <div className="flex flex-col gap-1 mt-5 text-center">
                    <h1 className="font-medium text-black font-secondary">
                      {name}
                    </h1>
                    <span className="text-sm font-medium text-replyText">
                      {job}
                    </span>
                    <span className="mx-auto text-3xl text-black cursor-pointer">
                      <AiOutlineLike></AiOutlineLike>
                    </span>
                  </div>
                  <p className="mt-[10px] text-sm text-justify text-replyText">
                    {desc}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* button */}
        <button className="px-6 py-3 text-xl mt-[50px] font-medium mx-auto flex btn-shinny-1 text-black rounded-xl bg-primary ">
          Request Information
        </button>
      </div>
    </section>
  );
};

export default Reply;
