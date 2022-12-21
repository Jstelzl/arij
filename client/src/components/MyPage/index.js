// TO DO: MAKE TASKS DRAGGABLE, DELETE TASKS, EDIT TASKS, EXPAND TASK CARD
// RMV CSS DONE
import React, { useState } from "react";
import Column from "../Column";
import "../../App.css";
import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { Link } from "react-router-dom";


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
  const [currentPage, setCurrentPage] = useState("Login");
  const handlePageChange = (page) => setCurrentPage(page);

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
  const toDo = tickets.filter((x) => x.status === "To Do");
  const inProgress = tickets.filter((x) => x.status === "In Progress");
  const done = tickets.filter((x) => x.status === "Done");

  return (
    <div className="content-center md:container md:mx-auto min-h-screen bg-slate-100">
      <header className="text-blue-900">
        <h1 className="text-center p-2 pb-4">My Tasks</h1>
        <button
          onClick={() => handlePageChange("ManageGroupsPage")}
          type="button"
          className="fixed top-4 right-24 text-blue-900 hover:text-white border border-blue-900 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-300 dark:text-blue-300 dark:hover:text-white dark:hover:bg-blue-400 dark:focus:ring-blue-900" 
        >
          <Link to={"/manage-groups"}>Manage Groups</Link>
        </button>
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
