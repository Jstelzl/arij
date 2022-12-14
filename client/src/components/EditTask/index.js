import React, { useEffect, useState, Component } from "react";
import Datepicker from "flowbite-datepicker/Datepicker";
import { useParams } from "react-router-dom";
import { timeConverter } from "../../utils/helpers";


function Modal({ setShowModal, columnTitle, editItem, test, activeTask }) {
  const [task, setTask] = useState("");
  const [formState, setFormState] = useState({ ticketTitle: '', ticketBody: '', urgencyLevel: '', dueBy: '', status:'' });
  useEffect(() => {
    if (activeTask) {
      setFormState({...activeTask, dueBy: timeConverter(activeTask.dueBy)})
    }
  }, [])
  
  
  console.log(activeTask, "hi asdf")

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const { id: groupParam } = useParams();
  
  useEffect(() => {
    const datepickerEl = document?.getElementById("datepickerId");
    // console.log(datepickerEl);
    new Datepicker(datepickerEl, {});
  }, []);

  return (
    <>
      <div className="modal">
        <div className="relative w-full h-full max-w-md md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 overflow-y-auto">
            <div
              className="overflow-y-auto px-6 py-6 lg:px-8"
              id="ticket-modal"
            >
              <h3 className="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white">
                Edit Task
              </h3>
              <form className="space-y-6" action="#">
                <div >
                  <label
                    for="ticketTitle"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Task Title:
                  </label>
                  <input
                    type="text"
                    name="ticketTitle"
                    id="ticketTitle"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter a title here"
                    value={formState.ticketTitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    for="ticketBody"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Please describe the task:
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter a description here..."
                    name="ticketBody"
                    value={formState.ticketBody}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <label
                    for="urgencyLevel"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an urgency level for the task:
                  </label>
                  <select
                    id="urgencyLevel"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="urgencyLevel"
                    value={formState.urgencyLevel}
                    onChange={handleChange}
                  >
                    <option selected>Choose an urgency</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pick a due date for the task:
                  </label>
                  <div className="relative w-95 items-center" name="dueBy">
                    <input
                      datepicker
                      datepicker-autohide
                      type="text"
                      className="items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Select due date"
                      // onSelect={(e) => console.log(e.target.value)}
                      // onClick={(e) => dobHandler(e)}
                      // onClick={(e) => console.log(e.target.value)}
                      // onChange={(e) => console.log(e)}
                      id="datepickerId"
                      name="dueBy"
                      value={formState.dueBy}
                      onSelect={handleChange}
                    />
                    <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    for="completionLevel"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What is the current status for the task?
                  </label>
                  <select
                    id="urgencyLevel"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="status"
                    value={formState.status}
                    onChange={handleChange}
                  >
                    <option selected>Choose a completion status</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </div>
                <div>
                <button type="button" onClick={() => editItem(formState, activeTask._id)} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900">Submit</button>
                <button type="button" onClick={() => setShowModal(false)} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
