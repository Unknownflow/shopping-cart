import Card from "./Card";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";


function Shopping() {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log('data',data)
      setShopItems(data);
    }
    getProducts();
  })

  return (
    <>
      <div className="shopping-display">
        {shopItems.map((shopItem, index) => {
          return (  
            <Card
              key={index}
              shopItem={shopItem}
            />
          )
        })

        }
      </div>
    </>
  )
}

export default Shopping;