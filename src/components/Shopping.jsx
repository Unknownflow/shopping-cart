import Card from "./Card";
import { useState, useEffect } from "react";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

function Shopping({ cartItems, updateCartItems, clearItem }) {
  const [shopItems, setShopItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) =>{
        if (response.status >= 400) {
          throw new Error('server error')
        }
        return response.json();
      })
      .then((response) => setShopItems(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [])

  return (
    <>
      {error && (
        <ErrorPage 
          error={error}
        />
      )}
      {loading && (
        <Loading />
      )}
      <div className="shopping-display">
        {shopItems.map((shopItem) => {
          for (const cartItem of cartItems) {
            if (cartItem.id == shopItem.id) {
              return (
                <Card
                  key={shopItem.id}
                  shopItem={shopItem}
                  updateCartItems={updateCartItems}
                  clearItem={clearItem}
                  isAnyModalOpen={isAnyModalOpen}
                  setIsAnyModalOpen={setIsAnyModalOpen}
                  isPressedVal={true}
                  itemQtyVal={cartItem.itemQty}
                  isModalOpenVal={false}
                />
              )
            }
          }
          return (  
            <Card
              key={shopItem.id}
              shopItem={shopItem}
              updateCartItems={updateCartItems}
              clearItem={clearItem}
              isAnyModalOpen={isAnyModalOpen}
              setIsAnyModalOpen={setIsAnyModalOpen}
              isPressedVal={false}
              itemQtyVal={0}
              isModalOpenVal={false}
            />
          )})
        }
      </div>
    </>
  )
}

export default Shopping;