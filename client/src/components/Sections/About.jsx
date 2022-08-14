import React from "react";

export default function About() {
  return (
    <div className="p-20 bg-main_teal flex justify-center">
      <div className="flex flex-col justify-center items-center w-6/12 text-center space-y-4">
        <h5 className="text-4xl font-bold">About Key Shop</h5>
        <p className="text-6xl font-extrabold">Your Source for Key Boards</p>
        <p className="tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          ipsam, incidunt in inventore aperiam optio atque rem vitae dolorum
          nesciunt placeat at enim, nostrum magni excepturi. Itaque accusantium
          recusandae perferendis.
        </p>
        <img src="images/about-image.avif" alt="keyboard and coffee"  className="rounded h-auto"/>
        <button className="w-20 self-center md:self-start bg-transparent font-semibold text-main_teal hover:bg-main_teal hover:text-main_white py-1.5 px-3.5 border border-main_teal hover:border-transparent rounded nav-link-styles">
          Learn More
        </button>
      </div>
    </div>
  );
}
