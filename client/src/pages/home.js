import React from "react";
import NavContainer from "../components/Nav/NavContainer";
import SectionTwo from "../components/Sections/SectionTwo";
import SectionThree from "../components/Sections/SectionThree";
import SectionOne from "../components/Sections/SectionOne";
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";

export default function Home() {
  return (
    <>
      <NavContainer />
      <Hero />
      <About />
      <SectionTwo />

      {/* <SectionOne />
      <SectionThree /> */}
    </>
  );
}

{
  /* <AiOutlineArrowDown
size={36}
className="scroll_down_arrow animate-bounce bg-main_teal rounded-full"
/> */
}
