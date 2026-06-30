import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">
          <h2>Shriram Enterprise</h2>

          <p>
            Premium Quality Turmeric Powder made with purity,
            freshness and authentic taste.
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

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> +91 9890070845
          </p>

          <p>
            <FaEnvelope /> shriramenterprises1512@gmail.com
          </p>

          <p>
            <FaMapMarkerAlt /> Karad, Maharashtra
          </p>

          <p>
            Mon - Sat | 9:00 AM - 7:00 PM
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Shriram Enterprise. All Rights Reserved.
        </p>

        <p>
          Made with ❤️ in Maharashtra
        </p>

      </div>

    </footer>
  );
}

export default Footer;