import React from "react";
import { BsCheck2All } from "react-icons/bs";

export default function About() {
  return (
    <div className=" bg-main_teal p-10">
      <div className="grid grid-cols-1 space-y-4 text-center sm:text-start">
        <div className="flex flex-col  gap-2 w-full md:w-8/12 lg:w-6/12">
          <p className="text-3xl md:text-5xl font-extrabold">
            Your Source for All Things
          </p>

          <p className="tracking-wide">
            Stop Shop is an Ecommerce site that sells a variety of products
            ranging for clothing all the way to technology. We Prodive high
            quality products across the board. With our easy to navigate site
            you can have your orders at your door in no time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col md:p-16">
            <h2 className="mb-2 font-semibold text-3xl">Stop Shop Facts</h2>
            <div className="flex items-center gap-2 border-t px-3 py-2 text-md sm:text-xl ">
              <BsCheck2All size={30} /> Based in Canada
            </div>
            <div className="flex items-center gap-2 border-t px-3 py-2 text-md sm:text-xl ">
              <BsCheck2All size={30} /> Affordable
            </div>
            <div className="flex items-center gap-2 border-t px-3 py-2 text-md sm:text-xl ">
              <BsCheck2All size={30} /> Rated #1 in the world
            </div>
            <div className="flex items-center gap-2 border-t px-3 py-2 text-md sm:text-xl ">
              <BsCheck2All size={30} /> Products produced Humanely
            </div>
          </div>

          <img
            src="images/section-two-image.webp"
            alt="keyboard and coffee"
            className="rounded h-full"
          />
        </div>
      </div>
    </div>
  );
}
