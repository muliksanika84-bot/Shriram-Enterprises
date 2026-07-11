import "./MobileContactBar.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function MobileContactBar() {
  return (
    <div className="mobile-contact-bar">

      <a href="tel:+919890070845">
        <FaPhoneAlt />
        Call 1
      </a>

      <a href="tel:+918308288352">
        <FaPhoneAlt />
        Call 2
      </a>

      <a
        href="https://wa.me/919890070845?text=Hello%20Shriram%20Masales,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
        WhatsApp
      </a>

    </div>
  );
}

export default MobileContactBar;