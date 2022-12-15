import React from "react";
import "../../App.css";

function Login() {

  return(
    <div className="max-w-md content-center sm:mx-auto">
      <card>
        <form className="flex flex-col gap-4 content-center sm:mx-auto">
          <div>
            <div className="mb-2 block">
              <label
                htmlFor="name"
                value="Your Name"
              />
            </div>
            <input
              id="name"
              type="name"
              placeholder="User Name"
              required={true}
              className="content-center sm:mx-auto block w-full p-2 pl-10 text-sm text-gray-900 border border-blue-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label
                htmlFor="password1"
                value="Your Password"
              />
            </div>
            <input
              id="password1"
              type="password"
              placeholder="Password"
              required={true}
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-blue-900 rounded-lg bg-gray-50 
              focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="sm:mx-auto">
            <button
              outline={true}
            >
              Login
            </button>
          </div>
        </form>
      </card>
    </div>
  );
}
export default Login;