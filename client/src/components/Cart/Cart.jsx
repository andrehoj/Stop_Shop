import React from "react";
import NavContainer from "../Nav/NavContainer";
import { useStoreContext } from "../../utils/globalstate";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Auth from "../../utils/auth";
import { BsCart3, BsFillLockFill } from "react-icons/bs";

export default function Cart() {
  const [state] = useStoreContext();

  const { cart: products } = state;

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  return (
    <>
      <NavContainer />
      <div className="grid w-full grid-cols-1 justify-center items-center lg:grid-cols-2">
        <div className="max-w-4xl mx-10 mt-10 bg-main_white shadow-2xl py-8 px-6 ">
          <div className="border-b pb-3">
            {!products.length ? (
              <div className="grid grid-cols-2 p-4 gap-10">
                <img
                  src="/images/empty-cart.svg"
                  alt="woman with empty shopping cart"
                  width={"255px"}
                ></img>
                <div className="">
                  <h3 className="sm:text-3xl text-2xl mr-5 my-5 self-start">
                    Your shopping cart is empty
                  </h3>
                  <Link
                    to="/products"
                    className="underline text-main_teal hover:no-underline"
                  >
                    Find some items...
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap justify-between">
                <h3 className="sm:text-2xl text-xl mr-5">Shopping Cart</h3>
              </div>
            )}
          </div>
          {products.map((item, i) => (
            <CartItem item={item} key={i} />
          ))}
        </div>
        <div className="sm:w-96 h-fit shadow-2xl mx-auto lg:mx-0 mb-10 lg:mb-0 bg-main_white items-center gap-2 mt-10 flex flex-col ">
          <div className="bg-main_teal w-full p-4 flex gap-1 justify-center items-center">
            <BsCart3 size={24} />
            <p className="text-xl font-medium tracking-widest ">
              Order Summary
            </p>
          </div>
          <p className="w-full p-2 font-bold text-light_grey border-b">
            Merchandise Total: {calculateTotal()}
          </p>
          <p className="w-full p-2 font-bold text-light_grey border-b">
            Shipping: <span className="text-success">FREE</span>
          </p>
          <p className="w-full p-2 font-bold text-light_grey border-b">
            Savings: $0
          </p>
          <p className="w-full p-2 font-bold text-light_grey border-b">
            Estimated Total: {calculateTotal()}{" "}
          </p>

          {Auth.loggedIn() ? (
            <button
              type="button"
              className="mb-5 bg-success hover:bg-opacity-80 text-main_white tracking-widest py-2 px-4 rounded mt-5"
            >
              Check out
            </button>
          ) : (
            <button
              type="button"
              className="mb-5 flex items-center gap-1 bg-main_teal text-main_white tracking-widest py-2 px-4 rounded mt-5 cursor-not-allowed  justify-self-end"
            >
              <BsFillLockFill />
              Log in to Check out
            </button>
          )}
        </div>
      </div>
    </>
  );
}
