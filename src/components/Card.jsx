import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopupDialog from "./PopupDialog";

function Card({ shopItem, updateCartItems, clearItem, isAnyModalOpen, setIsAnyModalOpen, isPressedVal, itemQtyVal, isModalOpenVal }) {
  const [isPressed, setIsPressed] = useState(isPressedVal); // default : false
  const [itemQty, setItemQty] = useState(itemQtyVal); // default : 0
  const [isModalOpen, setIsModalOpen] = useState(isModalOpenVal); // default : false

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
        setIsPressed(false);
      } else {
        setItemQty(newItemQty)
      }
    }
    updateCartItems(shopItem, newItemQty, direction)
  }

  const clearItemCard = (id, itemQty) => {
    setItemQty(0);
    setIsPressed(false);
    clearItem(shopItem.id, itemQty)
  }

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsAnyModalOpen(!isAnyModalOpen);
  }

  return (
    <div
      className="card"
    >
      {isModalOpen && (
        <PopupDialog 
          shopItem={shopItem}
          handleModal={handleModal}
        />
      )}

      <div>
        <img className="item-img" src={shopItem.image} alt={shopItem.title} />
      </div>

      <div className="item-description-brief">
        <div>
          <h3>{shopItem.title}</h3>
          <p className="item-price">${shopItem.price.toFixed(2)}</p>
        </div>

        <div>
          <button
            className="open-modal-button"
            onClick={handleModal}
            disabled={isAnyModalOpen}
          >
            View more
          </button>
        </div>

        <div className="add-to-cart">
          {!isPressed &&
            <button
              disabled={isAnyModalOpen}
              onClick={(e) => {
                updateItemQty("increase")
                setIsPressed(true)
              }}
              >Add to cart
            </button>
          }

          {isPressed && (
            <div className="add-to-cart-arrow">
              <button 
                className="arrow-left" 
                onClick={(e) => updateItemQty("decrease")}
                disabled={isAnyModalOpen}
              >
                &#60;
              </button>

              <div className="item-qty">
                <h3 >{itemQty}</h3>
              </div>

              <button 
                className="arrow-right" 
                onClick={(e) => updateItemQty("increase")}
                disabled={isAnyModalOpen}
              >
                &#62;
              </button>

              <button 
                className="clear-item" 
                onClick={(e) => clearItemCard(shopItem.id, itemQty)}
                disabled={isAnyModalOpen}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>

            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card;