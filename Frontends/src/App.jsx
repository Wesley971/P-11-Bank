
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Headers from './components/Headers';
import './App.css'

function App() {


  return (
    
      <BrowserRouter>
      <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
