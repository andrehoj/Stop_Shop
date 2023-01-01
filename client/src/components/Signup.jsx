import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Signup() {
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);
  const [errorMessage, setErrorMessage] = useState("");

  const [htmlFormData, sethtmlFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const mutationResponse = await addUser({
      variables: {
        email: htmlFormData.email,
        password: htmlFormData.password,
        firstName: htmlFormData.firstName,
        lastName: htmlFormData.lastName,
      },
    });

    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  }

  function handleChange({ target }) {
    const { name, value } = target;

    if (!value) {
      //replace not good 'quick fix'
      setErrorMessage(`${name.toLowerCase().replace("n", " n")} is required.`);
      return;
    }

    setErrorMessage("");
    sethtmlFormData({ ...htmlFormData, [name]: value });
  }

  return (
    <>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              onBlur={handleChange}
              name="firstName"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              onBlur={handleChange}
              name="lastName"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
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
        <div className="flex flex-wrap -mx-3 mb-2">
          {error && (
            <div className="w-full text-danger border-b border-danger p-2">
              <div>
                <p className="error-text">Email is taken</p>
              </div>
            </div>
          )}
          <button
            type="submit"
            className=" mt-3 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-lg shadow-main_teal hover:shadow-main_teal hover:shadow-xl focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:main_teal active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>
          <p className="duration-200 transition ease-in-out text-main_teal mt-10 hover:underline">
            <Link to={"/Registration/login"}>Already have an account?</Link>
          </p>
        </div>
      </form>
      {/* <h3 classNameName="text-main_teal mb-10 text-4xl">Sign up</h3>
      <htmlForm onSubmit={handleSubmit}>
        <div classNameName="mb-6">
          <div classNameName="mb-6">
            <input
              onBlur={handleChange}
              name="firstName"
              type="text"
              classNameName="htmlForm-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="First Name"
            />
          </div>

          <input
            onBlur={handleChange}
            name="lastName"
            type="text"
            classNameName="htmlForm-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Last Name"
          />
        </div>

        <div classNameName="mb-6">
          <input
            onBlur={handleChange}
            name="email"
            type="text"
            classNameName="htmlForm-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Email"
          />
        </div>

        <div classNameName="mb-6">
          <input
            onBlur={handleChange}
            name="password"
            type="password"
            classNameName="htmlForm-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Password"
          />
        </div>

        <div classNameName="flex justify-between items-center mb-6">
          <a
            href="/"
            classNameName="duration-200 transition ease-in-out text-main_teal "
          >
            <Link to={"/Registration/login"}>Already have an account?</Link>
          </a>
        </div>

      
      </htmlForm> */}
    </>
  );
}
