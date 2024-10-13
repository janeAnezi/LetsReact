import { useState } from "react";
// import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import ListAndKeys from "./ListAndKeys";
import './App.css'
import AddItem from "./AddItem";


export default function Basic() {
  const [items, setItem] = useState([
    { id: 1, name: 'Item 1', checked: false },
    { id: 2, name: 'Item 2', checked: false},
    { id: 3, name: 'Item 3', checked: false },
    { id: 4, name: 'Item 4', checked: false },
]);

let handleCheck = (id) => {
  let listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);

  setItem(listItems);

  // localStorage.setItem('ShopingList', JSON.stringify(listItems));
}

let handleDelete = (id) => {
  let listItems = items.filter((item) => item.id !== id);
  setItem(listItems);
  // localStorage.setItem('Shopinglist', JSON.stringify(listItems))
}

  return (
    <div style={{textAlign: 'center'}}>
     <Header />
     <AddItem />
     {/* <Content /> */}
     <ListAndKeys items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
     <Footer length={items.length} />
    </div>
  )
}
