import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

  const phoneNumber = "919890070845"; // Replace with your number

  const message =
    "Hello Shriram Enterprises, I would like to know more about your turmeric powder.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;