import "./MobileContactBar.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

function MobileContactBar() {
  return (
    <div className="mobile-contact-bar">

      <a
        href="tel:+919890070845"
        aria-label="Call"
      >
        <FaPhoneAlt />
        <span>Call</span>
      </a>

      <a
        href="https://wa.me/919890070845?text=Hello%20Shriram%20Masales,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="whatsapp-link"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

      <a
        href="https://www.instagram.com/shriram.ent_official"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
        <span>Instagram</span>
      </a>

    </div>
  );
}

export default MobileContactBar;