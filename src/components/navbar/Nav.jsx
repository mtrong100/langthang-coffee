import React from "react";
import logo from "../../assets/images/Exclude.png";
import { nav } from "../../data";
import { NavLink } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { useShop } from "../../context/shop-context";

const Nav = () => {
  return (
    <>
      <ul className="hidden lg:flex items-center gap-[60px]">
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-white" : ""} links`
            }
            to="/"
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-white" : ""} links`
            }
            to="/menu"
          >
            Thực Đơn
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img className="w-[76px]" src={logo} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-white" : ""} links`
            }
            to="/voucher"
          >
            Ưu đãi
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-white" : ""} links`
            }
            to="/about"
          >
            Về chúng tôi
          </NavLink>
        </li>
        <li></li>
      </ul>
    </>
  );
};

export const NavMobile = ({ open, setOpen }) => {
  const { imageSrc, handleFileInputChange } = useShop();

  return (
    <>
      <ul
        className={`${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 z-50 flex transition-all duration-300 flex-col items-center justify-center gap-12 md:gap-20 bg-blackSecondary`}
      >
        {/* header-menu-mobile */}
        <div className="absolute flex items-center justify-between w-full px-5 top-5">
          <NavLink onClick={() => setOpen(!open)} to="/">
            <img
              className="w-[80px] md:w-[150px]"
              src={imageSrc || logo}
              alt=""
            />
          </NavLink>
          <span
            className="p-2 text-2xl rounded-full md:text-4xl bg-darkPrimary"
            onClick={() => setOpen(!open)}
          >
            <HiX></HiX>
          </span>
        </div>

        {/* menu-mobile */}
        {nav.map((item) => {
          const { id, name, path } = item;
          return (
            <li onClick={() => setOpen(!open)} key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-white" : ""} links text-2xl md:text-4xl`
                }
                to={path}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Nav;
