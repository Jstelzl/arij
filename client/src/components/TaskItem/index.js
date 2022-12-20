import React from "react";
import "../../App.css";
import { timeConverter } from "../../utils/helpers";
// import Draggable from 'react-draggable';

function Item({ ticketTitle, ticketBody, urgencyLevel, dueBy, openAddNewTaskModal }) {
  const map1 = {
    High: "red",
    Medium: "yellow",
    Low: "green"
  }

  return (
    // <Draggable>
    <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
      <div className="h-48 lg:h-auto lg:w-3/4 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden py-2">
        <div
          className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          style={{ borderTop: `4px solid ${map1[urgencyLevel]}` }}
        >
          <button onClick={openAddNewTaskModal}>
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
          <div>{ticketTitle}</div>
          <div>{ticketBody}</div>
          <div>{timeConverter(dueBy)}</div>
        </div>
      </div>
    </div>
    // </Draggable>
  );
}

export default Item;
