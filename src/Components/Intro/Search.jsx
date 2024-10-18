import React from 'react'

export default function Search({Search, setSearch}) {
  return (
    <form  className="search" onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor="search">Search</label>
        <input 
            type="text" 
            id="search" 
            role="searchbox"
            placeholder='search item'
            value={Search}
            onChange={(e)=>setSearch(e.target.value)}
        />
      
    </form>
  )
}
