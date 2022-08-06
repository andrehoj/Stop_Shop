import React from "react";

export default function ProductItem({ product }) {
  console.log(product);
  return (
    <div className="flex-col justify-center items-center text-center h-fit">
      <img className="cursor-pointer" src={`images/${product.coverImage}`} alt="product cover"  />
      <h4 className="cursor-pointer inline-block">{product.name}</h4>
      <p>${product.price}</p>
      <p>{product.inStock ? "In stock" : "Out of stock"}</p>
    </div>
  );
}
 