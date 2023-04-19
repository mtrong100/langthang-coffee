import React from "react";
import { space } from "../../data";
import SpaceSlider from "./SpaceSlider";

const Space = () => {
  const { title, desc, spaceImages } = space;
  return (
    <section className="pb-16 md:py-24 bg-blackPure">
      <div className="page-container grid lg:grid-cols-2 gap-[35px]">
        {/* space-content */}
        <div className="flex flex-col gap-[30px] lg:gap-[40px]">
          <h1 className="font-secondary text-primary text-4xl md:text-[58px] font-bold">
            {title}
          </h1>
          <p className="text-[14px] md:text-xl text-greyThird">{desc}</p>
        </div>

        {/* space-slider */}
        <div>
          <SpaceSlider spaceImages={spaceImages}></SpaceSlider>
        </div>
      </div>
    </section>
  );
};

export default Space;
