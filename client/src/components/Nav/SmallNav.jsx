import React, { useState } from "react";
import Hamburger from "hamburger-react";
import NavLinks from "./NavLinks";

export default function SmallNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mr-6">
      <Hamburger
        duration={0.6}
        label="Show menu"
        toggled={isOpen}
        toggle={setOpen}
      />
      {isOpen && <div className="absolute flex right-10"><NavLinks /></div>}
    </div>
  );
}

{
}
