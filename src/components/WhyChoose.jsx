import "./WhyChoose.css";
import { FaLeaf, FaAward, FaTruck, FaShieldAlt } from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why-choose">

      <div className="section-heading">
        <span>WHY CHOOSE US</span>

        <h2>Quality You Can Trust</h2>

        <p>
          We deliver naturally farm-sourced turmeric powder that is
          hygienically processed, carefully packed and made to retain its
          natural colour, aroma and freshness.
        </p>
      </div>

      <div className="why-grid">

        <div className="why-card">
          <FaLeaf />
          <h3>100% Natural</h3>
          <p>
            Pure turmeric powder without artificial colours or chemicals.
          </p>
        </div>

        <div className="why-card">
          <FaAward />
          <h3>Premium Quality</h3>
          <p>
            Carefully selected turmeric with rich aroma and authentic taste.
          </p>
        </div>

        <div className="why-card">
          <FaShieldAlt />
          <h3>Hygienic Packing</h3>
          <p>
            Processed and packed under clean conditions to maintain freshness.
          </p>
        </div>

        <div className="why-card">
          <FaTruck />
          <h3>Bulk Orders</h3>
          <p>
            We supply retailers, wholesalers and distributors across India.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;