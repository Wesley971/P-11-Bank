
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import User from "./components/User/User.jsx";
import EditName from "./components/EditName/EditName.jsx";
function App() {


  return (
    
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
          path="/sign-in"
          element={<SignIn />}/>

        <Route path="/user" element={<User />} />
        
        <Route path="/editUserName" element={<EditName />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    
  )
}

export default App
