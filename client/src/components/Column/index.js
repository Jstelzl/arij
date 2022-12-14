import React, { useState } from 'react'
import AddTask from '../AddTask'
import Item from '../TaskItem'
import "../../App.css";

function Column({ itemList, colTitle, color }) {
    const [showModal, setShowModal] = useState(false);

    const openAddNewTaskModal = () => {
        setShowModal(true);
    };

    const addItem = (task, column) => {
        console.log(task);
        itemList.push(task);
        setShowModal(false);
    };

    return (
        <div className="justify-center text-center md:container md:mx-auto">
            <header className="text-center text-blue-500"> 
                <h3>
                    {colTitle}
                </h3>
            </header>
            <div className='justify-center text-center md:container md:mx-auto'>
            {
                itemList.map((i, index) => (
                    <Item
                        key={index}
                        data={i} 
                        color={color}
                    />
                ))
            }
            </div>
            <div>
                {showModal &&
                (<AddTask
                showModal={showModal}
                setShowModal={setShowModal}
                columnTitle={colTitle}
                addItem={addItem}
            ></AddTask>)}

            </div>
            <button className="addNew" onClick={openAddNewTaskModal}>
                + Add task
            </button>
        </div>
    )
}

export default Column;
