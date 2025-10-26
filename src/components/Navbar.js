import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>✨ Tweak Talent Technologies ✨</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mobiles">Mobiles</Link>
        </li>
        <li>
          <Link to="/earbuds">Earbuds</Link>
        </li>
        <li>
          <Link to="/watches">Watches</Link>
        </li>
        <li>
          <Link to="/cart">Cart 🛒</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
