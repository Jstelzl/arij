// TO DO: MAKE TASKS DRAGGABLE, DELETE TASKS, EDIT TASKS, EXPAND TASK CARD
// RMV CSS DONE
import React, { useState } from "react";
import Column from "../Column";
import "../../App.css";
import { useQuery } from "@apollo/client";
import { QUERY_GROUP } from "../../utils/queries";
import { useParams } from "react-router-dom";

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

function GroupPage() {
  const { id: groupParam } = useParams();
  const { loading, data } = useQuery(QUERY_GROUP, {
    variables: { groupId: groupParam },
  });

  if (loading) {
    return <div>waiting</div>;
  }

  const tickets = data?.group.tickets;

  const toDo = tickets.filter((x) => x.status === "To Do");
  const inProgress = tickets.filter((x) => x.status === "In Progress");
  const done = tickets.filter((x) => x.status === "Done");

  return (
    <div className="content-center md:container md:mx-auto min-h-screen">
      <header className="text-center text-blue-900">
        <h2 className="text-center p-2 pb-4">{data.group.groupName} Tasks</h2>
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

export default GroupPage;
