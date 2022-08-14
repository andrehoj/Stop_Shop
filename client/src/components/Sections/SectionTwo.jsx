import React from "react";

export default function SectionTwo() {
  return (
    <>
      <div className="px-20 pb-20 pt-10 ">
        <div className=" flex mb-2 space-x-2 ml-8 text-4xl tracking-wider font-extrabold">
          <span className="custom-border">Keychron </span>
        </div>

        <div className="grid  xl:grid-cols-1 2xl:grid-cols-2 gap-10">
          <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 border-2 p-5 border-lightest_grey rounded-sm  max-w-fit">
            <div className="flex flex-col  text-center md:text-start space-y-2 pl-5">
              <p className="font-semibold tracking-wide">
                KEYCHRON K2 WIRELESS MECHANICAL KEYBOARD
              </p>
              <p className="font-bold">$79.99</p>
              <p className="text-sm text-ellipsis min-w-full">
                K2 is a super tactile wireless or wired keyboard giving you all
                the keys and function you need while keeping it compact, with
                the largest battery seen in a mechanical keyboard.
              </p>
              <button className="w-20 self-center md:self-start bg-transparent font-semibold text-main_teal hover:bg-main_teal hover:text-main_white py-1.5 px-3.5 border border-main_teal hover:border-transparent rounded nav-link-styles">
                Buy
              </button>
            </div>
            <img
              className="self-center justify-self-center"
              src="images/keychron-k2/keychron-k2-cover.png"
              alt="keychron keyboard"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-lightest_grey rounded-sm border-2 p-5 max-w-fit">
            <div className="flex flex-col space-y-2 text-center md:text-start">
              <p className="font-semibold tracking-wide">
                Keychron K10 Wireless Mechanical Keyboard
              </p>
              <p className="font-bold">$94.99</p>
              <p className="text-sm">
                "Connects with up to 3 devices via Bluetooth and switch among
                them easily. With high reliable and broad compatibility Broadcom
                Bluetooth 5.1 chipset, the K10 is best to fit home, office and
                light gaming use while connecting with your smartphone, laptop
                and iPad.
              </p>
              <button class="self-center md:self-start w-20 bg-transparent font-semibold text-main_teal hover:bg-main_teal hover:text-main_white py-1.5 px-3.5 border border-main_teal hover:border-transparent rounded nav-link-styles">
                Buy
              </button>
            </div>
            <img
              className="self-center justify-self-center"
              src="images/keychron-k10/keychron-k10-cover.png"
              alt="keychron keyboard"
            />
          </div>
        </div>
      </div>
    </>
  );
}
