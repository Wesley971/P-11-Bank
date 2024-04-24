
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";

function App() {


  return (
    
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
          path="/sign-in"
          element={
            <>
            
              <SignIn />
            </>
          }
        />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    
  )
}

export default App
