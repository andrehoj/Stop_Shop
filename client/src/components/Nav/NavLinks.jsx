import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/globalstate";
import Auth from "../../utils/auth";

export default function NavLinks() {
  const [{ cart }] = useStoreContext();
  console.log(Auth.loggedIn());
  return (
    <ul className="h-full items-center flex gap-8">
      <Link to="/home">
        <li className="nav-link-styles">Home</li>
      </Link>

      <Link to="/products">
        <li className="nav-link-styles">Products</li>
      </Link>
      {Auth.loggedIn() ? (
        <li className="nav-link-styles" onClick={Auth.logout}>
        Logout
        </li>
      ) : (
        <li>
          <Link to="/Registration/login" className="nav-link-styles">
            Login
          </Link>

          <Link to="/Registration/signup">
            <button class=" ml-3 bg-transparent font-semibold text-main_teal hover:bg-main_teal hover:text-main_white py-1.5 px-3.5 border border-main_teal hover:border-transparent rounded nav-link-styles">
              Signup
            </button>
          </Link>
        </li>
      )}

      <li className="h-full">
        <Link to="/cart">
          <div className="group h-full px-20 bg-main_teal hover:cursor-pointer ">
            <div className="group-hover:-translate-y-1 group-hover:scale-110 duration-300 h-full flex items-center">
              <BsCart3 size={24} className="mr-1 " />
              Cart
              {cart.length ? (
                <div className="  px-2 py-1 ml-2 text-center rounded-3xl text-xs text-main_white bg-primary_black ">
                  {cart.length}
                </div>
              ) : null}
            </div>
          </div>
        </Link>
      </li>
    </ul>
  );
}
