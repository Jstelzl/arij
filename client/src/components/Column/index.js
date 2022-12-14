import React, { useState, useEffect } from "react";
import AddTask from "../AddTask";
import Item from "../TaskItem";
import "../../App.css";
import EditTask from "../EditTask";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_TICKET } from "../../utils/mutations";
import { EDIT_TICKET } from "../../utils/mutations";

function Column({ itemList, colTitle, color}) {
  const [showModal, setShowModal] = useState(false);
  const [addModal, setAddModal] = useState(false)
  const [activeId, setActiveId] = useState()
  useEffect(() => console.log(activeId), [activeId])
  const { id: groupParam } = useParams();

  const [addTicket, {error}] = useMutation(ADD_TICKET)
  const [editTicket] = useMutation(EDIT_TICKET)

  const openAddNewTaskModal = () => {
    setAddModal(true);
    console.log("open sesame!");
  };

  const openEditTaskModal = () => {
    setShowModal(true)
  }

  const addItem = (task) => {
    try {
      addTicket({
        variables: {ticketTitle: task.ticketTitle, ticketBody: task.ticketBody, urgencyLevel: task.urgencyLevel, dueBy: task.dueBy, status: task.status, groupId: groupParam}
      })
    } catch(e) {
      console.error(e)
    }
    setAddModal(false);
  };

  const editItem = (task) => {
    console.log(task.ticketBody, "hi")
    try{
      editTicket({
        variables: {ticketTitle: task.ticketTitle, ticketBody: task.ticketBody, urgencyLevel: task.urgencyLevel, dueBy: task.dueBy, status: task.status, ticketId: task._id}
      })
    } catch(e){
      console.error(e)
    }
    setShowModal(false);
  };

  return (
    <div className="justify-center content-center text-center md:container md:mx-auto border-2 rounded-md break-after-column bg-slate-100">
      <header className="text-center text-blue-800 bg-slate-100">
        <h3>{colTitle}</h3>
      </header>

      <div className="justify-center text-center md:container md:mx-auto bg-slate-100">
        {itemList.map((i, index) => (
          <Item
            openAddNewTaskModal={openEditTaskModal}
            setActiveId={setActiveId}
            setShowModal={setShowModal}
            key={index}
            index={index}
            ticketTitle={i.ticketTitle}
            ticketBody={i.ticketBody}
            urgencyLevel={i.urgencyLevel}
            dueBy={i.dueBy}
            color={color}
          />
        ))}
      </div>
      {colTitle === "To Do" && groupParam  ? (
        <div>
          <div>
            {addModal && (
              <AddTask
                addModal={addModal}
                setAddModal={setAddModal}
                columnTitle={colTitle}
                addItem={addItem}
              ></AddTask>
            )}
          </div>
          <div>
            {showModal && (
              <EditTask
                showModal={showModal}
                setShowModal={setShowModal}
                columnTitle={colTitle}
                editItem={editItem}
                activeTask={itemList[activeId]}
              ></EditTask>
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
                activeTask={itemList[activeId]}
              ></EditTask>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Column;
