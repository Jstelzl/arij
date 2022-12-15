import React from "react";
import "../../App.css";

function Login() {

  return (
    // <div className="max-w-md content-center sm:mx-auto min-h-screen">
    //   <card>
    //     <form className="flex flex-col gap-4 content-center sm:mx-auto">
    //       <div>
    //         <div className="mb-2 block">
    //           <label
    //             htmlFor="name"
    //             value="Your Name"
    //           />
    //         </div>
    //         <input
    //           id="name"
    //           type="name"
    //           placeholder="User Name"
    //           required={true}
    //           className="content-center sm:mx-auto block w-full p-2 pl-10 text-sm text-gray-900 border border-blue-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         />
    //       </div>
    //       <div>
    //         <div className="mb-2 block">
    //           <label
    //             htmlFor="password1"
    //             value="Your Password"
    //           />
    //         </div>
    //         <input
    //           id="password1"
    //           type="password"
    //           placeholder="Password"
    //           required={true}
    //           className="block w-full p-2 pl-10 text-sm text-gray-900 border border-blue-900 rounded-lg bg-gray-50 
    //           focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
    //           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         />
    //       </div>
    //       <div className="sm:mx-auto">
    //         <button
    //           className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    //           outline={true}
    //         >
    //           Login
    //         </button>
    //       </div>
    //     </form>
    //   </card>
    // </div>

    <form className="w-full max-w-lg max-w-md content-center sm:mx-auto min-h-screen">
      <div className="flex flex-wrap -mx-3 mb-6">
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
      <div className="">
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex flex-row mx-auto"
          outline={true}
        >
          Login
        </button>
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex flex-row mx-auto"
          outline={true}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
export default Login;