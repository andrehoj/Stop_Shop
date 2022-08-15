import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import NavContainer from "../Nav/NavContainer";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../utils/queries";
import { BarLoader } from "react-spinners";
import { Accordion } from "flowbite-react";
import { GrCircleInformation } from "react-icons/gr";
import { AiOutlineSafety } from "react-icons/ai";
import { GiSpectacles } from "react-icons/gi";
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
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center space-x-5 lg:mr-32 mt-10 lg:ml-2 mx-10">
        {/* <Carousel renderIndicator={false}> */}
        <div>
          <img src={`${product.image}`} />
        </div>
        {/* {product.images?.map((image, i) => (
            <div key={i}>
              <img src={`/images/${image}`} alt="cover of Keyboard" />
            </div>
          ))} */}
        {/* </Carousel> */}

        <div className="flex-col space-y-5 w-96 mb-28 lg:mb-0 ">
          <div className="flex-col space-y-1">
            <h6>{product.brand}</h6>
            <h4 className="text-xl">{product.title}</h4>
            <p className="font-semibold text-lg">${product.price}</p>
          </div>
          <p>{product.description}</p>
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
          <div className="">
            <p
              className={`${
                product.inStock ? "text-success" : "text-danger"
              } mb-1 text-sm `}
            >
              {product.inStock ? "In stock, ready to ship" : "Out of stock"}
            </p>
            <button
              onClick={handleAddCart}
              className={`${
                product
                  ? " bg-transparent hover:bg-main_teal text-main_teal font-semibold hover:text-main_white py-2 px-12 border border-main_teal hover:border-transparent duration-200 "
                  : " py-2 px-12 border border-main_teal  bg-transparent text-main_teal font-semibold opacity-75 cursor-not-allowed line-through disabled "
              } `}
            >
              Add to cart
            </button>
            <Accordion
              style={{ border: "none", fontSize: "20px", marginTop: "20px" }}
            >
              <Accordion.Panel>
                <Accordion.Title style={{ padding: 0 }}>
                  {" "}
                  <GrCircleInformation style={{ display: "inline" }} /> Details
                </Accordion.Title>

                <Accordion.Content>
                  <p className="p-3 text-sm">Content</p>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel>
                <Accordion.Title style={{ marginTop: "10px", padding: 0 }}>
                  <GiSpectacles style={{ display: "inline" }} />
                  Specs
                </Accordion.Title>
                <Accordion.Content>
                  <p className="p-3 text-sm">Content</p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title style={{ marginTop: "10px", padding: 0 }}>
                  <AiOutlineSafety style={{ display: "inline" }} />
                  Warrenty
                </Accordion.Title>
                <Accordion.Content>
                  <p className="p-3 text-sm">Content</p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
