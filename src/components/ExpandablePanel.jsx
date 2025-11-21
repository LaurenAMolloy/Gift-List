import React from 'react'
import { useState } from 'react';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronDown } from "react-icons/fa6";


export default function ExpandablePanel({ header, children }) {
    //State to update panel
    const [expanded, setExpanded] = useState(false);

    //event handler to display panel
    const handleClick = () => {
        setExpanded(!expanded)
    }

  return (
    <div className='mb-2 border rounded'>
        <div className='flex p-2 justify-between items-center'>
            <div className='flex flex-row items-center justify-between'>
                {header}
            </div>
            <div onClick={handleClick} className='cursor-pointer'>
            {expanded ? <FaCircleChevronDown /> : <FaCircleChevronLeft />} 
            </div>
        </div>
        {
            expanded && <div className='p-2 border-t'>{children}</div>
        }
    </div>
  )
}
