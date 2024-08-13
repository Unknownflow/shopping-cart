function DetailedCard({ shopItem }) {

  return (
    <div className="detailed-card">
      <div>
        <img className="item-img" src={shopItem.image} alt={shopItem.title} />
      </div>
      <div className="item-description-brief">
        <div>
          <h3>{shopItem.title}</h3>
          <p className="item-price">${shopItem.price}</p>
          <p>Category: {shopItem.category}</p>
          <p>Description: {shopItem.description}</p>
          <p>Rating: {shopItem.rating.rate} out of 5</p>
          <p>Rating count: {shopItem.rating.count}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailedCard;