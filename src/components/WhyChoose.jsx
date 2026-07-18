import "./WhyChoose.css";
import {
  FaLeaf,
  FaAward,
  FaTruck,
  FaHandsHelping,
  FaSeedling,
  FaCheckCircle,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why-choose" id="why">

      <span className="section-tag">
        WHY CHOOSE US
      </span>

      <h2>
        Why Choose <span>Shriram Masales?</span>
      </h2>

      <p className="why-subtitle">
        We believe in delivering authentic taste with premium quality,
        hygienic processing and customer satisfaction.
      </p>

      <div className="why-grid">

        <div className="why-card">
          <FaLeaf />
          <h3>100% Natural</h3>
          <p>No artificial colours or preservatives.</p>
        </div>

        <div className="why-card">
          <FaAward />
          <h3>Premium Quality</h3>
          <p>Carefully selected ingredients for rich aroma.</p>
        </div>

        <div className="why-card">
          <FaSeedling />
          <h3>Freshly Packed</h3>
          <p>Processed hygienically to maintain freshness.</p>
        </div>

        <div className="why-card">
          <FaTruck />
          <h3>Fast Delivery</h3>
          <p>Reliable delivery for retail and wholesale orders.</p>
        </div>

        <div className="why-card">
          <FaHandsHelping />
          <h3>Customer Support</h3>
          <p>Friendly assistance for every enquiry.</p>
        </div>

        <div className="why-card">
          <FaCheckCircle />
          <h3>Trusted Brand</h3>
          <p>Quality products trusted by satisfied customers.</p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;