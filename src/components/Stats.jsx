import "./Stats.css";
import {
  FaUsers,
  FaLeaf,
  FaStore,
  FaHeadset,
} from "react-icons/fa";

function Stats() {
  return (
    <section className="stats">

      <div className="stats-header">
        <span className="section-tag">
          OUR ACHIEVEMENTS
        </span>

        <h2>
          Trusted by Customers Across Maharashtra
        </h2>

        <p>
          We focus on delivering premium quality masales with complete customer satisfaction.
        </p>
      </div>

      <div className="stats-grid">

        <div className="stat-box">
          <FaLeaf />

          <h2>100%</h2>

          <h4>Natural Products</h4>

          <p>Made from carefully selected ingredients.</p>
        </div>

        <div className="stat-box">
          <FaUsers />

          <h2>500+</h2>

          <h4>Happy Customers</h4>

          <p>Customers who trust our quality.</p>
        </div>

        <div className="stat-box">
          <FaStore />

          <h2>50+</h2>

          <h4>Wholesale Orders</h4>

          <p>Supplying retailers and wholesalers.</p>
        </div>

        <div className="stat-box">
          <FaHeadset />

          <h2>24×7</h2>

          <h4>Customer Support</h4>

          <p>Always ready to assist our customers.</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;