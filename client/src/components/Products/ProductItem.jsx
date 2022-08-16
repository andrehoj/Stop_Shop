import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <div className=" flex flex-col items-center text-center gap-4 text-sm tracking-wide">
      <Link
        to={`ProductDetails/${product._id}`}
        className="flex justify-center overflow-hidden"
      >
        <img
          className="cursor-pointer h-96 w-96 hover:scale-110 duration-150 "
          src={`${product.image}`}
          alt="product cover"
        />
      </Link>
      <Link
        to={`ProductDetails/${product._id}`}
        className="flex justify-center cursor-pointer"
      >
        <h4 className="w-3/4 hover:underline">{product.title}</h4>
      </Link>

      <p>${product.price}</p>
    </div>
  );
}
