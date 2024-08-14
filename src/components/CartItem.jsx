import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function CartItem({ shopItem, updateCartItems, qty, clearItem }) {
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
    updateCartItems(shopItem, newItemQty, direction)
  }

  const clearItemCard = (id, itemQty) => {
    setItemQty(0);
    clearItem(shopItem.id, itemQty)
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
                  <button  
                    className="arrow-left" 
                    onClick={(e) => updateItemQty("decrease")}
                  >
                    &#60;
                  </button>
                  <div className="item-qty">
                    <h3 >{itemQty}</h3>
                  </div>
                  <button 
                    className="arrow-right"
                    onClick={(e) => updateItemQty("increase")}
                  >
                    &#62;
                  </button>
                  <button 
                    className="clear-item" 
                    onClick={(e) => clearItemCard(shopItem.id, itemQty)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
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