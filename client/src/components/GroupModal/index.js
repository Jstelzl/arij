import React, { useState } from "react";
import "../../App.css"; 
  

function GroupModal() {
    const [groupModal, setGroupModal] = useState(false);
  
    const openGroupModal = () => {
      setGroupModal(true);
      console.log("open sesame!");
    };

return(
//    {/*  Main modal */}
   <div id="groups-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
   <div className="relative w-full h-full max-w-md md:h-auto">
     {/* <!-- Modal content --> */}
     <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
       <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="groups-modal">
         <span className="sr-only">Close modal</span>
       </button>
       {/* <!-- Modal header --> */}
       <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
         <h3 className="text-center font-semibold text-blue-900 lg:text-xl dark:text-white">
           Select Your Group
         </h3>
       </div>
       {/* <!-- Modal body --> */}
       <div className="p-6">
         <p className="text-sm font-normal text-center text-blue-700 dark:text-gray-400">Which group would you like to join?</p>
         <ul className="my-4 space-y-3">
           <li>
             <a href="#" className="flex items-center p-3 text-base font-bold text-blue-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
               <span className="flex-1 ml-3 whitespace-nowrap">Group 1</span>
               <span className="flex-1 ml-3 whitespace-nowrap">Admin Name</span>
               <button className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">+ Join</button>
             </a>
           </li>
           <li>
             <a href="#" className="flex items-center p-3 text-base font-bold text-blue-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
               <span className="flex-1 ml-3 whitespace-nowrap">Group 2</span>
               <span className="flex-1 ml-3 whitespace-nowrap">Admin Name</span>
               <button className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">+ Join</button>
             </a>
           </li>
           <li>
             <a href="#" className="flex items-center p-3 text-base font-bold text-blue-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
               <span className="flex-1 ml-3 whitespace-nowrap">Group 3</span>
               <span className="flex-1 ml-3 whitespace-nowrap">Admin Name</span>
               <button className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">+ Join</button>
             </a>
           </li>
         </ul>
       </div>
     </div>
   </div>
 </div>
)
}

export default GroupModal;

