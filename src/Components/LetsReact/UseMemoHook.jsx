import React, { useState } from 'react'

export default function UseMemoHook() {
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)

    function cubeNum(num) {
        console.log("calculation done!");
        return Math.pow(num, 3)
    }
  return (
    <div>
      
    </div>
  )
}
