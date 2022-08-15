import React from "react";

export default function SectionOne() {
  return (
    <div className="p-32">
      <div className="flex space-x-64">
        <img
          src="images/section-image.jpeg"
          alt="keyboard"
          className="h-96 custom_shadow"
        />
        <div className="self-start flex-col space-y-3 ">
          <p className="text-7xl font-extrabold ">Stunning Jewelery</p>
          <p className="text-xl font-extralight tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatum est et ad incidunt repudiandae, sed velit iste omnis
            dolor enim aliquam aut dolores ducimus quisquam. Ratione minus
            facere dignissimos.
          </p>
        </div>
      </div>
    </div>
  );
}
