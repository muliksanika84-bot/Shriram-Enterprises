import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo/logo.jpeg";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Shriram Enterprise" className="logo-image" />
        <h2>Shriram Enterprise</h2>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#products" onClick={closeMenu}>Products</a></li>
        <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
        <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>

      </ul>

      <a
        href="https://wa.me/919890070845"
        className="nav-btn"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
        Order Now
      </a>

    </nav>
  );
}

export default Navbar;