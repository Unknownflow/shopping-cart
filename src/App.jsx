import { useState } from "react"
import Header from "./components/Header"

function App() {
  const [cartQty, setCartQty] = useState(0);

  return (
    <>
     <Header cartQty={cartQty} />
    </>
  )
}

export default App
