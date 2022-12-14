import React, { useState, useRef } from "react";
import "../../App.css";
import { useMutation } from "@apollo/client";
import { JOIN_GROUP, ADD_GROUP } from "../../utils/mutations";

function ManageGroupsPage() {
  const [joinGroup, { error }] = useMutation(JOIN_GROUP);
  const [addGroup] = useMutation(ADD_GROUP);

  const inputEL = useRef(null);
  const groupEL = useRef(null);

  const handleJoin = async (event) => {
    event.preventDefault();
    console.log(inputEL.current.value);
    try {
      joinGroup({
        variables: { groupId: inputEL.current.value },
      });
    } catch {
      console.error({ error });
    }
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    console.log(groupEL.current.value);
    addGroup({
      variables: { groupName: groupEL.current.value },
    });
  };

  return (
    <>
      <div className="w-full bg-slate-100 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 min-h-screen">
        <div className="p-20 flex justify-around">
          {/* group card */}
          <div className="text-center max-w-md p-6 p bg-slate-50 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
                Join a Group
              </h5>
            </a>
            <p className="p-10 mb-3 font-normal text-blue-800 dark:text-gray-400">
              Looking to join a group already using Arij? This is the place to
              find it!
            </p>
            <form onSubmit={handleJoin} className="flex items-center">
              <label for="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  ref={inputEL}
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for a group..."
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
{/* create a group card */}
          <div className="text-center max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
                Create a Group
              </h5>
            </a>
            <p className="p-6 mb-3 font-normal text-blue-800 dark:text-gray-400">
              Looking to start a new group? You're in the right place!
            </p>

            <form onSubmit={handleAdd}>
              <div className="mb-6">
                <label
                  for="email"
                  className="block mb-2 text-sm font-semibold text-blue-900 dark:text-white"
                >
                  Enter Your Group's Name
                </label>
                <input
                  ref={groupEL}
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Group Name..."
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create Group
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageGroupsPage;
