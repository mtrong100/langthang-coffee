import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useShop } from "../../context/shop-context";
import { Link } from "react-router-dom";

const DrinkProductCard = ({ item, cakeSize = false, cakeHeight = false }) => {
  const { handleAddToCart } = useShop();
  const [isliked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id, name, price, img } = item;

  // HANDLE TOGGLE LIKE
  const handleToggleLike = () => {
    setIsLiked(true);
  };

  // HANDLE LOADING BUTTON
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-2 pb-4 rounded-lg cursor-pointer product-card bg-productBackground">
      {/* drink img */}
      <Link
        to={`/product/${id}`}
        className={`${
          cakeHeight
            ? "min-h-[133px] md:min-h-[213px]"
            : "min-h-[172px] md:min-h-[180px]"
        } flex items-center justify-center overflow-hidden group  rounded-xl  bg-productColor`}
      >
        <img
          src={img}
          className={`${
            cakeSize ? "w-[120px] md:w-[190px]" : "w-[60px]"
          } object-cover h-full transition-all duration-500  rounded-md group-hover:scale-110`}
          alt=""
        />
      </Link>
      {/* drink info */}
      <div className="mt-3">
        <h1 className="font-medium lg:text-lg">{name}</h1>
        <div className="flex items-center justify-between mt-2">
          <span className="opacity-60">{`${price.toLocaleString(
            "vi-VN"
          )} VNĐ`}</span>
          <span
            onClick={handleToggleLike}
            className={`text-2xl cursor-pointer text-primary`}
          >
            {isliked ? (
              <AiFillHeart></AiFillHeart>
            ) : (
              <AiOutlineHeart></AiOutlineHeart>
            )}
          </span>
        </div>
      </div>
      {/* button buy */}
      <button
        onClick={() => {
          handleAddToCart(item), handleLoading();
        }}
        className="w-full px-4 py-3 mt-8 text-xs font-semibold text-black capitalize rounded-md md:text-base btn-shinny-1 bg-primary"
      >
        {loading ? "Đang xử lí..." : "Thêm vào giỏ hàng"}
      </button>
    </div>
  );
};

export default DrinkProductCard;
