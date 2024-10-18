import React from 'react'

export default function Search() {
  return (
    <form  className="search" onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor="search">Search</label>
        <input 
            type="text" 
            id="search" 
            role="searchbox"
            placeholder='search item'
        />
      
    </form>
  )
}
