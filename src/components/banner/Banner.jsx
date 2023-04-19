import React from "react";
import { banner } from "../../data";

const Banner = () => {
  const { smallTitle, booking, preview } = banner;

  return (
    <section className="flex items-center justify-center bg-bannerBg fixedBg">
      <div className=" page-container">
        <div className="flex flex-col gap-[23px] text-center lg:text-left">
          {/* heading-content */}
          <div className="flex w-full lg:max-w-[751px] flex-col gap-2">
            <span className="text-xl md:text-[30px] font-semibold uppercase tracking-[0.12em] text-primary">
              {smallTitle}
            </span>
            <h1 className="text-4xl md:text-[60px] leading-tight lg:text-[82px] text-greySecondary font-bold tracking-[0.045em]">
              THE LANGTHANG <br /> COFFEE HOUSE
            </h1>
            <p className="text-lg tracking-[0.045em] lg:opacity-60 capitalize">
              không chỉ là coffee <br className="lg:hidden" /> chúng tôi bán cả
              sự trải nghiệm
            </p>
          </div>

          {/* button mobile */}
          <a className="lg:hidden" href="#menu">
            <button
              className={`mt-5 bg-primary font-bold text-lg py-[15px] px-[50px] rounded-2xl text-black`}
            >
              Trải nghiệm
            </button>
          </a>

          {/* button */}
          <div className="items-center hidden gap-5 lg:flex">
            <a href="#menu">
              <button className="btn-shinny-1 bg-primary font-bold text-lg py-[15px] px-[50px] rounded-lg text-black">
                {booking}
              </button>
            </a>
            <a
              className="font-medium underline capitalize"
              href="https://youtu.be/dQw4w9WgXcQ"
            >
              {preview}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
