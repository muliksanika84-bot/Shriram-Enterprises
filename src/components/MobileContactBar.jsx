import "./MobileContactBar.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function MobileContactBar() {
  return (
    <div className="mobile-bar">

      <a href="tel:+919890070845">
        <FaPhoneAlt />
        Call Now
      </a>

      <a
        href="https://wa.me/919890070845"
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