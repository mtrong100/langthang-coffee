import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Nav, { NavMobile } from "../components/navbar/Nav";
import user from "../assets/images/me.jpg";
import logo from "../assets/images/Exclude.png";
import { settings } from "../data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import UserMenu from "../components/userMenu/UserMenu";
import useClickOutSide from "../hooks/useClickOutSide";
import { useShop } from "../context/shop-context";
import { useAvatar } from "../context/avatar-context";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(false);
  const { cartStored } = useShop();
  const { show, setShow, nodeRef: dropDownRef } = useClickOutSide();
  const cartItems = cartStored.length;
  const { imageSrc } = useAvatar();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTop(window.scrollY > 40);
    });
  }, []);

  return (
    <>
      <header
        className={`${
          top ? "py-4 bg-blackPure" : "lg:py-6"
        } fixed top-0 w-full py-4 z-50 transition-all duration-500  bg-headerBg`}
      >
        <div className="flex items-center justify-between page-container">
          {/* logo mobile */}
          <NavLink className="lg:hidden" to="/">
            <img className="w-[60px]" src={logo} alt="" />
          </NavLink>

          {/* search */}
          <span className="hidden gap-8 cursor-pointer hover:text-primary lg:flex">
            <FaSearch className="text-2xl md:text-3xl"></FaSearch>
            <FaSearch className="invisible text-2xl"></FaSearch>
          </span>

          {/* navbar */}
          <Nav></Nav>

          {/* cart and user */}
          <div
            ref={dropDownRef}
            className="flex items-center gap-8 md:gap-10 lg:gap-8"
          >
            {/* === cart === */}
            <NavLink to="/cart" className="relative cursor-pointer">
              <FaShoppingBag className="text-2xl md:text-3xl"></FaShoppingBag>
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-semibold rounded-full shadow-xl -right-2 -bottom-2 bg-primary">
                {cartItems || 0}
              </span>
            </NavLink>

            {/* === user === */}
            <div
              onClick={() => setShow(!show)}
              className="relative user-avt border-2 border-solid border-primary rounded-full w-[46px] h-[46px] cursor-pointer"
            >
              <img
                className="rounded-full img-cover"
                src={imageSrc || user}
                alt=""
              />
              {/* user-toggle */}
              {show && <UserMenu settings={settings}></UserMenu>}
            </div>

            {/* === toggle menu === */}
            <span onClick={() => setOpen(!open)} className="lg:hidden">
              <HiMenuAlt3 className="text-3xl"></HiMenuAlt3>
            </span>

            {/* toggle menu mobile */}
            <NavMobile open={open} setOpen={setOpen}></NavMobile>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
