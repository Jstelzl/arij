// TO DO: MAKE TASKS DRAGGABLE, DELETE TASKS, EDIT TASKS, EXPAND TASK CARD
// RMV CSS DONE
import React, { useState } from "react";
import Column from "../Column";
import "../../App.css";
import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

const mockData = [
  {
    title: "To Do",
    tasks: ["Task 1", "Task 2", "Task 3", "Task 4"],
    color: "orange",
    input: "",
  },
  {
    title: "In Progress",
    tasks: ["Task 5", "Task 6"],
    color: "purple",
    input: "",
  },
  {
    title: "Done",
    tasks: ["Task 7", "Task 8", "Task 9"],
    color: "green",
    input: "",
  },
];

function MyPage() {
  const { loading, data } = useQuery(QUERY_ME);
  console.log(data?.me);
  if (loading) {
    return <div>waiting</div>;
  }

  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    return <Navigate to="/" />;
  }

  const tickets = data?.me.tickets;
  console.log(tickets);
  const toDo = tickets.filter((x) => x.status === "To Do");
  const inProgress = tickets.filter((x) => x.status === "In Progress");
  const done = tickets.filter((x) => x.status === "Done");

  return (
    <div className="content-center md:container md:mx-auto min-h-screen">
      <header className="text-center text-blue-900">
        <h1 className="text-center p-2 pb-4">My Tasks</h1>
      </header>
      <div className="gap-2 content-center md:columns-3">
        <div>
          <section>
            <Column
              itemList={toDo}
              colTitle={"To Do"}
              color={"orange"}
              className="gap-8"
            />
            <Column
              itemList={inProgress}
              colTitle={"In Progress"}
              color={"purple"}
              className="gap-8"
            />
            <Column
              itemList={done}
              colTitle={"Done"}
              color={"green"}
              className="gap-8"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
