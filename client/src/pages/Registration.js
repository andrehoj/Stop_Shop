import React from "react";
import Signup from "../components/Signup";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Login from "../components/Login";

export default function Registration() {
  const { type } = useParams();
  return (
    <section className="h-screen flex justify-center text-center lg:text-start lg:justify-start lg:space-x-20">
      <div className=" hidden lg:block login-img"></div>

      <div className="">
        <Link to="/home" className="flex items-center my-5 text-main_teal ">
          <AiOutlineArrowLeft className="" /> <p className="">Back to Home</p>
        </Link>
        <div className="">{type === "signup" ? <Signup /> : <Login />}</div>
      </div>
    </section>
  );
}
