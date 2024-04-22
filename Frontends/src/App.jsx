
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

import './App.css'
import Home from "./components/Home/Home";

function App() {


  return (
    
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          C
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
