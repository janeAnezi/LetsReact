import React, {useEffect, useState, useRef} from 'react'

export default function UseRefHook() {
    const [val, setVal] = useState(0)
    // const [count, setCount] = useState(0)

    const count = useRef(0)
    // console.log(count);
    useEffect(()=> {
       count.current = count.current + 1
     })

    //  Accessing dome elements using useRef Hook
    const domElement = useRef()
    
    const btnClicked = () => {
      console.log(domElement.current);
      domElement.current.style.background = "gold"
    }

  return (
    <div>
      <button onClick={() => {setVal(prev => prev + 1)}}>+1</button>
      <h1>{val}</h1>
      <button onClick={() => {setVal(prev => prev - 1)}}>-1</button>
      <h1>Render Count: {count.current} </h1>


      //  Accessing dome elements using useRef Hook
      <div>
        <input type="text" ref={domElement}/>
        <button onClick={btnClicked}>Submit</button>
      </div>
    </div>
  )
}
