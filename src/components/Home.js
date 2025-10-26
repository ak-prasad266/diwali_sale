import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="fireworks"></div>

      <h1 className="flash">
        🪔🎉 Welcome to the Grand Diwali Sale! 🎇✨
      </h1>

      <p className="tagline">
        Enjoy sparkling offers on <strong>Mobiles</strong>, <strong>Earbuds</strong>, and <strong>Watches</strong> 🔥
      </p>

      <div className="categories">
        <Link className="btn" to="/mobiles">📱 Mobiles</Link>
        <Link className="btn" to="/earbuds">🎧 Earbuds</Link>
        <Link className="btn" to="/watches">⌚ Watches</Link>
      </div>

      <img
        src="/diwali_sale.jpeg"
        alt="Diwali"
        className="diwali-img"
      />

      <footer className="footer">
        🪔 Made with ❤️ for the Festival of Lights 🪔
      </footer>
    </div>
  );
};

export default Home;