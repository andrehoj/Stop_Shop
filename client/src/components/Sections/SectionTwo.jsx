import React from "react";

export default function SectionTwo() {
  return (
    <>
      <div className=" px-5 sm:px-20 pb-20 pt-10 ">
        <div className=" flex mb-2 space-x-2 md:ml-8 text-3xl justify-center md:justify-start md:text-4xl tracking-wider font-extrabold">
          <span className="custom-border whitespace-nowrap">Men's Clothing</span>
        </div>

        <div className="grid  xl:grid-cols-1 2xl:grid-cols-2 gap-10">
          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 border-2 p-5 border-lightest_grey rounded-sm  max-w-fit">
            <div className="flex flex-col text-center md:text-start space-y-2 ">
              <p className="font-semibold tracking-wide">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
              </p>
              <p className="font-bold">$79.99</p>
              <p className="text-sm text-ellipsis min-w-full hidden sm:block">
                Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday
              </p>
              <button className="w-20 self-center md:self-start bg-transparent font-semibold text-main_teal hover:bg-main_teal hover:text-main_white py-1.5 px-3.5 border border-main_teal hover:border-transparent rounded nav-link-styles">
                Buy
              </button>
            </div>
            <img
              className="self-center justify-self-center h-72"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="Bsck pack"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-lightest_grey rounded-sm border-2 p-5 max-w-fit">
            <div className="flex flex-col space-y-2 text-center md:text-start">
              <p className="font-semibold tracking-wide">
                Mens Casual Premium Slim Fit T-Shirts
              </p>
              <p className="font-bold">$22.3</p>
              <p className="text-sm hidden sm:block">
                Slim-fitting style, contrast raglan long sleeve, three-button
                henley placket, light weight & soft fabric for breathable and
                comfortable wearing. And Solid stitched shirts with round neck
                made for durability and a great fit for casual fashion wear and
                diehard baseball fans. The Henley style round neckline includes
                a three-button placket
              </p>
              <button className="self-center md:self-start w-20 bg-transparent font-semibold text-main_teal hover:bg-main_teal hover:text-main_white py-1.5 px-3.5 border border-main_teal hover:border-transparent rounded nav-link-styles">
                Buy
              </button>
            </div>
            <img
              className="self-center justify-self-center h-72"
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="Mens T-shirt"
            />
          </div>
        </div>
      </div>
    </>
  );
}
