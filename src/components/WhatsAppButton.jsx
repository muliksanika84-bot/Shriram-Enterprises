import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919890070845?text=Hello%20Shriram%20Masales,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />

      <span>Chat with Us</span>
    </a>
  );
}

export default WhatsAppButton;