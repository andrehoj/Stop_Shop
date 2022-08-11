import React from "react";
import Signup from "../components/Signup";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Login from "../components/Login";

export default function Registration() {
  const { type } = useParams();
  console.log(type);
  return (
    <section className="h-screen flex justify-center lg:justify-start lg:space-x-20 ">
      <div className=" hidden lg:block login-img"></div>

      <div className="mt-5">
        <Link
          to="/home"
          className=" flex underline text-main_teal hover:no-underline "
        >
          <AiOutlineArrowLeft className="mt-1 mr-1" />{" "}
          <p className="mb-8">Back to Home</p>
        </Link>
        <div className="flex items-center justify-center flex-wrap g-6 ">
          {type === "signup" ? <Signup /> : <Login />}
        </div>
      </div>
    </section>
  );
}
