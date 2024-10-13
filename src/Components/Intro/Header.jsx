import { IoMdAdd } from "react-icons/io";

export default function Header() {
  return (
    <div className='header'>
      <h1>Grocery List</h1>
      <div className="add">
        <IoMdAdd className="plus"/> 
        <sup>Add Item</sup>
      </div>
    </div>
  )
}
