function Cart({ cartItems }) {
  console.log('cartitems',cartItems)
  cartItems.map((cartItem) => {
    console.log(cartItem)
  })
  return (
    <div className="cart-items">
      {
        cartItems.map((cartItem) => {
          <div className="shopping-cart" key={cartItem["id"]}>
            Title: {cartItem["title"]}
            Qty: {cartItem["itemQty"]}
          </div>
        })
      }
    </div>
  )
  
}

export default Cart;