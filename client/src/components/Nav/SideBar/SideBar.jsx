import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Sidebar({ show }) {
  return (
    <aside
      className={`${
        show ? "visible opacity-100" : "invisible opacity-0"
      }  fixed top-0 right-0 min-h-screen w-fit bg-main_white transition-all duration-300 shadow-xl`}
    >
      <div className="min-h-screen w-72">
        <div className="bg-main_teal text-main_white flex font-main_font font-semibold items-center justify-between p-4">
          <span>Your Keys</span>
          <AiOutlineClose size={36} className="hover:cursor-pointer p-1" />
        </div>
        <div className="h-full flex-col justify-centeritems-center mt-5">
          <div className="flex justify-center text-center">
            run .map() to loop through items here
          </div>
          <div className="flex justify-center text-center">
            needs to over flow scroll
          </div>
          <div className="flex justify-center text-center">
            add imgs price / cart functionality
          </div>
        </div>
      </div>
    </aside>
  );
}
