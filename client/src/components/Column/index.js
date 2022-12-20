import React, { useState } from "react";
import AddTask from "../AddTask";
import Item from "../TaskItem";
import "../../App.css";
import EditTask from "../EditTask";

function Column({ itemList, colTitle, color }) {

  const [showModal, setShowModal] = useState(false);

  const openAddNewTaskModal = () => {
    setShowModal(true);
    console.log("open sesame!");
  };


  const addItem = (task, column) => {
    console.log(task);
    itemList.push(task);
    setShowModal(false);
  };

  const editItem = (task, column) => {
    console.log(task);
    itemList.push(task);
    setShowModal(false);
  };

  return (
    <div className="justify-center content-center text-center md:container md:mx-auto border-2 rounded-md break-after-column">
      <header className="text-center text-blue-800">
        <h3>{colTitle}</h3>
      </header>


      <div className="justify-center text-center md:container md:mx-auto">
        {itemList.map((i, index) => (
          <Item
            openAddNewTaskModal={openAddNewTaskModal}
            key={index}
            ticketTitle={i.ticketTitle}
            ticketBody={i.ticketBody}
            urgencyLevel={i.urgencyLevel}
            dueBy={i.dueBy}
            color={color}
          />
        ))}
      </div>
      {colTitle === "To Do" ? (
        <div>
          <div>
            {showModal && (
              <AddTask
                showModal={showModal}
                setShowModal={setShowModal}
                columnTitle={colTitle}
                addItem={addItem}
              ></AddTask>
            )}
          </div>
          <button
            type="button"
            className="w-3/4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            onClick={openAddNewTaskModal}
          >
            + Add task
          </button>
        </div>
      ) : (
        <div>
          <div>
            {showModal && (
              <EditTask
                showModal={showModal}
                setShowModal={setShowModal}
                columnTitle={colTitle}
                editItem={editItem}
              ></EditTask>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Column;
