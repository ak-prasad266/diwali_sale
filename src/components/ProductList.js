import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";

const ProductList = ({ addToCart }) => {
  const { category } = useParams();
  const items = products[category] || [];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{category.toUpperCase()}</h2>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              margin: "10px",
              padding: "10px",
              width: "200px",
            }}
          >
            <img src={item.img} alt={item.name} width="100%" />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;