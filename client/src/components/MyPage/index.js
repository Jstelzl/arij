// TO DO: MAKE TASKS DRAGGABLE, DELETE TASKS, EDIT TASKS, EXPAND TASK CARD

import React, { useState } from 'react'
import Column from "../Column"
import "../../App.css";


const mockData = [
  {
    title: 'To Do',
    tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
    color: 'orange',
    input: '',
  },
  {
    title: 'In progress',
    tasks: ['Task 5', 'Task 6'],
    color: 'purple',
    input: '',
  },
  {
    title: 'Done',
    tasks: ['Task 7', 'Task 8', 'Task 9'],
    color: 'green',
    input: '',
  }
]


const getColumnSection = () => (
  <div className="md:container md:mx-auto gap-2">
  <section className='gap-2 columns-1 md:columns-3'>
    <Column
      itemList={mockData[0].tasks}
      colTitle={mockData[0].title}
      color={mockData[0].color}
      className="gap-8"
      />
    <Column
      itemList={mockData[1].tasks}
      colTitle={mockData[1].title}
      color={mockData[1].color}
      className="gap-8"
      />
    <Column
      itemList={mockData[2].tasks}
      colTitle={mockData[2].title}
      color={mockData[2].color}
      className="gap-8"
      />
  </section>
  </div>
);

function MyPage() {
  return (
    <div className="text-center md:container md:mx-auto">
      <header className="text-center text-blue-900">
        <h2>
          My Tasks
        </h2>
      </header>

      {getColumnSection()}
      
    </div>
  );
}

export default MyPage;