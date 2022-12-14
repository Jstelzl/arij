import React from 'react'
import '../../App.css'
import Draggable from 'react-draggable';

function Item({ data, color }) {
    return (
        <Draggable>
        <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
            <div class="h-48 lg:h-auto lg:w-3/4 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden py-2">
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal" style={{borderTop: `4px solid ${color}` }}>

            {data}
        </div>
        </div>
        </div>
        </Draggable>
    )
}

export default Item;