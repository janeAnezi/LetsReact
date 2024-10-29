import { useState } from "react"

export default function UseStateComp() {

  const [color, setColor] = useState('Red')

  // let color = "Red"
 let changeFavColor = () => {
  setColor("Blue")
 }

  return (
    <div>
      <h1>My favourite color is {color}</h1>
      <button onClick={changeFavColor}>Change</button>
    </div>
  )
}
