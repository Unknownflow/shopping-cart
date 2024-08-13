import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHome, faShop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"

function Navigation({ cartQty }) {
  return (
    <>
      <div className="navigation">
        <div className="storename">
          Elegant Emporium
        </div>
        <div className="navigation-routes">
          <div className="home">
            <FontAwesomeIcon icon={faHome} /> 
            <Link className="links" to="/"> Home</Link>
          </div>
          <div className="shopping">
            <FontAwesomeIcon icon={faShop} /> 
            <Link className="links" to="shopping"> Shopping</Link>
          </div>
          <div className="shopping-cart">
            <div>
              <FontAwesomeIcon icon={faCartShopping} /> 
              <Link className="links" to="cart"> Cart</Link>            
            </div>
            <div>
              <span className="cart-qty">{cartQty}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation;