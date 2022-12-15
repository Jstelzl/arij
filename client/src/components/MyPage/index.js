// TO DO: MAKE TASKS DRAGGABLE, DELETE TASKS, EDIT TASKS, EXPAND TASK CARD
// RMV CSS DONE
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
  <div>
  <section>
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
    <div className="content-center md:container md:mx-auto min-h-screen">
       <header className="text-center text-blue-900">
        <h2 className='text-center'>
          My Tasks
        </h2>
      </header>
      <div className='gap-2 content-center md:columns-3'>
     

      {getColumnSection()}
      
    </div>
    </div>
  );
}

export default MyPage;