import Card from "./Card";
import { useState, useEffect } from "react";

function Shopping({ updateCartItems }) {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setShopItems(data);
    }
    getProducts();
  })

  return (
    <>
      <div className="shopping-display">
        {shopItems.map((shopItem) => {
          return (  
            <Card
              key={shopItem.id}
              shopItem={shopItem}
              updateCartItems={updateCartItems}
            />
          )
        })

        }
      </div>
    </>
  )
}

export default Shopping;