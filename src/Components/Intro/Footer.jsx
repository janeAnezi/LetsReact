import React from 'react'

export default function Footer({length}) {
    let today = new Date();


  return (
    <div className='footer'>
        <p>{length} List {(length < 2 && length >= 0) ? 'item' : 'items'}</p>
      <p>Copyright &copy; {today.getFullYear()} </p>
    </div>
  )
}
