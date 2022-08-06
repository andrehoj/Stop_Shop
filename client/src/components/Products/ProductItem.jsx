import React from "react";

export default function ProductItem({ product }) {
  return (
    <div className="flex-col justify-center items-center text-center h-fit">
      <img
        className="cursor-pointer"
        src={`images/${product.coverImage}`}
        alt="product cover"
      />
      <h4 className="cursor-pointer inline-block">{product.name}</h4>
      <p>${product.price}</p>
      <p>
        <span class="checkmark">
          <div class="checkmark_stem"></div>
          <div class="checkmark_kick"></div>
        </span>
        {product.inStock ? (
          <p className="text-success">In stock</p>
        ) : (
          <p className="text-dan">Out of stock</p>
        )}
      </p>
      <button class="bg-transparent mt-2 hover:bg-main_teal text-main_teal font-semibold hover:text-main_white py-2 px-12 border border-main_teal hover:border-transparent duration-200">
        Add to cart
      </button>
    </div>
  );
}
