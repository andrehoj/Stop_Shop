import React from "react";

export default function SectionOne() {
  return (
    <div className=" p-5 md:p-20">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:space-y-5 2xl:space-y-20 xl:space-x-28 mx-5 ">
        <img
          src="images/section-image.jpeg"
          alt="keyboard"
          className="w-full h-auto custom_shadow order-2 xl:order-1"
        />
        <div className="flex-col space-y-3 order-1 xl:order-2 text-center xl:text-start mb-10 xl:mb-0">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold ">
            Stunning Jewelery
          </p>
          <p className="text-xl font-extralight tracking-wider ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            recusandae eius assumenda eveniet similique accusantium tempora odio
            saepe! Laborum tempora, quasi adipisci molestias ullam odit labore
            sed iusto aspernatur. Est.
          </p>
        </div>
      </div>
    </div>
  );
}
