import { useState } from "react"
import Shopping from "./components/Shopping";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [cartQty, setCartQty] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const updateCartItems = (shopItem, itemQty, direction) => {
    console.log('shop', shopItem, itemQty)
    const cartItemsCopy = [...cartItems];
    var itemFound = false;

    // update cartQty
    if (direction == "increase") {
      setCartQty(cartQty+1)
    } else {
      setCartQty(cartQty-1)
    }

    for (const cartItem of cartItemsCopy) {
      // check if item id matches n update the item qty
      console.log(cartItem)
      if (cartItem.id == shopItem.id) {
        // remove item from cart if item qty is 0
        if (itemQty == 0) {
          setCartItems(array => array.filter(item => item.id != cartItem.id))
          return;
        }
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
              updateCartItems={updateCartItems}
            />
          }
        />
      </Routes>
     </div>
    </>
  )
}

export default App
