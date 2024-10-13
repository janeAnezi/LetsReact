import React from 'react'
import { IoTrash } from "react-icons/io5";

export default function ItemList({items, handleCheck, handleDelete}) {
  return (
    <ul> 
        {items.map((item) => (
            <li className='item' key={item.id}>
                <div>
                    <input 
                        onChange={()=>{handleCheck(item.id)}}
                        type="checkbox" 
                        checked={item.checked}
                    />
                    <label 
                        style={(item.checked) ? {textDecoration: 'line-through'}: null}
                        onDoubleClick={()=>{handleCheck(item.id)}}>
                        {item.name}
                    </label>
                </div>
                <IoTrash
                    onClick={() => {handleDelete(item.id)}}
                    className='svg' 
                    role='button' 
                    tabIndex='0'
                    aria-label={`Delete ${item.id}`}
                />
            </li>
        ))}

    </ul> 
  )
}
