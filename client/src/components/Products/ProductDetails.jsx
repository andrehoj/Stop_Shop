import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router-dom";
import NavContainer from "../Nav/NavContainer";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../utils/queries";
import { BarLoader } from "react-spinners";
import { GiReturnArrow } from "react-icons/gi";
import { GoGlobe } from "react-icons/go";
import { BsGift } from "react-icons/bs";
import { useStoreContext } from "../../utils/globalstate";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

export default function ProductDetails() {
  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  function handleAddCart() {
    // if (!product.inStock) return;

    const productItem = cart.find((item) => item._id === product._id);

    if (productItem) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: productItem._id,
        purchaseQuantity: parseInt(productItem.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        cart: { purchaseQuantity: 1, ...product },
        showCart: true,
      });
    }
  }

  const { id } = useParams();

  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { _id: id },
  });

  if (loading)
    return (
      <>
        <NavContainer />
        <div className="flex justify-center items-center mt-44 mx-auto">
          <BarLoader
            className="m-0"
            loading={true}
            color={"#e8e076"}
            height={20}
            width={300}
          />
        </div>{" "}
      </>
    );

  const product = data.Product[0];

  return (
    <>
      <NavContainer />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-x-52 my-10 mx-20">
        <div className="flex justify-end items-end">
          <img src={`${product.image}`} className="" />
        </div>

        <div className="flex-col space-y-5 lg:mb-0 ">
          <div className="flex-col space-y-1 border-b border-main_teal">
            <h4 className="text-xl tracking-widest font-extralight ">
              {product.title}
            </h4>
            <p className="font-light text-lg pb-3">${product.price}</p>
          </div>
          <p className="text-base tracking-wide font-extralight">
            {product.description}
          </p>
          <div className="flex items-center">
            {[...Array(parseInt(product.rating.rate))].map((item, i) => (
              <svg
                key={i}
                aria-hidden="true"
                className="w-5 h-5 text-main_teal"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <div className="pb-2 flex">
            <button
              onClick={handleAddCart}
              className={`${
                product
                  ? "w-full rounded-3xl bg-transparent hover:bg-main_teal text-main_teal font-semibold hover:text-main_white py-2 px-12 border border-main_teal hover:border-transparent duration-200 "
                  : " py-2 px-12 border border-main_teal  bg-transparent text-main_teal font-semibold opacity-75 cursor-not-allowed line-through disabled "
              } `}
            >
              Add to cart
            </button>
          </div>
          <div className="flex justify-center gap-10 items-center border-b border-main_teal pb-2 text-center">
            <div className="flex flex-col items-center font-light tracking-wide ">
              <GoGlobe size={30} /> Free Shipping
            </div>{" "}
            <div className="flex flex-col items-center">
              <GiReturnArrow size={30} /> Easy Returns
            </div>{" "}
            <div className="flex flex-col items-center">
              <BsGift size={30} /> Free Shipping
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
