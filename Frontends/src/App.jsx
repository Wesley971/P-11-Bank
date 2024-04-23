
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import './App.css'
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.jsx";

function App() {


  return (
    
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    
  )
}

export default App
