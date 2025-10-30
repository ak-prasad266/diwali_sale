import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Fetch cart data from Django backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cart/")
      .then((res) => res.json())
      .then((data) => {
        setCart(data.cart);
        // Initialize quantities
        const qtyMap = {};
        data.cart.forEach((item) => (qtyMap[item.id] = item.quantity || 1));
        setQuantities(qtyMap);
      })
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  // Handle select/unselect
  const handleCheck = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Increase quantity
  const increaseQty = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  // Calculate total only for selected items
  const total = cart
    .filter((item) => selected.includes(item.id))
    .reduce((sum, item) => sum + item.price * quantities[item.id], 0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items added.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
              }}
            >
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={selected.includes(item.id)}
              />
              <span style={{ marginLeft: "10px" }}>
                {item.name} - ₹{item.price}
              </span>

              <div style={{ marginTop: "10px" }}>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span style={{ margin: "0 10px" }}>{quantities[item.id]}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>
          ))}
          <h3>Total Amount: ₹{total}</h3>
          <button disabled={total === 0}>Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;