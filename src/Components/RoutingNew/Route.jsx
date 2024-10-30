import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import About from './pages/About'
import Contact from './pages/Comtact'
import Home from './pages/Home'


export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Nav />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
