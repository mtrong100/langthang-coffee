import React, { useEffect, useState } from "react";
import { PRODUCTS_DATA } from "../../data";
import DrinkProductCard from "./DrinkProductCard";

const FilterMenuDrink = ({ filterBtn }) => {
  const { DRINK_DATA } = PRODUCTS_DATA;
  const [filterProduct, setFilterProduct] = useState(null);

  useEffect(() => {
    setFilterProduct(DRINK_DATA);
  }, []);

  const handleFilter = (e) => {
    const btnCategory = e.target.value;
    const newFilter = DRINK_DATA.filter(
      (item) => item.category === btnCategory
    );
    if (btnCategory === "all") {
      setFilterProduct(DRINK_DATA);
    } else {
      setFilterProduct(newFilter);
    }
  };

  return (
    <div className="mt-10 md:mt-[68px]">
      {/* button filter on PC-Tablets */}
      <div className="hidden md:flex items-center flex-wrap gap-[20px]">
        {filterBtn.map((item) => {
          const { id, name, category } = item;
          return (
            <button
              onClick={handleFilter}
              className="py-3 btn-shinny-3 transition-all font-semibold px-[53px] border-2 border-solid border-white rounded-xl  font-secondary"
              value={category}
              key={id}
            >
              {name}
            </button>
          );
        })}
      </div>

      {/* dropdown filter on mobile */}
      <select
        onChange={handleFilter}
        className="md:hidden w-full max-w-[150px] border border-white border-solid py-1 rounded-sm"
      >
        {filterBtn.map((item) => {
          const { id, name, category } = item;
          return (
            <option className="text-black" key={id} value={category}>
              {name}
            </option>
          );
        })}
      </select>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 transition-all relative lg:grid-cols-5 mt-10 md:mt-[58px] product-wrapper">
        {filterProduct &&
          filterProduct.map((item) => {
            return (
              <DrinkProductCard key={item.id} item={item}></DrinkProductCard>
            );
          })}
      </div>
    </div>
  );
};

export default FilterMenuDrink;
