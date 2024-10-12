import {useState} from 'react'
import { IoTrash } from "react-icons/io5";

export default function ListAndKeys() {
    const [items, setItem] = useState([
        { id: 1, name: 'Item 1', checked: false },
        { id: 2, name: 'Item 2', checked: false},
        { id: 3, name: 'Item 3', checked: false },
    ]);

    let HandleCheck = (id) => {
        console.log(`key: ${id}`);

    }
  return (
    <div className='content'>
        <ul>
            {items.map((item) => (
                <li className='item' key={item.id}>
                    <div>
                        <input 
                            onChange={()=>{HandleCheck(item.id)}}
                            type="checkbox" 
                            checked={item.checked}
                        />
                        <label>{item.name}</label>
                    </div>
                    <IoTrash className='svg' role='button' tabIndex='0'/>
                </li>
            ))}
        </ul>
    </div>
  )
}
