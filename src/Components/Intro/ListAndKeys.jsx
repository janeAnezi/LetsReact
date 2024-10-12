import {useState} from 'react'

export default function ListAndKeys() {
    const [items, setItem] = useState([
        { id: 1, name: 'Item 1', checked: false },
        { id: 2, name: 'Item 2', checked: false},
        { id: 3, name: 'Item 3', checked: false },
    ])
  return (
    <div className='content'>
        <ul>
            {items.map((item) => (
                <li>
                    <input type="checkbox" checked={item.checked}/>
                    <label>{item.name}</label>
                    <button>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
