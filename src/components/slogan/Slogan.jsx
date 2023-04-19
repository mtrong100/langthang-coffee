import React from "react";
import logo from "../../assets/images/Exclude.png";

const Slogan = () => {
  return (
    <section className="flex items-center justify-center h-[694px] bg-sloganBg">
      <div className="flex flex-col items-center justify-center gap-10 md:gap-20 page-container">
        <a href="#">
          <img className="w-[150px] md:w-[200px]" src={logo} alt="" />
        </a>
        <h1 className="text-primary text-3xl md:text-[60px] lg:text-[80px] font-semibold ">
          “Bởi vì chúng tôi có thể.”
        </h1>
      </div>
    </section>
  );
};

export default Slogan;
