import React from "react";
import "../../App.css";

function Login() {

  return (
    <div className="w-full bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 min-h-screen">
      <ul className="flex flex-wrap text-sm font-medium text-center text-blue-900 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" 
      id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li className="mr-2">
          <button id="login-tab" data-tabs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true" className="inline-block p-4 text-blue-900 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">Login</button>
        </li>
        <li className="mr-2">
          <button id="signup-tab" data-tabs-target="#signup" type="button" role="tab" aria-controls="signup" aria-selected="false" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Sign Up</button>
        </li>
      </ul>
      <div id="defaultTabContent">
        {/* Login Form Tab */}
        <form className="max-w-md mx-auto my-auto " id="login" role="tabpanel" aria-labelledby="login-tab">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Enter User Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Santa" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Password
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="********" />
              <p className="text-gray-600 text-xs italic"></p>
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
        <form className="max-w-md mx-auto my-auto " role="tabpanel" id="signup" aria-labelledby="signup-tab">
          <div className="flex flex-wrap -mx-3 mb-6 my-12">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Santa" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Claus" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Password
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="********" />
              <p className="text-gray-600 text-xs italic"></p>
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
        {/* End SignUp form Tab */}
      </div>
    </div>


  );
}
export default Login;