import React, { useState } from "react";
import Hamburger from "hamburger-react";
import NavLinks from "./NavLinks";

export default function SmallNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="mr-6">
        <Hamburger
          duration={0.6}
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <div className="min-h-screen absolute top-0 right-0 mt-20">{isOpen && <NavLinks isTablet={true}/>}</div>
    </>
  );
}
