import "./Footer.css";
import logo from "../assets/logo/logo.jpeg";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <img
            src={logo}
            alt="Shriram Masales Logo"
            className="footer-logo"
          />

          <h2>Shriram Masales</h2>

          <p>
            Delivering premium quality turmeric powder and authentic spices
            with purity, freshness and traditional taste. We are committed to
            providing hygienically processed products for every household.
          </p>

          <div className="footer-social">

            <a
              href="https://wa.me/919890070845"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/shriram.ent_official"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-contact">

          <h3>Contact Us</h3>

          <p>
            <FaPhoneAlt />
            <span>+91 9890070845</span>
          </p>

          <p>
            <FaPhoneAlt />
            <span>+91 8308288352</span>
          </p>

          <p>
            <FaEnvelope />
            <span>shriramenterprises1512@gmail.com</span>
          </p>

          <p>
            <FaMapMarkerAlt />
            <span>Karad, Maharashtra, India</span>
          </p>

        </div>

        <div className="footer-hours">

          <h3>Business Hours</h3>

          <p>Monday - Saturday</p>

          <strong>10:00 AM - 7:00 PM</strong>

          <a href="#home" className="back-top">

            <FaArrowUp />

            Back to Top

          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} <strong>Shriram Masales</strong>. All
          Rights Reserved.
        </p>

        <p>
          Designed & Developed with ❤️ for Shriram Masales
        </p>

      </div>

    </footer>
  );
}

export default Footer;