import "./OurPromise.css";
import { FaAward, FaLeaf, FaHandshake, FaWhatsapp } from "react-icons/fa";

function OurPromise() {
  return (
    <section className="promise">

      <div className="promise-container">

        <span className="promise-tag">
          OUR PROMISE
        </span>

        <h2>
          Quality You Can Trust,
          <span> Every Single Time.</span>
        </h2>

        <p className="promise-text">
          At <strong>Shriram Enterprise</strong>, we believe that every home
          deserves pure, fresh and naturally processed turmeric powder.
          Our commitment is to deliver products that maintain their rich
          colour, authentic aroma and premium quality.
        </p>

        <div className="promise-cards">

          <div className="promise-card">
            <FaLeaf />
            <h3>100% Pure</h3>
            <p>No artificial colours or harmful chemicals.</p>
          </div>

          <div className="promise-card">
            <FaAward />
            <h3>Premium Quality</h3>
            <p>Carefully selected and hygienically packed.</p>
          </div>

          <div className="promise-card">
            <FaHandshake />
            <h3>Customer First</h3>
            <p>Your satisfaction and trust are our biggest priorities.</p>
          </div>

        </div>

        <blockquote>
          "Every packet we deliver carries our promise of purity,
          freshness and trust."
        </blockquote>

        <a
          href="https://wa.me/919890070845"
          target="_blank"
          rel="noreferrer"
          className="promise-btn"
        >
          <FaWhatsapp />
          Order on WhatsApp
        </a>

      </div>

    </section>
  );
}

export default OurPromise;