import React from "react";
import { useStoreContext } from "../utils/globalstate";
import { SET_SHOWCART_FALSE } from "../utils/actions";

export default function CartPopUp() {
  const [state, dispatch] = useStoreContext();

  const { showCart } = state;

  if (showCart) {
    setTimeout(() => {
      dispatch({
        type: SET_SHOWCART_FALSE,
      });
    }, 1500);
  }

  return (
    <div
      id="toast-success"
      className={` ${
        showCart ? "visible opacity-100 top-28" : "top-0 opacity-0 invisible"
      }  flex fixed right-10 items-center p-4 mb-4 w-full max-w-fit text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 bg-main_white transition-all duration-150`}
      role="alert"
    >
      <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Check icon</span>
        <span className="sr-only">Check icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">Added to cart</div>
    </div>
  );
}
