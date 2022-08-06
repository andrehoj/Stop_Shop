import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import Sidebar from "../SideBar/SideBar";
import { Link } from "react-router-dom";

export default function LargeNav() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="hidden lg:flex h-full items-center gap-x-10 ">
      <ul className="flex gap-8">
        <li className="nav-link-styles">Products</li>
        <li className="nav-link-styles">About</li>

        <li className="nav-link-styles">
          <Link to="/signup">Account</Link>
        </li>
      </ul>

      <div
        className="group h-full px-20 bg-main_teal hover:cursor-pointer "
        onClick={() => setShowSidebar(true)}
      >
        <div className="group-hover:-translate-y-1 group-hover:scale-110 duration-300 h-full flex items-center">
          <BsCart3 size={24} className="mr-1 " />
          Cart
        </div>
      </div>
      <Sidebar show={showSidebar} />
    </div>
  );
}
