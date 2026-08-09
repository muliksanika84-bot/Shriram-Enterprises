import "./Navbar.css";
import logo from "../assets/logo/logo.jpeg";

import {
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      {/* =========================
          LOGO
      ========================= */}

      <div className="navbar-logo">

        <img
          src={logo}
          alt="Shriram Masales Logo"
        />

        <div className="logo-text">
          <h2>Shriram Masales</h2>
          <span>Pure • Natural • Premium</span>
        </div>

      </div>


      {/* =========================
          MENU
      ========================= */}

      <nav className="navbar-links">

        <a href="#home">
          Home
        </a>

        <a href="#products">
          Products
        </a>

        <a href="#about">
          About
        </a>

        <a href="#contact">
          Contact
        </a>

      </nav>


      {/* =========================
          RIGHT SIDE
      ========================= */}

      <div className="navbar-right">

        {/* Phone Numbers */}

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


        {/* WhatsApp */}

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