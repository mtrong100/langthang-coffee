import React from "react";
import { founder } from "../../data";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Founder = () => {
  return (
    <section className="text-black bg-bestSellerBg">
      <div className="page-container pt-[66px] pb-[116px]">
        <h1 className="text-center text-5xl uppercase mb-10 md:mb-[84px] leading-34 tracking-[0.02em] text-black md:text-[60px] lg:text-[84px] font-bold">
          và chúng tôi
        </h1>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {founder.map((item) => {
            const { id, img, name, job } = item;
            return (
              <div
                className="flex flex-col items-center justify-center py-16 text-white rounded-2xl bg-productBackground"
                key={id}
              >
                <div className="mx-auto border-4 border-solid border-primary rounded-full w-[156px]">
                  <img src={img} className="rounded-full img-cover" alt="" />
                </div>
                <div className="text-center mt-[24px]">
                  <h1 className="text-xl font-semibold">{name}</h1>
                  <p className="font-medium">{job}</p>
                </div>
                <div className="flex items-center gap-[30px] mt-[50px] text-[30px]">
                  <AiFillFacebook className="transition-all cursor-pointer hover:text-primary" />
                  <AiFillInstagram className="transition-all cursor-pointer hover:text-primary" />
                  <FaTiktok
                    size={25}
                    className="transition-all cursor-pointer hover:text-primary"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Founder;
