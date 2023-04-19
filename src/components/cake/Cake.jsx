import React from "react";
import { PRODUCTS_DATA } from "../../data";
import DrinkProductCard from "../menu/DrinkProductCard";

const Cake = () => {
  const { CAKE_DATA } = PRODUCTS_DATA;
  return (
    <section className="pb-20 md:pt-[97px] md:pb-[120px]">
      <div className="page-container">
        <h1 className="text-[40px] md:text-[60px] uppercase tracking-[0.02em] font-bold text-primary text-center mb-[60px]">
          bánh ngọt. Sao lại không?
        </h1>
        {/* cake data */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 product-wrapper">
          {CAKE_DATA.map((item) => {
            return (
              <DrinkProductCard
                cakeSize={true}
                cakeHeight={true}
                key={item.id}
                item={item}
              ></DrinkProductCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cake;
