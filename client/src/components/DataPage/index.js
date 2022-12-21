import React, { useState } from "react";
import "../../App.css";

function DataPage() {
  return (
    <div>
    <header className="text-center text-blue-900">
    <h2 className='text-center p-4'>
      My Data
    </h2>
  </header>
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <p className="text-xl text-blue-900 p-2"> You have completed</p>
        <p className="text-2xl text-yellow-400">15</p>
        <p className="text-xl p-2 text-blue-900">tasks. Great job!</p>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <p className="text-xl text-blue-900 p-2"> You have</p>
        <p className="text-2xl text-yellow-400">25</p>
        <p className="text-xl p-2 text-blue-900">tasks to complete.</p>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <p className="text-xl text-blue-900 p-2"> You have</p>
        <p className="text-2xl text-yellow-400">3</p>
        <p className="text-xl p-2 text-blue-900">outstanding critical tasks.</p>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <p className="text-xl text-blue-900 p-2"> You have</p>
        <p className="text-2xl text-yellow-400">8</p>
        <p className="text-xl p-2 text-blue-900">tasks due within 7 days.</p>
      </figure>
    </div>
    </div>
  );
}

export default DataPage;
