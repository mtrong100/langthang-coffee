import React from "react";
import Preferential from "../components/preferential/Preferential";
import Bestseller from "../components/bestseller/Bestseller";
import Contact from "../components/contact/Contact";

const VoucherPage = () => {
  return (
    <div className="my-32">
      <Preferential></Preferential>
      <Contact></Contact>
      <div className="mt-32">
        <Bestseller></Bestseller>
      </div>
    </div>
  );
};

export default VoucherPage;
