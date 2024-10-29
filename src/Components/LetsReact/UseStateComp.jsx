import { useState } from "react"

export default function UseStateComp() {

//   const [color, setColor] = useState('Red')

//   // let color = "Red"
//  let changeFavColor = () => {
//   setColor("Blue")
//  }


// const [brand, setBrand] = useState('Ferrari')
// const [model, setModel] = useState('Roma')
// const [year, setyear] = useState('2023')
// const [color, setColor] = useState('Red')

// ***** Instead this ****

const [car, setCar] = useState({
  brand: 'Ferrari',
  color: "Red",
  model: 'Roma',
  year: 2023
})

  return (
    <div>
      {/* <h1>My favourite color is {color}</h1>
      <button onClick={changeFavColor}>Change</button> */}


      {/* Multiple State Variable */}

      <h1>My {car.brand}</h1>
      <h3>It is a {car.color} {car.model} from {car.year}</h3>
    </div>
  )
}
 