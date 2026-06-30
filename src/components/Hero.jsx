import "./Hero.css";
import { FaLeaf, FaArrowRight } from "react-icons/fa";
import turmeric100 from "../assets/images/turmeric100g.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <span className="hero-badge">
          <FaLeaf />
          <span>100% Pure & Natural</span>
        </span>

        <h1>
          Premium <span>Turmeric Powder</span>
        </h1>

        <p>
          Experience the richness of naturally farm-sourced turmeric.
          Hygienically processed and packed with care for every home.
        </p>

        <div className="hero-buttons">
          <a href="#products" className="primary-btn">
            View Products <FaArrowRight />
          </a>

          <a
            href="https://wa.me/919890070845"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Order on WhatsApp
          </a>
        </div>

        <div className="hero-features">
          <span>🌿 100% Pure</span>
          <span>📦 Hygienically Packed</span>
          <span>⭐ Premium Quality</span>
        </div>

      </div>

      <div className="hero-image">
        <img
          src={turmeric100}
          alt="Shriram Enterprise Turmeric Powder"
        />
      </div>
    </section>
  );
}

export default Hero;