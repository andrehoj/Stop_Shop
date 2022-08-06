import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { accordion } from "tw-elements";

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

export default function SingleProduct() {
  return (
    <div className="flex gap-20 max-w-fit mr-20">
      <div className="w-96">
        <Carousel>
          <div>
            <img src="images/k400-plus/k400-plus-wireless-cover.webp" />
          </div>
          {product.images?.map((image) => (
            <div>
              <img src={`images/${image}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex-col space-y-5  w-96">
        <div className="flex-col space-y-1">
          <h6>{product.brand}</h6>
          <h4 className="text-3xl whitespace-nowrap">{product.name}</h4>
          <p className="font-semibold text-lg">${product.price}</p>
        </div>
        <p>{product.description}</p>
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-main_teal"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-main_teal"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-main_teal"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-main_teal"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-300 text-main_teal"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
        <div className="">
          <p className="text-light_grey mb-1 text-sm ">
            {product.inStock} In stock, ready to ship
          </p>
          <button class="bg-transparent hover:bg-main_teal text-main_teal font-semibold hover:text-main_white py-2 px-12 border border-main_teal hover:border-transparent duration-200">
            Add to cart
          </button>
        </div>

        {/* <div class="accordion" id="accordionExample">
          <div class="accordion-item ">
            <h2
              class="accordion-header mb-0 border-b-light_black"
              id="headingOne"
            >
              <button
                class="
                  accordion-button
                  relative
                  flex
                  items-center
                  w-full
                  py-4
                  px-5
                  text-base text-gray-800 text-left
                  bg-white
                  rounded-none
                  transition
                  focus:outline-none
                "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Additional information:
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5">
                <strong>Description: </strong> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat obcaecati aliquam illo
                optio ratione minus. Maiores officiis voluptatum eos, saepe sit
                aliquid cupiditate necessitatibus fugiat explicabo at in minima
                itaque.
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
