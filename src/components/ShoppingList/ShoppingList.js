import React, { useState } from "react";
import List from "../List/List";

import ShoppingItem from "../ShoppingItem/ShoppingItem";

const ShoppingList = () => {
  const [products, setProducts] = useState([
    { id: 1, text: "Apple", isBought: false },
    { id: 2, text: "Orage", isBought: true },
    { id: 3, text: "IPhone", isBought: false },
  ]);

  //   const onToggleProduct = (id) => {
  //     const newProducts = products.map(product => {
  //       if(product.id === id) {
  //         const newProduct = {...product}
  //         newProduct.isBought = !newProduct.isBought
  //         return newProduct;
  //       }
  //       return product
  //     })

  //     setProducts(newProducts);
  //   }

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <List items={products} onChange={setProducts} Component={ShoppingItem} />
    </div>
  );
};
export default ShoppingList;
