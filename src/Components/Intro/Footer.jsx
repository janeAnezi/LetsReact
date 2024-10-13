import React from 'react'

export default function Footer({length}) {
    let today = new Date();


  return (
    <div className='footer'>
      <p>{length} List {(length < 2 && length >= 0) ? 'item' : 'items'}</p>
      <small>Copyright &copy; {today.getFullYear()} </small>
    </div>
  )
}
