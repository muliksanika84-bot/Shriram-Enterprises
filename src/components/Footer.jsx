import "./Footer.css";
import logo from "../assets/logo/logo.jpeg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">

          <img src={logo} alt="Shriram Masales Logo" className="footer-logo" />

          <h2>Shriram Masales</h2>

          <p>
            Delivering premium quality turmeric powder and authentic spices
            with purity, freshness and traditional taste.
          </p>

        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-box">

          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> +91 9890070845
          </p>

          <p>
            <FaPhoneAlt /> +91 8308288352
          </p>

          <p>
            <FaEnvelope /> shriramenterprises1512@gmail.com
          </p>

          <p>
            <FaMapMarkerAlt /> Karad, Maharashtra
          </p>

        </div>

        <div className="footer-box">

          <h3>Connect With Us</h3>

          <div className="footer-social">

            <a
              href="https://wa.me/919890070845"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/shriram.ent_official?igsh=M3dsaHk3YW5kYzRk"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Shriram Masales. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;