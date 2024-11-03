import React, { useState } from 'react'

export default function UseMemoHook() {
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)

    function cubeNum(num) {
        console.log("calculation done!");
        return Math.pow(num, 3)
    }

    const result = cubeNum(number)


  return (
    <div>
      <input type="number" onChange={(event) => {setNumber(event.target.value)}}/>
      <p>The cube of the number: {result}</p>
    </div>
  )
}
