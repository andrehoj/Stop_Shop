import React from "react";
import LargeNav from "./NavSizes/LargeNav";
import SmallNav from "./NavSizes/SmallNav";
// import { BsCart3 } from "react-icons/bs";

export default function NavContainer() {
  return (
    <div className="">
      <nav className="flex items-center justify-between h-24 shadow-xl nav-text min-w-max">
        <div className="ml-4 lg:ml-16 logo-text">Key Shop</div>
        <LargeNav />
        <SmallNav />
      </nav>
    </div>
  );
}

//small nav markup

/* <div className="h-fit min-w-max bg-main_white pt-1 shadow-xl">
        <ul className="flex-col justify-center">
          <li className="nav-link-styles text-center tracking-widest text-xl ">
            Products
          </li>
          <li className="nav-link-styles text-center mt-5 tracking-widest text-xl">
            About
          </li>
          <li className="nav-link-styles text-center my-5 tracking-widest text-xl">
            Account
          </li>
        </ul>

        <div className="group text-center p-10 bg-main_teal hover:cursor-pointer ">
          <div className="group-hover:-translate-y-1 group-hover:scale-110 duration-300 h-full flex justify-center items-center text-center text-2xl ">
            <BsCart3 size={30} className="mr-1 " />
            Cart
          </div>
        </div>
      </div> */
