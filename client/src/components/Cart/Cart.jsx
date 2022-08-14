import React from "react";
import NavContainer from "../Nav/NavContainer";
import { useStoreContext } from "../../utils/globalstate";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Auth from "../../utils/auth";
import Slider from "../Products/Slider";

export default function Cart() {
  // const [state] = useStoreContext();

  // const { cart: products } = state;

  // function calculateTotal() {
  //   let sum = 0;
  //   state.cart.forEach((item) => {
  //     sum += item.price * item.purchaseQuantity;
  //   });
  //   return sum.toFixed(2);
  // }

  return (
    // <div className="">
    //   <NavContainer />

    //   <div className="max-w-4xl mx-10 mt-10 bg-main_white shadow-2xl py-8 px-6 ">
    //     <div className="border-b pb-3">
    //       {!products.length ? (
    //         <div className="flex p-4 space-x-20">
    //           <img
    //             src="/images/empty-cart.svg"
    //             alt="woman with empty shopping cart"
    //             width={"255px"}
    //           ></img>
    //           <div className="">
    //             <h3 className="sm:text-3xl text-2xl mr-5 my-5 self-start">
    //               Your shopping cart is empty
    //             </h3>
    //             <Link
    //               to="/products"
    //               className="underline text-main_teal hover:no-underline"
    //             >
    //               Search for some keys
    //             </Link>
    //           </div>
    //         </div>
    //       ) : (
    //         <div className="flex flex-wrap justify-between">
    //           <h3 className="sm:text-2xl text-xl mr-5">Shopping Cart</h3>
    //           <p className="text-xl mr-5">Total: ${calculateTotal()}</p>
    //         </div>
    //       )}
    //     </div>
    //     {products.map((item, i) => (
    //       <CartItem item={item} key={i} />
    //     ))}
    //     <div className="w-full text-right">
    //       {Auth.loggedIn() ? (
    //         <button
    //           type="button"
    //           className=" bg-success hover:bg-opacity-80 text-main_white tracking-widest py-2 px-4 rounded mt-5"
    //         >
    //           Check out
    //         </button>
    //       ) : (
    //         <p className="mt-5 text-lg">Log in to checkout</p>
    //       )}
    //     </div>
    //   </div>
    <Slider />
    // </div>
  );
}
