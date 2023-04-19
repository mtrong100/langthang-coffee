import React from "react";
import { contact } from "../../data";

const Contact = () => {
  const { title, desc, formTitle, placeHolder1, placeHolder2, placeHolder3 } =
    contact;
  return (
    <section className=" py-20 md:pt-[190px] md:pb-[135px]">
      <div className="grid gap-20 md:gap-[127px] page-container lg:grid-cols-2">
        <div>
          <h1 className="text-center uppercase mb-[15px] leading-34 tracking-[0.02em] text-primary text-[28px] font-bold">
            {title}
          </h1>
          <p className="text-xl italic text-justify tracking-[0.045em]">
            {desc}
          </p>
        </div>

        <form action="#">
          <h1 className="mb-[60px] text-center uppercase font-semibold text-primary text-[36px]">
            {formTitle}
          </h1>
          <div className="flex flex-col gap-[47px]">
            <input
              className="py-[25px] px-[28px] rounded-full border border-greyPrimary w-full outline-none bg-blackPure"
              type="text"
              placeholder={placeHolder1}
            />
            <input
              className="py-[25px] px-[28px] rounded-full border border-greyPrimary w-full outline-none bg-blackPure"
              type="email"
              placeholder={placeHolder2}
            />
            <input
              className="py-[25px] px-[28px] rounded-full border border-greyPrimary w-full outline-none bg-blackPure"
              type="text"
              placeholder={placeHolder3}
            />
          </div>
          <button className="w-full px-5 btn-shinny-1 py-4 text-xl font-medium mt-[67px] text-black uppercase rounded-full bg-primary">
            gửi
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
