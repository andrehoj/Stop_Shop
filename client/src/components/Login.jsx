import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "../utils/mutations";
 import Auth from "../utils/auth";

export default function Login() {
  const [logIn, { error }] = useMutation(LOG_IN);

  const [formError, setFormError] = useState("");

  const [formData, setformData] = useState({
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
    const token = mutationResponse.data.login.token;
    Auth.login(token);
  }

  function handleChange({ target }) {
    const { name, value } = target;
    if (!value) {
      //replace not good 'quick fix'
      setFormError(`${name.toLowerCase().replace("n", " n")} is required.`);
      return;
    }

    setFormError("");
    setformData({ ...formData, [name]: value });
  }

  return (
    <>
      <form className=" max-w-xlg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              onBlur={handleChange}
              name="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              placeholder="JaneDoe@email.com"
            />
            <p className="text-gray-600 text-xs italic"></p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              onBlur={handleChange}
              name="password"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic">
              Password must be at least 5 characters long
            </p>
          </div>
        </div>
        <div className="-mx-3 mb-2">
          {error && (
            <div className="w-fi\ text-danger border-b border-danger p-2">
              {error}
            </div>
          )}
          <button
            type="submit"
            className=" mt-3 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-lg shadow-main_teal hover:shadow-main_teal hover:shadow-xl focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:main_teal active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Login
          </button>
          <p className="duration-200 transition ease-in-out text-main_teal mt-10 hover:underline">
            <Link to={"/Registration/signup"}>Sign up instead</Link>
          </p>
        </div>
      </form>
      {/* <h3 classNameName="text-main_teal mb-10 text-4xl">Login</h3>
      <form onSubmit={handleSubmit}>
        <div classNameName="mb-6">
          <input
            onChange={handleChange}
            name="email"
            type="text"
            classNameName="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Email"
          />
        </div>

        <div classNameName="mb-6">
          <input
            onChange={handleChange}
            name="password"
            type="password"
            classNameName="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Password"
          />
        </div>

        <div classNameName="flex justify-between items-center mb-6">
          <a
            href="/"
            classNameName="duration-200 transition ease-in-out text-main_teal "
          >
            <Link to={"/Registration/signup"}>Sign up</Link>
          </a>
        </div>

        <button
          type="submit"
          classNameName="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md shadow-main_teal hover:shadow-main_teal hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:main_teal active:shadow-lg transition duration-150 ease-in-out w-full"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Log in
        </button>
      </form> */}
    </>
  );
}
