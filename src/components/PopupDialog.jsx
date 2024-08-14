function PopupDialog({ shopItem, handleModal }) {
  return (
    <div className="modal-container">
      <dialog id="modal" className="modal" open>
        <div>
          <img className="item-img-modal" src={shopItem.image} alt={shopItem.title} />
          <h3>{shopItem.title}</h3>
          <p className="item-price">Price: ${shopItem.price}</p>
          <p>Category: {shopItem.category}</p>
          <p>Description: {shopItem.description}</p>
          <p>Rating: {shopItem.rating.rate} out of 5</p>
          <p>Rating count: {shopItem.rating.count}</p>
          <button 
            className="close-modal-button"
            onClick={handleModal}
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  )
}

export default PopupDialog;