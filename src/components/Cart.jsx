import CartItem from "./CartItem"

function Cart({ cartItems, updateCartItems }) {
  console.log('cartitems',cartItems)
  cartItems.map((cartItem,index) => {
    console.log(index, cartItem, cartItem.title)
  })
  return (
    <div>
      {cartItems.length == 0 && 
        <div className="empty-shopping-cart">
          <h2>
            Shopping cart is empty
          </h2>
        </div>
      }
      <div className="cart-display">
        {cartItems.length > 0 && (
          cartItems.map((cartItem, index) => {
            return (
              <CartItem
                key={index}
                shopItem={cartItem}
                updateCartItems={updateCartItems}
                qty={cartItem.itemQty}
              />
            )
          })
        )}
      </div>
      <div className="checkout-button">
        <button>Checkout cart</button>
      </div>
    </div>
  )
  
}

export default Cart;