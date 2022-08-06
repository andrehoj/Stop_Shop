import React from "react";
import NavContainer from "../components/Nav/NavContainer";
import ProductContainer from "../components/Products/ProductContainer";
import Cart from "../components/Cart/Cart";

export default function Home() {
  return (
    <div>
      <NavContainer />
      <Cart />
    </div>
  );
}
