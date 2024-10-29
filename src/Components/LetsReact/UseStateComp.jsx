import { useState } from "react"

export default function UseStateComp() {

//   const [color, setColor] = useState('Red')

//   // let color = "Red"
//  let changeFavColor = () => {
//   setColor("Blue")
//  }


const [brand, setBrand] = useState('Ferrari')
const [model, setModel] = useState('Roma')
const [year, setyear] = useState('2023')
const [color, setColor] = useState('Red')

  return (
    <div>
      {/* <h1>My favourite color is {color}</h1>
      <button onClick={changeFavColor}>Change</button> */}


      {/* Multiple State Variable */}

      <h1>My {brand}</h1>
      <h3>It is a {color} {model} from {year}</h3>
    </div>
  )
}
