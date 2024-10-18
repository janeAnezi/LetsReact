import { useState } from "react";
// import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import ListAndKeys from "./ListAndKeys";
import './App.css'
import Search from "./Search";


export default function Basic() {
  const [items, setItem] = useState(JSON.parse(localStorage.getItem('ShopingList')));
  const [search, setSearch] = useState('')


const setAndSaveItems = (newItems) => {
  setItem(newItems);
  localStorage.setItem('ShopingList', JSON.stringify(newItems));
}

let handleCheck = (id) => {
  let listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
  
  setAndSaveItems(listItems)
  
}

let handleDelete = (id) => {
  let listItems = items.filter((item) => item.id !== id);
  
  setAndSaveItems(listItems)
}

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, name: item, checked: false};
  const listItems = [...items, myNewItem]
  setAndSaveItems(listItems);
}

  return (
    <div style={{textAlign: 'center'}}>
     <Header addItem={addItem}/>
     <Search search={search} setSearch={setSearch}/>
     {/* <Content /> */}
     <ListAndKeys items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
     <Footer length={items.length} />
    </div>
  )
}
