import "./OurPromise.css";
import {
  FaShieldAlt,
  FaLeaf,
  FaMedal,
  FaBoxOpen,
} from "react-icons/fa";

function OurPromise() {
  return (
    <section className="promise">

      <span className="section-tag">
        OUR PROMISE
      </span>

      <h2>
        Our Commitment to Quality
      </h2>

      <p className="promise-subtitle">
        Every pack of Shriram Masales is prepared with care to deliver
        freshness, purity and authentic taste to every home.
      </p>

      <div className="promise-grid">

        <div className="promise-card">
          <FaLeaf />

          <h3>Natural Ingredients</h3>

          <p>
            Only carefully selected turmeric and premium spices.
          </p>
        </div>

        <div className="promise-card">
          <FaShieldAlt />

          <h3>Hygienically Processed</h3>

          <p>
            Manufactured and packed maintaining cleanliness.
          </p>
        </div>

        <div className="promise-card">
          <FaMedal />

          <h3>Premium Quality</h3>

          <p>
            Rich colour, aroma and authentic taste in every pack.
          </p>
        </div>

        <div className="promise-card">
          <FaBoxOpen />

          <h3>Fresh Packaging</h3>

          <p>
            Airtight packing to preserve freshness for longer.
          </p>
        </div>

      </div>

    </section>
  );
}

export default OurPromise;