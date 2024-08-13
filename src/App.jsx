import { useState } from "react"
import Shopping from "./components/Shopping";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [cartQty, setCartQty] = useState(0);
  return (
    <>
     <Navigation cartQty={cartQty} />
     <div className="content">
      <Routes>
        <Route 
          exact path="/" 
          element={<Home />} 
        />
        <Route 
          exact path="shopping" 
          element={<Shopping />} 
        />
        <Route 
          exact path="cart"
          element={<Cart />}
        />
      </Routes>
     </div>
    </>
  )
}

export default App
