import "./AboutSection.css";
import turmeric100 from "../assets/images/turmeric100g.jpeg";
import { FaLeaf, FaAward, FaSeedling } from "react-icons/fa";

function AboutSection() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src={turmeric100}
          alt="Premium Turmeric Powder"
        />
      </div>

      <div className="about-content">

        <span className="section-tag">
          ABOUT SHRIRAM ENTERPRISES
        </span>

        <h2>
          Naturally Pure. Trusted Quality.
        </h2>

        <p>
          Shriram Enterprises is committed to delivering premium-quality
          turmeric powder made from carefully selected turmeric sourced
          directly from farms. Every pack is hygienically processed to
          preserve its natural colour, aroma and freshness.
        </p>

        <div className="about-features">

          <div className="feature-box">
            <FaLeaf />
            <div>
              <h4>100% Natural</h4>
              <p>No artificial colours or preservatives.</p>
            </div>
          </div>

          <div className="feature-box">
            <FaAward />
            <div>
              <h4>Premium Quality</h4>
              <p>Rich aroma and authentic taste.</p>
            </div>
          </div>

          <div className="feature-box">
            <FaSeedling />
            <div>
              <h4>Farm Fresh</h4>
              <p>Prepared with care to maintain purity.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;