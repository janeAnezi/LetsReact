 import Card from "./NewComponents/Card";
import NavBar from "./NewComponents/navBar";
 import SideBar from "./NewComponents/sideBar";
 import "./main.css"
 
 function All() {
  return (
    <>
        <NavBar />
        <NavBar />
        <SideBar />
        <div className="cardflex">
          <Card title="starter" description="This is the starter pack"/>  
          <Card title="premium" description="This is the Premium pack"/>  
          <Card title="Exclusive" description="This is the Exclusive pack"/>  
        </div>
        
    </>
  )
}

export default All;