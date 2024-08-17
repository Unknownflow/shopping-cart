import CartItem from "./CartItem"
import { Link } from "react-router-dom"

function Cart({ cartItems, updateCartItems, checkoutCart, clearItem }) {
  var cartTotalCost = 0;
  
  for (const item of cartItems) {
    cartTotalCost += item.itemQty * item.price;
  }
  cartTotalCost = (Math.round(cartTotalCost * 100) / 100).toFixed(2)

  return (
    <div className="cart">
      {cartItems.length == 0 && 
        <div className="empty-shopping-cart">
          <h2>
            Shopping cart is empty
          </h2>
          <h3>
            <Link className="links" to="/shopping">Start shopping now</Link>
          </h3>
        </div>
      }
      {cartItems.length > 0 && (
        <>
          <div className="cart-display">
            {
              cartItems.map((cartItem) => {
                return (
                  <CartItem
                    key={cartItem.id}
                    shopItem={cartItem}
                    updateCartItems={updateCartItems}
                    qty={cartItem.itemQty}
                    clearItem={clearItem}
                  />
                )}
            )}
          </div>
          <div className="cart-total-cost">
            Total cost: ${cartTotalCost}
          </div>
          <div className="checkout-button">
            <button onClick={checkoutCart}>Checkout cart</button>
          </div>
        </>
      )}
    </div>
  )
  
}

export default Cart;