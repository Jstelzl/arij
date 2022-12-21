import React from "react";
import "../../App.css";
import { timeConverter } from "../../utils/helpers";
// import Draggable from 'react-draggable';

function Item({ ticketTitle, ticketBody, urgencyLevel, dueBy, setActiveId, setShowModal, index }) {
  const map1 = {
    High: "red",
    Medium: "yellow",
    Low: "green"
  }

  const openEditTaskModal = () => {
    setShowModal(true)
    setActiveId(index)
  }

  return (
    // <Draggable>
    <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
      <div className="h-48 lg:h-auto lg:w-3/4 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden py-2">
        <div
          className="border-r border-b border-l border-slate-300 lg:border-slate-300 lg:border-t lg:border-slate-300 bg-slate-50 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          style={{ borderTop: `4px solid ${map1[urgencyLevel]}` }}
        >
          <button className="ml-auto text-blue-900" onClick={openEditTaskModal}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
          </button>
          <div className="text-blue-900 text-xl font-semibold uppercase leading-relaxed">{ticketTitle}</div>
          <div className="text-blue-700 text-lg leading-relaxed">{ticketBody}</div>
          <div className="text-blue-500 text-sm leading-relaxed"> <span className="font-semibold">Due by:</span> {timeConverter(dueBy)}</div>
        </div>
      </div>
    </div>
    // </Draggable>
  );
}

export default Item;
