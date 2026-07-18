import "./AboutSection.css";
import {
  FaLeaf,
  FaAward,
  FaSeedling,
  FaCheckCircle,
} from "react-icons/fa";

function AboutSection() {
  return (
    <section className="about" id="about">

      <div className="about-content">

        <span className="section-tag">
          ABOUT US
        </span>

        <h2>
          Welcome to <span>Shriram Masales</span>
        </h2>

        <p>
          At <strong>Shriram Masales</strong>, we are committed to delivering
          premium quality turmeric powder and authentic spices made from
          carefully selected ingredients. Every product is hygienically
          processed and packed to preserve its natural aroma, freshness and
          rich taste.
        </p>

        <div className="about-features">

          <div className="feature-box">
            <FaLeaf />

            <div>
              <h4>100% Natural</h4>

              <p>
                No artificial colours or preservatives.
              </p>
            </div>
          </div>

          <div className="feature-box">
            <FaAward />

            <div>
              <h4>Premium Quality</h4>

              <p>
                Carefully selected turmeric with rich colour and aroma.
              </p>
            </div>
          </div>

          <div className="feature-box">
            <FaSeedling />

            <div>
              <h4>Freshly Packed</h4>

              <p>
                Hygienically packed to maintain freshness.
              </p>
            </div>
          </div>

          <div className="feature-box">
            <FaCheckCircle />

            <div>
              <h4>Trusted by Customers</h4>

              <p>
                Affordable pricing with guaranteed quality.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;