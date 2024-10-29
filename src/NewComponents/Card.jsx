import React from 'react'

export default function Card({title, description}) {
    
  return (
    <div className='card'>
      <h4>{title}</h4>
      <p>{description}</p>
      <div><p>$ <sub>0  <sub>/mo</sub></sub></p></div>
      <button><a href="">Start free trial</a></button>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>dolor sit amet Lorem ipsum .</p>
      <p>ipsum dolor sit Lorem  amet.</p>
    </div>
  )
}
