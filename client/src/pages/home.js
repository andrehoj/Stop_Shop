import React from "react";
import NavContainer from "../components/Nav/NavContainer";
import ProductContainer from "../components/Products/ProductContainer";
import SingleProduct from "../components/Products/SingleProduct";

export default function Home() {
  return (
    <div>
      <NavContainer />
      <ProductContainer />
      <SingleProduct />
    </div>
  );
}
