import { useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import AddItem from "./AddItem";

export default function Header() {
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItem, setNewItem] = useState('');

  const handleClick = () => {
    setShowAddItem(!showAddItem);  
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!newItem) return;
    // console.log(newItem);
    setNewItem('');
  }

  return (
    <div>
      <div className='header'>
        <h1>Grocery List</h1>
        <div className="add" onClick={handleClick}>
          <MdFormatListBulletedAdd className="plus"/> 
          <sup>Add Item</sup>
        </div>
      </div>
        {/* Conditionally render AddItem component */}  
        {showAddItem && <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />}
    </div>
  )
}
