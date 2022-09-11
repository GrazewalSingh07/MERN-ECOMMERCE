import { Route,Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Cart } from "./Pages/Cart"
import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Register } from "./Pages/Register"

 

function App() {  

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App
