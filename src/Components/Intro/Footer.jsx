import React from 'react'

export default function Footer() {
    let today = new Date();


  return (
    <div className='footer'>
      <p>Copyright &copy; {today.getFullYear()} </p>
    </div>
  )
}
