import { IoMdAdd } from "react-icons/io";

export default function AddItem() {
  return (
    <form className='addForm'>
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text" 
            id="addItem"
            autoFocus
            placeholder='Add Item'
            required
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
