import {useState} from 'react'
import { IoTrash } from "react-icons/io5";


export default function ListAndKeys() {
    const [items, setItem] = useState([
        { id: 1, name: 'Item 1', checked: false },
        { id: 2, name: 'Item 2', checked: false},
        { id: 3, name: 'Item 3', checked: false },
        { id: 4, name: 'Item 4', checked: false },
    ]);

    let HandleCheck = (id) => {
       let listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);

       setItem(listItems);

       localStorage.setItem('ShopingList', JSON.stringify(listItems));
    }

    let HandleDelete = (id) => {
       let listItems = items.filter((item) => item.id !== id);
       setItem(listItems);
       localStorage.setItem('Shopinglist', JSON.stringify(listItems))
    }

  return (
    <div className='content'>
        {(items > 0) ? (
            <ul> 
                {items.map((item) => (
                    <li className='item' key={item.id}>
                        <div>
                            <input 
                                onChange={()=>{HandleCheck(item.id)}}
                                type="checkbox" 
                                checked={item.checked}
                            />
                            <label 
                                style={(item.checked) ? {textDecoration: 'line-through'}: null}
                                onDoubleClick={()=>{HandleCheck(item.id)}}>
                                {item.name}
                            </label>
                        </div>
                        <IoTrash
                        onClick={() => {HandleDelete(item.id)}}
                        className='svg' role='button' tabIndex='0'/>
                    </li>
                ))}
            
            </ul> )
        :<p>No Items on the list</p>}
    </div>
  )
}
