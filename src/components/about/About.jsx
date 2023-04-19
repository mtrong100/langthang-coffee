import React from "react";
import { about } from "../../data";

const About = () => {
  const { title, aboutSection } = about;
  return (
    <section className="text-black bg-primary bg-bestSellerBg">
      <div className="page-container pt-[83px] pb-[111px]">
        <h1 className="text-3xl leading-44 w-full max-w-[723px] mx-auto md:leading-90 md:text-[60px] uppercase tracking-[-0.035em] font-semibold text-center mb-[46px] ">
          {title}
        </h1>

        <div className="flex flex-col gap-[62px]">
          {aboutSection.map((item) => {
            const { id, img, title, desc } = item;
            return (
              <div
                className={`${
                  id === 2 ? "lg:flex-row-reverse" : ""
                } flex flex-col lg:flex-row justify-between items-center gap-[62px]`}
                key={id}
              >
                <div className="overflow-hidden rounded-md group">
                  <img className="img-cover" src={img} alt="" />
                </div>
                <div className="flex-1">
                  <h1 className="text-[36px] md:text-[48px] uppercase font-secondary font-bold underline">
                    {title}
                  </h1>
                  <p className="md:text-[22px] font-medium mt-3 md:mt-[44px]">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
