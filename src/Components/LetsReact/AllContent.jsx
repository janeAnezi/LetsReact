// import { useState } from "react";

export default function AllContent({id, open, onClick, title, children}) {
    // console.log(props)

    // useState Hook
    // const [open, setOpen] = useState(false);

    const HandleClick = () => {
        // alert('This was clicked!')
        // setOpen(true);
        // setOpen(!open);
        //  setOpen(prev => !prev)
        onClick(id)
    }

  return (
    <div className='allSec'>
      {/* <h3>This is the content</h3> */}
      {/* <h1>{props.children}</h1> */}
      <h1 className='title' onClick={HandleClick}>{title}</h1>
      {open && <p>{children}</p>}
      
    </div>
  )
}
