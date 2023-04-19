import React from "react";
import { footer } from "../data";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Exclude.png";
import { BiUpArrowAlt } from "react-icons/bi";

const Footer = () => {
  const { social, details } = footer;
  return (
    <section className="text-white bg-blackSecondary">
      <div className="py-10 page-container">
        {/* footer-top */}
        <div className="flex flex-col items-center justify-between gap-8 pb-5 border-b md:flex-row border-primary">
          <NavLink
            className="flex items-center gap-3 uppercase select-none"
            to="/"
          >
            <img src={logo} alt="logo" className="w-[50px]" />
            <span className="text-2xl font-semibold uppercase text-primary gradient-1">
              LANTHANG COFFEE
            </span>
          </NavLink>
          <div className="flex items-center gap-5">
            {social.map((item, index) => (
              <span
                key={index}
                className="text-3xl cursor-pointer hover:text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* footer-links */}
        <div className="grid grid-cols-2 gap-10 mt-10 md:gap-5 md:grid-cols-4">
          {details.map(({ title, links, id }) => {
            return (
              <div className="flex flex-col flex-1 break-words" key={id}>
                <h2 className="mb-3 text-lg font-bold uppercase text-primary">
                  {title}
                </h2>
                <ul className="flex flex-col gap-2">
                  {links.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className="text-sm font-medium links" href="#">
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* footer-Copyright */}
        <p className="mt-10 text-sm font-medium text-center md:mt-20">
          2023 Copyright © TheLangThang. All rights reserved
        </p>
      </div>

      {/* scroll to top */}
      <a href="#">
        <div className="fixed w-[50px] shadow-2xl border-2 border-solid border-white h-[50px] rounded-full bottom-5 right-5 flex items-center justify-center bg-primary text-black z-40 cursor-pointer font-bold text-2xl">
          <BiUpArrowAlt></BiUpArrowAlt>
        </div>
      </a>
    </section>
  );
};

export default Footer;
