 {/* <>
        <div className='modal'>
            <div className='modalWrapper'>
                <h3 className="p1 m1">
                    Add task in {columnTitle}
                </h3>
                <p className="mtl2">Task</p>
               <input className="m2 mt0" value={task} onChange={(e) => setTask(e.target.value)}></input> 
               <div className="actionButtons">
                   <button className="cancel m1" onClick={() => setShowModal(false)}>Cancel</button>
                   <button className="save m1" onClick={() => addItem(task)}>Save</button>
               </div>
            </div>
        </div>
        </> */}




        import React, { useState } from "react";

function Modal({ setShowModal, columnTitle, addItem }) {
  const [task, setTask] = useState("");

  return (
    <React.Fragment>
      {/* <!-- Modal toggle --> */}
      <button
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="authentication-modal"
      >
        + Add Task
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div class="relative w-full h-full max-w-md md:h-auto">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white">
                Add a Task
              </h3>
              <form class="space-y-6" action="#">
                <div>
                  <label
                    for="ticketTitle"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Task Title:
                  </label>
                  <input
                    type="text"
                    name="ticketTitle"
                    id="ticketTitle"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="large-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Describe the task:
                  </label>
                  <input
                    type="text"
                    name="ticketBody"
                    id="large-input"
                    placeholder="please enter a task description..."
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="urgencyLevel"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an urgency level for the task:
                  </label>
                  <select
                    id="urgencyLevel"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose an urgency</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div class="relative">
                <label
                    for="dueBy"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select a due date for the task:
                  </label>
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    datepicker
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select due date"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal;
