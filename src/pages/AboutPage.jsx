import React from "react";
import About from "../components/about/About";
import Slogan from "../components/slogan/Slogan";
import Founder from "../components/founder/Founder";

const AboutPage = () => {
  return (
    <>
      <div className="pt-24">
        <Founder></Founder>
      </div>
      <About></About>
      <Slogan></Slogan>
    </>
  );
};

export default AboutPage;
