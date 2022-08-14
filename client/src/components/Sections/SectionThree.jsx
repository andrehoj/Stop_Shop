import React from "react";
import { Link } from "react-router-dom";

export default function SectionThree() {
  return (
    <div className="px-40 pb-40 pt-10 bg-main_teal">
      <h4 className="mb-10 text-center text-4xl tracking-wider font-extrabold custom-border-two">Logitech</h4>
      <div className="grid grid-cols-3 gap-5">
        <div className="text-center">
          <Link to={`ProductDetails/62f48c3d929bb42f8f952bf3`}>
            <img
              src="images/ergo-k860/ergo-k860-cover.webp"
              alt=""
              height={"500px"}
              width={"500px"}
            />
          </Link>
          <p>ERGO K860</p>
          <p>$149.99</p>
        </div>
        <div className="text-center">
          <Link to={`ProductDetails/62f48c3d929bb42f8f952bf1`}>
            <img
              src="images/k400-plus/k400-plus-wireless-cover.webp"
              alt=""
              height={"500px"}
              width={"500px"}
            />
          </Link>
          <p>K400 PLUS WIRELESS TOUCH</p>
          <p>$199.99</p>
        </div>
        <div className="text-center">
          <Link to={`ProductDetails/62f48c3d929bb42f8f952bf2`}>
            <img
              src="images/mx-mechanical/mx-mechanical-keyboard-cover.webp"
              alt=""
              height={"500px"}
              width={"500px"}
            />
          </Link>
          <p>MX MECHANICAL</p>
          <p>$199.99</p>
        </div>
      </div>
    </div>
  );
}
