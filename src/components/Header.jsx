import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHome, faShop } from "@fortawesome/free-solid-svg-icons";

function Header({ cartQty }) {
  return (
    <>
      <div className="header">
        <div className="home">
          <FontAwesomeIcon icon={faHome} /> Home
        </div>
        <div className="shopping">
          <FontAwesomeIcon icon={faShop} /> Shopping
        </div>
        <div className="shopping-cart">
          <div>
            <FontAwesomeIcon icon={faCartShopping} /> Cart            
          </div>
          <div>
            <span className="cart-qty">{cartQty}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;