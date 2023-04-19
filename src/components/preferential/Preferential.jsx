import React from "react";
import { voucher } from "../../data";

const Preferential = () => {
  const { title, combo } = voucher;
  return (
    <section>
      <div className="page-container">
        <h1 className="text-[40px] md:text-[60px] uppercase tracking-[0.02em] font-bold text-primary text-center mb-[60px]">
          {title}
        </h1>

        {/* content */}
        <div className="flex flex-col gap-[30px]">
          {combo.map((item) => {
            const { id, img, title, desc } = item;
            return (
              <div
                key={id}
                className={`${
                  id === 2 ? "lg:flex-row-reverse" : ""
                } flex flex-col lg:flex-row justify-between gap-[30px]`}
              >
                <div className="overflow-hidden rounded-3xl group">
                  <img className="img-cover" src={img} alt="" />
                </div>
                <div
                  className={`${
                    id === 2
                      ? "md:py-[34px] md:px-[35px]"
                      : "md:py-[44px] md:px-[40px]"
                  } text-black rounded-3xl px-6 py-8 bg-primary bg-bestSellerBg flex-1`}
                >
                  <h1 className="text-[30px] text-center md:text-left md:text-[58px] font-secondary font-extrabold">
                    {title}
                  </h1>
                  <p className="text-base md:text-xl mt-[16px] tracking-[0.045em]">
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

export default Preferential;
