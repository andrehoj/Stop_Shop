import React from "react";
import { Link } from "react-router-dom";

export default function SectionThree() {
  return (
    <div className="px-40 pb-40 pt-10 bg-main_teal">
      <h4 className="mb-10 text-center text-4xl tracking-wider font-extrabold custom-border-two">
        Woman's Clothing
      </h4>
      <div className="grid grid-cols-3 gap-5">
        <div className="text-center">
          <Link to={`ProductDetails/62f85b530496a84198b28ae2`}>
            <img
              src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
              alt=""
              height={"500px"}
              width={"500px"}
            />
          </Link>
          <p>BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats</p>
          <p>$56.99</p>
        </div>
        <div className="text-center">
          <Link to={`ProductDetails/62f85b530496a84198b28ae3`}>
            <img
              src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
              alt=""
              height={"500px"}
              width={"500px"}
            />
          </Link>
          <p>
            "Lock and Love Women's Removable Hooded Faux Leather Moto Biker
            Jacket
          </p>
          <p>$29.95</p>
        </div>
        <div className="text-center">
          <Link to={`ProductDetails/62f85b530496a84198b28ae4`}>
            <img
              src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
              alt=""
              height={"500px"}
              width={"500px"}
            />
          </Link>
          <p>Rain Jacket Women Windbreaker Striped Climbing Raincoats</p>
          <p>$39.99</p>
        </div>
      </div>
    </div>
  );
}
