import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="h-full items-center flex gap-8">
      <li className="nav-link-styles">Products</li>
      <li className="nav-link-styles">About</li>

      <li className="nav-link-styles">
        <Link to="/signup">Account</Link>
      </li>

      <li className="h-full">
        <Link to="/cart">
          <div className="group h-full px-20 bg-main_teal hover:cursor-pointer ">
            <div className="group-hover:-translate-y-1 group-hover:scale-110 duration-300 h-full flex items-center">
              <BsCart3 size={24} className="mr-1 " />
              Cart
              <div className="  px-2 py-1 ml-2 text-center rounded-3xl text-xs text-main_white bg-primary_black">
                2
              </div>
            </div>
          </div>
        </Link>
      </li>
    </ul>
  );
}
