import "./WhyChoose.css";
import {
  FaLeaf,
  FaAward,
  FaTruck,
  FaHandsHelping,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why-choose">

      <span className="section-tag">WHY CHOOSE US</span>

      <h2>Why Choose Shriram Masales?</h2>

      <div className="why-grid">

        <div className="why-card">
          <FaLeaf />
          <h3>Pure & Natural</h3>
          <p>Prepared using carefully selected quality spices.</p>
        </div>

        <div className="why-card">
          <FaAward />
          <h3>Premium Quality</h3>
          <p>Maintaining the highest quality standards.</p>
        </div>

        <div className="why-card">
          <FaTruck />
          <h3>Fast Delivery</h3>
          <p>Quick supply for retail and wholesale customers.</p>
        </div>

        <div className="why-card">
          <FaHandsHelping />
          <h3>Customer Support</h3>
          <p>Dedicated support for every customer.</p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;