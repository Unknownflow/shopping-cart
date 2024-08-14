import CartItem from "./CartItem"
import { Link } from "react-router-dom"

function Cart({ cartItems, updateCartItems, checkoutCart }) {
  return (
    <div>
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
                  />
                )}
            )}
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