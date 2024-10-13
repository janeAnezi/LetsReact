import {useState} from 'react'

import ItemList from './ItemList';


export default function ListAndKeys({items, handleCheck, handleDelete}) {

  return (
    <div className='content'>
        {items.length ? ( // teneray operation (from if-else statement)
           <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
            ) : <h1>You have no item on your list</h1>}
    </div>
  )
}
