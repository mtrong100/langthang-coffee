import React from "react";
import { bestSeller } from "../../data";
import { AiOutlineArrowRight } from "react-icons/ai";

const Bestseller = () => {
  const { title, img, seeMore } = bestSeller;
  return (
    <section className="text-black bg-primary bg-bestSellerBg">
      <div className="page-container pt-[69px] pb-[42px] md:pt-[192px] md:pb-[62px]">
        <div className="w-full max-w-[800px] mx-auto relative z-10">
          <h1 className="text-[118px] stroke-title text-left  md:text-center leading-105 capitalize font-secondary font-black tracking-[-0.025em] ">
            {title}
          </h1>
          <img
            className="absolute top-2/4 animate-pulse -z-10 left-2/4 transition-all duration-500 hover:rotate-45 -translate-x-2/4 -translate-y-2/4 w-[280px] -rotate-3"
            src={img}
            alt=""
          />
        </div>

        <button className="btn-shinny-2 mt-20 md:mt-[165px] animate-bounce mx-auto flex items-center gap-[15px] py-[15px] px-[34px] rounded-3xl border-[3px] border-solid border-blackPure text-2xl font-semibold">
          {seeMore}
          <span>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Bestseller;
