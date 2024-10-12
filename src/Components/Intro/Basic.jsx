import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import ListAndKeys from "./ListAndKeys";
import './App.css'


export default function Basic() {

  return (
    <div style={{textAlign: 'center'}}>
     <Header />
     {/* <Content /> */}
     <ListAndKeys />
     <Footer />

    </div>
  )
}
