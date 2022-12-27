import React from 'react'
import '../../App.css';
// import ContactUs from '../ContactPage';

function Footer() {
  return (
    <footer className="p-4 bg-slate-200 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">  
      <span className="text-sm text-blue-900 sm:text-center dark:text-gray-400">© 2022 <a>ARIJ™</a>. All Rights Reserved.
      </span>
      {/* <div className="flex flex-wrap items-center mt-3 text-sm text-blue-900 dark:text-gray-400 sm:mt-0">
        <button onClick={ContactUs} className="hover:underline">
          Contact Us
        </button>
      </div> */}
    </footer>

  );
}
export default Footer
