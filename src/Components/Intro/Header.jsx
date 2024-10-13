import { useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import AddItem from "./AddItem";

export default function Header() {
  const [showAddItem, setShowAddItem] = useState(false);

  const handleClick = () => {
    setShowAddItem(!showAddItem);  
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
        {showAddItem && <AddItem />}
    </div>
  )
}
