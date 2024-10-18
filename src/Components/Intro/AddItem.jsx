import { IoMdAdd } from "react-icons/io";

export default function AddItem({handleSubmit, newItem, setNewItem}) {

  
  return (
    <form className='addForm' onSubmit={handleSubmit}> 
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text" 
            id="addItem"
            autoFocus
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
        >
            <IoMdAdd />
        </button>
    </form>
  )
}
