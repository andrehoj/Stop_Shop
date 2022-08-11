import React from "react";
import NavContainer from "../components/Nav/NavContainer";

export default function Home() {
  return (
    <div>
      <NavContainer />
      <div className="landing_background flex justify-center items-center min-h-screen">
        <div className="flex flex-col space-y-1 mb-46 pl-96 ">
          <p className="text-7xl font-extrabold ">Stunning Keys</p>
          <p className="text-4xl font-extralight tracking-wider">Made The Right Way</p>
        </div>
      </div>
    </div>
  );
}
