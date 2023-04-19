import React from "react";
import { menu } from "../../data";
import FilterMenuDrink from "./FilterMenuDrink";

const Menu = () => {
  const { title, filterBtn } = menu;
  return (
    <section className="py-20 md:pt-[207px] md:pb-[120px]" id="menu">
      <div className="page-container">
        <h1 className="text-5xl md:text-[60px] leading-tight uppercase text-primary font-secondary font-bold text-center">
          {title}
        </h1>
        <FilterMenuDrink filterBtn={filterBtn}></FilterMenuDrink>
      </div>
    </section>
  );
};

export default Menu;
