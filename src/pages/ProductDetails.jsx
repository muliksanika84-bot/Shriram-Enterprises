import "./ProductDetails.css";
import turmeric100 from "../assets/images/turmeric100g.jpeg";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

function ProductDetails() {
  return (
    <section className="product-details">

      <div className="product-image">
        <img src={turmeric100} alt="Turmeric Powder" />
      </div>

      <div className="product-info">

        <h1>Premium Turmeric Powder</h1>

        <p className="product-desc">
          Our turmeric powder is naturally farm-sourced, hygienically processed,
          and packed without added colours or chemicals. It retains its natural
          aroma, rich colour, and authentic taste.
        </p>

        <h3>Available Pack Sizes</h3>

        <ul>
          <li><FaCheckCircle /> 50g Pack</li>
          <li><FaCheckCircle /> 100g Pack</li>
        </ul>

        <h3>Why Choose Our Turmeric?</h3>

        <ul>
          <li><FaCheckCircle /> Naturally Farm-Sourced</li>
          <li><FaCheckCircle /> No Added Chemicals</li>
          <li><FaCheckCircle /> Hygienically Packed</li>
          <li><FaCheckCircle /> Rich Colour & Aroma</li>
        </ul>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="order-btn"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
          Order on WhatsApp
        </a>

      </div>

    </section>
  );
}

export default ProductDetails;