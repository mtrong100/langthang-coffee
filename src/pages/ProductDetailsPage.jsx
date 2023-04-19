import React from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../context/shop-context";
import { PRODUCTS_DATA } from "../data";
import { AiFillStar } from "react-icons/ai";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { handleAddToCart } = useShop();
  const { DRINK_DATA, CAKE_DATA } = PRODUCTS_DATA;
  const newArray = DRINK_DATA.concat(CAKE_DATA);

  const product = newArray.find((item) => {
    return item.id === parseInt(id);
  });

  const { name, price, img, category } = product;

  return (
    <section className="py-20 md:pt-[207px] md:pb-[120px] page-container">
      <div className="grid items-center gap-5 p-5 border-dashed rounded-md shadow-md md:border border-greyPrimary lg:grid-cols-2 ">
        <div
          className={`flex items-center py-12 select-none justify-center overflow-hidden group rounded-xl bg-productColor`}
        >
          <img
            className={`${category === "cake" ? "w-[350px]" : "w-[200px]"}`}
            src={img}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-primary md:text-3xl">
            {name}
          </h1>
          <p className=" text-greyPrimary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            quae facere ut, nemo a officiis rerum, amet libero omnis fugit eius
            adipisci praesentium earum natus quo voluptate repellat. Ex, ipsam!
          </p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-third">{`${price.toLocaleString(
              "vi-VN"
            )} VNĐ`}</span>
            <span className="flex items-center text-2xl text-yellow-400">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </span>
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            className="w-full px-8 py-4 mt-3 font-semibold text-black uppercase rounded-md bg-primary btn-shinny-1 md:w-fit"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
