import React, { useState } from "react";
import { useShop } from "../context/shop-context";
import { HiPlus, HiMinus } from "react-icons/hi";
import { BsCartDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    cartStored,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleClearCart,
    totalPrice,
    currentPrice,
    noti,
  } = useShop();

  // HANDLE LOADING BUTTON
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="mb-32 pt-[150px] page-container">
      <h1 className="mb-10 text-3xl font-bold text-center uppercase md:text-5xl text-primary">
        hóa đơn thanh toán
      </h1>

      {/* display all products in cart */}
      <div className="flex flex-col border py-5 border-dashed rounded-md page-container border-greyPrimary max-h-[500px] overflow-y-auto bill-board">
        {/* display empty cart when there's no product */}
        {cartStored.length <= 0 && (
          <div className="flex flex-col items-center justify-center gap-5 p-5">
            <h1 className="text-xl font-bold text-center md:text-4xl text-primary">
              Giỏ hàng của bạn hiện đang trống
            </h1>
            <BsCartDash className="text-[100px] md:text-[200px]"></BsCartDash>
            <p className="mt-5 text-sm font-medium text-center md:text-base text-greyPrimary">
              Trước khi tiến hành thanh toán, bạn phải thêm sản phẩm vào giỏ
              hàng.
            </p>
            <Link
              className="px-5 py-3 mt-10 font-semibold text-black uppercase rounded-md bg-primary"
              to="/"
            >
              Về Trang chủ
            </Link>
          </div>
        )}

        {/* ===================================================================== */}
        {/* display products if it's existed */}
        {cartStored.length > 0 &&
          cartStored.map((item) => (
            <div
              className="w-full p-3 transition-all rounded-lg md:p-5 hover:bg-hoverColor md:items-center md:flex md:justify-between"
              key={item.id}
            >
              {/* product info */}
              <div className="flex items-center justify-around gap-3">
                <div
                  className={`min-w-[150px] md:min-w-[200px] flex items-center select-none justify-center  py-10 md:py-6  overflow-hidden group rounded-xl bg-productColor`}
                >
                  <img
                    className={`${
                      item.category === "cake"
                        ? "w-[120px] md:w-[150px]"
                        : "w-[60px]"
                    }`}
                    src={item.img}
                    alt=""
                  />
                </div>

                <div className="flex flex-col select-none">
                  <h1 className="font-semibold md:text-xl text-primary">
                    {item.name}
                  </h1>
                  <span className="mt-2 text-xl font-medium md:text-2xl">{`${item.price.toLocaleString(
                    "vi-VN"
                  )} VNĐ`}</span>

                  {/* product action on mobile */}
                  <div className="flex flex-col gap-5 mt-4 md:hidden">
                    <div className="flex items-center justify-between w-full gap-5">
                      <span
                        onClick={() => handleIncreaseQuantity(item)}
                        className="flex items-center justify-center w-10 h-8 text-black rounded-md cursor-pointer bg-primary"
                      >
                        <HiPlus></HiPlus>
                      </span>
                      <span className="text-xl font-semibold select-none">
                        {item.quantity}
                      </span>
                      <span
                        onClick={() => handleDecreaseQuantity(item)}
                        className="flex items-center justify-center w-10 h-8 text-black rounded-md cursor-pointer bg-primary"
                      >
                        <HiMinus></HiMinus>
                      </span>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="px-8 py-2 text-sm font-medium text-black uppercase bg-white rounded-md btn-shinny-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* product action */}
              <div className="flex-col hidden gap-5 md:flex">
                <div className="flex items-center gap-5">
                  <span
                    onClick={() => handleIncreaseQuantity(item)}
                    className="flex items-center justify-center w-10 h-10 text-xl text-black rounded-full cursor-pointer bg-primary"
                  >
                    <HiPlus></HiPlus>
                  </span>
                  <span className="text-xl font-semibold select-none">
                    {item.quantity}
                  </span>
                  <span
                    onClick={() => handleDecreaseQuantity(item)}
                    className="flex items-center justify-center w-10 h-10 text-xl text-black rounded-full cursor-pointer bg-primary"
                  >
                    <HiMinus></HiMinus>
                  </span>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="px-8 py-2 font-medium text-black uppercase bg-white rounded-md btn-shinny-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* show total bill of all products in your cart */}
      <div className="mt-10 select-none">
        {cartStored.length > 0 && (
          <>
            {/* show bill */}
            <div className="flex items-center justify-between py-8 border-t border-b border-dashed border-greyPrimary">
              <span className="flex flex-col gap-2">
                <h1 className="text-2xl font-medium text-greyPrimary">
                  Tổng hóa đơn :
                </h1>
                <h1 className="text-2xl font-medium text-greyPrimary">
                  Phí giao hàng :
                </h1>
              </span>
              <span className="flex flex-col gap-2">
                <span className="text-2xl font-medium">
                  {`${currentPrice.toLocaleString("vi-VN")} VNĐ`}
                </span>
                <span className="text-2xl font-medium">15.000 VNĐ</span>
              </span>
            </div>
            {/* show total money */}
            <div className="flex items-center justify-between py-10">
              <h1 className="text-2xl font-medium text-greyPrimary">
                Tổng tiền :
              </h1>
              <span className="text-2xl font-medium">{`${totalPrice.toLocaleString(
                "vi-VN"
              )} VNĐ`}</span>
            </div>
            {/* checkout button */}
            <button
              onClick={() => {
                handleLoading(),
                  setTimeout(() => {
                    handleClearCart();
                  }, 1000);
              }}
              className="flex items-center justify-center w-full px-8 py-4 pt-5 mx-auto text-lg font-semibold text-black uppercase rounded-lg btn-shinny-1 bg-primary md:w-fit"
            >
              {loading ? "Đang xử lí đơn hàng..." : "xác nhận thanh toán"}
            </button>
          </>
        )}
      </div>

      {/* show notification when checkout success !!! */}
      <div
        className={`${
          noti ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } fixed transition-all px-6 py-2 md:py-3 z-50 md:text-lg font-medium duration-300 select-none rounded-md text-white bg-green-500 top-10 md:top-[150px] right-5`}
      >
        Thanh toán thành công !!
      </div>
    </section>
  );
};

export default CartPage;
