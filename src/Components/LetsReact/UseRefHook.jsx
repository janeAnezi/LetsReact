import React, {useEffect, useState, useRef} from 'react'

export default function UseRefHook() {
    const [val, setVal] = useState(0)
    // const [count, setCount] = useState(0)


    // useEffect(()=> {
    //     setCount(prev => prev + 1)
    // })


    const count = useRef()
  return (
    <div>
      <button onClick={() => {setVal(prev => prev + 1)}}>+1</button>
      <h1>{val}</h1>
      <button onClick={() => {setVal(prev => prev - 1)}}>-1</button>
      <h1>Render Count: </h1>
    </div>
  )
}
