import AllContent from "./Components/LetsReact/AllContent";
import './App.css'
import { useState } from "react";
import Profile from "./Components/LetsReact/Profile";

function App() {

  const [openContentId, setOpenContentId] = useState(null)

  const handleContentIdCLick = (Id) => {
    setOpenContentId((prev) => {
      return prev === Id ? null : Id
    });
  }

  return (
   <div  className="App">

    <AllContent 
      id="my-profile"  
      title='my profile' 
      open={openContentId === "my-profile"}
      onClick={handleContentIdCLick}
      >
        <Profile />
      {/* This is a child element  */}
    </AllContent>

    {/* <AllContent>This is a second child element </AllContent> */}

    <AllContent 
      id="about-me" 
      title='About me' 
      open={openContentId === "about-me"}
      onClick={handleContentIdCLick}
      >
      <p>This is the about me section</p>
      <button>Read More ...</button>
    </AllContent>
   </div>
  );
}

export default App;
