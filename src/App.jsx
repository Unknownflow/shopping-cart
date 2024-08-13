import { useState } from "react"
import Shopping from "./components/Shopping";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [cartQty, setCartQty] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const updateCartItems = (shopItem, itemQty) => {
    console.log('shop', shopItem, itemQty)
    const cartItemsCopy = [...cartItems];
    var itemFound = false;

    for (const cartItem of cartItemsCopy) {
      // check if item id matches n update the item qty
      if (cartItem.id == shopItem.id) {
        cartItem.itemQty = itemQty;
        itemFound = true;
      }
    }

    if (!itemFound) {
      shopItem.itemQty = itemQty;
      console.log('shopitem', shopItem)
      // if item does not exist, append to cart
      setCartItems([...cartItems, shopItem])
      console.log('cartfound',cartItems)

    } else {
      setCartItems(cartItemsCopy);
      console.log('cartcopy',cartItems)

    }

    // setCartItems([...cartItems, shopItem]);
    setCartQty(cartQty+1)
    console.log('qty',cartQty)

  }


  return (
    <>
     <Navigation cartQty={cartQty} />
     <div className="content">
      <Routes>
        <Route 
          exact path="/" 
          element={
            <Home />
          } 
        />
        <Route 
          exact path="shopping" 
          element={
            <Shopping 
             updateCartItems={updateCartItems}
            />
          } 
        />
        <Route 
          exact path="cart"
          element={
            <Cart 
              cartItems={cartItems}
            />
          }
        />
      </Routes>
     </div>
    </>
  )
}

export default App
