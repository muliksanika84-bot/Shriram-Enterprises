import "./Navbar.css";
import logo from "../assets/logo/logo.jpeg";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaShoppingCart,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Shriram Masales Logo" />

        <div className="logo-text">
          <h2>Shriram Masales</h2>
          <span>Pure • Natural • Premium</span>
        </div>
      </div>

      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="navbar-right">

        {/* Cart */}

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />

          {totalItems > 0 && (
            <span className="cart-count">
              {totalItems}
            </span>
          )}
        </Link>

        <div className="phone-box">
          <a href="tel:+919890070845">
            <FaPhoneAlt />
            9890070845
          </a>

          <a href="tel:+918308288352">
            <FaPhoneAlt />
            8308288352
          </a>
        </div>

        <a
          href="https://wa.me/919890070845"
          className="whatsapp-btn"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
          WhatsApp
        </a>
      </div>
    </header>
  );
}

export default Navbar;