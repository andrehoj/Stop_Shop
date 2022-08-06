import React from "react";

let product = {
  brand: "Logitech",
  coverImage: "ergo-k860/ergo-k860-cover.webp",
  description: "Split Ergonomic Keyboard",
  images: [
    "ergo-k860/ergo-k860-gallery-1.webp",
    "ergo-k860/ergo-k860-gallery-2.webp",
    "ergo-k860/ergo-k860-gallery-3.webp",
  ],
  length: 3,
  inStock: true,
  name: "ERGO K860",
  price: 149.99,
  review: 4,
  wireless: true,
};

export default function Cart() {
  return (
    <div className="max-w-4xl mx-10 mt-10 bg-main_white shadow-2xl py-8 px-6 ">
      <div className="border-b pb-3 flex flex-wrap justify-between items-center">
       
        <h3 className="sm:text-2xl text-xl mr-5 ">Shopping Cart</h3>{" "}
        <p className="text-xl">Total: $5345.34</p>
      </div>

      <div className="flex flex-wrap mt-3 pb-3 border-b">
        <div className="">
          <img
            src={`/images/${product.coverImage}`}
            alt="product cover"
            className="max-h-28"
          />
        </div>
        <div className="flex-col space-y-2">
          <h4 className="text-xl">{product.name}</h4>
          <p>${product.price}</p>
          {product.inStock ? (
            <p className="text-success">In stock</p>
          ) : (
            <p className="text-danger">Out of stock</p>
          )}
          <div className="">
            <input
              className="w-20 inline border border-primary_black-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
            />
            <p className="inline  text-danger ml-2  border-l border-light_black pl-1 hover:cursor-pointer hover:underline">
              Delete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
