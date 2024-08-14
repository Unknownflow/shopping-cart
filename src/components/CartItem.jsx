import { useState } from "react";

function CartItem({ shopItem, updateCartItems, qty }) {
  const [isPositive, setIsPositive] = useState(true);
  const [itemQty, setItemQty] = useState(qty);

  const updateItemQty = (direction) => {
    var newItemQty = itemQty;

    if (direction == "increase") {
      // incremet item counter by 1
      newItemQty += 1;
      setItemQty(newItemQty);
    } else {
      newItemQty -= 1;
      if (newItemQty <= 0) {
        // reset the display of the item
        setItemQty(0);
        setIsPositive(false);
      } else {
        setItemQty(newItemQty)
      }
    }
    console.log('lastqty', newItemQty)
    updateCartItems(shopItem, newItemQty, direction)
  }

  return (
    <div
      className="card"
    >
      {isPositive && (
        <>
          <div>
            <img className="item-img" src={shopItem.image} alt={shopItem.title} />
          </div>
          <div className="item-description-brief">
            <div>
              <h3>{shopItem.title}</h3>
              <p className="item-price">${shopItem.price}</p>
            </div>
            <div className="add-to-cart">
              {isPositive && (
                <div className="add-to-cart-arrow">
                  <button className="arrow-left" onClick={(e) => updateItemQty("decrease")}>&#60;</button>
                  <div className="item-qty">
                    <h3 >{itemQty}</h3>
                  </div>
                  <button className="arrow-right" onClick={(e) => updateItemQty("increase")}>&#62;</button>
                </div>
              )}

            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartItem;