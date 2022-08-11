import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "../utils/mutations";
// import Auth from "../utils/auth";

export default function Login() {
  const [logIn] = useMutation(LOG_IN);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const mutationResponse = await logIn({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    });
    console.log(mutationResponse);
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="">
      <h3 className="text-main_teal mb-10 text-4xl">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            onChange={handleChange}
            name="email"
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Email"
          />
        </div>

        <div className="mb-6">
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <a
            href="/"
            className="duration-200 transition ease-in-out text-main_teal "
          >
            <Link to={"/Registration/signup"}>Sign up</Link>
          </a>
        </div>

        <button
          type="submit"
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md shadow-main_teal hover:shadow-main_teal hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:main_teal active:shadow-lg transition duration-150 ease-in-out w-full"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
