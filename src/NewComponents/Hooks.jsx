import { useEffect, useState } from "react"



export default function Hooks() {
   const [brand, setBrand] = useState('Ferrari')
   const [color, setColor] = useState('White')
   const [year, setYear] = useState('2023')

    const changeBrand = () => {
        setBrand("Toyota")
        setColor("Yellow")
        setYear(2024)
    }

    // OR

    const [car, setCar] = useState({
        brand: 'Ferrari',
        color: 'White',
        year: '2023'
    })

    useEffect(()=>{
        // console.log('This useEffect happened ne')
        alert('Today is a sunny day')
    })

  return (
    <div className="content">
     <h1>My {brand}</h1>
      <p>A {color} toyota {year}</p>
      <button onClick={changeBrand}>Change</button>
    </div>
  )
}
