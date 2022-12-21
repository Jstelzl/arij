import React from "react";
import "../../App.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";

function Login() {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [loginState, setloginState] = useState(true);
  const [login, loginError] = useMutation(LOGIN_USER);
  const [addUser, signupError] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (loginState) {
      try {
        const { data } = await login({
          variables: { ...formState },
        });

        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
      // clear form values
      setFormState({
        username: "",
        password: "",
      });
    } else {
      try {
        // execute addUser mutation and pass in variable data from form
        const { data } = await addUser({
          variables: { ...formState },
        });
        Auth.login(data.addUser.token);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handlePage = (event) => {
    const page = event.target.id;
    if (page === "login-tab") {
      setloginState(true);
      console.log(loginState);
    } else {
      setloginState(false);
      console.log(loginState);
    }
  };
  

  const loggedIn = Auth.loggedIn();

  if (loggedIn) {
    return <Navigate to="/my-tasks" />;
  }

  return (
    <div className="w-full bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 min-h-screen">
      <ul
        className=" flex flex-wrap text-sm font-medium text-blue-900 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 items-center justify-center"
        id="defaultTab"
        data-tabs-toggle="#defaultTabContent"
        role="tablist"
      >
        <li className="mr-2">
          <button
            id="login-tab"
            data-tabs-target="#login"
            type="button"
            role="tab"
            aria-controls="login"
            aria-selected="true"
            className=" inline-block p-4 text-blue-900 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
          >
            Login
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={handlePage}
            id="signup-tab"
            data-tabs-target="#signup"
            type="button"
            role="tab"
            aria-controls="signup"
            className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          >
            Sign Up
          </button>
        </li>
      </ul>
      <div id="defaultTabContent">
        {/* Login Form Tab */}
        <form
          onSubmit={handleFormSubmit}
          className=" max-w-md mx-auto my-auto "
          id="login"
          role="tabpanel"
          aria-labelledby="login-tab"
        >
          <div className="flex flex-wrap -mx-3 mb-6 my-12">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                User Name
              </label>
              <input
                onChange={handleChange}
                name="username"
                value={formState.username}
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Santa"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                name="password"
                value={formState.password}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="********"
              />
              {loginError.error ? (
                <p className="text-gray-600 text-xs italic text-red-500">
                  incorrect credentials
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div>
            <button
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex flex-row mx-auto"
              outline={true}
            >
              Login
            </button>
          </div>
        </form>
        {/* End Login Form Tab */}

        {/* SignUp form Tab */}
        <form
          onSubmit={handleFormSubmit}
          className="hidden max-w-md mx-auto my-auto "
          role="tabpanel"
          id="signup"
          aria-labelledby="signup-tab"
        >
          <div className="flex flex-wrap -mx-3 mb-6 my-12">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                User Name
              </label>
              <input
                onChange={handleChange}
                name="username"
                value={formState.username}
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Santa"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                name="password"
                value={formState.password}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="********"
              />
              {signupError.error ? (
                <p className="text-gray-600 text-xs italic text-red-500">
                  Username already in use
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div>
            <button
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex flex-row mx-auto"
              outline={true}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
