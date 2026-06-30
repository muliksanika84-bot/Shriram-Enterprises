import "./Stats.css";
import { FaUsers, FaLeaf, FaBoxOpen, FaAward } from "react-icons/fa";

function Stats() {
  return (
    <section className="stats">

      <div className="stat-card">
        <FaLeaf />
        <h2>100%</h2>
        <p>Natural Turmeric</p>
      </div>

      <div className="stat-card">
        <FaAward />
        <h2>Premium</h2>
        <p>Quality Assured</p>
      </div>

      <div className="stat-card">
        <FaBoxOpen />
        <h2>2</h2>
        <p>Pack Sizes Available</p>
      </div>

      <div className="stat-card">
        <FaUsers />
        <h2>Bulk</h2>
        <p>Wholesale Orders</p>
      </div>

    </section>
  );
}

export default Stats;