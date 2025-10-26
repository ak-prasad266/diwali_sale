import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if(cart.find(cartItem => cartItem.id === item.id)) {
      alert(`${item.name} is already in the cart!`);
    }
    else{
      setCart((prev) => [...prev, item]);
    }
    alert(`${item.name} added to cart!`);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:category"
          element={<ProductList addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;