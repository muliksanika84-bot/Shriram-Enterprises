import "./AboutSection.css";
import { FaLeaf, FaAward, FaSeedling } from "react-icons/fa";

function AboutSection() {
  return (
    <section className="about" id="about">

      <div className="about-content">

        <span className="section-tag">ABOUT US</span>

        <h2>About Shriram Masales</h2>

        <p>
          Shriram Masales is committed to delivering premium quality spices made
          from carefully selected ingredients. Every product is hygienically
          processed and packed to preserve its natural aroma, freshness, and
          authentic taste.
        </p>

        <div className="about-features">

          <div>
            <FaLeaf />
            <span>100% Natural Ingredients</span>
          </div>

          <div>
            <FaAward />
            <span>Premium Quality Products</span>
          </div>

          <div>
            <FaSeedling />
            <span>Freshly Processed & Packed</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;