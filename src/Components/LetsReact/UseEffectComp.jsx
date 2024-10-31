import React, {useState} from 'react'

export default function UseEffectComp() {
    const [num, setNum] = useState(0)

  return (
    <div>
      <h1>I have rendered {num} times</h1>
    </div>
  )
}
