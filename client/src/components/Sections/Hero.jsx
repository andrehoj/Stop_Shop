import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2  sm:space-x-7">
        <div className="justify-self-center order-2 sm:order-1">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
            className="hero_height"
          />
        </div>
        <div className=" flex flex-col space-y-2 justify-center mb-10 sm:mb-20 text-center sm:text-start order-1 sm:order-2">
          <h5 className="font-extrabold text-6xl sm:text-4xl md:text-5xl lg:text-7xl">
            Your One{" "}
            <span className="text-main_teal sm:whitespace-nowrap">
              Stop Shop
            </span>
          </h5>
          <p className="tracking-wider font-medium">
            Explore Everything From Clothing, Jewelery And Technology
          </p>

          <Link to="/products">
            <button
              className={
                " bg-transparent hover:bg-main_teal text-main_teal font-semibold hover:text-main_white py-2 px-12 border border-main_teal hover:border-transparent duration-200 "
              }
            >
              View Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
