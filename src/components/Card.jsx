import { render } from "react-dom";
import DetailedCard from "./DetailedCard";

function Card({ shopItem }) {
  const renderDetailedCard = (shopItem) => {
    return (
      <DetailedCard shopItem={shopItem} />
    )
  }

  return (
    <div
      className="card"
    >
      <div>
        <img className="item-img" src={shopItem.image} alt={shopItem.title} />
      </div>
      <div className="item-description-brief">
        <div>
          <h3>{shopItem.title}</h3>
          <p className="item-price">${shopItem.price}</p>
        </div>
        <div>
          <button onClick={(e) => renderDetailedCard(shopItem)}>View more info</button>
        </div>
      </div>

    </div>

  )
}

export default Card;