import React, {useEffect, useState} from 'react'

export default function UseEffectComp() {
    const [num, setNum] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setNum((num) => (num + 1))
        }, 2000)
    }, [num])

  return (
    <div>
      <h1>I have rendered {num} times</h1>
    </div>
  )
}
