import React from "react";
import Banner from "../components/banner/Banner";
import Space from "../components/space/Space";
import Bestseller from "../components/bestseller/Bestseller";
import Menu from "../components/menu/Menu";
import Preferential from "../components/preferential/Preferential";
import Cake from "../components/cake/Cake";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Founder from "../components/founder/Founder";
import Reply from "../components/reply/Reply";
import Slogan from "../components/slogan/Slogan";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <Space></Space>
      <Bestseller></Bestseller>
      <Menu></Menu>
      <Preferential></Preferential>
      <Cake></Cake>
      <About></About>
      <Contact></Contact>
      <Founder></Founder>
      <Reply></Reply>
      <Slogan></Slogan>
    </>
  );
};

export default HomePage;
