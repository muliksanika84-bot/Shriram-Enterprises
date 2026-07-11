import "./OurPromise.css";
import { FaLeaf, FaAward, FaTruck, FaHandsHelping } from "react-icons/fa";

function OurPromise() {
  return (
    <section className="our-promise">

      <span className="section-tag">OUR PROMISE</span>

      <h2>Why Customers Trust Shriram Masales</h2>

      <div className="promise-container">

        <div className="promise-card">
          <FaLeaf />
          <h3>100% Natural</h3>
          <p>Made from carefully selected premium quality spices.</p>
        </div>

        <div className="promise-card">
          <FaAward />
          <h3>Premium Quality</h3>
          <p>Every product is hygienically processed and packed.</p>
        </div>

        <div className="promise-card">
          <FaTruck />
          <h3>Fast Delivery</h3>
          <p>Timely delivery for retail and wholesale customers.</p>
        </div>

        <div className="promise-card">
          <FaHandsHelping />
          <h3>Customer Satisfaction</h3>
          <p>Your trust and satisfaction are our highest priorities.</p>
        </div>

      </div>

    </section>
  );
}

export default OurPromise;