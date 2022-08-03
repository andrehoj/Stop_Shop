import React, { useState } from "react";
import Hamburger from "hamburger-react";

export default function SmallNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex lg:hidden mr-4">
      <Hamburger
        duration={0.6}
        label="Show menu"
        toggled={isOpen}
        toggle={setOpen}
      />
    </div>
   
  );
}
